# CSS

## Less

### 定义变量

**定义** @变量名

```
@arg: xxx

sel{
 xxxx:@arg
}
```

### 嵌套语法

懂得都懂

### 混入mixin

```
sel(){
  xxxx: xxxx;
}

xxxx{

	sel();

}

```



## Sass

### 变量

```
$arg:xxxx

sel {
	xxx： arg；

}
```



## flex 布局

设置了 display 为 flex 的元素称为 flex 容器，其所有子元素为项目

### 容器属性

flex-direction
justify-content
aligin-items
aligin-content
flex-wrap
flex-flow

### 项目属性

flex-basis 
flex-shink
flex-grow 

## z-index 失效

z-index 属性在特殊情况下会失效：



## flex布局多行多列，最后一行列数不确定

#### 子元素宽高不确定

```css
.flexMul{
 display:flex;
}
.flexMul::after{
 flex:1;
 content:"",
    
    
}


```

#### 子元素宽高确定

```
.flexMul{
 display:flex;
}
.flexItem{
margin-right:number;
width:width;
height:height;
margin-bottom:number;
}
.flexMul:nth-child()
```



## 单行文本省略

```css
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
```

## 多行文本省略

```css
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
```

## 标题前缀

```css
.title::before {
  position: absolute;
  content: "";
  height: 100%;
  background: rgba(0, 78, 162, 1);
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  width: 8rpx;
}
.title{
  position: relative;
  font-size: 32rpx;
  padding-left: 16rpx;
}
.top {
  font-weight: bold;
padding: 40rpx 30rpx;
}
```



## letter-spacing

文字间隔



## 右箭头

```css
	.arrow-right1 {
		position: relative;
		width: 0;
		height: 0;
		top: 0;
		left: 0rpx;/* 要变的*/
		border-top: 15rpx solid transparent;
		border-bottom: 15rpx solid transparent;
		border-left: 20rpx solid #999999;
		/* 要变的箭头颜色*/
	}

	.arrow-right::after {
		content: "";
		position: absolute;
		top: -11.5rpx;
		left: -20rpx;
		border-top: 11rpx solid transparent;
		border-bottom: 11rpx solid transparent;
		border-left: 15rpx solid #28A2FF;	/* 盒子背景色，要变的*/

	}
```

