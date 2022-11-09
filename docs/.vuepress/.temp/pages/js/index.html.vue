<template><div><h1 id="ecmascript" tabindex="-1"><a class="header-anchor" href="#ecmascript" aria-hidden="true">#</a> ECMASCRIPT</h1>
<h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2>
<h3 id="作用域是什么-what" tabindex="-1"><a class="header-anchor" href="#作用域是什么-what" aria-hidden="true">#</a> 作用域是什么(What)</h3>
<p>《你不知道的 javascript》对作用域的解释是，是用来查找</p>
<h3 id="为什么会有作用域-why" tabindex="-1"><a class="header-anchor" href="#为什么会有作用域-why" aria-hidden="true">#</a> 为什么会有作用域 (Why)</h3>
<h3 id="作用域应用场景-how" tabindex="-1"><a class="header-anchor" href="#作用域应用场景-how" aria-hidden="true">#</a> 作用域应用场景(How)</h3>
<h2 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h2>
<h3 id="模块化的演变过程" tabindex="-1"><a class="header-anchor" href="#模块化的演变过程" aria-hidden="true">#</a> 模块化的演变过程</h3>
<p>阶段 1
一个 js 文件一个模块，模块没有私有作用域
阶段 2
每个文件导出一个全局对象，将函数和变量都放在里面
阶段 3
使用立即执行函数</p>
<p>首先 node 推出了模块化标准 cjs，所以 node 中执行的 js 代码必须遵守 cjs 规范。cjs 同步加载的，浏览器使用的话会阻塞
渲染，因此为浏览器专门设计了另一种模块化规范 AMD（async modules definition），后来又出现了 CMD，CMD 简化了 AMD，
最终 ES6 的模块化成为了浏览器最终的模块化方案，在 nodejs 使用 cjs</p>
<h3 id="commjs-如何封装私有变量" tabindex="-1"><a class="header-anchor" href="#commjs-如何封装私有变量" aria-hidden="true">#</a> commjs 如何封装私有变量</h3>
<p>导出的时候只导出一个对象，设置要导出变量的 get 属性访问器和操作值的函数</p>
<h3 id="esm" tabindex="-1"><a class="header-anchor" href="#esm" aria-hidden="true">#</a> esm</h3>
<p>1、模块内部默认使用严格模式，所以 this 为默认为 undefined
2、每个模块都有独立作用域
3、需要服务器支持 cors
4、默认 defer 延迟执行</p>
<h3 id="cjs-和-esm-的区别" tabindex="-1"><a class="header-anchor" href="#cjs-和-esm-的区别" aria-hidden="true">#</a> cjs 和 esm 的区别</h3>
<p>1、Commonjs 是拷贝输出（原模块的基本数据类型值改变，不会影响引入的值，引用类型会），ES6 模块化是引用输出（动态只读引用）
2、Commonjs 是运行时加载，ES6 模块化是编译时输出接口
3、Commonjs 是单个值导出，ES6 模块化可以多个值导出
4、Commonjs 是动态语法可写在函数体中，ES6 模块化静态语法只能写在顶层
5、Commonjs 的 this 是当前模块化，ES6 模块化的 this 是 undefined</p>
</div></template>


