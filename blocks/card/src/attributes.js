import {
	BLOCK_CLASS_NAME,
	IMAGE_DEFAULT,
	HAS_TOP_SUBTITLE_DEFAULT,
	HAS_BOTTOM_SUBTITLE_DEFAULT,
	HAS_DESCRIPTION_DEFAULT,
	HAS_IMAGE_DEFAULT,
	HAS_LINK_DEFAULT,
	HAS_PHONE_DEFAULT,
	HAS_EMAIL_DEFAULT,
} from './constants';

export default {
	hasImage: {
		type: 'boolean',
		default: HAS_IMAGE_DEFAULT,
	},
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
	title: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__title`,
	},
	hasTopSubtitle: {
		type: 'boolean',
		default: HAS_TOP_SUBTITLE_DEFAULT,
	},
	topSubtitle: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__subtitle_top`,
	},
	hasBottomSubtitle: {
		type: 'boolean',
		default: HAS_BOTTOM_SUBTITLE_DEFAULT,
	},
	bottomSubtitle: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__subtitle_bottom`,
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
	hasLink: {
		type: 'boolean',
		default: HAS_LINK_DEFAULT,
	},
	linkHref: {
		type: 'string',
		source: 'attribute',
		selector: `.${BLOCK_CLASS_NAME}__link`,
		attribute: 'href',
	},
	linkText: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__link`,
	},
	linkTarget: {
		type: 'string',
		source: 'attribute',
		selector: `.${BLOCK_CLASS_NAME}__link`,
		attribute: 'target',
	},
	linkRel: {
		type: 'string',
		source: 'attribute',
		selector: `.${BLOCK_CLASS_NAME}__link`,
		attribute: 'rel',
	},
	hasPhone: {
		type: 'boolean',
		default: HAS_PHONE_DEFAULT,
	},
	phone: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__phone`,
	},
	hasEmail: {
		type: 'boolean',
		default: HAS_EMAIL_DEFAULT,
	},
	email: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__email`,
	},
	type: {
		type: 'string',
	},
	imageContainerWidth: {
		type: 'integer',
	},
	imageContainerHeight: {
		type: 'integer',
	},
};
