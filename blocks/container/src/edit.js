import { useBlockProps, InnerBlocks, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, PanelRow, ToggleControl, RadioControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { ALLOWED_BLOCKS } from './constants/editor';
import {
	BLOCK_CLASS_NAME,
	TITLE_TAG,
	HAS_TITLE_DEFAULT,
	HAS_DESCRIPTION_DEFAULT,
	TYPE_DEFAULT,
	TYPE_GRID,
	TYPE_SLIDER,
	CARD_TYPE_DEFAULT,
	IMAGE_WIDTH_DEFAULT,
	IMAGE_HEIGHT_DEFAULT,
	CARD_TYPE_DEF,
	CARD_TYPE_CONTACT,
	CARDS_IN_ROW_DEFAULT,
} from './constants';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const {
		hasTitle = HAS_TITLE_DEFAULT,
		title,
		hasDescription = HAS_DESCRIPTION_DEFAULT,
		description,
		type = TYPE_DEFAULT,
		cardType = CARD_TYPE_DEFAULT,
		imageWidth = IMAGE_WIDTH_DEFAULT,
		imageHeight = IMAGE_HEIGHT_DEFAULT,
		cardsInRow = CARDS_IN_ROW_DEFAULT,
	} = attributes;

	const onChange = (key, value) => {
		setAttributes({ [key]: value });
	};

	const onHasTitleChange = () => onChange('hasTitle', !hasTitle);
	const onTitleChange = (value) => onChange('title', value);
	const onHasDescriptionChange = () => onChange('hasDescription', !hasDescription);
	const onDescriptionChange = (value) => onChange('description', value);
	const onTypeChange = (value) => onChange('type', value);
	const onCardTypeChange = (value) => onChange('cardType', value);
	const onImageWidthChange = (value) => onChange('imageWidth', value);
	const onImageHeightChange = (value) => onChange('imageHeight', value);
	const onCardsInRowChange = (value) => onChange('cardsInRow', value);

	return (
		<div
			{...useBlockProps({
				className: `${BLOCK_CLASS_NAME} ${type} grid-${cardsInRow}`,
			})}
		>
			<InspectorControls>
				<PanelBody title={__('Settings', 'innocode-block-cards')}>
					<PanelRow>
						<ToggleControl
							label={__('Show title', 'innocode-block-cards')}
							checked={hasTitle}
							onChange={onHasTitleChange}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Show description', 'innocode-block-cards')}
							checked={hasDescription}
							onChange={onHasDescriptionChange}
						/>
					</PanelRow>
					<PanelRow>
						<RadioControl
							label={__('Block type', 'innocode-block-cards')}
							selected={type}
							options={[
								{
									label: __('Grid', 'innocode-block-cards'),
									value: TYPE_GRID,
								},
								{
									label: __('Slider', 'innocode-block-cards'),
									value: TYPE_SLIDER,
								},
							]}
							onChange={onTypeChange}
						/>
					</PanelRow>
					{type === TYPE_GRID && (
						<PanelRow>
							<RadioControl
								label={__('Cards in row', 'innocode-block-cards')}
								selected={cardsInRow}
								options={[
									{
										label: __('6', 'innocode-block-cards'),
										value: '6',
									},
									{
										label: __('4', 'innocode-block-cards'),
										value: '4',
									},
									{
										label: __('3', 'innocode-block-cards'),
										value: '3',
									},
								]}
								onChange={onCardsInRowChange}
							/>
						</PanelRow>
					)}
					<PanelRow>
						<RadioControl
							label={__('Card type', 'innocode-block-cards')}
							selected={cardType}
							options={[
								{
									label: __('Default', 'innocode-block-cards'),
									value: CARD_TYPE_DEF,
								},
								{
									label: __('Contact', 'innocode-block-cards'),
									value: CARD_TYPE_CONTACT,
								},
							]}
							onChange={onCardTypeChange}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl label="Image width" value={imageWidth} onChange={onImageWidthChange} />
					</PanelRow>
					<PanelRow>
						<TextControl label="Image height" value={imageHeight} onChange={onImageHeightChange} />
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className={`${BLOCK_CLASS_NAME}__header`}>
				{hasTitle && (
					<RichText
						tagName={TITLE_TAG}
						value={title}
						placeholder={__('Title', 'innocode-block-cards')}
						onChange={onTitleChange}
						className={`${BLOCK_CLASS_NAME}__title`}
					/>
				)}
				{hasDescription && (
					<RichText
						tagName="div"
						multiline="p"
						value={description}
						placeholder={__('Description', 'innocode-block-cards')}
						onChange={onDescriptionChange}
						className={`${BLOCK_CLASS_NAME}__description`}
					/>
				)}
			</div>
			<div className={`${BLOCK_CLASS_NAME}__list`}>
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} orientation="horizontal" />
			</div>
		</div>
	);
}
