<template><div><h1 id="技术日常" tabindex="-1"><a class="header-anchor" href="#技术日常" aria-hidden="true">#</a> 技术日常</h1>
<h2 id="_2022-第一周" tabindex="-1"><a class="header-anchor" href="#_2022-第一周" aria-hidden="true">#</a> 2022 第一周</h2>
<h3 id="快速创建递增数组" tabindex="-1"><a class="header-anchor" href="#快速创建递增数组" aria-hidden="true">#</a> 快速创建递增数组</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Array.from({length:100},(_, i)=>1+(i))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="axios-取消请求方式" tabindex="-1"><a class="header-anchor" href="#axios-取消请求方式" aria-hidden="true">#</a> axios 取消请求方式</h3>
<p>本质上消息已经发出去了，只是不接收。
在请求拦截器中记录每一个发出去的请求，用 map 将 map 和取消请求的函数做一个映射表
在响应拦截器中把已经响应的请求从 map 中移出
当进行路由跳转的时候，还在 map 中的请求就是没响应的请求，统统取消掉</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // executor 函数接收一个 cancel 函数作为参数
    cancel = c;
  })
});

// 取消请求
cancel();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iview-组件库-表格组件单元格错位-bug" tabindex="-1"><a class="header-anchor" href="#iview-组件库-表格组件单元格错位-bug" aria-hidden="true">#</a> iView 组件库 表格组件单元格错位 bug</h3>
<p>小坑，iview 的 table 组件在表格数据超过表格高度的时出现滚动条，fixed 定位的单元格会错位</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// 解决iview右定位错行问题
/deep/.ivu-table {
 position: relative;
 .tableSlotRight {
  position: sticky;
  right: 0;
  .ivu-table-cell {
   border-left: 1px solid #e8eaec;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
  }
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iview-表格组件-改变排序后-原生序号递增-bug" tabindex="-1"><a class="header-anchor" href="#iview-表格组件-改变排序后-原生序号递增-bug" aria-hidden="true">#</a> iView 表格组件，改变排序后，原生序号递增 bug</h3>
<p>删除 type:'index'，自己实现排序</p>
<p>render:(h,params)=&gt;{</p>
<p>h('div', params+1)
}</p>
<h3 id="iview-组件库导出-excel-问题" tabindex="-1"><a class="header-anchor" href="#iview-组件库导出-excel-问题" aria-hidden="true">#</a> iview 组件库导出 Excel 问题</h3>
<p>iview 自带的导出 csv 功能，但导出自定义插槽列的数据会丢失导致没有数据。</p>
<h2 id="_2022-第二周" tabindex="-1"><a class="header-anchor" href="#_2022-第二周" aria-hidden="true">#</a> 2022 第二周</h2>
<h3 id="使用meta标签实现纯html网页跳转" tabindex="-1"><a class="header-anchor" href="#使用meta标签实现纯html网页跳转" aria-hidden="true">#</a> 使用meta标签实现纯html网页跳转</h3>
<p>meta标签有个<strong>http-equiv</strong>属性，使用http-equiv=&quot;refresh&quot;， 然后content=&quot;时间&quot;，时间以秒为单位，表示每隔多少秒之后自动刷新该页面一次；</p>
<p>eg:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//5秒之后刷新本页面 
&lt;meta http-equiv="refresh" content="5" /> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//5秒之后跳转到指定页面(以百度为例)
eta http-equiv="refresh" content="5;url=http://www.baidu.com" /> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


