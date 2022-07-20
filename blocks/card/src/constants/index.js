import { applyFilters } from '@wordpress/hooks';

export const BLOCK_CLASS_NAME = 'innocode-block-card';

export const TITLE_TAG = applyFilters('innocode.block-cards.card.title.tag', 'h3');
export const HAS_IMAGE_DEFAULT = applyFilters('innocode.block-cards.card.has_image.default', true);
export const HAS_DESCRIPTION_DEFAULT = applyFilters('innocode.block-cards.card.has_description.default', true);
export const HAS_LINK_DEFAULT = applyFilters('innocode.block-cards.card.has_link.default', true);
export const HAS_PHONE_DEFAULT = applyFilters('innocode.block-cards.card.has_phone.default', true);
export const HAS_EMAIL_DEFAULT = applyFilters('innocode.block-cards.card.has_email.default', true);

export const IMAGE_DEFAULT = applyFilters('innocode.block-cards.card.image.default', {
	src: '',
	width: 'auto',
	height: 'auto',
	alt: '',
});
