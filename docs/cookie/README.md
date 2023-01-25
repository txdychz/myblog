虽然没有什么用处，但是要说的上来



## SPA

### 什么是SPA

SPA（Single-Page-Application），即单页面应用，将网站的所有内容都放在一个页面，通过路由去控制页面显示的内容，页面内容加载完成以后，用户进行页面的跳转的时候，无需向服务器请求新的网页，进行网站的局部刷新。前端页面跳转的路由开始由前端控制，以此来减少请求，同时避免了浏览器的刷新。



### SPA优点

页面跳转无需发送请求，页面之间跳转相对更快 ，用户体验更好。减少服务器请求次数（页面跳转页面通信单页面应用都不需要发送请求），缓解服务器压力。

### SPA缺点

首屏加载速度较慢，且不利于SEO（因为只有一个空的html和一个script标签）

### SPA实现（原理）

#### 借助路由插件（vue-router,react-router）

##### hash路由

通过监听hashchange事件，监听url的hash值变化。



##### history路由

`history` 模式核心借用 `HTML5 history api`，`api` 提供了丰富的 `router` 相关属性先了解一个几个相关的api

- `history.pushState` 浏览器历史纪录添加记录
- `history.replaceState`修改浏览器历史纪录中当前纪录
- `history.popState` 当 `history` 发生变化时触发

通过监听window.popState事件，监听history变化

动态修改页面内容

### SPA如何做SEO

#### SSR服务端渲染

将组件或页面通过服务器生成html，再返回给浏览器，如`nuxt.js`

#### 静态化



## 