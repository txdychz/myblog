<template><div><h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> Webpack</h1>
<h2 id="开发环境" tabindex="-1"><a class="header-anchor" href="#开发环境" aria-hidden="true">#</a> 开发环境</h2>
<p>开发环境可以使用开发代理服务器，有一些依赖在开发环境的时候会使用，如预处理器</p>
<h2 id="生产环境" tabindex="-1"><a class="header-anchor" href="#生产环境" aria-hidden="true">#</a> 生产环境</h2>
<p>开发环境会使用代码压缩和代码丑化，开发代理服务器无法在生产环境使用，</p>
<h2 id="开发、生产配置拆分" tabindex="-1"><a class="header-anchor" href="#开发、生产配置拆分" aria-hidden="true">#</a> 开发、生产配置拆分</h2>
<p>将配置拆分为 base，development，product
使用 webpack-merge 插件进行合并
在 package.json 的配置命令的配置文件</p>
<h2 id="webpack-打包原理" tabindex="-1"><a class="header-anchor" href="#webpack-打包原理" aria-hidden="true">#</a> webpack 打包原理</h2>
<p>webpack 本质就是将我们的 js 文件，打包成一个文件，将代码包装成一个自执行函数。这个自执行函数会接受一个 module 参数，然后自执行函数传入一个数组，数组的每个元素都是一个函数，而且他们的参数是相同的，每一个函数都是每个 js 模块中的代码，也就是说我们的 js 模块会被包裹成一个个函数</p>
<p>webpack 会根据模块 id 去加载模块中的代码</p>
<h2 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> loader</h2>
<p>loader 本质上是一个函数,处理多种文件格式 它可以将某种格式的文件转换成 Wwebpack 支持打包的模块</p>
<h3 id="babel-loader" tabindex="-1"><a class="header-anchor" href="#babel-loader" aria-hidden="true">#</a> babel-loader</h3>
<p>将高级语法(主要是 ECMAScript 2015+ )编译成浏览器支持的低版本语法</p>
<h3 id="vue-loader" tabindex="-1"><a class="header-anchor" href="#vue-loader" aria-hidden="true">#</a> vue-loader</h3>
<p>解析 vue 文件</p>
<h3 id="style-loader" tabindex="-1"><a class="header-anchor" href="#style-loader" aria-hidden="true">#</a> style-loader</h3>
<p>将解析到的 css 代码生成 style 标签，放在 html 标签上</p>
<h3 id="css-loader" tabindex="-1"><a class="header-anchor" href="#css-loader" aria-hidden="true">#</a> css-loader</h3>
<p>解析 css</p>
<h3 id="ts-loader" tabindex="-1"><a class="header-anchor" href="#ts-loader" aria-hidden="true">#</a> ts-loader</h3>
<h3 id="file-loader" tabindex="-1"><a class="header-anchor" href="#file-loader" aria-hidden="true">#</a> file-loader</h3>
<p>将图片资源打包成 js 模块，最后导出图片打包后的路径</p>
<h3 id="url-loader" tabindex="-1"><a class="header-anchor" href="#url-loader" aria-hidden="true">#</a> url-loader</h3>
<p>处理图片 转为 base64</p>
<p>处理 svg</p>
<h3 id="svg-sprite-loader" tabindex="-1"><a class="header-anchor" href="#svg-sprite-loader" aria-hidden="true">#</a> svg-sprite-loader</h3>
<p>处理 svg</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code> {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include:[path.resolve('src/asset/svgSprite')],
        options:{
            symbolId:'icon-[name]'
        }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="plugns" tabindex="-1"><a class="header-anchor" href="#plugns" aria-hidden="true">#</a> plugns</h2>
<p>本质是是一个函数或带有 apply 函数的对象
apply 函数接受一个参数，参数提供了 hooks 属性
借助 webpack 内部生命周期钩子通过 tap 方法啊自定义插件</p>
<h3 id="html-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#html-webpack-plugin" aria-hidden="true">#</a> html-webpack-plugin</h3>
<h3 id="mini-css-extract-plugin" tabindex="-1"><a class="header-anchor" href="#mini-css-extract-plugin" aria-hidden="true">#</a> mini-css-extract-plugin</h3>
</div></template>


