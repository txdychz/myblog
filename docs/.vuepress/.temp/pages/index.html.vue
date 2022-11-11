<template><div><h1 id="计算机网络" tabindex="-1"><a class="header-anchor" href="#计算机网络" aria-hidden="true">#</a> 计算机网络</h1>
<h2 id="get-和-post-区别" tabindex="-1"><a class="header-anchor" href="#get-和-post-区别" aria-hidden="true">#</a> get 和 post 区别</h2>
<h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> <strong>get</strong></h3>
<p>从语义上是从服务器获取资源，是幂等的，不会破坏、修改服务器资源，可以对 GET 请求的数据做缓存，这个缓存可以做到浏览器本身上（彻底避免浏览器发请求）</p>
<h3 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> <strong>post</strong></h3>
<p>新增或提交数据，是不幂等的，会修改服务器资源，浏览器不会主动缓存 post 请求</p>
<p>get 请求可以带 body，post 可以带查询字符串，用法是一样的。get 其实也可以用于删除服务器数据，一切都看后端</p>
<p>get 和 post 在实现上没有什么区别，都是基于 tcp 协议，但是在 htpt 上 get 可以做的事情，post 也可以做
只是为了实现互联网规范，get 请求在实现上</p>
<h2 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h2>
<h3 id="强缓存" tabindex="-1"><a class="header-anchor" href="#强缓存" aria-hidden="true">#</a> 强缓存</h3>
<p>状态码 200 是强缓存</p>
<p>强缓存指的是只要<strong>浏览器判断</strong>缓存没有过期，则直接使用浏览器的本地缓存，决定是否使用缓存的主动性在于浏览器这边。
在第一次请求服务器数据时，服务器返回数据，在响应头中添加 Cache-Control 或 Expires 字段，浏览器接受到以后把这两个字段和该域名绑定保存在浏览器本地
第二次请求时，浏览器会在浏览器本地查找该域名的 cache-control 字段，判断发请求的时间和 cache-control 字段中的时间做对比。</p>
<p>强缓存是利用两个 HTTP 响应头部（Response Header）字段实现的，它们都用来表示资源在客户端缓存的有效期：</p>
<ul>
<li><code v-pre>Cache-Control</code>， 是一个相对时间；</li>
<li><code v-pre>Expires</code>，是一个绝对时间；</li>
</ul>
<p>如果 HTTP 响应头部同时有 Cache-Control 和 Expires 字段的话，<strong>Cache-Control 的优先级高于 Expires</strong> 。</p>
<h3 id="协商缓存" tabindex="-1"><a class="header-anchor" href="#协商缓存" aria-hidden="true">#</a> 协商缓存</h3>
<p>协商缓存是<strong>服务器</strong>判断的
响应码为 304</p>
<p>第一种：请求头部中的 <code v-pre>If-Modified-Since</code> 字段与响应头部中的 <code v-pre>Last-Modified</code> 字段实现，这两个字段的意思是：</p>
<ul>
<li>响应头部中的 <code v-pre>Last-Modified</code>：标示这个响应资源的最后修改时间；</li>
<li>请求头部中的 <code v-pre>If-Modified-Since</code>：当资源过期了，发现响应头中具有 Last-Modified 声明，则再次发起请求的时候带上 Last-Modified 的时间，服务器收到请求后发现有 If-Modified-Since 则与被请求资源的最后修改时间进行对比（Last-Modified），如果最后修改时间较新（大），说明资源又被改过，则返回最新资源，HTTP 200 OK；如果最后修改时间较旧（小），说明资源无新修改，响应 HTTP 304 走缓存。</li>
</ul>
<p>第二种：请求头部中的 <code v-pre>If-None-Match</code> 字段与响应头部中的 <code v-pre>ETag</code> 字段，这两个字段的意思是：</p>
<ul>
<li>响应头部中 <code v-pre>Etag</code>：唯一标识响应资源；</li>
<li>请求头部中的 <code v-pre>If-None-Match</code>：当资源过期时，浏览器发现响应头里有 Etag，则再次向服务器发起请求时，会将请求头 If-None-Match 值设置为 Etag 的值。服务器收到请求后进行比对，如果资源没有变化返回 304，如果资源变化了返回 200。</li>
</ul>
<p>当使用 ETag 字段实现的协商缓存的过程：</p>
<ul>
<li>
<p>当浏览器第一次请求访问服务器资源时，服务器会在返回这个资源的同时，在 Response 头部加上 ETag 唯一标识，这个唯一标识的值是根据当前请求的资源生成的；</p>
</li>
<li>
<p>当浏览器再次请求访问服务器中的该资源时，首先会先检查强制缓存是否过期：</p>
<ul>
<li>如果没有过期，则直接使用本地缓存；</li>
<li>如果缓存过期了，会在 Request 头部加上 If-None-Match 字段，该字段的值就是 ETag 唯一标识；</li>
</ul>
</li>
<li>
<p>服务器再次收到请求后，</p>
<p>会根据请求中的 If-None-Match 值与当前请求的资源生成的唯一标识进行比较</p>
<p>：</p>
<ul>
<li><strong>如果值相等，则返回 304 Not Modified，不会返回资源</strong>；</li>
<li>如果不相等，则返回 200 状态码和返回资源，并在 Response 头部加上新的 ETag 唯一标识；</li>
</ul>
</li>
<li>
<p>如果浏览器收到 304 的请求响应状态码，则会从本地缓存中加载资源，否则更新资源。</p>
</li>
</ul>
<h2 id="http-与-https" tabindex="-1"><a class="header-anchor" href="#http-与-https" aria-hidden="true">#</a> HTTP 与 HTTPS</h2>
<h3 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> Http</h3>
<h3 id="常见的-http-状态码" tabindex="-1"><a class="header-anchor" href="#常见的-http-状态码" aria-hidden="true">#</a> 常见的 http 状态码</h3>
<ol>
<li>
<p>200:成功，并携带数据</p>
</li>
<li>
<p>204:成功但没有 body 数据</p>
</li>
<li>
<p>301:表示永久重定向，表示资源不存在</p>
</li>
<li>
<p>302:表示临时重定向 ，资源还存在，但需要另一个 url 去访问</p>
</li>
<li>
<p>304:（not modify） 表示资源未修改，命中协商缓存，直接使用缓存中的数据</p>
</li>
<li>
<p>401：表示没有用户标识，需要用户登录</p>
</li>
</ol>
<h3 id="http-与-https-有哪些区别" tabindex="-1"><a class="header-anchor" href="#http-与-https-有哪些区别" aria-hidden="true">#</a> HTTP 与 HTTPS 有哪些区别？</h3>
<ul>
<li>HTTP 是超文本传输协议，信息是明文传输，存在安全风险的问题。HTTPS 则解决 HTTP 不安全的缺陷，在 TCP 和 HTTP 网络层之间加入了 SSL/TLS 安全协议，使得报文能够加密传输。</li>
<li>HTTP 连接建立相对简单， TCP 三次握手之后便可进行 HTTP 的报文传输。而 HTTPS 在 TCP 三次握手之后，还需进行 SSL/TLS 的握手过程，才可进入加密报文传输。</li>
<li>两者的默认端口不一样，HTTP 默认端口号是 80，HTTPS 默认端口号是 443。</li>
<li>HTTPS 协议需要向 CA（证书权威机构）申请数字证书，来保证服务器的身份是可信的。</li>
</ul>
<h4 id="https-采用的是对称加密和非对称加密结合的「混合加密」方式" tabindex="-1"><a class="header-anchor" href="#https-采用的是对称加密和非对称加密结合的「混合加密」方式" aria-hidden="true">#</a> HTTPS 采用的是<strong>对称加密</strong>和<strong>非对称加密</strong>结合的「混合加密」方式</h4>
<ul>
<li>在通信建立前采用<strong>非对称加密</strong>的方式交换「会话秘钥」，后续就不再使用非对称加密。</li>
<li>在通信过程中全部使用<strong>对称加密</strong>的「会话秘钥」的方式加密明文数据。</li>
</ul>
<p>采用「混合加密」的方式的原因：</p>
<ul>
<li><strong>对称加密</strong>只使用一个密钥，运算速度快，密钥必须保密，无法做到安全的密钥交换。</li>
<li><strong>非对称加密</strong>使用两个密钥：公钥和私钥，公钥可以任意分发而私钥保密，解决了密钥交换问题但速度慢。</li>
</ul>
<h3 id="摘要算法-数字签名" tabindex="-1"><a class="header-anchor" href="#摘要算法-数字签名" aria-hidden="true">#</a> 摘要算法 + 数字签名</h3>
<p>为了保证传输的内容不被篡改，我们需要对内容计算出一个「指纹」，然后同内容一起传输给对方。</p>
<p>对方收到后，先是对内容也计算出一个「指纹」，然后跟发送方发送的「指纹」做一个比较，如果「指纹」相同，说明内容没有被篡改，否则就可以判断出内容被篡改了。</p>
<h3 id="https-是如何建立连接的-其间交互了什么" tabindex="-1"><a class="header-anchor" href="#https-是如何建立连接的-其间交互了什么" aria-hidden="true">#</a> HTTPS 是如何建立连接的？其间交互了什么？</h3>
<p>SSL/TLS 协议基本流程：</p>
<ul>
<li>客户端向服务器索要并验证服务器的公钥。</li>
<li>双方协商生产「会话秘钥」。</li>
<li>双方采用「会话秘钥」进行加密通信。</li>
</ul>
<p>前两步也就是 SSL/TLS 的建立过程，也就是 TLS 握手阶段。</p>
<h2 id="http-1-1、http-2、http-3-演变" tabindex="-1"><a class="header-anchor" href="#http-1-1、http-2、http-3-演变" aria-hidden="true">#</a> HTTP/1.1、HTTP/2、HTTP/3 演变</h2>
<h3 id="http-1-1-相比-http-1-0-提高了什么性能" tabindex="-1"><a class="header-anchor" href="#http-1-1-相比-http-1-0-提高了什么性能" aria-hidden="true">#</a> HTTP/1.1 相比 HTTP/1.0 提高了什么性能？</h3>
<p>HTTP/1.1 相比 HTTP/1.0 性能上的改进：</p>
<ul>
<li>使用长连接的方式改善了 HTTP/1.0 短连接造成的性能开销。</li>
<li>支持管道（pipeline）网络传输，只要第一个请求发出去了，不必等其回来，就可以发第二个请求出去，可以减少整体的响应时间。</li>
</ul>
<h4 id="但-http-1-1-还是有性能瓶颈" tabindex="-1"><a class="header-anchor" href="#但-http-1-1-还是有性能瓶颈" aria-hidden="true">#</a> 但 HTTP/1.1 还是有性能瓶颈</h4>
<ul>
<li>请求 / 响应头部（Header）未经压缩就发送，首部信息越多延迟越大。只能压缩 <code v-pre>Body</code> 的部分；</li>
<li>发送冗长的首部。每次互相发送相同的首部造成的浪费较多；</li>
<li><strong>服务器是按请求的顺序响应的，如果服务器响应慢，会招致客户端一直请求不到数据，也就是队头阻塞；</strong></li>
<li><strong>没有请求优先级控制</strong>；</li>
<li>请求只能从客户端开始，服务器只能被动响应</li>
</ul>
<h4 id="那-http-2-相比-http-1-1-性能上的改进" tabindex="-1"><a class="header-anchor" href="#那-http-2-相比-http-1-1-性能上的改进" aria-hidden="true">#</a> 那 HTTP/2 相比 HTTP/1.1 性能上的改进</h4>
<ul>
<li>头部压缩</li>
<li>二进制格式</li>
<li>并发传输</li>
<li>服务器主动推送资源</li>
</ul>
<h4 id="如何对-http1-1-进行优化" tabindex="-1"><a class="header-anchor" href="#如何对-http1-1-进行优化" aria-hidden="true">#</a> 如何对 http1.1 进行优化</h4>
<h5 id="尽可能避免发送请求-减少请求的发送数量" tabindex="-1"><a class="header-anchor" href="#尽可能避免发送请求-减少请求的发送数量" aria-hidden="true">#</a> 尽可能避免发送请求（减少请求的发送数量）</h5>
<ol>
<li>使用 http 缓存，强缓存协商缓存</li>
<li>将多个资源合并成一个资源进行发送（网易云音乐首页，各大网站的首页数据），精灵图技术</li>
<li>按需访问资源，只加载用户看到的资源。图片懒加载，路由懒加载</li>
</ol>
<h5 id="对资源进行压缩-降低传输资源的大小-提高传输效率" tabindex="-1"><a class="header-anchor" href="#对资源进行压缩-降低传输资源的大小-提高传输效率" aria-hidden="true">#</a> 对资源进行压缩，降低传输资源的大小，提高传输效率</h5>
<p>一般压缩的方式有两种</p>
<p>有损压缩和无损压缩</p>
<p>无损压缩一般都用 gzip 压缩，压缩的资源会通过响应头的字段 content-encoding 告诉客户端该资源经过了压缩</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>content-encoding: gzip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有损压缩</p>
<p>有损压缩一般用在媒体资源，如图片、音乐、视频</p>
<h2 id="tcp-udp" tabindex="-1"><a class="header-anchor" href="#tcp-udp" aria-hidden="true">#</a> TCP UDP</h2>
<h3 id="tcp-ip-协议" tabindex="-1"><a class="header-anchor" href="#tcp-ip-协议" aria-hidden="true">#</a> tcp/ip 协议</h3>
<p>由于 TCP 是面向连接，能保证数据的可靠性交付，因此经常用于：</p>
<ul>
<li>FTP 文件传输；</li>
<li>HTTP / HTTPS；</li>
</ul>
<p>由于 UDP 面向无连接，它可以随时发送数据，再加上 UDP 本身的处理既简单又高效，因此经常用于：</p>
<ul>
<li>包总量较少的通信，如 <code v-pre>DNS</code> 、<code v-pre>SNMP</code> 等；</li>
<li>视频、音频等多媒体通信；</li>
<li>广播通信；</li>
</ul>
<h3 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手" aria-hidden="true">#</a> 三次握手</h3>
<p>TCP 使用三次握手建立连接的<strong>最主要原因就是防止「历史连接」初始化了连接</strong>。</p>
<h2 id="网络安全" tabindex="-1"><a class="header-anchor" href="#网络安全" aria-hidden="true">#</a> 网络安全</h2>
<h3 id="xss-攻击" tabindex="-1"><a class="header-anchor" href="#xss-攻击" aria-hidden="true">#</a> XSS 攻击</h3>
<p>分为三种类型分别是</p>
<h4 id="反射型" tabindex="-1"><a class="header-anchor" href="#反射型" aria-hidden="true">#</a> 反射型</h4>
<p>反射型需要服务器有对应接口配合
在一个表单中输入恶意代码，通常这段代码就是一个 html 标签，给这个标签的属性或者事件添加一些读取用户数据的代码
，提交表单，通过接口将这段标签作为参数交给服务器，服务器接受到以后获取请求参数的时候，然后回对这段单吗进行一个解析，
在请求 url 中嵌入恶意代码，服务器接受到以后，</p>
<h4 id="存储型" tabindex="-1"><a class="header-anchor" href="#存储型" aria-hidden="true">#</a> 存储型</h4>
<p>存储型就是，在表单中输入恶意的代码，提交到服务器中，服务器在接受到用户请求后，将其作为 html 代码进行解析，执行当中的 js 代码
一般需要对表单输入内容进行转义</p>
<h4 id="xss-的危害" tabindex="-1"><a class="header-anchor" href="#xss-的危害" aria-hidden="true">#</a> XSS 的危害</h4>
<ol>
<li>可以利用 xss 对页面结构进行破坏</li>
<li>获取用户 cookie</li>
<li>流量劫持，将用户网页定位其他网页</li>
<li>dos 攻击，对服务器发起大量请求，占用服务器资源，使服务器无法响应用户请求</li>
</ol>
<h4 id="xss-防御手段" tabindex="-1"><a class="header-anchor" href="#xss-防御手段" aria-hidden="true">#</a> XSS 防御手段</h4>
<ol>
<li>对 cookies 设置 httponly，使其不能通过 document.cookie 进行获取</li>
<li>对用户的输入进行转义，利用第三方库对用户的输入内容进行编码和解码</li>
<li>对用户输入的 dom 属性和事件进行过滤，如 script 标签和 onerror 事件</li>
</ol>
<h4 id="dom-型" tabindex="-1"><a class="header-anchor" href="#dom-型" aria-hidden="true">#</a> dom 型</h4>
<p>跨站脚本攻击，发生在目标用户的浏览器，渲染 DOM 树的过程成发生了不在预期内执行的 JS 代码。</p>
<h3 id="csrf-攻击" tabindex="-1"><a class="header-anchor" href="#csrf-攻击" aria-hidden="true">#</a> CSRF 攻击</h3>
<p>跨站请求伪造
利用用户身份，执行非用户本意的操作
用户登录了第三方网站后，用户又访问了恶意网站
恶意网站动态生成生成 img，iframe，script 标签，在 src 属性中注入一些恶意代码，向第三方网站发送恶意请求
eg：
有一个网站 a 和恶意网站 b，用户登录 a 以后又进入了恶意网站 b，恶意网站中动态生成了 img、iframe、script 标签，使 src 的值为
a 网站某个接口的 url</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>从A网站发送的请求 请求头referer字段是a网站
GET /blog/del?id=1 HTTP/1.1
Host: www.a.com
* Referer: http://www.a.com/blog/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>从B网站发送的请求 请求头referer字段是b网站
GET /blog/del?id=1 HTTP/1.1
Host: www.a.com
* Referer: http://www.b.com/csrf.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


