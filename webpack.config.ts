import webpack from 'webpack';
import {buildWebpackConfig} from './config/build/buildWebpackConfig';
import {BuildPaths, Env} from './config/build/types/config';

const path = require('path');

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.join(__dirname, 'dist')
};

export default (env: Env) => {
    const mode = env.mode ?? 'development';

    const isDev = mode === 'development';

    const port = +env.port ?? 9000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port
    });

    return config;
};
