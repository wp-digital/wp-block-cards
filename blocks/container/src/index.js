import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import icon from './icon';

import './style.scss';

registerBlockType('wpd/block-cards', {
	apiVersion: 2,
	supports: {
		align: ['wide', 'full'],
		className: false,
	},
	attributes,
	providesContext: {
		'wpd/block-cards-cardType': 'cardType',
		'wpd/block-cards-imageWidth': 'imageWidth',
		'wpd/block-cards-imageHeight': 'imageHeight',
	},
	edit: Edit,
	save,
	icon,
});
