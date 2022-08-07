import { applyFilters } from '@wordpress/hooks';

export const BLOCK_CLASS_NAME = 'innocode-block-card';

export const NEW_TAB_REL = 'noreferrer noopener';

export const TYPE_DEFAULT = 'default';
export const TYPE_CONTACT = 'contact';

export const HAS_IMAGE_DEFAULT = applyFilters('innocode.block-card.has_image.default', true);
export const IMAGE_SIZE = applyFilters('innocode.block-card.image.size', 'innocode-block-card');
export const ALLOWED_IMAGE_TYPES = applyFilters('innocode.block-card.allowed_image_types', ['image']);
export const IMAGE_DEFAULT = applyFilters('innocode.block-card.image.default', {
	src: '',
	width: 'auto',
	height: 'auto',
	alt: '',
});

export const TITLE_TAG = applyFilters('innocode.block-card.title.tag', 'h3');

export const HAS_TOP_SUBTITLE_DEFAULT = applyFilters('innocode.block-card.has_top_subtitle.default', false);

export const HAS_BOTTOM_SUBTITLE_DEFAULT = applyFilters('innocode.block-card.has_bottom_subtitle.default', false);

export const HAS_DESCRIPTION_DEFAULT = applyFilters('innocode.block-card.has_description.default', true);

export const HAS_LINK_DEFAULT = applyFilters('innocode.block-card.has_link.default', true);

export const HAS_PHONE_DEFAULT = applyFilters('innocode.block-card.has_phone.default', true);

export const HAS_EMAIL_DEFAULT = applyFilters('innocode.block-card.has_email.default', true);
