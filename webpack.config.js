const path = require('path');

function resolve(partial) {
    return path.resolve(process.cwd(), partial);
}

const ENTRY_PATH = resolve('src/index.js');
const DIST_PATH = resolve('dist/');

const baseConfig = {
    bail: true,
    devtool: 'source-map',
    entry: [ENTRY_PATH],

    module: {
        strictExportPresence: true,
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        }],
    },
};

const baseOutput = {
    path: DIST_PATH,
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
};

const regularConfig = Object.assign({}, baseConfig, {
    output: Object.assign({}, baseOutput, {
        filename: 'index.js',
    }),

    optimization: {
        minimize: false,
    },
});

const minifiedConfig = Object.assign({}, baseConfig, {
    output: Object.assign({}, baseOutput, {
        filename: 'index.min.js',
    }),

    optimization: {
        minimize: true,
    },
});

module.exports = [regularConfig, minifiedConfig];
