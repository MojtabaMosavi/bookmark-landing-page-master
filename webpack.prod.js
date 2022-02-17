const webpack = require("webpack");
const {merge} = require("webpack-merge");
const common = require("./webpack.common");


module.exports =merge(common,{
    mode:"production",
    devtool: "hidden-source-map",


    plugins:[
        new webpack.optimize.UglifyJsPlugin(),
        // minimize the transformed assets
       new  webpack.LoaderOptionsPlugin({minimize:true})
    ]
})