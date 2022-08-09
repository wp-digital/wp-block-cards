import {
	BLOCK_CLASS_NAME,
	TYPE_DEFAULT,
	TYPE_CONTACT,
	HAS_TITLE_DEFAULT,
	HAS_DESCRIPTION_DEFAULT,
	IMAGE_WIDTH_DEFAULT,
	IMAGE_HEIGHT_DEFAULT,
	COLUMNS_MAX,
	COLUMNS_DEFAULT,
	ALIGNMENT_DEFAULT,
} from './constants';

export default {
	hasTitle: {
		type: 'boolean',
		default: HAS_TITLE_DEFAULT,
	},
	title: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__title`,
	},
	hasDescription: {
		type: 'boolean',
		default: HAS_DESCRIPTION_DEFAULT,
	},
	description: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__description`,
	},
	cardType: {
		type: 'string',
		default: TYPE_DEFAULT,
		enum: [TYPE_DEFAULT, TYPE_CONTACT],
	},
	imageWidth: {
		type: 'integer',
		default: IMAGE_WIDTH_DEFAULT,
	},
	imageHeight: {
		type: 'integer',
		default: IMAGE_HEIGHT_DEFAULT,
	},
	columns: {
		type: 'integer',
		minimum: 1,
		maximum: COLUMNS_MAX,
		default: COLUMNS_DEFAULT,
	},
	alignment: {
		type: 'string',
		default: ALIGNMENT_DEFAULT,
	},
};
