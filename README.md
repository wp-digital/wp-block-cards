# Cards Block

### Description

Grid or carousel with card blocks which have an image, title, description and link.

### Demo

[Cards Block](https://demo.wpd.digital/cards-block/)

### Install

- Preferable way is to use [Composer](https://getcomposer.org/):

    ````
    composer require wp-digital/wp-block-cards
    ````

- Alternate way is to clone this repo to `wp-content/plugins/`:

    ````
    cd wp-content/plugins/
    git clone git@github.com:wp-digital/wp-block-cards.git
    ````

Activate **Cards Block** with [WP-CLI](https://make.wordpress.org/cli/handbook/)
`wp plugin activate wp-block-cards` or from **Plugins** page.

### Documentation

There are few hooks in [container](./blocks/container/src/constants.js) and [card](./blocks/card/src/constants.js)
constants which give a possibility to customize behaviour a bit.
