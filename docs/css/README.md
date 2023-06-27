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
flex

## z-index 失效

z-index 属性在下列情况下会失效：

    父元素position为relative时，子元素的z-index失效。解决：父元素position改为absolute或static；
    元素没有设置position属性为非static属性。解决：设置该元素的position属性为relative，absolute或是fixed中的一种；
    元素在设置z-index的同时还设置了float浮动。解决：float去除，改为display：inline-block；

## 单行文本省略

```
text-
```

