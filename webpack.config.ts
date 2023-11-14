import path from 'path';
import webpack from 'webpack';
import buildWebpack from './config/build/buildWebpack';
import { BuildMode, BuildPath } from './config/build/types/buildTypes';

interface EnvVariables {
    mode: BuildMode,
    port: number
}

const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

export default (env: EnvVariables) => {
    const config: webpack.Configuration = buildWebpack({
        mode: env.mode ?? 'development',
        port: env.port ?? 3000,
        paths
    });
    return config;
}