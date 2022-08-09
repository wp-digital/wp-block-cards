import { defer, has } from 'lodash';

import { useState, useEffect, useRef } from '@wordpress/element';
import {
	useBlockProps,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
	BlockControls,
	AlignmentToolbar,
	/* eslint-disable-next-line @wordpress/no-unsafe-wp-apis */
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
import { Popover, Button, PanelBody, PanelRow, ToggleControl, Icon, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import {
	BLOCK_CLASS_NAME,
	NEW_TAB_REL,
	TYPE_DEFAULT,
	TYPE_CONTACT,
	HAS_IMAGE_DEFAULT,
	IMAGE_SIZE,
	ALLOWED_IMAGE_TYPES,
	IMAGE_DEFAULT,
	TITLE_TAG,
	HAS_TOP_SUBTITLE_DEFAULT,
	HAS_BOTTOM_SUBTITLE_DEFAULT,
	HAS_DESCRIPTION_DEFAULT,
	DESCRIPTION_ALIGNMENT_DEFAULT,
	HAS_LINK_DEFAULT,
	HAS_PHONE_DEFAULT,
	HAS_EMAIL_DEFAULT,
} from './constants';

import './editor.scss';

export default function Edit({ attributes, setAttributes, context }) {
	const linkURLInputRef = useRef(null);
	const linkTextInputRef = useRef(null);
	const {
		hasImage = HAS_IMAGE_DEFAULT,
		attachmentId,
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
		descriptionAlignment = DESCRIPTION_ALIGNMENT_DEFAULT,
		hasLink = HAS_LINK_DEFAULT,
		linkHref,
		linkText,
		linkTarget,
		linkRel,
		hasPhone = HAS_PHONE_DEFAULT,
		phone,
		hasEmail = HAS_EMAIL_DEFAULT,
		email,
	} = attributes;
	const {
		'innocode/block-cards-cardType': type,
		'innocode/block-cards-imageWidth': imageContainerWidth,
		'innocode/block-cards-imageHeight': imageContainerHeight,
	} = context;
	const [isEditingURL, setIsEditingURL] = useState(false);
	const opensLinkInNewTab = linkTarget === '_blank';

	const onChange = (key, value) => {
		setAttributes({ [key]: value });
	};

	const onHasImageChange = () => onChange('hasImage', !hasImage);
	const onImageChange = (media) => {
		const newAttributes = {
			attachmentId: media.id,
			imageAlt: media.alt || media.filename,
		};

		if (has(media, ['sizes', IMAGE_SIZE])) {
			newAttributes.imageSrc = media.sizes[IMAGE_SIZE].url;
			newAttributes.imageWidth = media.sizes[IMAGE_SIZE].width;
			newAttributes.imageHeight = media.sizes[IMAGE_SIZE].height;
		} else {
			newAttributes.imageSrc = media.url;
			newAttributes.imageWidth = media.width;
			newAttributes.imageHeight = media.height;
		}

		setAttributes(newAttributes);
	};
	const onImageRemove = () => {
		setAttributes({
			attachmentId: 0,
			imageSrc: IMAGE_DEFAULT.src,
			imageWidth: IMAGE_DEFAULT.width,
			imageHeight: IMAGE_DEFAULT.height,
			imageAlt: IMAGE_DEFAULT.alt,
		});
	};
	const onTitleChange = (value) => onChange('title', value);
	const onHasTopSubtitleChange = () => onChange('hasTopSubtitle', !hasTopSubtitle);
	const onTopSubtitleChange = (value) => onChange('topSubtitle', value);
	const onHasBottomSubtitleChange = () => onChange('hasBottomSubtitle', !hasBottomSubtitle);
	const onBottomSubtitleChange = (value) => onChange('bottomSubtitle', value);
	const onHasDescriptionChange = () => onChange('hasDescription', !hasDescription);
	const onDescriptionChange = (value) => onChange('description', value);
	const onDescriptionAlignmentChange = (value) => onChange('descriptionAlignment', value);
	const onHasLinkChange = () => onChange('hasLink', !hasLink);
	const onToggleOpenLinkInNewTab = (value) => {
		const newTarget = value ? '_blank' : undefined;

		let updatedRel = linkRel;

		if (newTarget && !linkRel) {
			updatedRel = NEW_TAB_REL;
		} else if (!newTarget && linkRel === NEW_TAB_REL) {
			updatedRel = undefined;
		}

		setAttributes({
			linkTarget: newTarget,
			linkRel: updatedRel,
		});
	};
	const onLinkChange = ({ url: newURL = '', opensInNewTab }) => {
		onChange('linkHref', newURL);

		if (opensLinkInNewTab !== opensInNewTab) {
			onToggleOpenLinkInNewTab(opensInNewTab);
		}
	};
	const onLinkTextChange = (value) => onChange('linkText', value);
	const onHasPhoneChange = () => onChange('hasPhone', !hasPhone);
	const onPhoneChange = (value) => onChange('phone', value);
	const onHasEmailChange = () => onChange('hasEmail', !hasEmail);
	const onEmailChange = (value) => onChange('email', value);

	const startEditingURL = () => setIsEditingURL(true);
	const stopEditingURL = () => setIsEditingURL(false);

	useEffect(() => {
		setAttributes({ type, imageContainerWidth, imageContainerHeight });
	}, [type, imageContainerWidth, imageContainerHeight]);

	let descriptionClassName = `${BLOCK_CLASS_NAME}__description`;

	if (descriptionAlignment !== 'none') {
		descriptionClassName += ` ${BLOCK_CLASS_NAME}__description_${descriptionAlignment}`;
	}

	return (
		<div
			{...useBlockProps({
				className: `${BLOCK_CLASS_NAME} ${BLOCK_CLASS_NAME}_${type}`,
			})}
		>
			<InspectorControls>
				<PanelBody title={__('Settings', 'innocode-blocks')}>
					<PanelRow>
						<ToggleControl label={__('Show image', 'innocode-blocks')} checked={hasImage} onChange={onHasImageChange} />
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Show description', 'innocode-blocks')}
							checked={hasDescription}
							onChange={onHasDescriptionChange}
						/>
					</PanelRow>
					{type === TYPE_DEFAULT && (
						<PanelRow>
							<ToggleControl label={__('Show link', 'innocode-blocks')} checked={hasLink} onChange={onHasLinkChange} />
						</PanelRow>
					)}
					{type === TYPE_CONTACT && (
						<>
							<PanelRow>
								<ToggleControl
									label={__('Show phone', 'innocode-blocks')}
									checked={hasPhone}
									onChange={onHasPhoneChange}
								/>
							</PanelRow>
							<PanelRow>
								<ToggleControl
									label={__('Show email', 'innocode-blocks')}
									checked={hasEmail}
									onChange={onHasEmailChange}
								/>
							</PanelRow>
						</>
					)}
				</PanelBody>
				<PanelBody title={__('Subtitle Settings', 'innocode-blocks')} initialOpen={false}>
					<PanelRow>
						<ToggleControl
							label={__('Show before title', 'innocode-blocks')}
							checked={hasTopSubtitle}
							onChange={onHasTopSubtitleChange}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Show after title', 'innocode-blocks')}
							checked={hasBottomSubtitle}
							onChange={onHasBottomSubtitleChange}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			{hasImage && (
				<div
					className={`${BLOCK_CLASS_NAME}__image`}
					style={{ width: `${imageContainerWidth}%`, height: imageContainerHeight }}
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={onImageChange}
							allowedTypes={ALLOWED_IMAGE_TYPES}
							value={attachmentId}
							render={({ open }) => (
								<Button
									onClick={open}
									icon={!!attachmentId && !imageSrc && <Icon icon={Spinner} />}
									iconSize={46}
									text={!imageSrc ? __('Set image', 'innocode-blocks') : ''}
									label={__('Image', 'innocode-blocks')}
									className={`${BLOCK_CLASS_NAME}__upload ${imageSrc ? `${BLOCK_CLASS_NAME}__upload_with-image` : ''}`}
								>
									{!!imageSrc && <img src={imageSrc} width={imageWidth} height={imageHeight} alt={imageAlt} />}
								</Button>
							)}
						/>
						{!!attachmentId && !!imageSrc && (
							<Button
								onClick={onImageRemove}
								icon="dismiss"
								label={__('Remove Image', 'innocode-blocks')}
								className={`${BLOCK_CLASS_NAME}__remove-image`}
							/>
						)}
					</MediaUploadCheck>
				</div>
			)}
			<div className={`${BLOCK_CLASS_NAME}__content`}>
				<header className={`${BLOCK_CLASS_NAME}__header`}>
					{hasTopSubtitle && (
						<RichText
							tagName="span"
							multiline={false}
							value={topSubtitle}
							placeholder={__('Subtitle', 'innocode-blocks')}
							onChange={onTopSubtitleChange}
							className={`${BLOCK_CLASS_NAME}__subtitle ${BLOCK_CLASS_NAME}__subtitle_top`}
						/>
					)}
					<RichText
						tagName={TITLE_TAG}
						allowedFormats={['core/link']}
						multiline={false}
						value={title}
						placeholder={__('Title', 'innocode-blocks')}
						onChange={onTitleChange}
						className={`${BLOCK_CLASS_NAME}__title`}
					/>
					{hasBottomSubtitle && (
						<RichText
							tagName="span"
							multiline={false}
							value={bottomSubtitle}
							placeholder={__('Subtitle', 'innocode-blocks')}
							onChange={onBottomSubtitleChange}
							className={`${BLOCK_CLASS_NAME}__subtitle ${BLOCK_CLASS_NAME}__subtitle_bottom`}
						/>
					)}
				</header>
				{hasDescription && (
					<>
						<BlockControls>
							<AlignmentToolbar value={descriptionAlignment} onChange={onDescriptionAlignmentChange} />
						</BlockControls>
						<RichText
							tagName="div"
							multiline="p"
							value={description}
							placeholder={__('Description', 'innocode-blocks')}
							onChange={onDescriptionChange}
							className={descriptionClassName}
						/>
					</>
				)}
				{type === TYPE_DEFAULT && hasLink && (
					<footer className={`${BLOCK_CLASS_NAME}__footer`}>
						<RichText
							ref={linkTextInputRef}
							tagName="a"
							allowedFormats={[]}
							value={linkText}
							placeholder={__('Link text', 'innocode-blocks')}
							onChange={onLinkTextChange}
							unstableOnFocus={startEditingURL}
							onBlur={() => {
								defer(() => {
									const linkURLInput = linkURLInputRef.current;
									let node = linkURLInput.ownerDocument.activeElement;

									while (node) {
										if (linkURLInput === node) {
											return;
										}

										node = node.parentElement;

										if (node === null) {
											stopEditingURL();
										}
									}
								});
							}}
							className={`${BLOCK_CLASS_NAME}__link`}
						/>
						{isEditingURL && (
							<Popover
								ref={linkURLInputRef}
								position="bottom center"
								focusOnMount={false}
								onClose={() => {
									defer(() => {
										const linkTextInput = linkTextInputRef.current;

										if (linkTextInput.ownerDocument.activeElement !== linkTextInput) {
											stopEditingURL();
										}
									});
								}}
							>
								<LinkControl
									value={{ url: linkHref, opensInNewTab: opensLinkInNewTab }}
									onChange={onLinkChange}
									forceIsEditingLink={isEditingURL}
								/>
							</Popover>
						)}
					</footer>
				)}
				{type === TYPE_CONTACT && (hasPhone || hasEmail) && (
					<footer className={`${BLOCK_CLASS_NAME}__footer`}>
						{hasPhone && (
							<div className={`${BLOCK_CLASS_NAME}__phone`}>
								<RichText
									tagName="a"
									allowedFormats={[]}
									value={phone}
									placeholder={__('Phone', 'innocode-blocks')}
									onChange={onPhoneChange}
								/>
							</div>
						)}
						{hasEmail && (
							<div className={`${BLOCK_CLASS_NAME}__email`}>
								<RichText
									tagName="a"
									allowedFormats={[]}
									value={email}
									placeholder={__('Email', 'innocode-blocks')}
									onChange={onEmailChange}
								/>
							</div>
						)}
					</footer>
				)}
			</div>
		</div>
	);
}
