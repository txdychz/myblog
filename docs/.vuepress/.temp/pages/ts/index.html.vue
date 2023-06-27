<template><div><h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h1>
<h2 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h2>
<h3 id="类型注解" tabindex="-1"><a class="header-anchor" href="#类型注解" aria-hidden="true">#</a> 类型注解</h3>
<p>不直接赋值 需要给变量后面添加类型注解</p>
<h3 id="类型推断" tabindex="-1"><a class="header-anchor" href="#类型推断" aria-hidden="true">#</a> 类型推断</h3>
<p>直接赋值。ts会根据值的类型推断变量的类型</p>
<h2 id="type-类型" tabindex="-1"><a class="header-anchor" href="#type-类型" aria-hidden="true">#</a> type（类型）</h2>
<p>定义类型别名</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>type 类型名 = {
属性名1:类型1
属性名2:类型2
方法名(): 返回值类型;
}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="interface-接口" tabindex="-1"><a class="header-anchor" href="#interface-接口" aria-hidden="true">#</a> interface（接口）</h2>
<p>定义类型接口</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>interface 接口名 {

属性名1:类型1
属性名2:类型2
[属性名:属性名类型]:类型

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类语法糖" tabindex="-1"><a class="header-anchor" href="#类语法糖" aria-hidden="true">#</a> 类语法糖</h2>
<p>类似 java 访问修饰符
pubilc 为实例添加一个实例属性并限定访问范围
private 为实例添加一个实例属性并限定访问范围,但更推荐使用原生的#修饰符</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
class Person {
  constructor(public name: string,private public age: number，) {}
}

const p = new Person('zby',13)
console.log(p.name) //'zby'
console.log(p.age)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ts-装饰器" tabindex="-1"><a class="header-anchor" href="#ts-装饰器" aria-hidden="true">#</a> ts 装饰器</h2>
<p>创建一个类</p>
<p>装饰器本质是一个函数
最好的使用方法就是利用高阶函数，返回的函数会接受参数，分别是类本身、属性名</p>
<p>先创建一个函数
然后通过@语法在声明类、属性和函数上使用装饰器</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>//用于接受参数
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块声明" tabindex="-1"><a class="header-anchor" href="#模块声明" aria-hidden="true">#</a> 模块声明</h2>
<p>1,项目引入第三方库需要添加类型声明文件</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm i @types/xxxx -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.或者手动添加</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token operator">/</span>types<span class="token operator">/</span>xxxx<span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">'xxxx'</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> content <span class="token operator">:</span> <span class="token builtin">any</span>

    
   <span class="token keyword">export</span> <span class="token operator">=</span> content
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让vue3支持this.xxx，并支持类型推断</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// main.ts
app.config.globalProperties.$axios = axios;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// global.d.ts
import { AxiosInstance } from 'axios'
declare module  '@vue/runtime-core' {
  
  // 给`this.$http`提供类型
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


