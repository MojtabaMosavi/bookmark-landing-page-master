const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:{
        index:"./src/index.js"
    },
    
    // plugings---------------------------------- 
    plugins:[
        new HtmlWebpackPlugin({template:"src/index.html", inject:true})
    ],

    // loader------------------------------------
    module:{
        rules:[
            // ES6----------------------------------
            {
                test:/\.j[s|sx]$/i,
                exclude:/(node_modules)/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            presets:["@babel/preset-env","@babel/preset-react"]
                    }
                }
                ]
            },

            // scss files----------------------------------
            {
                test:/\.(scss|sass)$/i,
                exclude:/(node_modules)/,
                use:["style-loader","css-loader","scss-loader"]
            },

            //images-----------------------------------
            {
                test:/\.(png|jpeg|svg|gif|jpg)$/i,
                type:"asset/resource",
            },


            // font--------------------------------------
            {
                test:/\.(woff|woff2|eot|fff|otf)$/i,
                type:"asset/resource",
            }
        ]
    },

    // output-----------------------------------
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].bundle.[extension]",
        clean:true,
    },

    // extract duplicate dependencies into a seperate into a new chunck
    optimization:{
        splitChunks:{
            chunks:"all",
        }
    }
}