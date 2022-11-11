<template><div><h1 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h1>
<h2 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h2>
<p>不允许用户创建实例，暴露一个实例给用户使用。
Pubsub</p>
<h2 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a> 观察者模式</h2>
<p>一对多</p>
<p>观察者模式有两个角色</p>
<p>Vue 响应式原理 观察者 Watcher 被观察者 dep</p>
<p>dep 有个 subscribe 队列， 将所有观察者添加到队列当中，依赖改变时通过 notify 通知所有观察者</p>
<h2 id="发布订阅模式" tabindex="-1"><a class="header-anchor" href="#发布订阅模式" aria-hidden="true">#</a> 发布订阅模式</h2>
<p>一对多</p>
<p>有三个角色，发布者，订阅者，调度中心</p>
<p>Vue 中的 $on $off ，pubsub.js,Promise 核心源码</p>
<p>订阅者注册一系列事件以及事件的回调函数</p>
<p>发布者触发该事件的所有回调</p>
<h2 id="装饰器模式" tabindex="-1"><a class="header-anchor" href="#装饰器模式" aria-hidden="true">#</a> 装饰器模式</h2>
<h2 id="代理模式" tabindex="-1"><a class="header-anchor" href="#代理模式" aria-hidden="true">#</a> 代理模式</h2>
<h2 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h2>
<p>提供一个环境对象去维护一系列的策略，根据传进来的对象的去动态决定使用对应的策略处理</p>
<h3 id="用途" tabindex="-1"><a class="header-anchor" href="#用途" aria-hidden="true">#</a> 用途</h3>
<p>封装动态表单
用 render 函数，</p>
</div></template>


