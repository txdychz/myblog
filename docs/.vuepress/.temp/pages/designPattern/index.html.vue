<template><div><h1 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h1>
<h2 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h2>
<p>不允许用户创建实例，暴露一个实例给用户使用。</p>
<h3 id="应用-pubsub-源码-模态框" tabindex="-1"><a class="header-anchor" href="#应用-pubsub-源码-模态框" aria-hidden="true">#</a> 应用 Pubsub 源码，模态框</h3>
<h2 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a> 观察者模式</h2>
<p>一对多</p>
<p>观察者模式有两个角色</p>
<p>观察者 Watcher 被观察者 dep</p>
<p>dep 有个 subscribe 队列， 将所有观察者添加到队列当中，依赖改变时通过 notify 通知所有观察者</p>
<h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h3>
<p>vue 的响应式原理</p>
<h2 id="发布订阅模式" tabindex="-1"><a class="header-anchor" href="#发布订阅模式" aria-hidden="true">#</a> 发布订阅模式</h2>
<p>一对多</p>
<p>有三个角色，发布者，订阅者，调度中心</p>
<p>订阅者注册一系列事件以及事件的回调函数</p>
<p>发布者触发该事件的所有回调</p>
<h3 id="应用-1" tabindex="-1"><a class="header-anchor" href="#应用-1" aria-hidden="true">#</a> 应用</h3>
<p>Vue 中的 $on $off ，pubsub.js,Promise 核心源码，addEventListener</p>
<h2 id="装饰器模式" tabindex="-1"><a class="header-anchor" href="#装饰器模式" aria-hidden="true">#</a> 装饰器模式</h2>
<p>实现多态</p>
<h2 id="代理模式" tabindex="-1"><a class="header-anchor" href="#代理模式" aria-hidden="true">#</a> 代理模式</h2>
<h2 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h2>
<p>将代码的具体实现封装成一个个策略。
提供一个环境对象去维护一系列的策略，根据传进来的参数的去动态决定使用对应的策略处理。</p>
<h3 id="用途" tabindex="-1"><a class="header-anchor" href="#用途" aria-hidden="true">#</a> 用途</h3>
<p>封装动态表单组件
我们通过遍历 json 数据，生成每一行的渲染内容，封装一个 renderRows 函数，当数组的元素为一个以上的时候，我们将表单输入框的长度除以数据数组的长度，
renderRows 函数接受每一行的数据，然后遍历每一行的数据传给 rednerCol 函数，生成每一列的数据，renderCol 函数根据数据去调用策略函数去生成表单元素。</p>
</div></template>


