<?php
/**
 * Plugin Name:       Cards Block
 * Description:       Grid or carousel with card blocks which have an image, title, description and link.
 * Requires at least: 5.8
 * Requires PHP:      7.1
 * Version:           1.3.0
 * Author:            SMFB Dinamo
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wpd-blocks
 *
 * @package           wpd
 */

function wpd_block_cards_block_init() {
	register_block_type( __DIR__ . '/blocks/container' );
}

add_action( 'init', 'wpd_block_cards_block_init' );

function wpd_block_card_block_init() {
	register_block_type( __DIR__ . '/blocks/card' );
}

add_action( 'init', 'wpd_block_card_block_init' );

function wpd_block_card_get_image_size() : array {
	return apply_filters( 'wpd_block_card_image_size', [ 1240, 1240, false ] );
}

function wpd_block_card_image_size() {
	list( $width, $height, $crop ) = wpd_block_card_get_image_size();

	add_image_size( 'wpd-block-card', $width, $height, $crop );
}

add_action( 'after_setup_theme', 'wpd_block_card_image_size' );

function wpd_block_card_image_size_choose( array $size_names ) : array {
	list( $width, $height ) = wpd_block_card_get_image_size();

	$size_names['wpd-block-card'] = sprintf( __( 'Card (%sx%s)', 'wpd-blocks' ), $width, $height );

	return $size_names;
}

add_filter( 'image_size_names_choose', 'wpd_block_card_image_size_choose' );
