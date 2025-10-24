# Markdown 基本语法

<ArticleMetadata/>

Markdown 是一种轻量级标记语言，由 John Gruber 于 2004 年创建，排版语法简洁，让人们更多地关注内容本身而非排版。它使用易读易写的纯文本格式编写文档，可与 HTML 混合编写，可导出 HTML、PDF 以及本身 `.md` 格式的文件。因简洁、高效、易读、易写，Markdown 被大量使用，如 [Github](https://github.com)、[GitLab](https://about.gitlab.com)、[StackOverflow](https://stackoverflow.com)、[Wikipedia](https://www.wikipedia.org) 等。

Markdown 应用程序通过 Markdown 处理器（也通常称为“解析器”或“实现”）将 Markdown 格式文本输出为 HTML 格式。

![](/guide/markdown-rendering-process.png)

Markdown 基本语法是 John Gruber 的原始设计文档中列出的元素。所有 Markdown 应用程序都支持这些元素。

## 标题

要创建标题，应在文本前添加 `#` 号，`#` 号的数量代表了标题的级别。

```Markdown
# Heading Level 1
## Heading Level 2
### Heading Level 3
#### Heading Level 4
##### Heading Level 5
###### Heading Level 6
```

还可以在文本下方添加任意数量的 `=` 号来标识一级标题，或者 `-` 号来标识二级标题。

```Markdown
Heading Level 1
===============
Heading Level 2
---------------
```

不同的 Markdown 应用程序处理 `#` 号和标题之间的空格方式并不一致。为保证兼容性，应使用一个空格在 `#` 号和标题之间进行分隔。

## 段落

要创建段落，应使用空白行将一行或多行文本进行分隔。

```Markdown
Paragraph 1

Paragraph 2
```

不要使用空格（Spaces）或制表符（Tabs）来缩进段落。

## 换行

几乎所有 Markdown 应用程序都支持两个或多个空格进行换行，称为结尾空格（Trailing Whitespace），部分 Markdown 应用程序也支持在行尾添加反斜杠 `\` 的方式实现换行。

```Markdown
Line 1··
Line 2

Line 1\
Line 2
```

为保证兼容性和可读性，应通过在行尾添加 HTML `<br>` 标签的方式来实现换行。

```Markdown
Line 1<br>
Line 2
```

## 强调

要使用斜体显示文本，应在文本前后添加一个星号 `*` 或下划线 `_`。

要使用粗体显示文本，应在文本前后添加两个星号 `*` 或下划线 `_`。

要同时使用斜体和粗体显示文本，应在文本前后添加三个星号 `*` 或下划线 `_`。

```Markdown
*Italic Text*
**Bold Text**
***Italic and Bold Text***

_Italic Text_
__Bold Text__
___Italic and Bold Text___
```

Markdown 应用程序在处理单词或单词中间添加的下划线上并不一致。为保证兼容性，应使用星号 `*` 而非下划线 `_` 来表示强调。

**渲染效果：**

_Italic Text_<br>
__Bold Text__<br>
___Italic and Bold Text___

## 引用

### 块引用

要创建块引用，应在段落前添加一个 `>` 符号。

```Markdown
> Quote Paragraph
```

**渲染效果：**

> Quote Paragraph

块引用可以包含多个段落，为段落之间的空白行添加一个 `>` 符号。

```Markdown
> Quote Paragraph 1
>
> Quote Paragraph 2
```

**渲染效果：**

> Quote Paragraph 1
>
> Quote Paragraph 2

### 嵌套块引用

块引用可以嵌套，在要嵌套的段落前额外添加一个 `>` 符号。

```Markdown
> Quote Paragraph 1
>> Quote Paragraph 2
>>> Quote Paragraph 3
```

**渲染效果：**

> Quote Paragraph 1
>> Quote Paragraph 2
>>> Quote Paragraph 3

## 列表

### 有序列表

要创建有序列表，应在每个列表项前添加数字并紧跟一个英文句点。数字不必按顺序排列，但是列表应当以数字 1 起始。缩进一个或多个列表项可以创建嵌套列表。

```Markdown
1. First Item
2. Second Item
   1. Indented Item
   2. Indented Item
3. Third Item

1. First Item
1. Second Item
   1. Indented Item
   1. Indented Item
1. Third Item

1) First Item
2) Second Item
   1) Indented Item
   2) Indented Item
3) Third Item
```

部分 Markdown 应用程序支持在列表项前使用右括号替代英文句点作为分隔符，为保证兼容性，应使用右括号 `)` 而非英文句点 `.` 作为分隔符，并按顺序排列数字。


**渲染效果：**

1. First Item
2. Second Item
   1. Indented Item
   2. Indented Item
3. Third Item

### 无序列表

要创建无序列表，应在每个列表项前添加减号 `-`、星号 `*` 或加号 `+`。缩进一个或多个列表项可以创建嵌套列表。

```Markdown
- First Item
- Second Item
  - Indented Item
  - Indented Item
- Third Item

