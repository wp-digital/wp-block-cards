import { CARD_TYPE_DEF, CARD_TYPE_CONTACT, CARD_TYPE_DEFAULT } from '../../container/src/constants';
import {
	BLOCK_CLASS_NAME,
	IMAGE_DEFAULT,
	HAS_DESCRIPTION_DEFAULT,
	HAS_IMAGE_DEFAULT,
	HAS_LINK_DEFAULT,
	HAS_PHONE_DEFAULT,
	HAS_EMAIL_DEFAULT,
} from './constants';

export default {
	attachmentId: {
		type: 'integer',
		default: 0,
	},
	imageSrc: {
		type: 'string',
		default: IMAGE_DEFAULT.src,
		source: 'attribute',
		selector: `.${BLOCK_CLASS_NAME}__image img`,
		attribute: 'src',
	},
	imageWidth: {
		type: 'string',
		default: IMAGE_DEFAULT.width,
		source: 'attribute',
		selector: `.${BLOCK_CLASS_NAME}__image img`,
		attribute: 'width',
	},
	imageHeight: {
		type: 'string',
		default: IMAGE_DEFAULT.height,
		source: 'attribute',
		selector: `.${BLOCK_CLASS_NAME}__image img`,
		attribute: 'height',
	},
	imageAlt: {
		type: 'string',
		default: IMAGE_DEFAULT.alt,
		source: 'attribute',
		selector: `.${BLOCK_CLASS_NAME}__image img`,
		attribute: 'alt',
	},
	imageContainerWidth: {
		type: 'string',
	},
	imageContainerHeight: {
		type: 'string',
	},
	cardType: {
		type: 'string',
		default: CARD_TYPE_DEFAULT,
		enum: [CARD_TYPE_DEF, CARD_TYPE_CONTACT],
	},
	title: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__title`,
	},
	description: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__description`,
	},
	linkText: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__link`,
	},
	linkHref: {
		type: 'string',
		source: 'attribute',
		selector: `.${BLOCK_CLASS_NAME}__link`,
		attribute: 'href',
	},
	linkTarget: {
		type: 'string',
		source: 'attribute',
		selector: `.${BLOCK_CLASS_NAME}__link`,
		attribute: 'target',
	},
	phone: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__phone`,
	},
	email: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__email`,
	},
	hasImage: {
		type: 'boolean',
		default: HAS_IMAGE_DEFAULT,
	},
	hasDescription: {
		type: 'boolean',
		default: HAS_DESCRIPTION_DEFAULT,
	},
	hasLink: {
		type: 'boolean',
		default: HAS_LINK_DEFAULT,
	},
	hasPhone: {
		type: 'boolean',
		default: HAS_PHONE_DEFAULT,
	},
	hasEmail: {
		type: 'boolean',
		default: HAS_EMAIL_DEFAULT,
	},
};
