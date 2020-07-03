const path = require('path')
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')

// Export a function. Accept the base config as the only param.
module.exports = {
    stories: ['../src/atoms/Button/*.stories.(mdx)'],
    addons: [
        '@storybook/preset-typescript',
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
    ],
    webpackFinal: async (config) => {
        config.resolve.alias = {
            atoms: path.resolve(__dirname, '../src/atoms'),
            theme: path.resolve(__dirname, '../src/theme'),
            helpers: path.resolve(__dirname, '../src/helpers'),
            consts: path.resolve(__dirname, '../src/consts'),
        }
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('babel-loader'),
                },
                {
                    loader: require.resolve('react-docgen-typescript-loader'),
                },
            ],
        })
        config.resolve.extensions.push('.ts', '.tsx')
        return config
    },
}
