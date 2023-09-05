## 实现微信小程序预览图片

```
wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
```

## 实现小程序长按识别二维码

```
在image标签上添加该属性
show-menu-by-longpress="{{true}}"
```



## 小程序 按钮边框

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

