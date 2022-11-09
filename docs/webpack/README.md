# webpack

## 开发、生产配置拆分

将配置拆分为 base，development，product
使用 webpack-merge 插件进行合并
在 package.json 的配置命令的配置文件

## loader

loader 本质上是一个函数,处理多种文件格式 它可以将某种格式的文件转换成 Wwebpack 支持打包的模块

### babel-loader

将高级语法(主要是 ECMAScript 2015+ )编译成浏览器支持的低版本语法

### vue-loader

### style-loader

### css-loader

### ts-loader

### file-loader

### url-loader

处理图片 转为 base64

处理 svg

### svg-sprite-loader

处理 svg

```
 {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include:[path.resolve('src/asset/svgSprite')],
        options:{
            symbolId:'icon-[name]'
        }
}

```

## plugns

### html-webpack-plugin

### mini-css-extract-plugin
