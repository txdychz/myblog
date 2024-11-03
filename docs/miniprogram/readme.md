# 小程序修改radio默认样式

```
//
radio .wx-radio-input.wx-radio-input-checked {
  border-color: #0167ff !important;

  background: #0167ff !important;
}
//在radio选择器后面添加 --后面是自身定义在radio标签上的类名
radio.AForm--no .wx-radio-input.wx-radio-input-checked {
  border-color: #FF4E4E !important;

  background: #FF4E4E!important;
}
```



## 实现微信小程序预览图片

1.普通预览

```
wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
```

2.长按图片预览

```
<image >
```



## 实现小程序长按识别二维码

```
在image标签上添加该属性
show-menu-by-longpress="{{true}}"
```



## 小程序 修改按钮边框

```
button::after{
  border:none;
}
```

## H5、小程序预览文件(ppt、docx、xlsx)

```
//H5
使用iframe标签跳转到第三方在线预览工具 

<iframe class="iframe" 
	:src="'http://view.xdocin.com/xdoc?_xdoc='+
			filePath.excel" frameborder="0"></iframe>

```

## 小程序弹窗

```
<root-portal wx:if="{{show}}" enable="{{enable}}">
  <view class="popup" bindtap="close">
    <slot></slot>
  </view>
</root-portal>

.popup {
  position: fixed;
  bottom: 0;
 
  height: 100vh;
  z-index: 5000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  /* height: 200px; */
  background: rgba(51, 51, 51, 0.65);
  opacity: 1;
  transform: scale3d(1, 1, 1);
  transition: all .2s ease-in;
  pointer-events: auto;
}
```

