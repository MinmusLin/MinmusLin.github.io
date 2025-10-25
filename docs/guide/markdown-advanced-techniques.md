# Markdown 高级技巧

<ArticleMetadata/>

对于大多数用户而言，Markdown 的 [基本语法](/guide/markdown-basic-syntax) 和 [扩展语法](/guide/markdown-extended-syntax) 已足以应对日常写作的需求。然而，在长期使用 Markdown 时，可能会发现 Markdown 官方语法的局限性。

本部分旨在探讨一些 Markdown 高级技巧，为 Markdown 官方语法未覆盖的常见需求提供实用解决方案。这些方法通常依赖于 HTML 与 Markdown 的混合使用，或对解析器特性的巧妙应用。

## 目录表

要创建目录表，在某一行添加 `[[TOC]]` 即可。

```Markdown
[[TOC]]
```

**渲染效果：**

[[TOC]]

## 下划线

要在文本上添加下划线，应在文本前后添加两个加号 `+`，与 HTML 的 `<ins>` 与 `<u>` 标签等价。

```Markdown
++Underlined Text++
<ins>Underlined Text</ins>
<u>Underlined Text</u>
```

**渲染效果：**

++Underlined Text++

::: tip HTML 的 `<ins>` 与 `<u>` 标签
HTML 的 `<ins>` 标签用于标记文档中新增的内容（语义化），而 `<u>` 标签仅提供视觉下划线（无语义）。建议修订文档时使用 `<ins>` 标签，纯装饰下划线使用 CSS（如 `text-decoration: underline`），避免滥用 `<u>` 标签。
:::

## 缩进

Markdown 官方语法中的空格和制表符有特殊用途，如创建换行或代码块。如果想用空格或制表符来缩进段落，可以使用 `&nbsp;` 或 CSS `text-indent` 实现。

```Markdown
&nbsp;&nbsp;&nbsp;&nbsp;This paragraph is indented using non-breaking spaces.
<p style="text-indent: 2em">This paragraph has a first-line indent controlled by CSS.</p>
```

**渲染效果：**

&nbsp;&nbsp;&nbsp;&nbsp;This paragraph is indented using non-breaking spaces.

<p style="text-indent: 2em">This paragraph has a first-line indent controlled by CSS.</p>

## 居中对齐和右对齐

Markdown 官方语法不支持居中对齐和右对齐，可以使用 CSS `text-align` 实现。

```Markdown
<p style="text-align: center">This text will be center-aligned.</p>
<p style="text-align: right">This text will be right-aligned.</p>
```

**渲染效果：**

<p style="text-align: center">This text will be center-aligned.</p>

<p style="text-align: right">This text will be right-aligned.</p>

## 文字颜色

Markdown 官方语法不支持文字颜色，可以使用 CSS `color` 实现。

```Markdown
<font color="red">Red Text</font>
<p style="color: yellow">Yellow Text</p>
<p style="color: rgb(0, 0, 255)">Blue Text</p>
<p style="color: #00FF00">Green Text</p>
```

**渲染效果：**

<font color="red">Red Text</font>

<p style="color: yellow">Yellow Text</p>

<p style="color: rgb(0, 0, 255)">Blue Text</p>

<p style="color: #00FF00">Green Text</p>

## 注释

Markdown 没有内置的注释功能，但可以使用两种非官方的 Hack 方法实现。

```Markdown
Paragraph 1

[Comment 1]: #

Paragraph 2

[^comment]: Comment 2

Paragraph 3
```

**渲染效果：**

Paragraph 1

[Comment 1]: #

Paragraph 2

[^comment]: Comment 2

Paragraph 3

部分 Markdown 应用程序也支持使用 HTML 注释 `<!-- Comment -->` 来实现隐藏内容。

## 调整图像尺寸

可以使用 HTML `<img>` 标签的 CSS `width` 和 `height` 来调整图像尺寸。

当仅设置宽度或高度时，浏览器会自动计算另一边的长度，以保持图像原始比例。

```Markdown
<img src="/logos/homepage-logo.png" style="margin: 0 auto">
<img src="/logos/homepage-logo.png" style="margin: 0 auto; width: 200px">
<img src="/logos/homepage-logo.png" style="margin: 0 auto; height: 150px">
<img src="/logos/homepage-logo.png" style="margin: 0 auto; width: 100px; height: 100px">
```

**渲染效果：**

<img src="/logos/homepage-logo.png" style="margin: 0 auto">

<img src="/logos/homepage-logo.png" style="margin: 0 auto; width: 200px">

<img src="/logos/homepage-logo.png" style="margin: 0 auto; height: 150px">

<img src="/logos/homepage-logo.png" style="margin: 0 auto; width: 100px; height: 100px">

## 高亮

要在文本上添加高亮效果，应在文本前后添加两个等号 `=`，与 HTML 的 `<mark>` 标签等价。

```Markdown
==Highlight Text==
<mark>Highlight Text</mark>
```

**渲染效果：**

==Highlight Text==

## 上标和下标

要在文本上添加上标 / 下标，应在文本前后添加符号 `^` / `~`，与 HTML 的 `<sup>` / `<sub>` 标签等价。

```Markdown
E = mc^2^
H~2~O

E = mc<sup>2</sup>
H<sub>2</sub>O
```

**渲染效果：**

E = mc^2^<br>
H~2~O

## 缩写

要创建缩写，应在方括号内添加缩写，在 `[` 前添加星号 `*`，在 `]` 后添加冒号 `:` 和一个空格，之后添加缩写全称。

```Markdown
The HTML specification is written by the W3C.
*[W3C]: World Wide Web Consortium
```

**渲染效果：**

The HTML specification is written by the W3C.

*[W3C]: World Wide Web Consortium

鼠标悬浮至缩写位置即可查看缩写全称。本功能也可用于评论或注释。

## 数学公式

部分 Markdown 应用程序支持通过 $\LaTeX$ 语法创建数学公式，使用 `$` 标记行内公式，使用 `$$` 标记块级公式。

```Markdown
When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are

$$
x = {-b \pm \sqrt{b^2-4ac} \over 2a}
$$
```

**渲染效果：**

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are

$$
x = {-b \pm \sqrt{b^2-4ac} \over 2a}
$$

::: warning
使用 $\LaTeX$ 语法时，`$` 前后不能都是空格，否则会导致公式渲染失败。公式渲染失败会导致 VitePress 构建报错。
:::

## Mermaid 示意图

可以使用 `mermaid` 代码框标记 Mermaid 示意图。点击此处查看 Mermaid [指南](https://mermaid.js.org/ecosystem/tutorials.html)。

````Markdown{1,13}
```mermaid
sequenceDiagram
    par Alice to Bob
        Alice->>Bob: Go help John
    and Alice to John
        Alice->>John: I want this done today
        par John to Charlie
            John->>Charlie: Can we do this today?
        and John to Diana
            John->>Diana: Can you help us today?
        end
    end
```
````

**渲染效果：**

```mermaid
sequenceDiagram
    par Alice to Bob
        Alice->>Bob: Go help John
    and Alice to John
        Alice->>John: I want this done today
        par John to Charlie
            John->>Charlie: Can we do this today?
        and John to Diana
            John->>Diana: Can you help us today?
        end
    end
```

::: warning
由于 Mermaid 依赖浏览器的布局 API，因此无法进行 SSR（服务端渲染），只能在前端渲染。因此如果 Mermaid 代码中存在错误，无法在 VitePress 构建时发现，在插入 Mermaid 示意图时应保证内容按预期呈现。
:::
