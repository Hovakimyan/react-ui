const { NODE_ENV } = process.env

module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-flow', '@babel/preset-react'],
    plugins: [
        'react-docgen',
        [
            'module-resolver',
            {
                alias: {
                    atoms:
                        NODE_ENV === 'publish'
                            ? './src/atoms'
                            : './src/components/atoms',
                    molecules:
                        NODE_ENV === 'publish'
                            ? './src/molecules'
                            : './src/components/molecules',
                    organism:
                        NODE_ENV === 'publish'
                            ? './src/organism'
                            : './src/components/organism',
                    helpers: './src/helpers',
                    consts: './src/consts',
                },
            },
        ],
    ],
}
