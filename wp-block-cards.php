<?php
/**
 * Plugin Name:       Cards Block
 * Description:       Grid or carousel with card blocks which have an image, title, description and link.
 * Requires at least: 5.8
 * Requires PHP:      7.1
 * Version:           1.0.1
 * Author:            Innocode
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       innocode-blocks
 *
 * @package           innocode
 */

function innocode_block_cards_block_init() {
	register_block_type( __DIR__ . '/blocks/container' );
}

add_action( 'init', 'innocode_block_cards_block_init' );

function innocode_block_card_block_init() {
	register_block_type( __DIR__ . '/blocks/card' );
}

add_action( 'init', 'innocode_block_card_block_init' );
