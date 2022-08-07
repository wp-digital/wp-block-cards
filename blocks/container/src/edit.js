/* eslint-disable @wordpress/no-unsafe-wp-apis */

import { range } from 'lodash';

import { useBlockProps, InnerBlocks, InspectorControls, RichText } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	ToggleControl,
	RadioControl,
	RangeControl,
	__experimentalNumberControl as NumberControl,
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import {
	BLOCK_CLASS_NAME,
	TYPE_DEFAULT,
	TYPE_CONTACT,
	HAS_TITLE_DEFAULT,
	TITLE_TAG,
	HAS_DESCRIPTION_DEFAULT,
	IMAGE_WIDTH_DEFAULT,
	IMAGE_HEIGHT_DEFAULT,
	COLUMNS_MAX,
	COLUMNS_DEFAULT,
	ALLOWED_BLOCKS,
} from './constants';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const {
		hasTitle = HAS_TITLE_DEFAULT,
		title,
		hasDescription = HAS_DESCRIPTION_DEFAULT,
		description,
		cardType = TYPE_DEFAULT,
		imageWidth = IMAGE_WIDTH_DEFAULT,
		imageHeight = IMAGE_HEIGHT_DEFAULT,
		columns = COLUMNS_DEFAULT,
	} = attributes;

	const onChange = (key, value) => {
		setAttributes({ [key]: value });
	};

	const onHasTitleChange = () => onChange('hasTitle', !hasTitle);
	const onTitleChange = (value) => onChange('title', value);
	const onHasDescriptionChange = () => onChange('hasDescription', !hasDescription);
	const onDescriptionChange = (value) => onChange('description', value);
	const onCardTypeChange = (value) => onChange('cardType', value);
	const onImageWidthChange = (value) => onChange('imageWidth', value);
	const onImageHeightChange = (value) => onChange('imageHeight', parseInt(value, 10));
	const onColumnsChange = (value) => onChange('columns', value);

	return (
		<div
			{...useBlockProps({
				className: `${BLOCK_CLASS_NAME} ${BLOCK_CLASS_NAME}_columns-${columns}`,
			})}
		>
			<InspectorControls>
				<PanelBody title={__('Settings', 'innocode-blocks')}>
					<PanelRow>
						<ToggleControl label={__('Show title', 'innocode-blocks')} checked={hasTitle} onChange={onHasTitleChange} />
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Show description', 'innocode-blocks')}
							checked={hasDescription}
							onChange={onHasDescriptionChange}
						/>
					</PanelRow>
					<PanelRow>
						<legend className="blocks-base-control__label">{__('Columns', 'innocode-blocks')}</legend>
						<RadioGroup onChange={onColumnsChange} checked={columns}>
							{range(1, COLUMNS_MAX + 1).map((i) => (
								<Radio key={i} value={i}>
									{i}
								</Radio>
							))}
						</RadioGroup>
					</PanelRow>
					<PanelRow>
						<RadioControl
							label={__('Card type', 'innocode-blocks')}
							selected={cardType}
							options={[
								{
									label: __('Default', 'innocode-blocks'),
									value: TYPE_DEFAULT,
								},
								{
									label: __('Contact', 'innocode-blocks'),
									value: TYPE_CONTACT,
								},
							]}
							onChange={onCardTypeChange}
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label={__('Image width', 'innocode-blocks')}
							value={imageWidth}
							onChange={onImageWidthChange}
							allowReset
							resetFallbackValue={100}
							min={0}
							max={100}
							step={1}
						/>
					</PanelRow>
					<PanelRow>
						<NumberControl
							label={__('Image height', 'innocode-blocks')}
							value={imageHeight}
							onChange={onImageHeightChange}
							isDragEnabled
							isShiftStepEnabled
							min={0}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className={`${BLOCK_CLASS_NAME}__header`}>
				{hasTitle && (
					<RichText
						tagName={TITLE_TAG}
						value={title}
						placeholder={__('Title', 'innocode-blocks')}
						onChange={onTitleChange}
						className={`${BLOCK_CLASS_NAME}__title`}
					/>
				)}
				{hasDescription && (
					<RichText
						tagName="div"
						multiline="p"
						value={description}
						placeholder={__('Description', 'innocode-blocks')}
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
