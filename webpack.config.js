// /* webpack.config.js */
var envConfig = require('./env.config.js');
var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
//定义了一些文件夹的路径
var env = envConfig.ENV;
var ROOT = envConfig.ROOT;
var ROOT_PATH = envConfig.ROOT_PATH;
var APP_PATH = envConfig.APP_PATH;
var BUILD_PATH = envConfig.BUILD_PATH;
var ASSET_PATH = envConfig.ASSET_PATH;
var config = {
  /*
  source-map  在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包文件的构建速度；
  cheap-module-source-map 在一个单独的文件中生成一个不带列映射的map，不带列映射提高项目构建速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号），会对调试造成不便；
  eval-source-map 使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。不过在开发阶段这是一个非常好的选项，但是在生产阶段一定不要用这个选项；
  cheap-module-eval-source-map  这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，和eval-source-map选项具有相似的缺点；
   */
  //devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: {
    'index':APP_PATH+'/main.js',
    'vendor':[APP_PATH+'/Components/Svg']
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename:'js/[name].js',
    chunkFilename: 'js/[name].bundle.js',
    publicPath:ROOT,
  },
  //webpack-dev-server
  devServer: {
    //host: '192.168.0.123',
    historyApiFallback: true,
    hot: true,
    inline: true,
  },
  module: {
    loaders: [
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
        query:{
          partialDirs: [
            APP_PATH+'/template/footer',
            APP_PATH+'/template/header',
          ]
        }
      },
      {
        test: /\.scss$/, 
        loader: ExtractTextPlugin.extract({
          //fallback: "style-loader",
          use: ["css-loader","postcss-loader",'sass-loader'],
        }),
        include:APP_PATH
      },
      {
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract({
          //fallback: "style-loader",
          use: ["css-loader","postcss-loader"],
        }),
        include:APP_PATH
      },
      {
　　　　test: /\.(png|jpg|svg|ttf|woff)$/,
　　　　loader: ['url-loader?limit=8192&name=[path][name].[ext]&publicPath=../'],
        include:ASSET_PATH,
　　　},
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        include: APP_PATH,
        query: {
          presets: ['es2015',"react"],
          plugins:['syntax-dynamic-import'],
          "env": {
            "development": {
                "presets": ["react-hmre"]
            }
          }
        }
      }
    ]
  },
  externals: {
    'postcss-loader':'postcss-loader',
    'style-loader':'style-loader',
    'sass-loader':'sass-loader',
    "lodash":'lodash',
    "react": 'React',
    'mockjs':'Mock',
    'superagent':'superagent',
    'prop-types':'React.PropTypes',
    'react-dom': 'ReactDOM',
    'react-router':'ReactRouter',
    'react-router-dom':'react-router-dom',
    'history/createBrowserHistory':'history',//history插件
    'moment/moment.js': 'moment',//时间插件
    'pubsub-js':'PubSub',//pubSub插件
    'react-quill':'ReactQuill',//富文本编辑器
    'jquery':'$',
    'bootstrap':true,
    'fancybox':true,
    'co':true,
    '_':true,
    'async':true,
    'datetimepicker':true,
    'selectpicker':true,
    'sweetalert':true,
    'highcharts': true,
    'director':true
  },
  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: ROOT_PATH,
      verbose: true, 
      dry: false
    }),
    new CopyWebpackPlugin([
      // {output}/file.txt
      { from: APP_PATH+'/.htaccess',to: BUILD_PATH }
    ])
            
  ]
};
if(env == 'production' || env == 'test' ){
  if(env == 'production'){
    //压缩js
    var extractJs = new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false,  // remove all comments
        },
        compress: {
          warnings: false
        }
      })
    //压缩css
    var extractCss = new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: {removeAll: true } },
        canPrint: true
      })
    config.plugins.push(extractJs);
    config.plugins.push(extractCss);
  }
  
  
  /*config.plugins.push(CommonAsyncChunk);*/
}
else{
  /*var extractCss = new ExtractTextPlugin({filename:"css/[name].css"});
  config.plugins.push(extractCss);*/
}
//提取多个入口的公共部分
var CommonChunk = new webpack.optimize.CommonsChunkPlugin({name: "commons", filename: "js/commons.js"});
config.plugins.push(CommonChunk);
var extractText = new ExtractTextPlugin({filename:"css/style.css",allChunks: true});  //打包成一个css文件
config.plugins.push(extractText);
//动态加载
/*var CommonAsyncChunk = new webpack.optimize.CommonsChunkPlugin({
  async: 'common-in-lazy',
  name:'async'
})*/

//页面
var pages = ['index'];
pages.forEach(function(name) {
    var page = new HtmlwebpackPlugin({
      filename: BUILD_PATH+'/'+name+'.html',
      template: APP_PATH+'/template/'+name+'.hbs',
      chunks: ["commons",name]
    });
    config.plugins.push(page);
});

module.exports = config;