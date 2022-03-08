const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:{
        index:"./src/index.js"
    },

    // aliases
    resolve:{

        alias:{        
            extensions:['js','jsx','ts','tsx',"svg"],
            root:path.resolve("./src"),
            Components: path.resolve(__dirname,"src/components"),
            Images: path.resolve(__dirname,"src/assets/images"),
            Domain:path.resolve(__dirname,"src/domain")

        }
    },
    
    // plugings---------------------------------- 
    plugins:[
        new HtmlWebpackPlugin({template:"./src/index.html", inject:true})
    ],

    // loader------------------------------------
    module:{
        rules:[
            // ES6----------------------------------
            {
                test:/\.(js|jsx)$/i,
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
                test:/\.s[a|c]ss$/i,
                exclude:/(node_modules)/,
                use:["style-loader","css-loader","sass-loader"]
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
}