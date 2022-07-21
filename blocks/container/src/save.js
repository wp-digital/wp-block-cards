import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

import {
	BLOCK_CLASS_NAME,
	TITLE_TAG,
	HAS_TITLE_DEFAULT,
	HAS_DESCRIPTION_DEFAULT,
	// TYPE_DEFAULT,
	CARDS_IN_ROW_DEFAULT,
} from './constants';
import { ALLOWED_BLOCKS } from './constants/editor';

export default function save({ attributes }) {
	const {
		hasTitle = HAS_TITLE_DEFAULT,
		title,
		hasDescription = HAS_DESCRIPTION_DEFAULT,
		description,
		// type = TYPE_DEFAULT,
		cardsInRow = CARDS_IN_ROW_DEFAULT,
	} = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: `${BLOCK_CLASS_NAME} grid-${cardsInRow}`,
			})}
		>
			<div className={`${BLOCK_CLASS_NAME}__header`}>
				{hasTitle && <RichText.Content tagName={TITLE_TAG} className={`${BLOCK_CLASS_NAME}__title`} value={title} />}
				{hasDescription && (
					<RichText.Content
						tagName="div"
						multiline="p"
						value={description}
						className={`${BLOCK_CLASS_NAME}__description`}
					/>
				)}
			</div>
			<div className={`${BLOCK_CLASS_NAME}__list`}>
				<InnerBlocks.Content allowedBlocks={ALLOWED_BLOCKS} />
			</div>
		</div>
	);
}
