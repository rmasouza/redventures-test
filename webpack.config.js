'use strict';
const path = require('path');
const webpack = require('webpack');
const compression = require('compression');
const dotenv = require('dotenv');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineSourcePlugin = require('html-webpack-inline-source-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Dotenv = require('dotenv-webpack');

const sourcePath = path.join(__dirname, './src');
const outputhPath = path.resolve(__dirname, './dist');

dotenv.config();
console.log(process.env.NODE_ENV);

const webpackConfig = {
    context: sourcePath,
    entry: {
        main: './index.tsx',
    },
    output: {
        path: outputhPath,
        publicPath: '/',
        filename: "[name].[chunkhash].js",
        chunkFilename: '[name]-[chunkhash].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            { test: /\.(ts|js)x?$/, exclude: /node_modules/, use: 'babel-loader' },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    mode: process.env.NODE_ENV,
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
            }),
        ],
        runtimeChunk: true,
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                reactVendors: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: "react~vendors"
                },
            }
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./assets/index.html",
            favicon: './assets/icons/icon.png',
            inlineSource: 'runtime~.+\\.js',
        }),
        new InlineSourcePlugin(),
        new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim: true,
            importWorkboxFrom: 'cdn',
            runtimeCaching: [
                {
                    urlPattern: /^https?.*/,
                    handler: 'NetworkFirst',
                    options: {
                        cacheName: 'RedVenturusTestCache',
                        expiration: {
                            maxEntries: 200
                        }
                    }
                }
            ],
        }),
        new CompressionPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
        }),
        new WebpackPwaManifest({
            name: 'Red Ventures Test',
            short_name: 'Red Ventures Test',
            description: 'My Awesome Progressive Web App!',
            background_color: '#fff',
            theme_color: '#AB1725',
            display: 'standalone',
            start_url: ".",
            orientation: "portrait",
            icons: [
                {
                    src: path.resolve('src/assets/icons/icon-192.png'),
                    sizes: [192],
                    ios: true
                },
                {
                    src: path.resolve('src/assets/icons/icon-256.png'),
                    sizes: [256],
                    ios: true
                },
                {
                    src: path.resolve('src/assets/icons/icon-512.png'),
                    sizes: [512],
                    ios: true
                }
            ],
            ios: {
                // 'apple-touch-icon': string | IosAppleTouchIcon,
                // 'apple-touch-startup-image': string,
                'apple-mobile-web-app-title': 'Red Ventures Test',
                'apple-mobile-web-app-capable': true,
                'apple-mobile-web-app-status-bar-style': 'black'
            },
        }),
        new Dotenv({
            path: path.join(__dirname, './.env'),
            systemvars: true
        })
    ],
    node: {
        module: 'empty',
        dgram: 'empty',
        dns: 'mock',
        fs: 'empty',
        http2: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
    devServer: {
        compress: true,
        port: process.env.PORT,
        historyApiFallback: true,
        before(app) {
            app.use(compression({}));
        },
    }
};

module.exports = webpackConfig;
