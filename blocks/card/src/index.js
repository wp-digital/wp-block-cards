import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import icon from './icon';

import './style.scss';

registerBlockType('innocode/block-card', {
	apiVersion: 2,
	supports: {
		className: false,
	},
	attributes,
	usesContext: ['innocode/block-cards-cardType', 'innocode/block-cards-imageWidth', 'innocode/block-cards-imageHeight'],
	edit: Edit,
	save,
	icon,
	parent: ['innocode/block-cards'],
});
