## 使用vue-router代替pages.json管理项目路由

```
//两个插件
uni-simple-router
```

## uniapp跨域

```
//mainifest.json
"devServer": {
			"proxy":{
				"/api":{
					"target":"https://app.zhtdtech.com",
					"changeOrigin": true,
									"secure": true,
									"pathRewrite": {
										"^/api": ""
									}
				}
			}
		}
```

