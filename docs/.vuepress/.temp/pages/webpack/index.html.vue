<template><div><h1 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack" aria-hidden="true">#</a> webpack</h1>
<h2 id="开发、生产配置拆分" tabindex="-1"><a class="header-anchor" href="#开发、生产配置拆分" aria-hidden="true">#</a> 开发、生产配置拆分</h2>
<p>将配置拆分为 base，development，product
使用 webpack-merge 插件进行合并
在 package.json 的配置命令的配置文件</p>
<h2 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> loader</h2>
<p>loader 本质上是一个函数,处理多种文件格式 它可以将某种格式的文件转换成 Wwebpack 支持打包的模块</p>
<h3 id="babel-loader" tabindex="-1"><a class="header-anchor" href="#babel-loader" aria-hidden="true">#</a> babel-loader</h3>
<p>将高级语法(主要是 ECMAScript 2015+ )编译成浏览器支持的低版本语法</p>
<h3 id="vue-loader" tabindex="-1"><a class="header-anchor" href="#vue-loader" aria-hidden="true">#</a> vue-loader</h3>
<h3 id="style-loader" tabindex="-1"><a class="header-anchor" href="#style-loader" aria-hidden="true">#</a> style-loader</h3>
<h3 id="css-loader" tabindex="-1"><a class="header-anchor" href="#css-loader" aria-hidden="true">#</a> css-loader</h3>
<h3 id="ts-loader" tabindex="-1"><a class="header-anchor" href="#ts-loader" aria-hidden="true">#</a> ts-loader</h3>
<h3 id="file-loader" tabindex="-1"><a class="header-anchor" href="#file-loader" aria-hidden="true">#</a> file-loader</h3>
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
<h3 id="html-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#html-webpack-plugin" aria-hidden="true">#</a> html-webpack-plugin</h3>
<h3 id="mini-css-extract-plugin" tabindex="-1"><a class="header-anchor" href="#mini-css-extract-plugin" aria-hidden="true">#</a> mini-css-extract-plugin</h3>
</div></template>


