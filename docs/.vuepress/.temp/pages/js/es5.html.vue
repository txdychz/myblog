<template><div><h1 id="ecmascript" tabindex="-1"><a class="header-anchor" href="#ecmascript" aria-hidden="true">#</a> ECMASCRIPT</h1>
<h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2>
<h3 id="作用域是什么-what" tabindex="-1"><a class="header-anchor" href="#作用域是什么-what" aria-hidden="true">#</a> 作用域是什么(What)</h3>
<p>变量声明的位置
收集并维护由所有声明的变量，确定当前执行代码对标识符的访问权限。</p>
<p>《你不知道的 javascript》对作用域的解释是，是 js 引擎查找变量的一套规则，如何找，在哪找。</p>
<p>js 作用域有三种，全局、函数、es6 局部</p>
<h3 id="为什么会有作用域-why" tabindex="-1"><a class="header-anchor" href="#为什么会有作用域-why" aria-hidden="true">#</a> 为什么会有作用域 (Why)</h3>
<h3 id="作用域应用场景-how" tabindex="-1"><a class="header-anchor" href="#作用域应用场景-how" aria-hidden="true">#</a> 作用域应用场景(How)</h3>
<h3 id="如何修改作用域" tabindex="-1"><a class="header-anchor" href="#如何修改作用域" aria-hidden="true">#</a> 如何修改作用域</h3>
<p>欺骗词法</p>
<h4 id="第一种-eval" tabindex="-1"><a class="header-anchor" href="#第一种-eval" aria-hidden="true">#</a> 第一种：eval</h4>
<p>eval 函数会将参数字符串当作当前作用域的代码执行</p>
<h4 id="第二种-with-关键字" tabindex="-1"><a class="header-anchor" href="#第二种-with-关键字" aria-hidden="true">#</a> 第二种：with 关键字</h4>
<p>利用 with 关键字传入目标对象
with 内部代码的变量会从对象中查找</p>
<h2 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> this</h2>
<h3 id="this-是什么" tabindex="-1"><a class="header-anchor" href="#this-是什么" aria-hidden="true">#</a> this 是什么（）</h3>
<h3 id="this-是怎么产生的" tabindex="-1"><a class="header-anchor" href="#this-是怎么产生的" aria-hidden="true">#</a> this 是怎么产生的</h3>
<h3 id="this-的应用" tabindex="-1"><a class="header-anchor" href="#this-的应用" aria-hidden="true">#</a> this 的应用</h3>
<h3 id="改变-this-的方法" tabindex="-1"><a class="header-anchor" href="#改变-this-的方法" aria-hidden="true">#</a> 改变 this 的方法</h3>
<h2 id="原型" tabindex="-1"><a class="header-anchor" href="#原型" aria-hidden="true">#</a> 原型</h2>
<h3 id="原型是什么" tabindex="-1"><a class="header-anchor" href="#原型是什么" aria-hidden="true">#</a> 原型是什么</h3>
<h3 id="原型有什么用" tabindex="-1"><a class="header-anchor" href="#原型有什么用" aria-hidden="true">#</a> 原型有什么用</h3>
<h3 id="原型是怎么产生的" tabindex="-1"><a class="header-anchor" href="#原型是怎么产生的" aria-hidden="true">#</a> 原型是怎么产生的</h3>
<p>当对象被创建的时候，会将对象的隐式原型指向构造函数的显式原型</p>
<h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2>
<h3 id="什么是闭包-what" tabindex="-1"><a class="header-anchor" href="#什么是闭包-what" aria-hidden="true">#</a> 什么是闭包（what）</h3>
<p>闭包就是，当一个函数的作用域被内部函数保存下来的时候，就会产生闭包。外部函数的变量被内部函数引用，使其作用域被外部变量保存下来。</p>
<h3 id="闭包是怎么产生的-why" tabindex="-1"><a class="header-anchor" href="#闭包是怎么产生的-why" aria-hidden="true">#</a> 闭包是怎么产生的(why)</h3>
<p>函数嵌套
外部函数变量被内部函数引用</p>
<h3 id="闭包的应用场景-怎么用-how" tabindex="-1"><a class="header-anchor" href="#闭包的应用场景-怎么用-how" aria-hidden="true">#</a> 闭包的应用场景，怎么用（How）</h3>
<p>高阶函数，私有变量，模块坏</p>
<p>节流防抖，函数柯里化，管道函数</p>
</div></template>


