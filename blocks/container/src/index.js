import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import icon from './icon';

import './style.scss';

registerBlockType('innocode/block-cards', {
	apiVersion: 2,
	supports: {
		align: ['center', 'wide', 'full'],
		className: false,
	},
	attributes,
	edit: Edit,
	save,
	icon,
});
