# Vue2



## 什么是Vue

Vue是一个高效，易上手的渐进式Js框架，它的核心是声明式渲染和组件化编程



## 响应式原理

​	Vue响应式原理主要通过**数据代理**和**数据劫持**实现的。数据代理就是将Data的数据用object.definePrototype代理到Vm身上

object.definePrototype监听data对象给每一个属性添加get、set。然后再get里收集依赖，再set触发依赖。

### 缺点

无法劫持新增属性，战略性放弃了劫持数组下标的操作

### 收集依赖

主要依靠Dep对象

在遍历data中的key的时候



### 触发依赖



### Dep类

dep会在遍历key的时候创建，每一个属性对应一个key

为什么要有dep类？收集依赖，收集该属性被读取时的watcher

为什么他是一个数组？可能在不同的组件中使用



### watcher



## Vue首次渲染过程

### 编译compile=>静态标记=>generate生成

### render函数

Vue页面渲染的核心，如果有render函数，就用render函数，没有就用template模板或el的outerHtml。然后解析template生成render函数

### 虚拟Dom

虚拟Dom就是用Js对象来表示html中真实的标签，为了尽可能的复用旧节点，会利用dom比对算法，比较新旧虚拟dom的变化。尽可能复用不变的节点，只修改页面中变化的内容，为了减少更新的的粒度。在多次修改dom的时候页面只会将最终的dom渲染。



并且**虚拟dom可以跨平台**

#### createElement(context,data,tag,children)

vue中用来创建Vnode的函数，有三个重要的参数，上下文（组件），标签名，标签上的属性，子节点

在创建虚拟节点的时候，虚拟节点可能包含表达式，从上下文中读取表达式的值

从根节点开始，遇到子节点就作为children。

#### 组件Vnode和普通Vnode

创建Vnode的时候，会判断vnode的tag属性，如果时原生html标签名，就创建普通Vnode，如果不是html标签名，就在全局组件或局部组件中有没有该组件名，有的话就创建组件Vnode。然后后续会解析该组件的template，



# 用法

## 实例API

###  $watch

第一个参数可以是函数或属性路径

```
vm.$watch(
  function () {
    // 表达式 `this.a + this.b` 每次得出一个不同的结果时
    // 处理函数都会被调用。
    // 这就像监听一个未被定义的计算属性
    return this.a + this.b
  },
  function (newVal, oldVal) {
    // 做点什么
  }，
  {
  deep:true,
  }
)
```











## Vue2的缺陷

### 静态节点属性的diff

在 Vue 2 的 diff 算法中，即使是静态节点的属性值是纯字符串不会发生改变，Vue 也会对这些静态属性进行比较。这是因为 Vue 2 的 diff 算法是基于逐层对比节点的方式实现的，对于每一个节点，Vue 都会对其包含的属性进行比较，包括静态属性。

在 Vue 3 中，对于纯字符串的静态属性，Vue 3 引入了一个新的优化策略，叫做“Patch Flag”。Patch Flag 是一个二进制标记，用于标识节点包含哪些属性需要进行比较，以及比较的方式。在 diff 算法的过程中，Vue 3 可以使用 Patch Flag 来快速比较两个节点的静态属性，避免不必要的计算，从而提高性能。

需要注意的是，Patch Flag 只适用于纯字符串的静态属性，对于非纯字符串的静态属性，Vue 3 仍需要对其进行完整的比较。另外，Patch Flag 的使用需要在编译阶段生成，并且需要在运行时进行处理，因此在一些场景下可能会有一定的额外开销。

总的来说，Vue 3 对静态节点的处理有了很多优化，包括 Block、Patch Flag、静态提升等，可以在一定程度上提高性能。不过，在实际应用中，具体的优化效果还需要根据具体情况进行评估和测试



### 静态节点的patch

其实Vue2也有静态节点的概念，Vue渲染页面的流程分为三布，compile编译（模板）、optimize静态标记（静态标记）、generate生成（生成render函数），

最后会生成两种render函数，一个是我们熟悉的render函数， 另一个是staticRenderFns静态节点的render函数，它是一个数组。具体有什么用呢？其实就是当一个节点里没有{{}}表达式，没有v-if v-on v-model等Vue指令，不是组件、不是插槽、且子元素都是静态，那么他就会被认为是一个静态节点。如果一个组件内部既有动态节点，也有静态节点，那么静态节点在组件更新的时候还是会进行patch的

他有什么用呢?有 但是不多，





### v-bind=对象

