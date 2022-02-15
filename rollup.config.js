//  yarn add rollup -D

export default {
    input: './src/index.js',
    output: {
        file: './dist/types-utils.js',
        format: 'umd',
        name: 'utils'
    }
};