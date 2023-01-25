<template><div><h1 id="ecmascript" tabindex="-1"><a class="header-anchor" href="#ecmascript" aria-hidden="true">#</a> ECMASCRIPT</h1>
<h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2>
<h3 id="作用域是什么" tabindex="-1"><a class="header-anchor" href="#作用域是什么" aria-hidden="true">#</a> 作用域是什么</h3>
<p>变量声明的位置和作用范围
收集并维护由所有声明的变量，确定当前执行代码对标识符的访问权限。</p>
<p>《你不知道的 javascript》对作用域的解释是，是 js 引擎查找变量的一套规则，如何找，在哪找。</p>
<p>js 作用域有三种，全局、函数、es6块级作用域</p>
<h3 id="为什么会有作用域" tabindex="-1"><a class="header-anchor" href="#为什么会有作用域" aria-hidden="true">#</a> 为什么会有作用域</h3>
<p>保存变量、查找变量、隔离变量防止命名冲突</p>
<h3 id="作用域应用场景-how" tabindex="-1"><a class="header-anchor" href="#作用域应用场景-how" aria-hidden="true">#</a> 作用域应用场景(How)</h3>
<h4 id="预解析" tabindex="-1"><a class="header-anchor" href="#预解析" aria-hidden="true">#</a> 预解析</h4>
<p>变量提升，var 声明的变量，function 声明的函数会提升到作用域的顶部，并且函数声明优先于变量声明
在函数内部，形参和实参结合之后才进行变量/函数提升</p>
<h4 id="作用域链" tabindex="-1"><a class="header-anchor" href="#作用域链" aria-hidden="true">#</a> 作用域链</h4>
<p>当函数被执行的时候，产生函数的执行上下文，每个执行上下文都有变量对象，多个变量对象组合成立作用域链，当前执行函数的变量对象处于作用域链顶端</p>
<h3 id="如何修改作用域" tabindex="-1"><a class="header-anchor" href="#如何修改作用域" aria-hidden="true">#</a> 如何修改作用域</h3>
<p>欺骗词法</p>
<h4 id="第一种-eval" tabindex="-1"><a class="header-anchor" href="#第一种-eval" aria-hidden="true">#</a> 第一种：eval</h4>
<p>eval 函数会将参数字符串当作当前作用域的代码执行</p>
<h4 id="第二种-with-关键字" tabindex="-1"><a class="header-anchor" href="#第二种-with-关键字" aria-hidden="true">#</a> 第二种：with 关键字</h4>
<p>利用 with 关键字传入目标对象
with 内部代码的变量会从对象中查找</p>
<h2 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> this</h2>
<h3 id="this-是什么" tabindex="-1"><a class="header-anchor" href="#this-是什么" aria-hidden="true">#</a> this 是什么</h3>
<h3 id="this-是怎么产生的" tabindex="-1"><a class="header-anchor" href="#this-是怎么产生的" aria-hidden="true">#</a> this 是怎么产生的</h3>
<ol>
<li>
<p>函数被调用的时候，创建执行上下文的时候</p>
</li>
<li>
<p>new 的时候</p>
</li>
</ol>
<h3 id="this-的应用" tabindex="-1"><a class="header-anchor" href="#this-的应用" aria-hidden="true">#</a> this 的应用</h3>
<h3 id="改变-this-的方法" tabindex="-1"><a class="header-anchor" href="#改变-this-的方法" aria-hidden="true">#</a> 改变 this 的方法</h3>
<h2 id="原型" tabindex="-1"><a class="header-anchor" href="#原型" aria-hidden="true">#</a> 原型</h2>
<h3 id="原型是什么" tabindex="-1"><a class="header-anchor" href="#原型是什么" aria-hidden="true">#</a> 原型是什么</h3>
<p>原型是一个对象，实例对象都有隐式原型，构造函数有显示原型，</p>
<h3 id="原型有什么用" tabindex="-1"><a class="header-anchor" href="#原型有什么用" aria-hidden="true">#</a> 原型有什么用</h3>
<p>给实例对象添加属性和方法，一般是方法</p>
<h3 id="原型是怎么产生的" tabindex="-1"><a class="header-anchor" href="#原型是怎么产生的" aria-hidden="true">#</a> 原型是怎么产生的</h3>
<p>当对象被创建的时候，会将对象的隐式原型指向构造函数的显式原型</p>
<h3 id="原型链" tabindex="-1"><a class="header-anchor" href="#原型链" aria-hidden="true">#</a> 原型链</h3>
<p>当读取对象的属性的时候，如果当前对象没有该属性，js引擎会从对象的隐式原型，沿着原型链一直往上找。</p>
<h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h3>
<h4 id="项目的loading加载过渡组件" tabindex="-1"><a class="header-anchor" href="#项目的loading加载过渡组件" aria-hidden="true">#</a> 项目的loading加载过渡组件</h4>
<p>在项目中给Vue构造函数的原型中添加一个loading方法，给body添加一个遮罩层动画</p>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h3>
<h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2>
<h3 id="什么是闭包-what" tabindex="-1"><a class="header-anchor" href="#什么是闭包-what" aria-hidden="true">#</a> 什么是闭包（what）</h3>
<p>闭包就是，外层函数作用域被内层函数引用时候，就会产生闭包。闭包就是内层函数和外部函数作用域的组合。</p>
<h3 id="闭包是怎么产生的-why" tabindex="-1"><a class="header-anchor" href="#闭包是怎么产生的-why" aria-hidden="true">#</a> 闭包是怎么产生的(why)</h3>
<p>函数嵌套
外部函数变量被内部函数引用</p>
<h3 id="闭包的应用场景-怎么用-how" tabindex="-1"><a class="header-anchor" href="#闭包的应用场景-怎么用-how" aria-hidden="true">#</a> 闭包的应用场景，怎么用（How）</h3>
<p>高阶函数，私有变量，模块坏</p>
<p>节流防抖，函数柯里化，管道函数</p>
<h3 id="闭包的好处和坏处" tabindex="-1"><a class="header-anchor" href="#闭包的好处和坏处" aria-hidden="true">#</a> 闭包的好处和坏处</h3>
<h4 id="好处" tabindex="-1"><a class="header-anchor" href="#好处" aria-hidden="true">#</a> 好处</h4>
<p>可以用变量保存闭包来延长变量的生命周期。</p>
<p>保护变量，防止被篡改。</p>
<h4 id="坏处" tabindex="-1"><a class="header-anchor" href="#坏处" aria-hidden="true">#</a> 坏处</h4>
<p>如果不及时释放就会一直占内存，造成内存泄漏或内存溢出</p>
<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2>
<h4 id="var关键字" tabindex="-1"><a class="header-anchor" href="#var关键字" aria-hidden="true">#</a> var关键字</h4>
<ol>
<li>有函数作用域</li>
<li>可重复声明</li>
<li>变量提升</li>
<li>全局定义的变量作为window属性</li>
</ol>
<h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2>
<h3 id="相等" tabindex="-1"><a class="header-anchor" href="#相等" aria-hidden="true">#</a> 相等</h3>
<p>js中的相等比较算法有以下四种：</p>
<p>​	1.    The <strong>Abstract</strong> Equality Comparison Algorithm (==)</p>
<p>​	2.    The <strong>Strict</strong> Equality Comparison Algorithm (===)</p>
<p>​	3.    SameValue (Object.is())        (附：这里NaN和NaN相等，0和-0不相等)</p>
<p>​	4.    SameValueZero (暂未提供API)   (附：这里NaN和NaN相等，0和-0和+0都是相等的)</p>
<h4 id="samevalue-object-is" tabindex="-1"><a class="header-anchor" href="#samevalue-object-is" aria-hidden="true">#</a> SameValue (Object.is())</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Object.is(NaN,NaN); //true

