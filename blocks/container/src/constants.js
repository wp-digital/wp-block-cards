import { applyFilters } from '@wordpress/hooks';

export const BLOCK_CLASS_NAME = 'wpd-block-cards';

export const TYPE_DEFAULT = 'default';
export const TYPE_CONTACT = 'contact';

export const HAS_TITLE_DEFAULT = applyFilters('wpd.block-cards.has_title.default', true);
export const TITLE_TAG = applyFilters('wpd.block-cards.title.tag', 'h2');

export const HAS_DESCRIPTION_DEFAULT = applyFilters('wpd.block-cards.has_description.default', false);

export const IMAGE_WIDTH_DEFAULT = applyFilters('wpd.block-cards.image.width.default', 100); // In percent.
export const IMAGE_HEIGHT_DEFAULT = applyFilters('wpd.block-cards.image.height.default', 250); // In pixels.

export const COLUMNS_MAX = applyFilters('wpd.block-cards.columns.max', 6);
export const COLUMNS_DEFAULT = applyFilters('wpd.block-cards.columns.default', 3);

export const ALIGNMENT_DEFAULT = applyFilters('wpd.block-cards.alignment.default', 'none');

export const ALLOWED_BLOCKS = ['wpd/block-card'];

export const TEMPLATE = applyFilters('wpd.block-cards.template', [['wpd/block-card', {}]]);
