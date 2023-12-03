import webpack from 'webpack';

type Mode = 'development' | 'production' | 'none';

export type BuildPaths = {
    entry: string;
    build: string;
    html: string;
    public: string;
};

export type Env = {
    mode: Mode;
    port: number;
};

export interface BuildOptions {
    mode: Mode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}
