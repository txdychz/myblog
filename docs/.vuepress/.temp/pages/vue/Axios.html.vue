<template><div><h1 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> axios</h1>
<h2 id="封装axios" tabindex="-1"><a class="header-anchor" href="#封装axios" aria-hidden="true">#</a> 封装Axios</h2>
<p>调用Axios.create</p>
<p>基本参数：baseUrl，timeout</p>
<p>根据业务需求的参数：header</p>
<p>上传文件需要给请求头设置对应的上传文件类型，默认是Json</p>
<p><code v-pre>上传表单，表单中不仅含数据还有文件，设置headers[&quot;Content-Type&quot;]</code>为<code v-pre>&quot;multipart/form-data&quot;</code>进行请求，如果要显示上传文件的进度条，则还要设置<code v-pre>onUploadProgress</code>属性</p>
<p>axios默认使用application/json的格式发送数据</p>
<p>post请求的三种方式</p>
<p>个人目前采用的是多axios实例+nginx配置的方式。
主要原因是项目有很多全局状态切换，但是不同后端接口需要的header不一样，需要多种请求拦截器和返回拦截器。
目前只封装2层，第一层 axios实例 catch的时候 固定返回一个 {code: 1, data: null }, 第二层，封装一下调用一下第一层，增加入参出参的type。偶尔补充特定东西。
具体是</p>
<ol>
<li>针对每一个后端接口模块（增删改查）独立写一个Api请求函数文件。</li>
<li>每个函数都写好入参出参 interface 还有枚举，并导出这些 interface 枚举。</li>
<li>错误处理非200时走拦截器逻辑，一般用，弹框提示、重定向、账号登出等处理方式。如果需要具体判断也可以将错误信息继续传递，并且补充一个返回一个默认的{code: 1, data: null }</li>
<li>错误处理200时的错误基本都是 data：null 或者 code 不是成功约定的值。一般这个业务判断在ts角度也是省不了的。反正我基本每个借口都要判断返回类型的。</li>
</ol>
</div></template>


