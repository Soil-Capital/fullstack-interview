import * as path from 'path';
import paths from './config/paths';
import Webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import InterpolateHtmlPlugin from 'react-dev-utils/InterpolateHtmlPlugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

type loaderConfig = (env: { name: 'dev' | 'local' | 'preprod' | 'prod' }) => Webpack.Configuration;

const loaderConfig: loaderConfig = (env) => {
    const isLocal = env.name === 'local';

    return {
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            plugins: [new TsconfigPathsPlugin()],
        },
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    include: path.join(__dirname, 'src'),
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                getCustomTransformers: () => ({
                                    before: [isLocal && ReactRefreshTypeScript()].filter(Boolean),
                                }),
                                transpileOnly: isLocal,
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'images/[name][ext][query]',
                    },
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[name][ext][query]',
                    },
                },
            ],
        },
        plugins: [
            new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
                PUBLIC_URL: paths.publicUrlOrPath,
            }) as any,
            ...(isLocal ? [new ReactRefreshWebpackPlugin()] : []),
        ],
    };
};

export { loaderConfig };
