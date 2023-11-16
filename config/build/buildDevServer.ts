import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/buildTypes';

export const buildDevServer = ({port}: BuildOptions): DevServerConfiguration => {
    return {
        open: true,
        port: port ?? 3000,
        historyApiFallback: true  // для SPA Routing
    }
} 