const { NODE_ENV } = process.env

module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        '@babel/preset-react',
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
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
