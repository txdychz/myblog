<template><div><h1 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3" aria-hidden="true">#</a> Vue3</h1>
<h2 id="和vue2的区别" tabindex="-1"><a class="header-anchor" href="#和vue2的区别" aria-hidden="true">#</a> 和vue2的区别</h2>
<h4 id="组合式-composition-api-optionapi" tabindex="-1"><a class="header-anchor" href="#组合式-composition-api-optionapi" aria-hidden="true">#</a> 组合式（composition）api，optionAPI</h4>
<p>组合式API功能代码和逻辑写在一起，使代码结构更加清晰，可以更容易地理解组件的逻辑。</p>
<p>optionAPI函数 将功能数据和逻辑分开声明</p>
<h4 id="v-for、v-if优先级" tabindex="-1"><a class="header-anchor" href="#v-for、v-if优先级" aria-hidden="true">#</a> v-for、v-if优先级</h4>
<p>vue3可以同时写，vue2 需要分开，或者用计算属性过滤处理</p>
<h3 id="一些组件实例api被废除" tabindex="-1"><a class="header-anchor" href="#一些组件实例api被废除" aria-hidden="true">#</a> 一些组件实例api被废除</h3>
<p>$on $off $set</p>
<h3 id="一些全局api被废除" tabindex="-1"><a class="header-anchor" href="#一些全局api被废除" aria-hidden="true">#</a> 一些全局api被废除</h3>
<p>filter</p>
<h4 id="生命周期钩子删除了beforecreate和created" tabindex="-1"><a class="header-anchor" href="#生命周期钩子删除了beforecreate和created" aria-hidden="true">#</a> 生命周期钩子删除了beforecreate和created</h4>
<h4 id="自定义指令用法-钩子名称不一样" tabindex="-1"><a class="header-anchor" href="#自定义指令用法-钩子名称不一样" aria-hidden="true">#</a> 自定义指令用法 钩子名称不一样</h4>
<h4 id="支持多个根节点" tabindex="-1"><a class="header-anchor" href="#支持多个根节点" aria-hidden="true">#</a> 支持多个根节点</h4>
<h4 id="新增了很多响应式方法" tabindex="-1"><a class="header-anchor" href="#新增了很多响应式方法" aria-hidden="true">#</a> 新增了很多响应式方法</h4>
<p>ref reactive  watch  watcheffect effect</p>
<h4 id="vue3使用ts写的-比vue2更支持typescript语法" tabindex="-1"><a class="header-anchor" href="#vue3使用ts写的-比vue2更支持typescript语法" aria-hidden="true">#</a> vue3使用ts写的，比vue2更支持typeScript语法</h4>
<p>vue2对ts支持还不够完善，组件的属性还要组件声明。</p>
<h4 id="性能更好了" tabindex="-1"><a class="header-anchor" href="#性能更好了" aria-hidden="true">#</a> 性能更好了</h4>
<p>treeshaking只加载用的api减少了打包体积，</p>
<p>性能更好的diff ，静态提升，只对比动态节点， 节点的静态属性不会再进入patch</p>
<h3 id="vue3的优化" tabindex="-1"><a class="header-anchor" href="#vue3的优化" aria-hidden="true">#</a> Vue3的优化</h3>
<p>在 Vue 2 的 diff 算法中，即使是静态节点的属性值是纯字符串不会发生改变，Vue 也会对这些静态属性进行比较。这是因为 Vue 2 的 diff 算法是基于逐层对比节点的方式实现的，对于每一个节点，Vue 都会对其包含的属性进行比较，包括静态属性。</p>
<p>在 Vue 3 中，对于纯字符串的静态属性，Vue 3 引入了一个新的优化策略，叫做“Patch Flag”。Patch Flag 是一个二进制标记，用于标识节点包含哪些属性需要进行比较，以及比较的方式。在 diff 算法的过程中，Vue 3 可以使用 Patch Flag 来快速比较两个节点的静态属性，避免不必要的计算，从而提高性能。</p>
<p>需要注意的是，Patch Flag 只适用于纯字符串的静态属性，对于非纯字符串的静态属性，Vue 3 仍需要对其进行完整的比较。另外，Patch Flag 的使用需要在编译阶段生成，并且需要在运行时进行处理，因此在一些场景下可能会有一定的额外开销。</p>
<p>总的来说，Vue 3 对静态节点的处理有了很多优化，包括 Block、Patch Flag、静态提升等，可以在一定程度上提高性能。不过，在实际应用中，具体的优化效果还需要根据具体情况进行评估和测试</p>
</div></template>


