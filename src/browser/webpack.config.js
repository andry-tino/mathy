const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "./index.ts"),
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "..", "..", "out", "browser")
    }
};
