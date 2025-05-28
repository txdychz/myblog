# Vue3





## 和vue2的区别



#### 组合式（composition）api，optionAPI

组合式API功能代码和逻辑写在一起，使代码结构更加清晰，可以更容易地理解组件的逻辑。

optionAPI函数 将功能数据和逻辑分开声明



#### v-for、v-if优先级

vue3可以同时写，vue2 需要分开，或者用计算属性过滤处理

### 一些组件实例api被废除

$on $off $set

### 一些全局api被废除

filter

#### 生命周期钩子删除了beforecreate和created

#### 自定义指令用法 钩子名称不一样



#### 支持多个根节点



#### 新增了很多响应式方法

ref reactive  watch  watcheffect effect



#### vue3使用ts写的，比vue2更支持typeScript语法

vue2对ts支持还不够完善，组件的属性还要组件声明。



#### 性能更好了

treeshaking只加载用的api减少了打包体积，

性能更好的diff ，静态提升，只对比动态节点， 节点的静态属性不会再进入patch



### Vue3的优化

 

在 Vue 2 的 diff 算法中，即使是静态节点的属性值是纯字符串不会发生改变，Vue 也会对这些静态属性进行比较。这是因为 Vue 2 的 diff 算法是基于逐层对比节点的方式实现的，对于每一个节点，Vue 都会对其包含的属性进行比较，包括静态属性。

在 Vue 3 中，对于纯字符串的静态属性，Vue 3 引入了一个新的优化策略，叫做“Patch Flag”。Patch Flag 是一个二进制标记，用于标识节点包含哪些属性需要进行比较，以及比较的方式。在 diff 算法的过程中，Vue 3 可以使用 Patch Flag 来快速比较两个节点的静态属性，避免不必要的计算，从而提高性能。

需要注意的是，Patch Flag 只适用于纯字符串的静态属性，对于非纯字符串的静态属性，Vue 3 仍需要对其进行完整的比较。另外，Patch Flag 的使用需要在编译阶段生成，并且需要在运行时进行处理，因此在一些场景下可能会有一定的额外开销。

总的来说，Vue 3 对静态节点的处理有了很多优化，包括 Block、Patch Flag、静态提升等，可以在一定程度上提高性能。不过，在实际应用中，具体的优化效果还需要根据具体情况进行评估和测试

# API

## ref

### 原理：

为对象添加一个名为value的get、set访问器，在get里收集依赖，在set里触发依赖。

### 描述：

接收一个变量/值，返回一个具有value属性的ref响应式对象。



## reactive

### 原理：

使用es6的proxy和reflect，劫持监视对象的get和set。当对象的属性被访问的时候，会被proxy的get函数捕捉，判断当前是否有effectactive函数**（一个全局变量，保存set的回调函数）**，有的话就执行track函数，当对象属性被修改时或者新增属性时，被set函数捕捉，

### 描述：

接受一个对象，返回一个是对象

## ComponentCustomProperties

```vue
import { ComponentCustomProperties } from 'vue';
import macro from "../src/macro/index"
import func from "../src/lib/common/Function"
import common from "../src/lib/common/index"
declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$macro : typeof macro; // 这里填类型
		$func : typeof func;
		$common : typeof common
	}
}
// 必须导出，才能在其他文件中使用
export default ComponentCustomProperties;
```

## getCurrentInstance

获取当前组件实例

```
获取当前组件实例的属性 getCurrentInstance().ctx.$props || getCurrentInstance().proxy
触发组件的自定义事件 getCurrentInstance().ctx.$emit
在生命周期钩子中使用：可以在组件的生命周期钩子中使用 getCurrentInstance() 来获取当前组件实例
通过 ctx 访问的是真实的组件实例，而通过 proxy 访问的是一个代理对象，该代理对象可以在模板中直接使用
```

