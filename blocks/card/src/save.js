import { isEmpty } from 'lodash';

import { useBlockProps, RichText } from '@wordpress/block-editor';

import {
	BLOCK_CLASS_NAME,
	TYPE_DEFAULT,
	TYPE_CONTACT,
	TITLE_TAG,
	IMAGE_DEFAULT,
	HAS_IMAGE_DEFAULT,
	HAS_TOP_SUBTITLE_DEFAULT,
	HAS_BOTTOM_SUBTITLE_DEFAULT,
	HAS_DESCRIPTION_DEFAULT,
	HAS_LINK_DEFAULT,
	HAS_PHONE_DEFAULT,
	HAS_EMAIL_DEFAULT,
} from './constants';

export default function save({ attributes }) {
	const {
		hasImage = HAS_IMAGE_DEFAULT,
		imageSrc = IMAGE_DEFAULT.src,
		imageWidth = IMAGE_DEFAULT.width,
		imageHeight = IMAGE_DEFAULT.height,
		imageAlt = IMAGE_DEFAULT.alt,
		title,
		hasTopSubtitle = HAS_TOP_SUBTITLE_DEFAULT,
		topSubtitle,
		hasBottomSubtitle = HAS_BOTTOM_SUBTITLE_DEFAULT,
		bottomSubtitle,
		hasDescription = HAS_DESCRIPTION_DEFAULT,
		description,
		hasLink = HAS_LINK_DEFAULT,
		linkHref,
		linkText,
		linkTarget,
		linkRel,
		hasPhone = HAS_PHONE_DEFAULT,
		phone = '',
		hasEmail = HAS_EMAIL_DEFAULT,
		email,
		type,
		imageContainerWidth,
		imageContainerHeight,
	} = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: `${BLOCK_CLASS_NAME} ${BLOCK_CLASS_NAME}_${type}`,
			})}
		>
			{hasImage && !!imageSrc && (
				<div
					className={`${BLOCK_CLASS_NAME}__image`}
					style={{ width: `${imageContainerWidth}%`, height: imageContainerHeight }}
				>
					<img src={imageSrc} width={imageWidth} height={imageHeight} alt={imageAlt} />
				</div>
			)}
			<div className={`${BLOCK_CLASS_NAME}__content`}>
				<header className={`${BLOCK_CLASS_NAME}__header`}>
					{hasTopSubtitle && !!topSubtitle && (
						<RichText.Content
							tagName="span"
							multiline={false}
							value={topSubtitle}
							className={`${BLOCK_CLASS_NAME}__subtitle ${BLOCK_CLASS_NAME}__subtitle_top`}
						/>
					)}
					<RichText.Content tagName={TITLE_TAG} value={title} className={`${BLOCK_CLASS_NAME}__title`} />
					{hasBottomSubtitle && !!bottomSubtitle && (
						<RichText.Content
							tagName="span"
							multiline={false}
							value={bottomSubtitle}
							className={`${BLOCK_CLASS_NAME}__subtitle ${BLOCK_CLASS_NAME}__subtitle_bottom`}
						/>
					)}
				</header>
				{hasDescription && !!description && (
					<RichText.Content tagName="div" value={description} className={`${BLOCK_CLASS_NAME}__description`} />
				)}
				{type === TYPE_DEFAULT && hasLink && !!linkText && !!linkHref && (
					<footer className={`${BLOCK_CLASS_NAME}__footer`}>
						<a
							href={linkHref}
							target={linkTarget}
							rel={isEmpty(linkRel) ? undefined : linkRel}
							className={`${BLOCK_CLASS_NAME}__link`}
						>
							{linkText}
						</a>
					</footer>
				)}
				{type === TYPE_CONTACT && ((hasPhone && phone) || (hasEmail && email)) && (
					<footer className={`${BLOCK_CLASS_NAME}__footer`}>
						{hasPhone && !!phone && (
							<div className={`${BLOCK_CLASS_NAME}__phone`}>
								<a href={`tel:${encodeURIComponent(phone)}`}>{phone}</a>
							</div>
						)}
						{hasEmail && !!email && (
							<div className={`${BLOCK_CLASS_NAME}__email`}>
								<a href={`mailto:${email}`}>{email}</a>
							</div>
						)}
					</footer>
				)}
			</div>
		</div>
	);
}
