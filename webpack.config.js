var path = require("path");


module.exports = {
    entry: {
        app: ["./app/main.js"]
    },
    output: {
      path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel?presets[]=es2015'
            },
            {
                test: /node_modules\/log4js\/lib\/appenders\/(?!console.js).+$/,
                loader: 'null'
            },
            {
                test: /node_modules\/log4js\/lib\/streams/,
                loader: 'null'
            },
            {
                test: /node_modules\/pixi.js\/package.json$/,
                loader: 'null'
            },
            {
                test: /node_modules\/pixi.js\/src\/(filters|mesh|accessibility)/,
                loader: 'null'
            },
            {
                test: /node_modules\/pixi.js\//,
                loader: "transform?brfs"
            }
        ]
    },
    devtool: 'hidden-source-map',
    node: {
        fs: 'empty'
    }
};
