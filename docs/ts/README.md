# TypeScript

## 知识点

### 类型注解

不直接赋值 需要给变量后面添加类型注解

### 类型推断

直接赋值。ts会根据值的类型推断变量的类型



## type（类型）

定义类型别名

```
type 类型名 = {
属性名1:类型1
属性名2:类型2
方法名(): 返回值类型;
}
}
```



## interface（接口）

定义类型接口



```
interface 接口名 {

属性名1:类型1
属性名2:类型2
[属性名:属性名类型]:类型

}
```



## 类语法糖

类似 java 访问修饰符
pubilc 为实例添加一个实例属性并限定访问范围
private 为实例添加一个实例属性并限定访问范围,但更推荐使用原生的#修饰符

```

class Person {
  constructor(public name: string,private public age: number，) {}
}

const p = new Person('zby',13)
console.log(p.name) //'zby'
console.log(p.age)

```

## ts 装饰器

创建一个类

装饰器本质是一个函数
最好的使用方法就是利用高阶函数，返回的函数会接受参数，分别是类本身、属性名

先创建一个函数
然后通过@语法在声明类、属性和函数上使用装饰器

```
//用于接受参数
function decorator(arg){
  //真正的装饰器
  return function(target,propName){
    target[propName] = arg
}

}

class Person {
  @decorator('zby')
  public zby:string
  constructor(public name: string, public age: number) {}
}

```

## 模块声明

1,项目引入第三方库需要添加类型声明文件

```
npm i @types/xxxx -D
```

2.或者手动添加



```typescript
/types/xxxx.d.ts
declare module 'xxxx' {
    const content : any

    
   export = content
}
```



让vue3支持this.xxx，并支持类型推断

```
// main.ts
app.config.globalProperties.$axios = axios;
```



```
// global.d.ts
import { AxiosInstance } from 'axios'
declare module  '@vue/runtime-core' {
  
  // 给`this.$http`提供类型
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}
```

### for 循环中ts类型问题

```

```

