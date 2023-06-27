<template><div><h1 id="ecmascript" tabindex="-1"><a class="header-anchor" href="#ecmascript" aria-hidden="true">#</a> ECMASCRIPT</h1>
<h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2>
<h3 id="作用域是什么" tabindex="-1"><a class="header-anchor" href="#作用域是什么" aria-hidden="true">#</a> 作用域是什么</h3>
<p>变量声明的位置和作用范围
收集并维护由所有声明的变量，确定当前执行代码对标识符的访问权限。</p>
<p>js 作用域是静态的，有三种，全局、函数、es6新增块级作用域</p>
<h3 id="为什么会有作用域" tabindex="-1"><a class="header-anchor" href="#为什么会有作用域" aria-hidden="true">#</a> 为什么会有作用域</h3>
<p>保存变量、查找变量、隔离变量防止命名冲突</p>
<h3 id="作用域规则" tabindex="-1"><a class="header-anchor" href="#作用域规则" aria-hidden="true">#</a> 作用域规则</h3>
<p>就近原则，沿着作用域链向上找，寻找最近的一个变量</p>
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
<h2 id="事件循环eventloop" tabindex="-1"><a class="header-anchor" href="#事件循环eventloop" aria-hidden="true">#</a> 事件循环eventLoop</h2>
<h3 id="js的特点" tabindex="-1"><a class="header-anchor" href="#js的特点" aria-hidden="true">#</a> JS的特点</h3>
<p><strong>同步 阻塞 单线程</strong></p>
<h3 id="什么是事件循环" tabindex="-1"><a class="header-anchor" href="#什么是事件循环" aria-hidden="true">#</a> 什么是事件循环</h3>
<p>因为js是单线程的嘛，所以需要借助浏览器或node处理异步任务，而事件循环就是处理js异步任务机制，</p>
<p>事件循环分为浏览器的事件循环机制和node事件循环机制</p>
<h4 id="浏览器事件循环机制" tabindex="-1"><a class="header-anchor" href="#浏览器事件循环机制" aria-hidden="true">#</a> 浏览器事件循环机制</h4>
<p>js引擎先执行所有的主线程代码，主线程代码执行完后，执行微任务队列里的微任务，执行ui渲染视图更新</p>
<p>然后将宏任务队列里的第一个宏任务添加到作为主线程的代码执行，然后进行下一轮事件循环</p>
<h4 id="node事件循环" tabindex="-1"><a class="header-anchor" href="#node事件循环" aria-hidden="true">#</a> node事件循环</h4>
<p>四个过程  四个队列</p>
<p>定时器队列</p>
<p>I/O 队列</p>
<p>setImmediate队列</p>
<p>关闭队列</p>
<p>两个微任务队列</p>
<p>nextTick</p>
<p>promise</p>
<h2 id="执行上下文" tabindex="-1"><a class="header-anchor" href="#执行上下文" aria-hidden="true">#</a> 执行上下文</h2>
<h3 id="什么是执行上下文" tabindex="-1"><a class="header-anchor" href="#什么是执行上下文" aria-hidden="true">#</a> 什么是执行上下文</h3>
<p>执行上下文是指js代码的执行代码环境，当函数执行的时候，会生成该函数的执行上下文并推入执行栈当中。</p>
<h3 id="执行上下文的组成" tabindex="-1"><a class="header-anchor" href="#执行上下文的组成" aria-hidden="true">#</a> 执行上下文的组成</h3>
<p>es5 执行上下文 = 词法环境+变量环境+外层函数作用域+this</p>
<p>es3 执行上下文=变量对象+作用域链</p>
<p>目前大部分人的说法采用Es3</p>
<p>es5 将变量对象分为词法环境和变量环境</p>
<h4 id="词法环境" tabindex="-1"><a class="header-anchor" href="#词法环境" aria-hidden="true">#</a> 词法环境</h4>
<p>包括 let const 声明的变量</p>
<h4 id="变量环境" tabindex="-1"><a class="header-anchor" href="#变量环境" aria-hidden="true">#</a> 变量环境</h4>
<p>用var声明的变量</p>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h3>
<h2 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> this</h2>
<h3 id="this-是什么" tabindex="-1"><a class="header-anchor" href="#this-是什么" aria-hidden="true">#</a> this 是什么</h3>
<p><code v-pre>this</code> 关键字表示当前执行代码的上下文对象。它可以是任何对象，取决于调用代码的方式和位置</p>
<h3 id="this-是怎么产生的" tabindex="-1"><a class="header-anchor" href="#this-是怎么产生的" aria-hidden="true">#</a> this 是怎么产生的</h3>
<ol>
<li>
<p>函数被调用的时候，创建执行上下文的时候</p>
</li>
<li>
<p>new 的时候</p>
</li>
</ol>
<h3 id="改变-this-的方法" tabindex="-1"><a class="header-anchor" href="#改变-this-的方法" aria-hidden="true">#</a> 改变 this 的方法</h3>
<p>call bind apply</p>
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
<h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-hidden="true">#</a> </h3>
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
<h3 id="相等-扩展知识" tabindex="-1"><a class="header-anchor" href="#相等-扩展知识" aria-hidden="true">#</a> 相等 （扩展知识）</h3>
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
<h2 id="数组-array" tabindex="-1"><a class="header-anchor" href="#数组-array" aria-hidden="true">#</a> 数组 Array</h2>
<h3 id="什么是array" tabindex="-1"><a class="header-anchor" href="#什么是array" aria-hidden="true">#</a> 什么是Array</h3>
<p>array表示一组有顺序的值，并可以随意操作数组元素，且长度可变。</p>
<p>可通过数组下标获取元素。</p>
<h3 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
push
返回数组长度
pop
返回删除的值

shift
返回删除的值
unshift
返回数组长度
//拼串
join()
拼接数组元素

//重要
filter(fun)
返回通过fun函数的数组成员
indexOf()
返回数组下标 没有-1
includes()
返回truefalse 查找元素
//迭代
forEach(fun)
无返回值
Map(fun)
返回新数组
every(fun)
所有元素都通过fun返回true
some(fun)
有元素通过就返回true
find(fun)
返回第一个通过函数的元素
//归并
reduce(fun)
返回归并结果
reduceRight(fun)
从最后一个开始归并

//复制切割
slice()
返回切割的数组
splice()
返回删除的值

//操作原数组
reverse()

sort(fn(a,b))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地存储" tabindex="-1"><a class="header-anchor" href="#本地存储" aria-hidden="true">#</a> 本地存储</h2>
<h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-hidden="true">#</a> </h3>
<table>
<thead>
<tr>
<th></th>
<th>localstorage</th>
<th>sessionstorage</th>
<th>cookies</th>
</tr>
</thead>
<tbody>
<tr>
<td>大小</td>
<td>5m</td>
<td>5m</td>
<td>4kb</td>
</tr>
<tr>
<td>存储时长</td>
<td>永久</td>
<td>会话(标签页关闭)</td>
<td>max-age或session</td>
</tr>
<tr>
<td>api</td>
<td>有api</td>
<td>有api</td>
<td>自动携带 没有api</td>
</tr>
<tr>
<td></td>
<td>前端</td>
<td>前端</td>
<td>服务器、前端</td>
</tr>
<tr>
<td>位置</td>
<td>硬盘</td>
<td>内存</td>
<td>内存</td>
</tr>
</tbody>
</table>
<h3 id="-3" tabindex="-1"><a class="header-anchor" href="#-3" aria-hidden="true">#</a> </h3>
<h3 id="-4" tabindex="-1"><a class="header-anchor" href="#-4" aria-hidden="true">#</a> </h3>
</div></template>


