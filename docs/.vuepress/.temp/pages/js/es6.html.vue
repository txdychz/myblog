<template><div><h1 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6+</h1>
<h2 id="let、const" tabindex="-1"><a class="header-anchor" href="#let、const" aria-hidden="true">#</a> let、const</h2>
<p>新的声明变量关键字</p>
<h3 id="共同点" tabindex="-1"><a class="header-anchor" href="#共同点" aria-hidden="true">#</a> 共同点</h3>
<ol>
<li>暂时性死区（变量不提升或着说提升了但没有初始化）</li>
<li>不能重复声明</li>
<li>都有块级作用域</li>
</ol>
<h4 id="不同" tabindex="-1"><a class="header-anchor" href="#不同" aria-hidden="true">#</a> 不同</h4>
<p>const声明不可变的常量，且声明必须赋初始值</p>
<h3 id="块级作用域" tabindex="-1"><a class="header-anchor" href="#块级作用域" aria-hidden="true">#</a> 块级作用域</h3>
<p>es6 开始有使用 const、function、class、let 块级作用域。</p>
<h2 id="for-of" tabindex="-1"><a class="header-anchor" href="#for-of" aria-hidden="true">#</a> for...of</h2>
<p>用来遍历可迭代对象的值</p>
<p><strong>和for...in的区别</strong></p>
<p>for...in遍历任意对象，遍历的是对象的属性，for...of遍历可迭代对象遍历的是对象的值。</p>
<h2 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h2>
<p>直接用标识符在类内部声明变量和函数</p>
<h3 id="私有变量" tabindex="-1"><a class="header-anchor" href="#私有变量" aria-hidden="true">#</a> 私有变量</h3>
<p>只能在实例内部使用</p>
<p>在类的内部可以通过#去定义类的私有变量</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
class Person{
  #age
  constructor(name,age){
        this.name = name
        this.#age = age

  }
}

const p = new Person('zby',12)
console.log(p.#age)   //编译不通过，语法错误
console.log(p.age)   //undefinded

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="static-静态变量" tabindex="-1"><a class="header-anchor" href="#static-静态变量" aria-hidden="true">#</a> static 静态变量</h3>
<p>通过 static 声明静态变量和方法</p>
<h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h2>
<h3 id="什么是promise" tabindex="-1"><a class="header-anchor" href="#什么是promise" aria-hidden="true">#</a> 什么是promise</h3>
<p>promise是js异步编程的api，promise有pending，fullfill，rejected三种状态，且状态改变不可逆，其构造函数接受一个函数，函数有两个参数，用来改变promise的状态，该函数会在定义的时候同步执行。该函数抛出异常的时候，调用rejected的时候会reject，调用resolve的时候promise状态为fullfilled</p>
<h3 id="promise有什么用" tabindex="-1"><a class="header-anchor" href="#promise有什么用" aria-hidden="true">#</a> promise有什么用</h3>
<p>主要解决了回调地狱的问题，另外传统回调函数的方式难以捕获异常。</p>
<h3 id="promise常用api" tabindex="-1"><a class="header-anchor" href="#promise常用api" aria-hidden="true">#</a> promise常用api</h3>
<h4 id="promise-all" tabindex="-1"><a class="header-anchor" href="#promise-all" aria-hidden="true">#</a> Promise.All</h4>
<p>当所有promise都成功的时候返回成功的promise数组，</p>
<h4 id="promise-race" tabindex="-1"><a class="header-anchor" href="#promise-race" aria-hidden="true">#</a> Promise.race</h4>
<p>接受promise数组，返回的promise状态为promise数组最先完成状态</p>
<h4 id="promise-allsettled" tabindex="-1"><a class="header-anchor" href="#promise-allsettled" aria-hidden="true">#</a> Promise.AllSettled</h4>
<p>接收promise数组，当所有promise都执行完以后返回所有promise的结果</p>
<h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h2>
<h3 id="什么是map" tabindex="-1"><a class="header-anchor" href="#什么是map" aria-hidden="true">#</a> 什么是Map</h3>
<p>map是es6新增的数据结构，以键值对的方式操作数据，</p>
<h3 id="和object的区别" tabindex="-1"><a class="header-anchor" href="#和object的区别" aria-hidden="true">#</a> 和object的区别</h3>
<p>object只能用字符串或symbol作为键，键的顺序是随机的，map则可以使用任意类型作为键，键的顺序是确定的（Map是有序的）</p>
<h3 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>get(k)//获取键的值

set(k,v)//添加键值对

has()  //判断键是否存在

size  //获取长度

delete()  //删除键值对

clear()   //清空map

keys()  //获取键的迭代器

entries  //获取键值对迭代器

values  //获取值的迭代器

forEAch() //遍历
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map和object优劣" tabindex="-1"><a class="header-anchor" href="#map和object优劣" aria-hidden="true">#</a> Map和object优劣</h3>
<p>在查找速度上object更快</p>
<p>Map内存利用率更高，插入性能更好，删除性能也更好</p>
<h2 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h2>
<h3 id="什么是set" tabindex="-1"><a class="header-anchor" href="#什么是set" aria-hidden="true">#</a> 什么是Set</h3>
<p>Set是es6新出的一种有序集合类型，通过new构造函数创建set对象。并且集合元素具有唯一性</p>
<h3 id="api-1" tabindex="-1"><a class="header-anchor" href="#api-1" aria-hidden="true">#</a> Api</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Set.prototype.add()

Set.prototype.clear()

Set.prototype.delete()

Set.prototype.entries()

Set.prototype.forEach()

Set.prototype.has()

Set.prototype.keys()

Set.prototype.values()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展运算符" tabindex="-1"><a class="header-anchor" href="#扩展运算符" aria-hidden="true">#</a> 扩展运算符</h2>
<h4 id="对象扩展" tabindex="-1"><a class="header-anchor" href="#对象扩展" aria-hidden="true">#</a> 对象扩展</h4>
<h4 id="数组扩展" tabindex="-1"><a class="header-anchor" href="#数组扩展" aria-hidden="true">#</a> 数组扩展</h4>
<h2 id="剩余参数" tabindex="-1"><a class="header-anchor" href="#剩余参数" aria-hidden="true">#</a> 剩余参数</h2>
<p>用来代替arguments的</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>function fn(...arg){
 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="symbol" tabindex="-1"><a class="header-anchor" href="#symbol" aria-hidden="true">#</a> Symbol</h2>
<p>基本数据类型</p>
<h2 id="bigint" tabindex="-1"><a class="header-anchor" href="#bigint" aria-hidden="true">#</a> bigInt</h2>
<p>基本数据类型，数值较大的整数</p>
</div></template>


