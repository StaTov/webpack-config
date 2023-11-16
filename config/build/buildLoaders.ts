import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/buildTypes";

const buildLoaders = ({ mode }: BuildOptions): ModuleOptions['rules'] => {

    const isDev = mode === 'development';

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true
                                }
                            }
                        ]
                    }
                }
            }
        ],
    }

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8npm]",
            },
        },
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            cssLoaderWithModules,
            "sass-loader",
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        assetLoader,
        scssLoader,
        tsLoader,
        svgLoader
    ]
}

export default buildLoaders;