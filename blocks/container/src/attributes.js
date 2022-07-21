import {
	BLOCK_CLASS_NAME,
	HAS_TITLE_DEFAULT,
	HAS_DESCRIPTION_DEFAULT,
	// TYPE_DEFAULT,
	// TYPE_GRID,
	// TYPE_SLIDER,
	IMAGE_WIDTH_DEFAULT,
	IMAGE_HEIGHT_DEFAULT,
	CARD_TYPE_DEFAULT,
	CARD_TYPE_DEF,
	CARD_TYPE_CONTACT,
	CARDS_IN_ROW_DEFAULT,
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
	// type: {
	// 	type: 'string',
	// 	default: TYPE_DEFAULT,
	// 	enum: [TYPE_GRID, TYPE_SLIDER],
	// },
	cardType: {
		type: 'string',
		default: CARD_TYPE_DEFAULT,
		enum: [CARD_TYPE_DEF, CARD_TYPE_CONTACT],
	},
	imageWidth: {
		type: 'string',
		default: IMAGE_WIDTH_DEFAULT,
	},
	imageHeight: {
		type: 'string',
		default: IMAGE_HEIGHT_DEFAULT,
	},
	cardsInRow: {
		type: 'string',
		default: CARDS_IN_ROW_DEFAULT,
		enum: ['6', '4', '3'],
	},
	align: {
		type: 'string',
		default: 'wide',
	},
};
