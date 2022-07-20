import { useState, useEffect } from '@wordpress/element';
import {
	useBlockProps,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	/* eslint-disable-next-line @wordpress/no-unsafe-wp-apis */
	__experimentalLinkControl as LinkControl,
	InspectorControls,
} from '@wordpress/block-editor';
import { Popover, Button, PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

import { __ } from '@wordpress/i18n';
import { link } from '@wordpress/icons';

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
import { ALLOWED_IMAGE_TYPES } from './constants/editor';
import { CARD_TYPE_CONTACT, CARD_TYPE_DEF } from '../../container/src/constants';

import './editor.scss';

export default function Edit({ attributes, setAttributes, context }) {
	const {
		attachmentId,
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
		hasImage = HAS_IMAGE_DEFAULT,
		hasDescription = HAS_DESCRIPTION_DEFAULT,
		hasLink = HAS_LINK_DEFAULT,
		hasPhone = HAS_PHONE_DEFAULT,
		hasEmail = HAS_EMAIL_DEFAULT,
	} = attributes;

	const {
		'innocode/block-cards-cardType': cardType,
		'innocode/block-cards-imageWidth': imageContainerWidth,
		'innocode/block-cards-imageHeight': imageContainerHeight,
	} = context;

	const [isEditingURL, setIsEditingURL] = useState(false);

	useEffect(() => {
		setAttributes({ cardType, imageContainerWidth, imageContainerHeight });
	}, [cardType, imageContainerWidth, imageContainerHeight]);

	const onChange = (key, value) => {
		setAttributes({ [key]: value });
	};

	const onImageSelect = (media) => {
		setAttributes({
			attachmentId: media.id,
			imageAlt: media.alt || media.filename,
			imageSrc: media.url,
			imageWidth: media.width,
			imageHeight: media.height,
		});
	};

	const onTitleChange = (value) => onChange('title', value);
	const onDescriptionChange = (value) => onChange('description', value);
	const onPhoneChange = (value) => onChange('phone', value);
	const onEmailChange = (value) => onChange('email', value);
	const onLinkTextChange = (value) => onChange('linkText', value);
	const onLinkChange = ({ url: newURL = '', opensInNewTab }) => {
		onChange('linkHref', newURL);
		onChange('linkTarget', opensInNewTab ? '_blank' : undefined);
	};
	const onHasImageChange = (value) => onChange('hasImage', value);
	const onHasDescriptionChange = (value) => onChange('hasDescription', value);
	const onHasLinkChange = (value) => onChange('hasLink', value);
	const onHasPhoneChange = (value) => onChange('hasPhone', value);
	const onHasEmailChange = (value) => onChange('hasEmail', value);

	return (
		<div
			{...useBlockProps({
				className: `${BLOCK_CLASS_NAME} ${cardType}`,
			})}
		>
			<InspectorControls>
				<PanelBody title={__('Settings', 'innocode-block-cards')}>
					<PanelRow>
						<ToggleControl
							label={__('Show image', 'innocode-block-cards')}
							checked={hasImage}
							onChange={onHasImageChange}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Show description', 'innocode-block-cards')}
							checked={hasDescription}
							onChange={onHasDescriptionChange}
						/>
					</PanelRow>
					{cardType === CARD_TYPE_DEF && (
						<PanelRow>
							<ToggleControl
								label={__('Show link', 'innocode-block-cards')}
								checked={hasLink}
								onChange={onHasLinkChange}
							/>
						</PanelRow>
					)}
					{cardType === CARD_TYPE_CONTACT && (
						<>
							<PanelRow>
								<ToggleControl
									label={__('Show phone', 'innocode-block-cards')}
									checked={hasPhone}
									onChange={onHasPhoneChange}
								/>
							</PanelRow>
							<PanelRow>
								<ToggleControl
									label={__('Show email', 'innocode-block-cards')}
									checked={hasEmail}
									onChange={onHasEmailChange}
								/>
							</PanelRow>
						</>
					)}
				</PanelBody>
			</InspectorControls>
			{hasImage && (
				<div
					className={`${BLOCK_CLASS_NAME}__image`}
					style={{ width: imageContainerWidth, height: imageContainerHeight }}
				>
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={ALLOWED_IMAGE_TYPES}
							value={attachmentId}
							onSelect={onImageSelect}
							render={({ open }) => (
								<Button
									onClick={open}
									className={`${BLOCK_CLASS_NAME}__upload${!imageSrc ? ' no-image' : ''}`}
									text={!imageSrc ? __('Set image', 'innocode-block-cards') : ''}
								>
									{!!imageSrc && <img src={imageSrc} width={imageWidth} height={imageHeight} alt={imageAlt} />}
								</Button>
							)}
						/>
					</MediaUploadCheck>
				</div>
			)}
			{hasImage && !attachmentId && !!imageSrc && (
				<div
					className={`${BLOCK_CLASS_NAME}__image`}
					style={{ width: imageContainerWidth, height: imageContainerHeight }}
				>
					<img src={imageSrc} width={imageWidth} height={imageHeight} alt={imageAlt} />
				</div>
			)}
			<RichText
				tagName={TITLE_TAG}
				allowedFormats={['core/link']}
				value={title}
				placeholder={__('Title', 'innocode-block-cards')}
				onChange={onTitleChange}
				className={`${BLOCK_CLASS_NAME}__title`}
			/>
			{hasDescription && (
				<RichText
					tagName="div"
					allowedFormats={['core/link']}
					value={description}
					placeholder={__('Description', 'innocode-block-cards')}
					onChange={onDescriptionChange}
					className={`${BLOCK_CLASS_NAME}__description`}
				/>
			)}
			{hasLink && cardType === CARD_TYPE_DEF && (
				<footer className={`${BLOCK_CLASS_NAME}__footer`}>
					<RichText
						tagName="a"
						allowedFormats={[]}
						value={linkText}
						placeholder={__('Link text', 'innocode-block-cards')}
						onChange={onLinkTextChange}
						className={`${BLOCK_CLASS_NAME}__link`}
					/>
					<Button
						icon={link}
						title={__('Edit link url', 'innocode-block-cards')}
						onClick={() => setIsEditingURL(true)}
					/>
					{isEditingURL && (
						<Popover position="bottom center" onClose={() => setIsEditingURL(false)}>
							<LinkControl
								value={{ url: linkHref, opensInNewTab: linkTarget === '_blank' }}
								onChange={onLinkChange}
								forceIsEditingLink={isEditingURL}
							/>
						</Popover>
					)}
				</footer>
			)}
			{(hasPhone || hasEmail) && cardType === CARD_TYPE_CONTACT && (
				<footer className={`${BLOCK_CLASS_NAME}__footer`}>
					{hasPhone && (
						<RichText
							tagName="a"
							allowedFormats={[]}
							value={phone}
							placeholder={__('Phone', 'innocode-block-cards')}
							onChange={onPhoneChange}
							className={`${BLOCK_CLASS_NAME}__phone`}
						/>
					)}
					{hasEmail && (
						<RichText
							tagName="a"
							allowedFormats={[]}
							value={email}
							placeholder={__('Email', 'innocode-block-cards')}
							onChange={onEmailChange}
							className={`${BLOCK_CLASS_NAME}__email`}
						/>
					)}
				</footer>
			)}
		</div>
	);
}
