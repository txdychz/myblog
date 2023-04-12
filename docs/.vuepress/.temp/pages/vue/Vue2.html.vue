<template><div><h1 id="vue2" tabindex="-1"><a class="header-anchor" href="#vue2" aria-hidden="true">#</a> Vue2</h1>
<h2 id="什么是vue" tabindex="-1"><a class="header-anchor" href="#什么是vue" aria-hidden="true">#</a> 什么是Vue</h2>
<p>Vue是一个高效，易上手的渐进式Js框架，它的核心是声明式渲染和组件化编程</p>
<h2 id="响应式原理" tabindex="-1"><a class="header-anchor" href="#响应式原理" aria-hidden="true">#</a> 响应式原理</h2>
<p>​	Vue响应式原理主要通过<strong>数据代理</strong>和<strong>数据劫持</strong>实现的。数据代理就是将Data的数据用object.definePrototype代理到Vm身上</p>
<p>object.definePrototype监听data对象给每一个属性添加get、set。然后再get里收集依赖，再set触发依赖。</p>
<h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3>
<p>无法劫持新增属性，战略性放弃了劫持数组下标的操作</p>
<h3 id="收集依赖" tabindex="-1"><a class="header-anchor" href="#收集依赖" aria-hidden="true">#</a> 收集依赖</h3>
<p>主要依靠Dep对象</p>
<p>在遍历data中的key的时候</p>
<h3 id="触发依赖" tabindex="-1"><a class="header-anchor" href="#触发依赖" aria-hidden="true">#</a> 触发依赖</h3>
<h3 id="dep类" tabindex="-1"><a class="header-anchor" href="#dep类" aria-hidden="true">#</a> Dep类</h3>
<p>dep会在遍历key的时候创建，每一个属性对应一个key</p>
<p>为什么要有dep类？收集依赖，收集该属性被读取时的watcher</p>
<p>为什么他是一个数组？可能在不同的组件中使用</p>
<h3 id="watcher" tabindex="-1"><a class="header-anchor" href="#watcher" aria-hidden="true">#</a> watcher</h3>
<h2 id="vue首次渲染过程" tabindex="-1"><a class="header-anchor" href="#vue首次渲染过程" aria-hidden="true">#</a> Vue首次渲染过程</h2>
<h3 id="编译compile-静态标记-generate生成" tabindex="-1"><a class="header-anchor" href="#编译compile-静态标记-generate生成" aria-hidden="true">#</a> 编译compile=&gt;静态标记=&gt;generate生成</h3>
<h3 id="render函数" tabindex="-1"><a class="header-anchor" href="#render函数" aria-hidden="true">#</a> render函数</h3>
<p>Vue页面渲染的核心，如果有render函数，就用render函数，没有就用template模板或el的outerHtml。然后解析template生成render函数</p>
<h3 id="虚拟dom" tabindex="-1"><a class="header-anchor" href="#虚拟dom" aria-hidden="true">#</a> 虚拟Dom</h3>
<p>虚拟Dom就是用Js对象来表示html中真实的标签，为了尽可能的复用旧节点，会利用dom比对算法，比较新旧虚拟dom的变化。尽可能复用不变的节点，只修改页面中变化的内容，为了减少更新的的粒度。在多次修改dom的时候页面只会将最终的dom渲染。</p>
<p>并且<strong>虚拟dom可以跨平台</strong></p>
<h4 id="createelement-context-data-tag-children" tabindex="-1"><a class="header-anchor" href="#createelement-context-data-tag-children" aria-hidden="true">#</a> createElement(context,data,tag,children)</h4>
<p>vue中用来创建Vnode的函数，有三个重要的参数，上下文（组件），标签名，标签上的属性，子节点</p>
<p>在创建虚拟节点的时候，虚拟节点可能包含表达式，从上下文中读取表达式的值</p>
<p>从根节点开始，遇到子节点就作为children。</p>
<h4 id="组件vnode和普通vnode" tabindex="-1"><a class="header-anchor" href="#组件vnode和普通vnode" aria-hidden="true">#</a> 组件Vnode和普通Vnode</h4>
<p>创建Vnode的时候，会判断vnode的tag属性，如果时原生html标签名，就创建普通Vnode，如果不是html标签名，就在全局组件或局部组件中有没有该组件名，有的话就创建组件Vnode。然后后续会解析该组件的template，</p>
<h1 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h1>
<h2 id="实例api" tabindex="-1"><a class="header-anchor" href="#实例api" aria-hidden="true">#</a> 实例API</h2>
<h3 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> $watch</h3>
<p>第一个参数可以是函数或属性路径</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>vm.$watch(
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue2的缺陷" tabindex="-1"><a class="header-anchor" href="#vue2的缺陷" aria-hidden="true">#</a> Vue2的缺陷</h2>
<h3 id="静态节点属性的diff" tabindex="-1"><a class="header-anchor" href="#静态节点属性的diff" aria-hidden="true">#</a> 静态节点属性的diff</h3>
<p>在 Vue 2 的 diff 算法中，即使是静态节点的属性值是纯字符串不会发生改变，Vue 也会对这些静态属性进行比较。这是因为 Vue 2 的 diff 算法是基于逐层对比节点的方式实现的，对于每一个节点，Vue 都会对其包含的属性进行比较，包括静态属性。</p>
<p>在 Vue 3 中，对于纯字符串的静态属性，Vue 3 引入了一个新的优化策略，叫做“Patch Flag”。Patch Flag 是一个二进制标记，用于标识节点包含哪些属性需要进行比较，以及比较的方式。在 diff 算法的过程中，Vue 3 可以使用 Patch Flag 来快速比较两个节点的静态属性，避免不必要的计算，从而提高性能。</p>
<p>需要注意的是，Patch Flag 只适用于纯字符串的静态属性，对于非纯字符串的静态属性，Vue 3 仍需要对其进行完整的比较。另外，Patch Flag 的使用需要在编译阶段生成，并且需要在运行时进行处理，因此在一些场景下可能会有一定的额外开销。</p>
<p>总的来说，Vue 3 对静态节点的处理有了很多优化，包括 Block、Patch Flag、静态提升等，可以在一定程度上提高性能。不过，在实际应用中，具体的优化效果还需要根据具体情况进行评估和测试</p>
<h3 id="静态节点的patch" tabindex="-1"><a class="header-anchor" href="#静态节点的patch" aria-hidden="true">#</a> 静态节点的patch</h3>
<p>其实Vue2也有静态节点的概念，Vue渲染页面的流程分为三布，compile编译（模板）、optimize静态标记（静态标记）、generate生成（生成render函数），</p>
<p>最后会生成两种render函数，一个是我们熟悉的render函数， 另一个是staticRenderFns静态节点的render函数，它是一个数组。具体有什么用呢？其实就是当一个节点里没有{{}}表达式，没有v-if v-on v-model等Vue指令，不是组件、不是插槽、且子元素都是静态，那么他就会被认为是一个静态节点。如果一个组件内部既有动态节点，也有静态节点，那么静态节点在组件更新的时候还是会进行patch的</p>
<p>他有什么用呢?有 但是不多，</p>
<h3 id="v-bind-对象" tabindex="-1"><a class="header-anchor" href="#v-bind-对象" aria-hidden="true">#</a> v-bind=对象</h3>
</div></template>


