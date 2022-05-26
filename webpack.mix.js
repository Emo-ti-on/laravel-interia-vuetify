const mix = require('laravel-mix');
const path = require('path');

// npm i vuetifyjs-mix-extension -D
require('vuetifyjs-mix-extension')

// Configuring aliases for vue-cli
mix.alias({'@': path.join(__dirname, 'resources/js/vue')});

mix.webpackConfig(webpack => {
    return {
        ignoreWarnings: [
        ]
    }
})
mix.js('resources/js/app.js', 'public/js').vuetify('vuetify-loader').vue(2)
    .postCss('resources/css/app.css', 'public/css', [
        // Plugins...
    ]);
