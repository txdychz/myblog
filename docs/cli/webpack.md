# Webpack

## 开发环境

开发环境可以使用开发代理服务器，有一些依赖在开发环境的时候会使用，如预处理器

## 生产环境

开发环境会使用代码压缩和代码丑化，开发代理服务器无法在生产环境使用，

## 开发、生产配置拆分

将配置拆分为 base，development，product
使用 webpack-merge 插件进行合并
在 package.json 的配置命令的配置文件

## webpack 打包原理

webpack 本质就是将我们的 js 文件，打包成一个文件，将代码包装成一个自执行函数。这个自执行函数会接受一个 module 参数，然后自执行函数传入一个数组，数组的每个元素都是一个函数，而且他们的参数是相同的，每一个函数都是每个 js 模块中的代码，也就是说我们的 js 模块会被包裹成一个个函数

webpack 会根据模块 id 去加载模块中的代码

## loader

loader 本质上是一个函数,处理多种文件格式 它可以将某种格式的文件转换成 Wwebpack 支持打包的模块

### babel-loader

将高级语法(主要是 ECMAScript 2015+ )编译成浏览器支持的低版本语法

### vue-loader

解析 vue 文件

### style-loader

将解析到的 css 代码生成 style 标签，放在 html 标签上

### css-loader

解析 css

### ts-loader

### file-loader

将图片资源打包成 js 模块，最后导出图片打包后的路径

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

本质是是一个函数或带有 apply 函数的对象
apply 函数接受一个参数，参数提供了 hooks 属性
借助 webpack 内部生命周期钩子通过 tap 方法啊自定义插件

### html-webpack-plugin

### mini-css-extract-plugin
