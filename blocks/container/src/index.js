import { registerBlockType } from '@wordpress/blocks';
import { __, sprintf } from '@wordpress/i18n';

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import icon from './icon';

import './style.scss';

import exampleImage1 from './example-1.webp';
import exampleImage2 from './example-2.webp';
import exampleImage3 from './example-3.webp';

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
	example: {
		attributes: {
			title: __('Cards', 'wpd-blocks'),
			hasDescription: true,
			description: sprintf('<p>%s</p>', __('This is a description', 'wpd-blocks')),
		},
		innerBlocks: [
			{
				name: 'wpd/block-card',
				attributes: {
					imageSrc: exampleImage1,
					imageWidth: 800,
					imageHeight: 600,
					imageAlt: __('Placeholder image', 'wpd-blocks'),
					title: __('Card', 'wpd-blocks'),
					description: sprintf('<p>%s</p>', __('This is a description for a single Card.', 'wpd-blocks')),
					linkText: __('Read More', 'wpd-blocks'),
				},
			},
			{
				name: 'wpd/block-card',
				attributes: {
					imageSrc: exampleImage2,
					imageWidth: 800,
					imageHeight: 600,
					imageAlt: __('Placeholder image', 'wpd-blocks'),
					title: __('Card', 'wpd-blocks'),
					hasDescription: false,
					hasTopSubtitle: true,
					topSubtitle: __('Top Subtitle', 'wpd-blocks'),
					hasBottomSubtitle: true,
					bottomSubtitle: __('Bottom Subtitle', 'wpd-blocks'),
					linkText: __('Read More', 'wpd-blocks'),
				},
			},
			{
				name: 'wpd/block-card',
				attributes: {
					imageSrc: exampleImage3,
					imageWidth: 800,
					imageHeight: 600,
					imageAlt: __('Placeholder image', 'wpd-blocks'),
					title: __('Card', 'wpd-blocks'),
					description: sprintf('<p>%s</p>', __('This is a description for a single Card.', 'wpd-blocks')),
					linkText: __('Go to', 'wpd-blocks'),
				},
			},
		],
	},
});
