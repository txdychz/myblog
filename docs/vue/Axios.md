# axios



## 封装Axios

调用Axios.create

基本参数：baseUrl，timeout

根据业务需求的参数：header

上传文件需要给请求头设置对应的上传文件类型，默认是Json

`上传表单，表单中不仅含数据还有文件，设置headers["Content-Type"]`为`"multipart/form-data"`进行请求，如果要显示上传文件的进度条，则还要设置`onUploadProgress`属性



axios默认使用application/json的格式发送数据

post请求的三种方式



个人目前采用的是多axios实例+nginx配置的方式。
主要原因是项目有很多全局状态切换，但是不同后端接口需要的header不一样，需要多种请求拦截器和返回拦截器。
目前只封装2层，第一层 axios实例 catch的时候 固定返回一个 {code: 1, data: null }, 第二层，封装一下调用一下第一层，增加入参出参的type。偶尔补充特定东西。
具体是

1. 针对每一个后端接口模块（增删改查）独立写一个Api请求函数文件。
2. 每个函数都写好入参出参 interface 还有枚举，并导出这些 interface 枚举。
3. 错误处理非200时走拦截器逻辑，一般用，弹框提示、重定向、账号登出等处理方式。如果需要具体判断也可以将错误信息继续传递，并且补充一个返回一个默认的{code: 1, data: null }
4. 错误处理200时的错误基本都是 data：null 或者 code 不是成功约定的值。一般这个业务判断在ts角度也是省不了的。反正我基本每个借口都要判断返回类型的。