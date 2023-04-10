const path = require("path")
const HTMLPlugin = require("html-webpack-plugin")
module.exports = {
    mode: "production",  //设置打包模式，production表示生产模式  development 开发模式
    // entry: "./hello/hello.js"  用来指定打包时的主文件 默认 ./src/index.js
    //    entry: ["./src/a.js", ".src/b.js"]  打包多个文件到一起可以传数组，还可以传对象（将属性值打包成前面的属性名）
    entry: './src/index.js',
    // output: {
    //     path: path.resolve(__dirname, dist),  //指定打包目录,必须要绝对路径
    //     filename: 'main.js',  //打包后的文件名
    //     clean: ture //自动清理打包目录
    // },
    /*
    Webpack默认情况下，只会处理js文件，如果我们希望它可以处理其他类型文件，则要为其引入loader
    -以css为例：
      -使用css-loader 可以处理js中引入的样式,但是使用css样式则还需要style-loader
      -使用步骤：
            1.安装： yarn add css-loader style-loader -D
            2.配置：
                 module: {
                    rules: [
                         {
                            test:/\.css$/i, //使用正则表达式来匹文件
                            use: ["style-loader","css-loader"]  //引入的顺序不能乱
                         }
                    ]
                }
    */
   /*
    babel是将新的js语法转换为旧的js语法，以提高代码兼容性
     如果我们在文本webpack上支持babel,则需要引入babel的loader
     使用步骤：
     npm install -D babel-loader @babel/core @babel/preset-env
      {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
      }
    }
   */
  /*
    想打包后自动生成index.html，需要使用到html-webpack-plugin,并引入且放入plugins里面
        步骤：yarn add -D html-webpack-plugin
    */
   module: {
        rules: [
            {
               test:/\.css$/i, //使用正则表达式来匹文件
               use: ["style-loader","css-loader"]
            },
            {
                test: /\.(jpg|png|gif)$/i,
                type: "asset/resource"  //图片资源类型数据，可以通过指定type来处理（不需要加载loader）
            },
            // {
            //     test: /\.m?js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //       loader: 'babel-loader',
            //       options: {
            //         presets: ['@babel/preset-env'],
            //         plugins: ['@babel/plugin-proposal-object-rest-spread']
            //       }
            //     }
            //   },
              
        ]
   },
   plugins: [
    new HTMLPlugin({
        // title: "Hello Webpack",
        template: './src/index.html' //内填写模板地址
    })
   ]
   
}