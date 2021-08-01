const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const modulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(__dirname, '../../node_modules'),
];

const config = {
  target: 'node',
  mode: 'development',
  devtool: 'source-map',
  entry: {
    server: path.resolve(__dirname, 'src/server'),
  },
  externals: [
    nodeExternals({
      additionalModuleDirs: modulesPaths,
    }),
  ],
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server.js',
  },
  optimization: {
    minimize: false,
    chunkIds: 'named',
    moduleIds: 'named',
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.js', '.ts'],
    modules: modulesPaths,
  },
  module: {
    rules: [
      {
        test: /\.js$|\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  plugins: [new webpack.NoEmitOnErrorsPlugin()],
};

if (process.env.NODE_ENV === 'production') {
  config.mode = 'production';
}

module.exports = config;
