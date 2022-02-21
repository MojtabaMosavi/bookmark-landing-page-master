const {merge} = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
const { webpack } = require("webpack");

module.exports = merge(common,{
    mode:"development",
    devtool:"eval",

    // point the dev-server to dist directory
    devServer:{
        static:"./dist"
    },
    
    output:{
        path:path.resolve(__dirname,"dist"),
        filename: "[name].bundle.js",
        clean: true
    }
})