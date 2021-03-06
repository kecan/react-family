const path=require('path');
module.exports={
   /*入口 */
   entry:[
       'react-hot-loader/patch',
       path.join(__dirname,'src/index.js')
   ],
    /*输出到dist文件夹，输出文件名字叫bundle.js*/
   output:{
       path:path.join(__dirname,'./dist'),
       filename:'bundle.js'
   },
    /*src文件下以.js结尾的文件要用babel解析*/
   module:{
       rules:[
           {
               test:/\.js$/,
               use:['babel-loader?cacheDirectory=true'],
               include:path.join(__dirname,'src')
           }
       ]
   },
    devServer: {
        contentBase:path.join(__dirname,'./dist'),
        historyApiFallback: true,
        host:'0.0.0.0'
    },
    resolve: {
        alias: {
            pages:path.join(__dirname,'src/pages'),
            components:path.join(__dirname,'src/components'),
            router:path.join(__dirname,'src/router')
        }
    }
};