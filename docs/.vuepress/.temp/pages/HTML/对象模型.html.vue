<template><div><p>HTML 中的文档对象模型（DOM，Document Object Model）是一种用于表示和操作网页文档的编程接口。它将整个网页视为一个树状结构，每个元素、文本和属性都被表示为对象，开发者可以使用代码来访问和操作这些对象。下面将通过文字和代码段来解析 HTML 中的文档对象模型。</p>
<p>在 DOM 中，网页文档被组织为一个树状结构，称为 DOM 树。树的顶部是文档对象（document），它代表整个 HTML 文档。文档对象下面是其他元素对象，以及它们之间的父子关系。以下是一个简单的示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>我的网页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>欢迎访问我的网页！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这是一个示例网页。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，document 对象是整个 HTML 文档的根对象。可以使用 JavaScript 代码来访问和操作该对象以及其下的其他对象。例如，通过 document.title 可以访问文档的标题，通过 document.body 可以访问文档的主体内容。</p>
<p>DOM 提供了一组 API 方法和属性，用于与文档对象及其子元素进行交互。通过这些方法和属性，开发者可以获取和修改元素的内容、属性和样式，动态创建、移动和删除元素，以及响应用户的交互事件。</p>
<p>以下是一个示例，展示了如何使用 DOM API 来获取元素对象并修改其内容：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myHeading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>欢迎访问我的网页！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token comment">// 获取元素对象</span>
      <span class="token keyword">const</span> heading <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"myHeading"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 修改元素内容</span>
      heading<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">"Hello World!"</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，通过 getElementById() 方法获取具有指定 id 的元素对象，并将其存储在变量 heading 中。然后，通过修改 textContent 属性，将元素的内容修改为 &quot;Hello World!&quot;。</p>
<p>DOM 的优势在于它提供了一种标准化的方式来操作网页的结构和内容。通过使用 DOM，开发者可以动态地操纵网页，实现交互性和动态性。同时，DOM 也为跨浏览器的兼容性提供了一致的接口。</p>
<p>总结起来，HTML 中的文档对象模型（DOM）提供了一种用于表示和操作网页文档的编程接口。它将网页视为一个树状结构，每个元素、文本和属性都被表示为对象。通过使用 DOM API，开发者可以访问</p>
</div></template>


