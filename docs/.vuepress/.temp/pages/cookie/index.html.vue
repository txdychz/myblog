<template><div><p>虽然没有什么用处，但是要说的上来</p>
<h2 id="spa" tabindex="-1"><a class="header-anchor" href="#spa" aria-hidden="true">#</a> SPA</h2>
<h3 id="什么是spa" tabindex="-1"><a class="header-anchor" href="#什么是spa" aria-hidden="true">#</a> 什么是SPA</h3>
<p>SPA（Single-Page-Application），即单页面应用，将网站的所有内容都放在一个页面，通过路由去控制页面显示的内容，页面内容加载完成以后，用户进行页面的跳转的时候，无需向服务器请求新的网页，进行网站的局部刷新。</p>
<h3 id="spa优点" tabindex="-1"><a class="header-anchor" href="#spa优点" aria-hidden="true">#</a> SPA优点</h3>
<p>页面跳转无需发送请求，页面之间跳转相对更快 ，用户体验更好。减少服务器请求次数（页面跳转页面通信单页面应用都不需要发送请求），缓解服务器压力。</p>
<h3 id="spa缺点" tabindex="-1"><a class="header-anchor" href="#spa缺点" aria-hidden="true">#</a> SPA缺点</h3>
<p>首屏加载速度较慢，且不利于SEO（因为只有一个空的html和一个script标签）</p>
<h3 id="spa实现-原理" tabindex="-1"><a class="header-anchor" href="#spa实现-原理" aria-hidden="true">#</a> SPA实现（原理）</h3>
<h4 id="借助路由插件-vue-router-react-router" tabindex="-1"><a class="header-anchor" href="#借助路由插件-vue-router-react-router" aria-hidden="true">#</a> 借助路由插件（vue-router,react-router）</h4>
<h5 id="hash路由" tabindex="-1"><a class="header-anchor" href="#hash路由" aria-hidden="true">#</a> hash路由</h5>
<p>通过监听hashchange事件，监听url的hash值变化。</p>
<h5 id="history路由" tabindex="-1"><a class="header-anchor" href="#history路由" aria-hidden="true">#</a> history路由</h5>
<p><code v-pre>history</code> 模式核心借用 <code v-pre>HTML5 history api</code>，<code v-pre>api</code> 提供了丰富的 <code v-pre>router</code> 相关属性先了解一个几个相关的api</p>
<ul>
<li><code v-pre>history.pushState</code> 浏览器历史纪录添加记录</li>
<li><code v-pre>history.replaceState</code>修改浏览器历史纪录中当前纪录</li>
<li><code v-pre>history.popState</code> 当 <code v-pre>history</code> 发生变化时触发</li>
</ul>
<p>通过监听window.popState事件，监听history变化</p>
<p>动态修改页面内容</p>
<h3 id="spa如何做seo" tabindex="-1"><a class="header-anchor" href="#spa如何做seo" aria-hidden="true">#</a> SPA如何做SEO</h3>
<h4 id="ssr服务端渲染" tabindex="-1"><a class="header-anchor" href="#ssr服务端渲染" aria-hidden="true">#</a> SSR服务端渲染</h4>
<p>将组件或页面通过服务器生成html，再返回给浏览器，如<code v-pre>nuxt.js</code></p>
<h4 id="静态化" tabindex="-1"><a class="header-anchor" href="#静态化" aria-hidden="true">#</a> 静态化</h4>
</div></template>


