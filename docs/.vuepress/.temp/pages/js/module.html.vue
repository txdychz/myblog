<template><div><h1 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h1>
<h2 id="模块化的演变过程" tabindex="-1"><a class="header-anchor" href="#模块化的演变过程" aria-hidden="true">#</a> 模块化的演变过程</h2>
<p>阶段 1 无模块化</p>
<p>一个 js 文件一个模块，直接通过script标签引入，缺点是直接运行在全局环境中 有变量冲突
阶段 2
每个文件都有一个全局对象，将函数和变量都写在对象里面，防止了变量命名冲突，但是没有私有空间，会被其他模块随意访问和修改
阶段 3
使用立即执行函数，立即执行函数内部的变量只能通过闭包访问， 确保了私有变量的安全，但是每个人的代码习惯不一样，会导致各种各样的问题。</p>
<p>而且当模块文件越来越多的时候要一个一个的引入 删除，不好维护</p>
<p>后来 node 推出了模块化标准 cjs，所以 node 中执行的 js 代码必须遵守 cjs 规范。cjs 是同步加载的，浏览器使用的话会阻塞
渲染，因为所有的模块都存放在本地硬盘，可以同步加载完成，等待时间就是硬盘的读取时间。但是，对于浏览器，这却是一个大问题，因为模块都放在服务器端，等待时间取决于网速的快慢，可能要等很长时间，浏览器处于&quot;假死&quot;状态。
因此，浏览器端的模块，不能采用&quot;同步加载&quot;（synchronous），只能采用&quot;异步加载&quot;（asynchronous）。这就是 AMD 规范诞生的背景。（AMD是异步的）
专门为浏览器、设计了另一种模块化规范 AMD（async modules definition），后来又出现了 CMD，CMD 简化了 AMD，为了统一cjs和AMD，又推出了UMD。
但最终 ES6 推出的模块化成为了浏览器最终的模块化方案</p>
<p>静态编译、依赖明确、可静态分析、支持循环依赖、代码优化</p>
<h2 id="模块化的问题" tabindex="-1"><a class="header-anchor" href="#模块化的问题" aria-hidden="true">#</a> 模块化的问题</h2>
<p>模块文件过多，会导致网络请求频繁</p>
<p>因此只将初次运行必须的模块打包到一起，其他文件在需要使用的时候在请求服务器获取</p>
<h2 id="commonjs" tabindex="-1"><a class="header-anchor" href="#commonjs" aria-hidden="true">#</a> commonjs</h2>
<p>nodeJs并非完全使用cjs规范，而是使用了轻微修改的cjs版本。cjs模块需要使用require引用指定模块依赖，使用exports定义自己的公共api。并且只会被加载一次。加载后模块会被缓存</p>
<h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h3>
<p>本质是将我们的 js 代码封装成一个函数，通过参数的方式提供 require module exports _filename _dirname 等内置变量</p>
<h3 id="commjs-如何封装私有变量" tabindex="-1"><a class="header-anchor" href="#commjs-如何封装私有变量" aria-hidden="true">#</a> commjs 如何封装私有变量</h3>
<p>导出的时候只导出一个对象，设置要导出变量的 get 属性访问器和操作值的函数</p>
<h2 id="es6module" tabindex="-1"><a class="header-anchor" href="#es6module" aria-hidden="true">#</a> es6module</h2>
<ol>
<li>模块内部默认使用<strong>严格模式</strong>，所以 this 为默认为 undefined</li>
<li>每个模块都有独立作用域</li>
<li>需要服务器支持 cors</li>
<li>默认 defer 异步加载延迟执行</li>
</ol>
<p>esm 可以在 node 中运行</p>
<ol>
<li>可以在命令中加入 experimental</li>
<li>也可以在 package.json 中指定 type 为 module，使用 cjs 的时候将文件名后缀改为 cjs</li>
</ol>
<h3 id="esm使用" tabindex="-1"><a class="header-anchor" href="#esm使用" aria-hidden="true">#</a> esm使用</h3>
<p>在script标签中使用type=‘module’，import引入模块，export default默认导出模块或export单独导出</p>
<h2 id="cjs-和-esm-的区别" tabindex="-1"><a class="header-anchor" href="#cjs-和-esm-的区别" aria-hidden="true">#</a> cjs 和 esm 的区别</h2>
<ol>
<li>Commonjs 是拷贝输出（原模块的基本数据类型值改变，不会影响引入的值，引用类型会），ES6 模块化是引用输出（动态只读引用）</li>
<li>Commonjs 是运行时加载，ES6 模块化是编译时输出接口</li>
<li>Commonjs 只有默认导出，ES6 模块化可以多个值导出也能默认导出</li>
<li>Commonjs 是动态语法可写在函数体中，ES6 模块化静态语法只能写在顶层</li>
<li>Commonjs 的 this 是当前模块化，ES6 模块化的 this 是 undefined</li>
<li>cjs 不能用 require 引入 esm，esm 可以使用 import 引入 cjs</li>
</ol>
</div></template>


