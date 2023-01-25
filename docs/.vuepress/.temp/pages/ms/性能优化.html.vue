<template><div><h3 id="渲染优化" tabindex="-1"><a class="header-anchor" href="#渲染优化" aria-hidden="true">#</a> 渲染优化</h3>
<h3 id="回流重绘" tabindex="-1"><a class="header-anchor" href="#回流重绘" aria-hidden="true">#</a> 回流重绘</h3>
<p>尽量通过class统一修改样式</p>
<p>用transform属性开启GPU加速</p>
<p>将dom添加到documentFragment中集中修改</p>
<p>使用css3属性 will-change</p>
<p>用requestAnimationFrame代替定时器</p>
<p>用intersectionObserver判断dom在视口内</p>
<p>如何对大图加载进行优化</p>
<p>如果大图下载的很慢，加载的时候是一格一格加载的，给图片设定onload事件。使图片加载完成的时候再一次性加载。</p>
</div></template>


