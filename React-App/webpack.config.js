const path = require("path");
const resolve = require("path").resolve;
const HtmlWebpackPlugin = require("html-webpack-plugin");

// enable this for styled-components
// const createStyledComponentsTransformer = require("typescript-plugin-styled-components").default;
// const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: resolve("dist"),
        publicPath: "/",
    },
    mode: "development",
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000,
        historyApiFallback: true,
        hot: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                // options: {
                //     //shows displayName for styled-components
                //     getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
                // },
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: [/node_modules/],
            },
            {
                test: /\.(png|svg)$/,
                oneOf: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "images/",
                        },
                    },
                    {
                        loader: "url-loader",
                        options: {
                            limit: 9000,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
        }),
    ],
};
