import {BuildOptions} from './types/config';
import {Configuration} from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): Configuration {
    return {
        static: {
            directory: options.paths.public
        },
        port: options.port,
        open: true,
        historyApiFallback: true
    };
}
