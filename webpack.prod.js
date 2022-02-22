const webpack = require("webpack");
const {merge} = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path")

module.exports =merge(common,{
    mode:"production",
    devtool: "hidden-source-map",


    plugins:[
        // minimize the transformed assets in prod mode 
       new  webpack.LoaderOptionsPlugin({minimize:true})
    ],

    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name][hash].bundle.js",
        clean:true,
    }
})