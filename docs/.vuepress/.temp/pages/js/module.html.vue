<template><div><h1 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h1>
<h2 id="模块化的演变过程" tabindex="-1"><a class="header-anchor" href="#模块化的演变过程" aria-hidden="true">#</a> 模块化的演变过程</h2>
<p>阶段 1
一个 js 文件一个模块，模块没有私有作用域
阶段 2
每个文件导出一个全局对象，将函数和变量都放在里面
阶段 3
使用立即执行函数</p>
<p>首先 node 推出了模块化标准 cjs，所以 node 中执行的 js 代码必须遵守 cjs 规范。cjs 同步加载的，浏览器使用的话会阻塞
渲染，
因为所有的模块都存放在本地硬盘，可以同步加载完成，等待时间就是硬盘的读取时间。但是，对于浏览器，这却是一个大问题，因为模块都放在服务器端，等待时间取决于网速的快慢，可能要等很长时间，浏览器处于&quot;假死&quot;状态。
因此，浏览器端的模块，不能采用&quot;同步加载&quot;（synchronous），只能采用&quot;异步加载&quot;（asynchronous）。这就是 AMD 规范诞生的背景。
专门为浏览器、设计了另一种模块化规范 AMD（async modules definition），后来又出现了 CMD，CMD 简化了 AMD，
最终 ES6 的模块化成为了浏览器最终的模块化方案，在 nodejs 使用 cjs</p>
<h2 id="commjs-如何封装私有变量" tabindex="-1"><a class="header-anchor" href="#commjs-如何封装私有变量" aria-hidden="true">#</a> commjs 如何封装私有变量</h2>
<p>导出的时候只导出一个对象，设置要导出变量的 get 属性访问器和操作值的函数</p>
<h2 id="esm" tabindex="-1"><a class="header-anchor" href="#esm" aria-hidden="true">#</a> esm</h2>
<ol>
<li>模块内部默认使用严格模式，所以 this 为默认为 undefined</li>
<li>每个模块都有独立作用域</li>
<li>需要服务器支持 cors</li>
<li>默认 defer 延迟执行</li>
</ol>
<h2 id="cjs-和-esm-的区别" tabindex="-1"><a class="header-anchor" href="#cjs-和-esm-的区别" aria-hidden="true">#</a> cjs 和 esm 的区别</h2>
<ol>
<li>Commonjs 是拷贝输出（原模块的基本数据类型值改变，不会影响引入的值，引用类型会），ES6 模块化是引用输出（动态只读引用）</li>
<li>Commonjs 是运行时加载，ES6 模块化是编译时输出接口</li>
<li>Commonjs 是单个值导出，ES6 模块化可以多个值导出</li>
<li>Commonjs 是动态语法可写在函数体中，ES6 模块化静态语法只能写在顶层</li>
<li>Commonjs 的 this 是当前模块化，ES6 模块化的 this 是 undefined</li>
</ol>
</div></template>


