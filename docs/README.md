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

```
render:(h,params)=>{

	h('div', params+1)
}
```



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

![](/images/2023-01-26_02-29-56.jpg)



### 使用nvm切换node版本



下载前需要将之前的node卸载干净。



### Vue.config.errorHandler 怎么将错误暴露到 window.error 事件

可以在 Vue.config.errorHandler 中使用 window.dispatchEvent 方法来触发一个 "error" 事件，将错误对象作为参数传入。

```
Vue.config.errorHandler = function(err, vm, info) {
  window.dispatchEvent(new CustomEvent("error", { detail: err }));
};
```

然后在全局监听这个 error 事件

```
window.addEventListener("error", function(e) {
  console.log("Error: ", e.detail);
});
```

使用 Vue.config.errorHandler 来捕获错误时，会绕过 vue 的错误捕获机制，所以需要在这里重新实现对错误的处理



### 判断字符串的长度（包括表情）

可以使用 JavaScript 中的字符串方法 `length` 判断字符串长度。

但是，这种方法不能准确地统计表情字符的长度。因为表情字符通常由多个 Unicode 字符组成，而 `length` 方法只能统计单个字符的个数。

为了统计包括表情在内的字符串长度，可以使用**正则表达式**或其他**第三方库**string-width来计算。

```

```



## 2022 第三周

### 1.html（或当前页面部分内容）转PDF

html生成PDF有三种方案



1.前端截图 后端排版

2.前端截图 前端排版

先用html2Canvas将html文档转为canvas，再用

3.后端截图 后端排版

后端的事！

#### 

#### 2.前端解决方案

利用**html2Canvas**和**jspdf**库

以Vue2为例

```
//大小为A4纸
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

```

#### 3.后端解决方案 node

### 动态表单配置中心

也不能说做的多好吧

但是做完这个项目觉得自己会有所提升，后续项目结束的时候对它作一些复盘和总结，觉得自己有了一点点的小进步吧

有接到一个需求，前台项目的需求是左边是一个三级，右边是一整个大的表单，通过左边可以导航到不同的表单。

然后我记得一级菜单就有5、6个（行政、人事、财务），每个一级菜单都有4-6个二级菜单。

如果每一个表单都独立开发一个组件。那就要写30多个。那就有点amazing

这个通用表单配置中心是用来生成客户产品所对应的表单配置对象，

首先我们把表单抽象成一个对象，然后再把它的每一行也抽象成一个对象并保存到一个数组。。

首先要考虑生成表单项的基本参数：表单类型、表单(对应数据库)的字段、标题label、占位placeholder、长度

额外参数：输入类型、

关于表单校验的问题（）

1每个表单项对象都有一个属性存储校验规则



1如何将自定义校验函数保存为JSON对象

要校验是否为必填，可以直接通过一个状态来控制，但是有些数据的校验需要通过函数去实现的，需要保存到配置对象当中。

因为我们创建表单的配置对象以后要发请求给后端保存到数据库里，就要考虑JS对象转化为JSON。但是在对象转化为JSON的时候，不会处理函数，导致函数丢失变成undefined。

所以就要考虑怎么把函数存到数据库里

就是用

2 使用门槛 用户操作用户体验问题

这个系统面向客户，可能操作人员没有编程相关的知识，如果让他们写校验函数的话，这个使用门槛就会比较高。

所以我们还是要降低门槛



## 2023 第一周

### 1 滚动日期选择框bug

滚动选择日期的时候，立刻确定，选择的日期为上一次选择的日期。

原因：滚动还没结束或者滚动条还没停稳，滚动事件还没触发，选择框绑定的数据还未更新。

解决:  在点击选择框的时候给确定按钮枷锁，滚动结束的时候再解锁。

##### plus

当滑动事件有多个的时候，快速的选择年和月，年和月同时上锁，但年解锁的时候，月还没更新。导致月的数据丢失。

解决：使用debounce函数过滤多余的事件。

### 2 移动端输入框和模拟下拉框bug

用一个底部弹窗模拟滚动选择框，在input标签被点击的时候显示这个组件，但会默认拉起手机的软键盘。

解决：给input设置disabled

```


```

### 3 小程序发起微信支付，支付失败 并提示支付签名验证失败。

原因：后端生成的paySigin用的时间戳和前端发起支付的时间戳不一致。





## Element plus



## Dialog右上角关闭后无法打开

将Dialog封装到组件里，通过父组件控制Dialog的显示。右上角关闭后无法再次打开

**原因：**右上角关闭后，不论父组件的flag是否为true都会直接销毁Dialog组件，而父组件的值仍然为true，点击显示Dialog将数据变为true，不会触发页面更新。需要在关闭前的回调手动将父组件的数据设置为false



```
//Dialog组件
  <el-dialog
        v-model="prop.testData"
        title="Shipping address"
        :before-close="closeDialog">
  </el-dialog>
  
  function closeDialog(done) {
    //关闭表单的函数
    emit('closeDialog')
    done()
}
```

## Vue

虽然create中真实dom还没有挂载，但在create函数中也可以通过nexttick或者其他异步方式获取dom。





## 