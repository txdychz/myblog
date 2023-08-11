<template><div><h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h1>
<h2 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> Less</h2>
<h3 id="定义变量" tabindex="-1"><a class="header-anchor" href="#定义变量" aria-hidden="true">#</a> 定义变量</h3>
<p><strong>定义</strong> @变量名</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>@arg: xxx

sel{
 xxxx:@arg
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套语法" tabindex="-1"><a class="header-anchor" href="#嵌套语法" aria-hidden="true">#</a> 嵌套语法</h3>
<p>懂得都懂</p>
<h3 id="混入mixin" tabindex="-1"><a class="header-anchor" href="#混入mixin" aria-hidden="true">#</a> 混入mixin</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sel(){
  xxxx: xxxx;
}

xxxx{

	sel();

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sass" tabindex="-1"><a class="header-anchor" href="#sass" aria-hidden="true">#</a> Sass</h2>
<h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>$arg:xxxx

sel {
	xxx： arg；

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flex-布局" tabindex="-1"><a class="header-anchor" href="#flex-布局" aria-hidden="true">#</a> flex 布局</h2>
<p>设置了 display 为 flex 的元素称为 flex 容器，其所有子元素为项目</p>
<h3 id="容器属性" tabindex="-1"><a class="header-anchor" href="#容器属性" aria-hidden="true">#</a> 容器属性</h3>
<p>flex-direction
justify-content
aligin-items
aligin-content
flex-wrap
flex-flow</p>
<h3 id="项目属性" tabindex="-1"><a class="header-anchor" href="#项目属性" aria-hidden="true">#</a> 项目属性</h3>
<p>flex-basis
flex-shink
flex-grow</p>
<h2 id="z-index-失效" tabindex="-1"><a class="header-anchor" href="#z-index-失效" aria-hidden="true">#</a> z-index 失效</h2>
<p>z-index 属性在下列情况下会失效：</p>
<pre><code>父元素position为relative时，子元素的z-index失效。解决：父元素position改为absolute或static；
元素没有设置position属性为非static属性。解决：设置该元素的position属性为relative，absolute或是fixed中的一种；
元素在设置z-index的同时还设置了float浮动。解决：float去除，改为display：inline-block；
</code></pre>
<h2 id="单行文本省略" tabindex="-1"><a class="header-anchor" href="#单行文本省略" aria-hidden="true">#</a> 单行文本省略</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="letter-spacing" tabindex="-1"><a class="header-anchor" href="#letter-spacing" aria-hidden="true">#</a> letter-spacing</h2>
<p>文字间隔</p>
</div></template>