* First Item
* Second Item
  * Indented Item
  * Indented Item
* Third Item

+ First Item
+ Second Item
  + Indented Item
  + Indented Item
+ Third Item
```

不同的 Markdown 应用程序在处理同一列表中不同分隔符的方式上存在差异。为保证兼容性，不应在同一列表中混用分隔符。

**渲染效果：**

* First Item
* Second Item
  * Indented Item
  * Indented Item
* Third Item

### 在有序列表中嵌套无序列表

可以在有序列表中嵌套无序列表。

```Markdown
1. First Item
2. Second Item
   * Indented Item
   * Indented Item
3. Third Item
```

**渲染效果：**

1. First Item
2. Second Item
   * Indented Item
   * Indented Item
3. Third Item

### 在无序列表中嵌套有序列表

也可以在无序列表中嵌套有序列表。

```Markdown
* First Item
* Second Item
  1. Indented Item
  2. Indented Item
* Third Item
```

**渲染效果：**

* First Item
* Second Item
  1. Indented Item
  2. Indented Item
* Third Item

### 在列表中嵌套其他元素

可以在列表中嵌套其他元素。

````Markdown
1. First Item

   Paragraph

2. Second Item

   > Quote Paragraph

3. Third Item

   ```
   Code Block
   ```
````

**渲染效果：**

1. First Item

   Paragraph

2. Second Item

   > Quote Paragraph

3. Third Item

   ```
   Code Block
   ```

## 代码

### 行内代码

将文本包裹在反引号 `` ` `` 中，以表示行内代码。

将包含一个或多个反引号 `` ` `` 的文本包裹在双反引号 ` `` ` 中，以表示行内代码。

```Markdown
`code`
`` `code` ``
```

**渲染效果：**

`code`<br>
`` `code` ``

### 代码块

要创建代码块，应将代码的每一行缩进至少四个空格或一个制表符。

```Markdown
    #include <stdio.h>
    int main() {
        printf("Hello, World!\n");
        return 0;
    }
