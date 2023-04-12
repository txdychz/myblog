<template><div><h1 id="异步编程" tabindex="-1"><a class="header-anchor" href="#异步编程" aria-hidden="true">#</a> 异步编程</h1>
<h5 id="_1-什么是异步" tabindex="-1"><a class="header-anchor" href="#_1-什么是异步" aria-hidden="true">#</a> 1.什么是异步？</h5>
<p>异步就是不阻塞主线程，代码交给其他线程执行</p>
<p>同步就是阻塞主线程，代码按顺序执行</p>
<ol>
<li>script(整体代码)</li>
<li>setTimeout</li>
<li>setInterval</li>
<li>setImmediate (Node.js 环境)</li>
<li>I/O 操作</li>
<li>UI 渲染</li>
<li>requestAnimationFrame</li>
<li>页面事件，如 DOMContentLoaded，load 等</li>
<li>postMessage</li>
<li>MessageChannel</li>
<li>Service Worker 生命周期事件</li>
<li>Web Worker 生命周期事件</li>
</ol>
</div></template>


