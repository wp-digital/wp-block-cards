import { applyFilters } from '@wordpress/hooks';

export const TITLE_TAG = applyFilters('innocode.block-cards.title.tag', 'h2');

export const HAS_TITLE_DEFAULT = applyFilters('innocode.block-cards.has_title.default', true);
export const HAS_DESCRIPTION_DEFAULT = applyFilters('innocode.block-cards.has_description.default', false);

export const TYPE_GRID = 'grid';
export const TYPE_SLIDER = 'slider';
export const TYPE_DEFAULT = applyFilters('innocode.block-cards.type.default', TYPE_GRID);

export const CARD_TYPE_DEF = 'default';
export const CARD_TYPE_CONTACT = 'contact';
export const CARD_TYPE_DEFAULT = applyFilters('innocode.block-cards.card-type.default', CARD_TYPE_DEF);

export const IMAGE_WIDTH_DEFAULT = applyFilters('innocode.block-cards.image.width.default', '100%');
export const IMAGE_HEIGHT_DEFAULT = applyFilters('innocode.block-cards.image.height.default', '150px');

export const CARDS_IN_ROW_DEFAULT = applyFilters('innocode.block-cards.cards-in-row.default', '6');

export const ALLOWED_BLOCKS = ['innocode/block-card'];
