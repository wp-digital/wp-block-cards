import { useBlockProps, RichText } from '@wordpress/block-editor';
import { CARD_TYPE_CONTACT, CARD_TYPE_DEF } from '../../container/src/constants';

import {
	BLOCK_CLASS_NAME,
	TITLE_TAG,
	IMAGE_DEFAULT,
	HAS_IMAGE_DEFAULT,
	HAS_DESCRIPTION_DEFAULT,
	HAS_LINK_DEFAULT,
	HAS_PHONE_DEFAULT,
	HAS_EMAIL_DEFAULT,
} from './constants';

export default function save({ attributes }) {
	const {
		imageSrc = IMAGE_DEFAULT.src,
		imageWidth = IMAGE_DEFAULT.width,
		imageHeight = IMAGE_DEFAULT.height,
		imageAlt = IMAGE_DEFAULT.alt,
		title,
		description,
		linkText,
		linkHref,
		linkTarget,
		phone = '',
		email,
		cardType,
		imageContainerWidth,
		imageContainerHeight,
		hasImage = HAS_IMAGE_DEFAULT,
		hasDescription = HAS_DESCRIPTION_DEFAULT,
		hasLink = HAS_LINK_DEFAULT,
		hasPhone = HAS_PHONE_DEFAULT,
		hasEmail = HAS_EMAIL_DEFAULT,
	} = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: `${BLOCK_CLASS_NAME} ${cardType}`,
			})}
		>
			{hasImage && !!imageSrc && (
				<div
					className={`${BLOCK_CLASS_NAME}__image`}
					style={{ width: imageContainerWidth, height: imageContainerHeight }}
				>
					<img src={imageSrc} width={imageWidth} height={imageHeight} alt={imageAlt} />
				</div>
			)}
			<RichText.Content tagName={TITLE_TAG} value={title} className={`${BLOCK_CLASS_NAME}__title`} />
			{hasDescription && !!description && (
				<RichText.Content tagName="div" value={description} className={`${BLOCK_CLASS_NAME}__description`} />
			)}
			{hasLink && cardType === CARD_TYPE_DEF && !!linkText && !!linkHref && (
				<footer className={`${BLOCK_CLASS_NAME}__footer`}>
					<a
						href={linkHref}
						className={`${BLOCK_CLASS_NAME}__link`}
						target={linkTarget}
						rel={linkTarget === '_blank' ? 'noopener' : undefined}
					>
						{linkText}
					</a>
				</footer>
			)}
			{cardType === CARD_TYPE_CONTACT && (hasPhone || hasEmail) && (!!phone || !!email) && (
				<footer className={`${BLOCK_CLASS_NAME}__footer`}>
					{hasPhone && !!phone && (
						<a href={`tel:${phone.replace(/\(0\)|\s+/g, '')}`} className={`${BLOCK_CLASS_NAME}__phone`}>
							{phone}
						</a>
					)}
					{hasEmail && !!email && (
						<a href={`mailto:${email}`} className={`${BLOCK_CLASS_NAME}__email`}>
							{email}
						</a>
					)}
				</footer>
			)}
		</div>
	);
}
