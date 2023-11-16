import { Configuration } from "webpack";
import { BuildOptions } from "./types/buildTypes";

const buildResolvers = ({paths}: BuildOptions): Configuration['resolve'] => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': paths.scr
        }
    }
}

export default buildResolvers;