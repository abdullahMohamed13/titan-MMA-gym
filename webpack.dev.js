const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const flowbiteReact = require("flowbite-react/plugin/webpack");

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: false // Don't clean on every build for speed
  },
  resolve: {
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
              target: 'es2017',
              skipLibCheck: true
            }
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    flowbiteReact()
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
    open: false, // Don't auto-open browser
    client: {
      overlay: false,
      logging: 'error' // Only show errors
    },
    watchFiles: {
      paths: ['src/**/*'],
      options: {
        usePolling: false,
        interval: 500,
        aggregateTimeout: 200
      }
    }
  },
  performance: {
    hints: false
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
    children: false,
    modules: false,
    chunks: false,
    chunkModules: false
  },
  mode: 'development'
}; 