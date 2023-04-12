# 异步编程

##### 1.什么是异步？

异步就是不阻塞主线程，代码交给其他线程执行

同步就是阻塞主线程，代码按顺序执行

1. script(整体代码)
2. setTimeout
3. setInterval
4. setImmediate (Node.js 环境)
5. I/O 操作
6. UI 渲染
7. requestAnimationFrame
8. 页面事件，如 DOMContentLoaded，load 等
9. postMessage
10. MessageChannel
11. Service Worker 生命周期事件
12. Web Worker 生命周期事件