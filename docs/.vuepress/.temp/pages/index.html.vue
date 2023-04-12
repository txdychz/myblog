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
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>render:(h,params)=>{

	h('div', params+1)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iview-组件库导出-excel-问题" tabindex="-1"><a class="header-anchor" href="#iview-组件库导出-excel-问题" aria-hidden="true">#</a> iview 组件库导出 Excel 问题</h3>
<p>iview 自带的导出 csv 功能，但导出自定义插槽列的数据会丢失导致没有数据。</p>
<h2 id="_2022-第二周" tabindex="-1"><a class="header-anchor" href="#_2022-第二周" aria-hidden="true">#</a> 2022 第二周</h2>
<h3 id="使用meta标签实现纯html网页跳转" tabindex="-1"><a class="header-anchor" href="#使用meta标签实现纯html网页跳转" aria-hidden="true">#</a> 使用meta标签实现纯html网页跳转</h3>
<p>meta标签有个<strong>http-equiv</strong>属性，使用http-equiv=&quot;refresh&quot;， 然后content=&quot;时间&quot;，时间以秒为单位，表示每隔多少秒之后自动刷新该页面一次；</p>
<p>eg:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//5秒之后刷新本页面 
&lt;meta http-equiv="refresh" content="5" /> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//5秒之后跳转到指定页面(以百度为例)
eta http-equiv="refresh" content="5;url=http://www.baidu.com" /> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="微信登录的实现" tabindex="-1"><a class="header-anchor" href="#微信登录的实现" aria-hidden="true">#</a> 微信登录的实现</h3>
<p>使用iframe内嵌微信的登录页面，src的值为后端给的微信登录url</p>
<p><img src="/images/2023-01-26_02-29-56.jpg" alt=""></p>
<h3 id="使用nvm切换node版本" tabindex="-1"><a class="header-anchor" href="#使用nvm切换node版本" aria-hidden="true">#</a> 使用nvm切换node版本</h3>
<p>下载前需要将之前的node卸载干净。</p>
<h3 id="vue-config-errorhandler-怎么将错误暴露到-window-error-事件" tabindex="-1"><a class="header-anchor" href="#vue-config-errorhandler-怎么将错误暴露到-window-error-事件" aria-hidden="true">#</a> Vue.config.errorHandler 怎么将错误暴露到 window.error 事件</h3>
<p>可以在 Vue.config.errorHandler 中使用 window.dispatchEvent 方法来触发一个 &quot;error&quot; 事件，将错误对象作为参数传入。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Vue.config.errorHandler = function(err, vm, info) {
  window.dispatchEvent(new CustomEvent("error", { detail: err }));
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在全局监听这个 error 事件</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>window.addEventListener("error", function(e) {
  console.log("Error: ", e.detail);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 Vue.config.errorHandler 来捕获错误时，会绕过 vue 的错误捕获机制，所以需要在这里重新实现对错误的处理</p>
<h3 id="判断字符串的长度-包括表情" tabindex="-1"><a class="header-anchor" href="#判断字符串的长度-包括表情" aria-hidden="true">#</a> 判断字符串的长度（包括表情）</h3>
<p>可以使用 JavaScript 中的字符串方法 <code v-pre>length</code> 判断字符串长度。</p>
<p>但是，这种方法不能准确地统计表情字符的长度。因为表情字符通常由多个 Unicode 字符组成，而 <code v-pre>length</code> 方法只能统计单个字符的个数。</p>
<p>为了统计包括表情在内的字符串长度，可以使用<strong>正则表达式</strong>或其他<strong>第三方库</strong>string-width来计算。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2022-第三周" tabindex="-1"><a class="header-anchor" href="#_2022-第三周" aria-hidden="true">#</a> 2022 第三周</h2>
<h3 id="_1-html-或当前页面部分内容-转pdf" tabindex="-1"><a class="header-anchor" href="#_1-html-或当前页面部分内容-转pdf" aria-hidden="true">#</a> 1.html（或当前页面部分内容）转PDF</h3>
<p>html生成PDF有三种方案</p>
<p>1.前端截图 后端排版</p>
<p>2.前端截图 前端排版</p>
<p>先用html2Canvas将html文档转为canvas，再用</p>
<p>3.后端截图 后端排版</p>
<p>后端的事！</p>
<h4 id="_2-前端解决方案" tabindex="-1"><a class="header-anchor" href="#_2-前端解决方案" aria-hidden="true">#</a> 2.前端解决方案</h4>
<p>利用<strong>html2Canvas</strong>和<strong>jspdf</strong>库</p>
<p>以Vue2为例</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//大小为A4纸
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default {
    install(Vue, option) {
        Vue.prototype.htmlToCanvas = async (selector, title) => {
            console.log(selector)
            let element = selector
            if (typeof selector == 'string') {
                element = document.querySelector(selector)
            }
            // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高

            const canvas = await html2Canvas(element)
            const PDF = new JsPDF('', 'pt', 'a4')
            const DataURL = canvas.toDataURL('image/jpeg', 1.0)
            const [w, h] = [canvas.width, canvas.height]

            const imgWidth = 595.28
            const imgHeight = (592.28 / w) * h
            console.log(w, h)
            PDF.addImage(DataURL, 'JPEG', 0, 0, imgWidth, imgHeight)
            PDF.save(title + '.pdf')
            return [canvas, DataURL]
        }
    },
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态表单配置中心" tabindex="-1"><a class="header-anchor" href="#动态表单配置中心" aria-hidden="true">#</a> 动态表单配置中心</h3>
<p>也不能说做的多好吧</p>
<p>但是做完这个项目觉得自己会有所提升，后续项目结束的时候对它作一些复盘和总结，觉得自己有了一点点的小进步吧</p>
<p>有接到一个需求，前台项目的需求是左边是一个三级，右边是一整个大的表单，通过左边可以导航到不同的表单。</p>
<p>然后我记得一级菜单就有5、6个（行政、人事、财务），每个一级菜单都有4-6个二级菜单。</p>
<p>如果每一个表单都独立开发一个组件。那就要写30多个。那就有点amazing</p>
<p>这个通用表单配置中心是用来生成客户产品所对应的表单配置对象，</p>
<p>首先我们把表单抽象成一个对象，然后再把它的每一行也抽象成一个对象并保存到一个数组。。</p>
<p>首先要考虑生成表单项的基本参数：表单类型、表单(对应数据库)的字段、标题label、占位placeholder、长度</p>
<p>额外参数：输入类型、</p>
<p>关于表单校验的问题（）</p>
<p>1每个表单项对象都有一个属性存储校验规则</p>
<p>1如何将自定义校验函数保存为JSON对象</p>
<p>要校验是否为必填，可以直接通过一个状态来控制，但是有些数据的校验需要通过函数去实现的，需要保存到配置对象当中。</p>
<p>因为我们创建表单的配置对象以后要发请求给后端保存到数据库里，就要考虑JS对象转化为JSON。但是在对象转化为JSON的时候，不会处理函数，导致函数丢失变成undefined。</p>
<p>所以就要考虑怎么把函数存到数据库里</p>
<p>就是用</p>
<p>2 使用门槛 用户操作用户体验问题</p>
<p>这个系统面向客户，可能操作人员没有编程相关的知识，如果让他们写校验函数的话，这个使用门槛就会比较高。</p>
<p>所以我们还是要降低门槛</p>
<h3 id="后端解决方案-node" tabindex="-1"><a class="header-anchor" href="#后端解决方案-node" aria-hidden="true">#</a> 后端解决方案 node</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="element-plus" tabindex="-1"><a class="header-anchor" href="#element-plus" aria-hidden="true">#</a> Element plus</h2>
<h2 id="dialog右上角关闭后无法打开" tabindex="-1"><a class="header-anchor" href="#dialog右上角关闭后无法打开" aria-hidden="true">#</a> Dialog右上角关闭后无法打开</h2>
<p>将Dialog封装到组件里，通过父组件控制Dialog的显示。右上角关闭后无法再次打开</p>
<p>**原因：**右上角关闭后，不论父组件的flag是否为true都会直接销毁Dialog组件，而父组件的值仍然为true，点击显示Dialog将数据变为true，不会触发页面更新。需要在关闭前的回调手动将父组件的数据设置为false</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//Dialog组件
  &lt;el-dialog
        v-model="prop.testData"
        title="Shipping address"
        :before-close="closeDialog">
  &lt;/el-dialog>
  
  function closeDialog(done) {
    //关闭表单的函数
    emit('closeDialog')
    done()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h2>
<p>虽然create中真实dom还没有挂载，但在create函数中也可以通过nexttick或者其他异步方式获取dom。</p>
</div></template>


