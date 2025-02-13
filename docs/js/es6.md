# ES6+

## let、const

新的声明变量关键字

### 共同点

1. 暂时性死区（变量不提升或着说提升了但没有初始化）
2. 不能重复声明
3. 都有块级作用域

#### 不同

const声明不可变的常量，且声明必须赋初始值

### 块级作用域

es6 开始有使用 const、function、class、let 块级作用域。

## for...of

用来遍历可迭代对象的值

**和for...in的区别**

for...in遍历任意对象，遍历的是对象的属性，for...of遍历可迭代对象遍历的是对象的值。

## 类

直接用标识符在类内部声明变量和函数

### 私有变量

只能在实例内部使用

在类的内部可以通过#去定义类的私有变量

```

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

```

### static 静态变量

通过 static 声明静态变量和方法



## Promise

### 什么是promise

promise是js异步编程的api，promise有pending，fullfill，rejected三种状态，且状态改变不可逆，其构造函数接受一个函数，函数有两个参数，用来改变promise的状态，该函数会在定义的时候同步执行。该函数抛出异常的时候，调用rejected的时候会reject，调用resolve的时候promise状态为fullfilled

### promise有什么用

主要解决了回调地狱的问题，另外传统回调函数的方式难以捕获异常。



### promise常用api

#### Promise.All

当所有promise都成功的时候返回成功的promise数组，

#### Promise.race

接受promise数组，返回的promise状态为promise数组最先完成状态

#### Promise.AllSettled

接收promise数组，当所有promise都执行完以后返回所有promise的结果

## Map

### 什么是Map

map是es6新增的数据结构，以键值对的方式操作数据，



### 和object的区别

object只能用字符串或symbol作为键，键的顺序是随机的，map则可以使用任意类型作为键，键的顺序是确定的（Map是有序的）

### API

```
get(k)//获取键的值

set(k,v)//添加键值对

has()  //判断键是否存在

size  //获取长度

delete()  //删除键值对

clear()   //清空map

keys()  //获取键的迭代器

entries  //获取键值对迭代器

values  //获取值的迭代器

forEAch() //遍历
```





### Map和object优劣

在查找速度上object更快

Map内存利用率更高，插入性能更好，删除性能也更好



## Set

### 什么是Set

Set是es6新出的一种有序集合类型，通过new构造函数创建set对象。并且集合元素具有唯一性 

### Api

```
Set.prototype.add()

Set.prototype.clear()

Set.prototype.delete()

Set.prototype.entries()

Set.prototype.forEach()

Set.prototype.has()

Set.prototype.keys()

Set.prototype.values()
```



## 扩展运算符

#### 对象扩展

#### 数组扩展

## 剩余参数

用来代替arguments的

```
function fn(...arg){
 
}
```

## Symbol

基本数据类型

## bigInt

基本数据类型，数值较大的整数



## WeakMap

弱映射，weakMap的key只能为object，且当object没有被引用的情况下，weakMap对应的value会被释放

## WeakSet

## Class

```javascript
class className {
    #age //私有变量
    name //普通变量
}
```

## 箭头函数

```
箭头函数没有this，或者说只继承外部作用域的this，并且不会被apply.call.bind三个方法改变
```

