import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import icon from './icon';

import './style.scss';

registerBlockType('wpd/block-card', {
	apiVersion: 2,
	supports: {
		className: false,
	},
	attributes,
	usesContext: ['wpd/block-cards-cardType', 'wpd/block-cards-imageWidth', 'wpd/block-cards-imageHeight'],
	edit: Edit,
	save,
	icon,
	parent: ['wpd/block-cards'],
});
