const path = require('path')
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')

// Export a function. Accept the base config as the only param.
module.exports = {
    stories: ['../src/**/**/*.stories.(mdx)'],
    addons: [
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null,
            },
        },
        '@storybook/addon-knobs',
        '@storybook/addon-viewport',
        '@storybook/addon-notes',
        'storybook-addon-react-docgen',
    ],
    webpackFinal: async (config) => {
        config.resolve = {
            alias: {
                atoms: path.resolve(__dirname, '../src/atoms'),
                theme: path.resolve(__dirname, '../src/theme'),
                helpers: path.resolve(__dirname, '../src/helpers'),
                consts: path.resolve(__dirname, '../src/consts'),
            },
        }

        return config
    },
}
