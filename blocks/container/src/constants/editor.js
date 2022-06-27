import { applyFilters } from '@wordpress/hooks';

export const TITLE_TAG = applyFilters('innocode.block-cards.title.tag', 'h3');

export const HAS_TITLE_DEFAULT = applyFilters('innocode.block-cards.has_title.default', true);
export const HAS_DESCRIPTION_DEFAULT = applyFilters('innocode.block-cards.has_description.default', false);

export const ALLOWED_BLOCKS = ['innocode/block-card'];
