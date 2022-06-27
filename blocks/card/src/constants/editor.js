import { applyFilters } from '@wordpress/hooks';

export const ALLOWED_IMAGE_TYPES = applyFilters('innocode.block-cards.allowed_image_types', ['image']);