```

**渲染效果：**

    #include <stdio.h>
    int main() {
        printf("Hello, World!\n");
        return 0;
    }

## 分隔线

要创建分隔线，应在单独一行上使用至少三个星号 `*`、减号 `-` 或下划线 `_`，并且不能包含其他内容（可以用空格分隔）。

```Markdown
***
---
___
* * *
- - -
_ _ _
```

为保证兼容性，应在分隔线的前后均添加空白行。

**渲染效果：**

---

## 链接

### 内部链接与外部链接

内部链接（Internal Link）为指向同一网站 / 应用内部其他页面的链接，外部链接（External Link）为指向其他网站 / 域名的链接。

链接文本放在中括号内，链接地址放在中括号后的圆括号内。链接 Title 是鼠标悬停在链接文本上时会出现的文字，链接 Title 是可选的，它放在圆括号中链接地址的后面，以空格分隔。

Markdown 链接语法：`[链接文本](链接地址 "链接Title(可选)")`

```Markdown
[Guide](/guide)
[My GitHub](https://github.com/MinmusLin)
[My Email](mailto:minmuslin@outlook.com)
[My GitHub](https://github.com/MinmusLin "我的 GitHub")
[My Email](mailto:minmuslin@outlook.com "我的电子邮箱")
```

**渲染效果：**

[Guide](/guide/)<br>
[My GitHub](https://github.com/MinmusLin)<br>
[My Email](mailto:minmuslin@outlook.com)<br>
[My GitHub](https://github.com/MinmusLin "我的 GitHub")<br>
[My Email](mailto:minmuslin@outlook.com "我的电子邮箱")

外部链接会以 [](https://github.com/MinmusLin) 标志结尾。

使用尖括号可以将链接或电子邮箱地址变为可点击的链接。

```Markdown
<https://github.com/MinmusLin>
<minmuslin@outlook.com>
```

不同的 Markdown 应用程序处理链接中空格的方式不一致。为保证兼容性，应使用 `%20` 替代空格。

**渲染效果：**

<https://github.com/MinmusLin><br>
<minmuslin@outlook.com>

### 格式化链接

在链接语法前后添加星号 `*` 或下划线 `_` 以强调链接，在链接文本前后添加反引号 `` ` `` 以表示行内代码。

```Markdown
*[My GitHub](https://github.com/MinmusLin)*
_[My GitHub](https://github.com/MinmusLin)_
[`My GitHub`](https://github.com/MinmusLin)
```

**渲染效果：**

*[My GitHub](https://github.com/MinmusLin)*<br>
_[My GitHub](https://github.com/MinmusLin)_<br>
[`My GitHub`](https://github.com/MinmusLin)

### 引用链接

引用链接是 Markdown 中的一种链接格式，它将链接文本和链接地址分开定义。这种方式能让正文更简洁，并且同一个链接地址可以在文中多次重复使用，方便统一管理。

第一部分（使用处）语法：`[链接文本][标签]`

第一组方括号为链接文本，第二组方括号为标签。可以在第一组和第二组方括号之间添加一个空格。标签大小写不敏感，可以包含字母，数字，空格或标点符号。

以下示例格式对于引用链接第一部分（使用处）效果相同：

```Markdown
[My GitHub][1]
[My GitHub] [1]
```

第二部分（定义处）语法：`[标签]: 链接地址 "链接Title(可选)"`

标签位于方括号中，其后紧跟一个冒号 `:` 和若干空格，链接地址可以选择将其包含在尖括号中，链接 Title 可以选择将其包含在双引号，单引号或圆括号中。可以将引用链接的第二部分（定义处）放在 Markdown 文档中的任意位置。

以下示例格式对于引用链接第二部分（定义处）效果相同：

```Markdown
[1]: https://github.com/MinmusLin
[1]: https://github.com/MinmusLin "我的 GitHub"
[1]: https://github.com/MinmusLin '我的 GitHub'
[1]: https://github.com/MinmusLin (我的 GitHub)
[1]: <https://github.com/MinmusLin>
[1]: <https://github.com/MinmusLin> "我的 GitHub"
[1]: <https://github.com/MinmusLin> '我的 GitHub'
[1]: <https://github.com/MinmusLin> (我的 GitHub)
```

为保证兼容性，第一部分（使用处）第一组和第二组方括号之间应不保留空格，第二部分（定义处）冒号 `:` 后应紧跟一个空格。

**渲染效果：**

[My GitHub][1]

[1]: https://github.com/MinmusLin "我的 GitHub"

## 图像

以感叹号 `!` 开头，图像 Title 放在中括号内，图像地址放在中括号后的圆括号内。图像 Title 是可选的。

Markdown 图像语法：`![图像Title(可选)](图像地址)`

```Markdown
![Homepage Logo](/logos/homepage-logo.png)
```

**渲染效果：**

![Homepage Logo](/logos/homepage-logo.png)

可以将 Markdown 图像语法添加至链接文本处，以实现链接图像。

Markdown 链接图像语法：`[![图像Title(可选)](图像地址)](链接地址 "链接Title(可选)")`

```Markdown
[![Tongji University](/logos/tongji-logo-light.png)](https://www.tongji.edu.cn "同济大学官网")
```

**渲染效果：**

[![Tongji University](/logos/tongji-logo-light.png)](https://www.tongji.edu.cn "同济大学官网")

## 转义字符

要显示下列表格中用于格式化 Markdown 文档的字符，应在字符前添加反斜杠 `\` 实现转义。

| 符号 | 描述     |
|:----:|:--------:|
| \\   | 反斜杠   |
| \`   | 反引号   |
| \*   | 星号     |
| \_   | 下划线   |
| \{\} | 花括号   |
| \[\] | 方括号   |
| \(\) | 圆括号   |
| \#   | 井号     |
| \+   | 加号     |
| \-   | 减号     |
| \.   | 英文句点 |
| \!   | 感叹号   |
| \|   | 管道符   |

::: tip 特殊字符自动转义
在 HTML 中，有两个字符需要特殊处理：`<` 和 `&`。`<` 用于 HTML 起始标签，`&` 用于标记 HTML 实体，如果想要使用符号 `<` 和 `&`，必须要使用 HTML 实体的形式，即 `&lt;` 和 `&amp;`。

Markdown 允许直接使用符号 `<` 和 `&`，并自动进行转义。若 `&` 作为 HTML 实体的一部分则不会被转换，而在其它情况下 `&` 会被转换为 `&amp;`。`<` 也类似，若 `<` 作为 HTML 起始标签的一部分则不会被转换，而在其它情况下 `<` 会被转换为 `&lt;`。

在 Markdown 的块级元素和内联元素中，`<` 和 `&` 两个符号都会被自动转换成 HTML 实体 `&lt;` 和 `&amp;`，基于这项特性可以很容易地使用 Markdown 写 HTML。
:::

## 内嵌 HTML 标签

对于 Markdown 范围之外的标签，都可以直接在 Markdown 文档中使用 HTML，不需要额外标注这是 HTML 或 Markdown，只需要将 HTML 标签添加到 Markdown 文档中即可。

出于安全原因，并非所有 Markdown 应用程序都支持在 Markdown 文档中添加 HTML，某些 Markdown 应用程序只支持部分 HTML 标签的子集。

对于 HTML 行级内联标签，如 `<span>`、`<cite>` 和 `<del>` 等，可以在 Markdown 文档的段落、列表或标题中任意使用，不受限制。根据个人习惯，甚至可以不使用 Markdown 格式而使用 HTML 标签来进行格式化。

对于 HTML 块级标签，如 `<div>`、`<table>`、`<pre>` 和 `<p>` 等，应在其前后添加空白行以与其它内容进行分隔。尽量不要使用空格（Spaces）或制表符（Tabs）对 HTML 标签进行缩进，否则将影响 Markdown 文档格式。

在 HTML 块级标签内不能使用 Markdown 语法。如 `<p>*Italic Text* and **Bold Text**</p>` 将不起作用。
