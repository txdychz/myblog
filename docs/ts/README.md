# TypeScript

### 类型注解

不直接赋值 需要给变量后面添加类型注解

### 类型推断

直接赋值。ts会根据值的类型推断变量的类型



## 语法

### type（类型）

定义类型别名

```
type 类型名 = {
属性名1:类型1
属性名2:类型2
方法名(): 返回值类型;
}
}
```



### interface（接口）

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

1.项目引入第三方库需要添加类型声明文件

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

### key of泛型属性读取

使用**key of**关键字

```
 del(target:T,key:keyof T){     
        this.value = this.value.filter((e:T)=>{
                e[key] == target[key]
        })
    }
```

### extends 对泛型进行约束

```
<T extends Object> 
```

表示泛型是对象  extends只能在<>内定义



### 可选参数  

```
interface name {
   arg?: function
}
```

可选参数类型为函数的时候需要进行断言，否则调用会报错	

```
name.arg!()
```

### 类型断言



```
//使用as
this.formData =  {} as T
//使用<>
<> this.formData
区别 as用在赋值右侧 <>任意地方
```



### class

```typescript
class className {
 private v  //定义私有变量

}
```



### typeof

根据已有对象创建该对象的类型，自动推断该对象属性的值类型，不推荐深层次的复杂类型

```

```

### Omit

从原有类型中去除指定属性生成新类型

```

interface UserObj {
    readonly name: string; // readonly 只读属性 只能初始化定义 不能二次赋值
    age: number;
    id: number;
    sex: 0 | 1;
    address: string;
    weight: number;
}
// 剔除省略自己不需要的
type Person = Omit<UserObj , "number" | "sex"  | "address" | "weight">;
//结果
interface Person {
    readonly name: string;
    id: number;
}
```

### Pick

从已有类型中选取属性生成新类型

```
// 剔除省略自己不需要的
type Person = Pick<UserObj , "number" | "sex"  | "address" | "weight">;
//结果
interface Person {
    readonly name: string;
    id: number;
}
```

### Partial

将原有对象的所有属性转为可选属性

```


```

### Required 



```

```



## 函数重载

```typescript
export function typeOf(target:any):string
export function typeOf(target:number,typeString:string):boolean

export function typeOf(target:any,typeString?:string):string|boolean{
    let type = typeOf(target)
    return typeString? type : type.indexOf(typeString as string)>-1
}
```





# typescript遇到的问题



![](C:\Users\byzha\Desktop\docs\myblog\docs\.vuepress\public\images\24.1.8-0.png)

deepclone方法要求参数继承object，虽然上面已经判断了是对象，但是编辑器无法识别，手动添加& object即可

