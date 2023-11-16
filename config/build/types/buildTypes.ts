export interface BuildPath {
    entry: string;
    html: string;
    scr: string;
    output: string;
    public: string;
}

export type BuildMode = 'production' | 'development';

export interface BuildOptions {
    port: number;
    mode: BuildMode;
    paths: BuildPath;
}

