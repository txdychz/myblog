# 技术日常

## 2022 第一周

### 快速创建递增数组

```
Array.from({length:100},(_, i)=>1+(i))
```

### axios 取消请求方式

本质上消息已经发出去了，只是不接收。
在请求拦截器中记录每一个发出去的请求，用 map 将 map 和取消请求的函数做一个映射表
在响应拦截器中把已经响应的请求从 map 中移出
当进行路由跳转的时候，还在 map 中的请求就是没响应的请求，统统取消掉

```
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // executor 函数接收一个 cancel 函数作为参数
    cancel = c;
  })
});

// 取消请求
cancel();
```

### iView 组件库 表格组件单元格错位 bug

小坑，iview 的 table 组件在表格数据超过表格高度的时出现滚动条，fixed 定位的单元格会错位

```
// 解决iview右定位错行问题
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
```

### iView 表格组件，改变排序后，原生序号递增 bug

删除 type:'index'，自己实现排序

render:(h,params)=>{

h('div', params+1)
}

### iview 组件库导出 Excel 问题

iview 自带的导出 csv 功能，但导出自定义插槽列的数据会丢失导致没有数据。

## 2022 第二周

### 使用meta标签实现纯html网页跳转

meta标签有个**http-equiv**属性，使用http-equiv="refresh"， 然后content="时间"，时间以秒为单位，表示每隔多少秒之后自动刷新该页面一次；

eg:

```
//5秒之后刷新本页面 
<meta http-equiv="refresh" content="5" /> 
```

```
//5秒之后跳转到指定页面(以百度为例)
eta http-equiv="refresh" content="5;url=http://www.baidu.com" /> 
```



### 微信登录的实现



使用iframe内嵌微信的登录页面，src的值为后端给的微信登录url

![](D:\Blog\myblog\docs\.vuepress\public\images\2023-01-26_02-29-56.jpg)