Object.is(0,-0);   //false

Object.is(0,+0);   //true

Object.is(+0,-0);  //false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1）我们知道NaN==NaN是false，NaN===NaN也是false， 但是SameValue算法里，NaN和NaN是相等的。</p>
<p>2）SameValue算法里<strong>0默认是+0</strong>，同时 0 和 -0 是不相等的（+0和-0也不相等）。</p>
<h4 id="samevaluezero-暂未提供api" tabindex="-1"><a class="header-anchor" href="#samevaluezero-暂未提供api" aria-hidden="true">#</a> SameValueZero (暂未提供API)</h4>
<p>SameValueZero算法和SameValue算法的区别在于对0的处理（认为0、+0以及-0三者是相等的），其他的和SameValue一样（例如NaN和NaN是相等的）</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>例一：
[NaN].includes(NaN);  //true
[0].includes(-0);  //true
[0].includes(+0);  //true  例二：
const a = new Set();
a.add(0);
a.add(NaN);
 
a.has(-0);  //true
a.has(+0);  //true
a.has(NaN); //true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>includes()内部使用的比较算法就是SameValueZero</p>
<p>new Set()、new Map()比较是用的算法也是SameValueZero（+0和-0和0都是相等的，NaN和NaN也是相等的）</p>
</div></template>


