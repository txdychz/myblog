实现微信小程序预览图片

```
wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
```

实现小程序长按识别二维码

```
在image标签上添加该属性
show-menu-by-longpress="{{true}}"
```

