const { NODE_ENV } = process.env

module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-flow-strip-types',
        'transform-es2015-modules-commonjs',
        'babel-plugin-dynamic-import-node',
        'babel-plugin-styled-components',
        'inline-react-svg',
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
                    consts: './src/consts'
                }
            }
        ]
    ]
}
