const path = require('path');
const webpack = require('webpack');
require('dotenv').config({ path: '.env.local' });
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  resolve: {
    fallback: {
      process: require.resolve("process/browser"),
    },
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            experimentalWatchApi: true,
            compilerOptions: {
              module: 'esnext',
              target: 'es2017'
            }
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|avif|mp4)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser'
    }),
  new webpack.DefinePlugin({
    'process.env.VITE_CLERK_PUBLISHABLE_KEY': JSON.stringify(process.env.VITE_CLERK_PUBLISHABLE_KEY),
    'process.env.VITE_CONVEX_URL': JSON.stringify(process.env.VITE_CONVEX_URL),
    // You can also define the process.env object if you need other env vars
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: '.',
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ],
  devServer: {
    static: [
      { directory: path.join(__dirname, 'dist') },
      { directory: path.join(__dirname, 'public') }
    ],
    port: 3000,
    hot: true,
    historyApiFallback: true,
    compress: false,
    open: true,
    client: {
      overlay: false,
      logging: 'warn'
    },
    watchFiles: {
      paths: ['src/**/*'],
      options: {
        usePolling: false,
        interval: 1000,
        aggregateTimeout: 300
      }
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  performance: {
    hints: false,
    maxEntrypointSize: 1024 * 1024,
    maxAssetSize: 1024 * 1024
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
    minimize: false,
    concatenateModules: false
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  stats: {
    errorDetails: false,
    children: false
  },
  mode: 'production'
};