// used to trace deprecation in node
(process as any).traceDeprecation = true;

import CaseSensitivePathsWebpackPlugin from 'case-sensitive-paths-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import merge from 'webpack-merge';
import paths from './config/paths';
import { loaderConfig } from './webpack.common.config';
import ESLintPlugin from 'eslint-webpack-plugin';

const filesToCopy: { from: string; to: string }[] = [
    // assets to copy
];

const devConfig = (env: {
    name: 'dev' | 'local' | 'preprod' | 'prod';
    http?: string;
}): Webpack.Configuration & WebpackDevServer.Configuration => {
    const envPath = 'env/env.' + env.name;
    const outputPath = 'dist-local-server';

    return {
        mode: 'development',
        devtool: 'eval-source-map',
        entry: [paths.appIndexJs],
        devServer: {
            host: 'localhost',
            port: 3010,
            liveReload: true,
            server: env.http ?? 'http',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': '*',
            },
            client: {
                logging: 'none', // Added this to avoid console.log spam from HMR
            },
            hot: true,
            compress: true,
            devMiddleware: {
                writeToDisk: true,
            },
            static: {
                watch: true,
            },
            historyApiFallback: true,
        } as WebpackDevServer.Configuration,
        plugins: [
            new HtmlWebpackPlugin({
                template: paths.appHtml,
            }),
            ...(filesToCopy.length
                ? new CopyWebpackPlugin({
                      patterns: filesToCopy,
                  })
                : ([] as any)),
            new CaseSensitivePathsWebpackPlugin(),
            new Dotenv({
                path: envPath,
                allowEmptyValues: true,
            }) as any,
            new ESLintPlugin(),
        ],
        output: {
            filename: 'static/js/bundle.interview.js',
            chunkFilename: 'static/js/[name].interview.chunk.js',
            path: path.join(__dirname, outputPath),
            pathinfo: true,
            publicPath: paths.publicUrlOrPath,
        },
    };
};

module.exports = (env: { name: 'dev' | 'local' | 'preprod' | 'prod' }) => {
    return merge(devConfig(env), loaderConfig(env));
};
