const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rulesForJs = {
  test: /\.js$/,
  loader: 'babel-loader',
  options: {
    presets: [
      '@babel/preset-env',
      [
        '@babel/preset-react',
        { runtime: 'automatic' },
      ],
    ],
  },
};

const rulesForCss = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === 'production';

  return {
    output: {
      filename: isProduction
        ? '[name].[contentHash].js'
        : 'main.js',
      path: path.resolve(__dirname, 'build'),
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'public/index.html' }),
    ],
    module: {
      rules: [
        rulesForJs,
        rulesForCss,
      ],
    },
    devServer: {
      port: 3000,
      client: {
        overlay: true,
      },
    },
    // devtool: 'source-map'
  };
};
