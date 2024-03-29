# ECMASCRIPT

## 作用域

### 作用域是什么

变量声明的位置和作用范围
收集并维护由所有声明的变量，确定当前执行代码对标识符的访问权限。



js 作用域是静态的，有三种，全局、函数、es6新增块级作用域

### 为什么会有作用域 

保存变量、查找变量、隔离变量防止命名冲突

### 作用域规则

就近原则，沿着作用域链向上找，寻找最近的一个变量



#### 预解析

变量提升，var 声明的变量，function 声明的函数会提升到作用域的顶部，并且函数声明优先于变量声明
在函数内部，形参和实参结合之后才进行变量/函数提升

#### 作用域链

当函数被执行的时候，产生函数的执行上下文，每个执行上下文都有变量对象，多个变量对象组合成立作用域链，当前执行函数的变量对象处于作用域链顶端

### 如何修改作用域

欺骗词法

#### 第一种：eval

eval 函数会将参数字符串当作当前作用域的代码执行

#### 第二种：with 关键字

利用 with 关键字传入目标对象
with 内部代码的变量会从对象中查找

## 事件循环eventLoop

### JS的特点

**同步 阻塞 单线程** 

### 什么是事件循环

因为js是单线程的嘛，所以需要借助浏览器或node处理异步任务，而事件循环就是处理js异步任务机制，

事件循环分为浏览器的事件循环机制和node事件循环机制

#### 浏览器事件循环机制

js引擎先执行所有的主线程代码，主线程代码执行完后，执行微任务队列里的微任务，执行ui渲染视图更新

然后将宏任务队列里的第一个宏任务添加到作为主线程的代码执行，然后进行下一轮事件循环

#### node事件循环

四个过程  四个队列

定时器队列

I/O 队列

setImmediate队列

关闭队列

两个微任务队列

nextTick

promise

## 执行上下文

### 什么是执行上下文

执行上下文是指js代码的执行代码环境，当函数执行的时候，会生成该函数的执行上下文并推入执行栈当中。

### 执行上下文的组成

es5 执行上下文 = 词法环境+变量环境+外层函数作用域+this

es3 执行上下文=变量对象+作用域链

目前大部分人的说法采用Es3  

es5 将变量对象分为词法环境和变量环境

#### 词法环境

包括 let const 声明的变量

#### 变量环境

用var声明的变量



### 





## this

### this 是什么

`this` 关键字表示当前执行代码的上下文对象。它可以是任何对象，取决于调用代码的方式和位置

### this 是怎么产生的

1. 函数被调用的时候，创建执行上下文的时候

2. new 的时候

### 改变 this 的方法

call bind apply

## 原型 prototype

### 原型是什么

原型是一个对象，实例对象都有隐式原型，构造函数有显示原型，

### 原型有什么用

给实例对象添加属性和方法，一般是方法

### 原型是怎么产生的

当对象被创建的时候，会将对象的隐式原型指向构造函数的显式原型



### 原型链

当读取对象的属性的时候，如果当前对象没有该属性，js引擎会从对象的隐式原型，沿着原型链一直往上找。



### 应用

#### 项目的loading加载过渡组件

在项目中给Vue构造函数的原型中添加一个loading方法，给body添加一个遮罩层动画

### 

## 闭包 

### 什么是闭包（what）

闭包就是，外层函数作用域被内层函数引用时候，就会产生闭包。闭包就是内层函数和外部函数作用域的组合。

### 闭包是怎么产生的(why)

函数嵌套
外部函数变量被内部函数引用

### 闭包的应用场景，怎么用（How）

高阶函数，私有变量，模块坏

节流防抖，函数柯里化，管道函数

### 闭包的好处和坏处

#### 好处

可以用变量保存闭包来延长变量的生命周期。

保护变量，防止被篡改。

#### 坏处

如果不及时释放就会一直占内存，造成内存泄漏或内存溢出



## 变量

#### var关键字

1. 有函数作用域
2. 可重复声明
3. 变量提升
4. 全局定义的变量作为window属性



## 运算符



### 相等 （扩展知识）

js中的相等比较算法有以下四种：

​	1.    The **Abstract** Equality Comparison Algorithm (==)      

​	2.    The **Strict** Equality Comparison Algorithm (===)        

​	3.    SameValue (Object.is())        (附：这里NaN和NaN相等，0和-0不相等)

​	4.    SameValueZero (暂未提供API)   (附：这里NaN和NaN相等，0和-0和+0都是相等的) 

#### SameValue (Object.is()) 



```
Object.is(NaN,NaN); //true

Object.is(0,-0);   //false

Object.is(0,+0);   //true

Object.is(+0,-0);  //false
```

1）我们知道NaN==NaN是false，NaN===NaN也是false， 但是SameValue算法里，NaN和NaN是相等的。

2）SameValue算法里**0默认是+0**，同时 0 和 -0 是不相等的（+0和-0也不相等）。

#### SameValueZero (暂未提供API) 

SameValueZero算法和SameValue算法的区别在于对0的处理（认为0、+0以及-0三者是相等的），其他的和SameValue一样（例如NaN和NaN是相等的）

```
例一：
[NaN].includes(NaN);  //true
[0].includes(-0);  //true
[0].includes(+0);  //true  例二：
const a = new Set();
a.add(0);
a.add(NaN);
 
a.has(-0);  //true
a.has(+0);  //true
a.has(NaN); //true
```

includes()内部使用的比较算法就是SameValueZero

new Set()、new Map()比较是用的算法也是SameValueZero（+0和-0和0都是相等的，NaN和NaN也是相等的）



## 数组 Array

### 什么是Array

array表示一组有顺序的值，并可以随意操作数组元素，且长度可变。

可通过数组下标获取元素。



## JSON 序列化



```
//序列化
JSON.stringify(target,function)
第二个参数可以是数组或函数
在项目中的应用 url传参的时候




//还原
JSON.parse()
```





### API

```

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
```



## 本地存储 



|          | localstorage | sessionstorage   | cookies          |
| -------- | ------------ | ---------------- | ---------------- |
| 大小     | 5m           | 5m               | 4kb              |
| 存储时长 | 永久         | 会话(标签页关闭) | max-age或session |
| api      | 有api        | 有api            | 自动携带 没有api |
|          | 前端         | 前端             | 服务器、前端     |
| 位置     | 硬盘         | 内存             | 内存             |



## BOM



### location

```
//跳转页面 h5也ok
location.assign("https://www.mozilla.org");
location = "https://www.mozilla.org";
//重新加载
location.reload();
```



### history





## DOM



### 正则表达式

```js
/^1([ab])$/
```

^开头

$结尾

()元组

$1锚点