const path = require('path');
const {ProgressPlugin} = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
import webpack from 'webpack';
import {BuildOptions} from './types/config';

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new ProgressPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack',
            template: paths.html
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    ];
}
