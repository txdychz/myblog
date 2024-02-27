# createApp

```
1
createApp(App).mount(#app)
//执行栈
1.1
createApp(App)->  
ensureRenderer() = 
renderer
1.2
createApp(App)->
ensureRenderer->
createRenderer(rendererOptions) = 
{render:?, hydrate:?,createApp:?}
1.3
createApp(App)->
ensureRenderer->
createRenderer(rendererOptions)->
baseCreateRenderer(options) = 
{render:?, hydrate:?,createApp:createAppAPI(render, hydrate)}
1.4
createApp(App)->
ensureRenderer->
createRenderer(rendererOptions)->
baseCreateRenderer(options)->
createAppAPI = createApp()


2
createApp(App)->
renderer.createApp(App) = 组件对象 
2.1 
2.2
createApp(App)->
renderer.createApp(App)->
createAppContext() = 得到一个组件环境对象
{
        app: null,
        config: {
          isNativeTag: NO,
          performance: false,
          globalProperties: {},
          optionMergeStrategies: {},
          errorHandler: void 0,
          warnHandler: void 0,
          compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: /* @__PURE__ */ Object.create(null),
        optionsCache: /* @__PURE__ */ new WeakMap(),
        propsCache: /* @__PURE__ */ new WeakMap(),
        emitsCache: /* @__PURE__ */ new WeakMap()
      };
    }




```

```

```

