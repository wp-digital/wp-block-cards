import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import icon from './icon';

import './style.scss';

registerBlockType('innocode/block-cards', {
	apiVersion: 2,
	supports: {
		align: ['wide', 'full'],
		className: false,
	},
	attributes,
	providesContext: {
		'innocode/block-cards-cardType': 'cardType',
		'innocode/block-cards-imageWidth': 'imageWidth',
		'innocode/block-cards-imageHeight': 'imageHeight',
	},
	edit: Edit,
	save,
	icon,
});
