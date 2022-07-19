import { applyFilters } from '@wordpress/hooks';

export const BLOCK_CLASS_NAME = 'innocode-block-card';

export const TITLE_TAG = applyFilters('innocode.block-cards.card-title.tag', 'h3');

export const IMAGE_DEFAULT = applyFilters('innocode.block-cards.image.default', {
	src: '',
	width: 'auto',
	height: 'auto',
	alt: '',
});
