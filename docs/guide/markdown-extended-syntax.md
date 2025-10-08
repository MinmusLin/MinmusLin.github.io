# Markdown 扩展语法

John Gruber 的原始设计文档中概述的[基本语法](/guide/markdown-basic-syntax)主要是为了应付大多数情况下的日常所需元素，一些个人和组织通过添加其他元素（例如表格、代码块和脚注等）来扩展基本语法。

Markdown 扩展语法通过添加额外功能扩展了 Markdown 基本语法。但是并非所有 Markdown 应用程序都支持这些元素。许多受欢迎的 Markdown 应用程序使用以下轻量级标记语言之一：

* [CommonMark](https://commonmark.org)
* [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm)
* [Markdown Extra](https://michelf.ca/projects/php-markdown/extra)
* [MultiMarkdown](https://fletcherpenney.net/multimarkdown)
* [R Markdown](https://rmarkdown.rstudio.com)

## 表格

要创建表格，应使用三个及以上减号 `---` 分隔每列的标题和内容，并使用管道符 `|` 分隔每列。单元格的宽度可以变化，渲染效果相同。

```Markdown:line-numbers
| Col 1 | Col 2   | Col 3 |
|-------|---------|-------|
| Alpha | Beta    | Gamma |
| Delta | Epsilon | Zeta  |

| Col 1 | Col 2 | Col 3 |
|---|---|---|
| Alpha | Beta | Gamma |
| Delta | Epsilon | Zeta |
```

**渲染效果：**

| Col 1 | Col 2   | Col 3 |
|-------|---------|-------|
| Alpha | Beta    | Gamma |
| Delta | Epsilon | Zeta  |

通过在表格标题下方三个及以上减号 `---` 的左侧、右侧或两侧添加冒号 `:`，实现当前列的左对齐、右对齐或居中对齐。

```Markdown:line-numbers
| Col 1 | Col 2   | Col 3 |
|:------|:-------:|------:|
| Alpha | Beta    | Gamma |
| Delta | Epsilon | Zeta  |
```

**渲染效果：**

| Col 1 | Col 2   | Col 3 |
|:------|:-------:|------:|
| Alpha | Beta    | Gamma |
| Delta | Epsilon | Zeta  |

可以通过 [Markdown Tables Generator](https://www.tablesgenerator.com/markdown_tables) 等图形界面工具创建 Markdown 表格。

::: tip 在表格中创建换行或列表
Markdown 不支持在表格中创建换行或列表，但可以通过 HTML 解决。

```Markdown:line-numbers
| Col 1         | Col 2                                 | Col 3                                  |
|---------------|---------------------------------------|----------------------------------------|
| Alpha<br>Beta | <ol><li>Gamma</li><li>Delta</li></ol> | <ul><li>Epsilon</li><li>Zeta</li></ul> |
```

**渲染效果：**

| Col 1         | Col 2                                 | Col 3                                  |
|---------------|---------------------------------------|----------------------------------------|
| Alpha<br>Beta | <ol><li>Gamma</li><li>Delta</li></ol> | <ul><li>Epsilon</li><li>Zeta</li></ul> |
:::

## 代码块

可以通过将代码的每一行缩进至少四个空格或一个制表符来创建[代码块](/guide/markdown-basic-syntax#代码块)。

要创建无需缩进的代码块，应在代码块的前后行添加连续的三个反引号 ` ``` ` 或三个波浪号 `~~~`。

````Markdown:line-numbers
```
#include <stdio.h>
int main() {
    printf("Hello, World!\n");
    return 0;
}
```

~~~
#include <stdio.h>
int main() {
    printf("Hello, World!\n");
    return 0;
}
~~~
````

**渲染效果：**

```
#include <stdio.h>
int main() {
    printf("Hello, World!\n");
    return 0;
}
```

大部分 Markdown 应用程序都支持代码块语法高亮显示。在代码块前一行连续的三个反引号 ` ``` ` 或三个波浪号 `~~~` 之后指定语言以显示语法高亮。

````Markdown:line-numbers
```C
#include <stdio.h>
int main() {
    printf("Hello, World!\n");
    return 0;
}
```

```C++
#include <iostream>
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

```Java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

```Go
package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}
```
````

**渲染效果：**

```C
#include <stdio.h>
int main() {
    printf("Hello, World!\n");
    return 0;
}
```

```C++
#include <iostream>
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

```Java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

```Go
package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}
```

## 脚注

通过脚注可以添加注释和参考，而不会使文档正文混乱。创建脚注后，表示脚注序号的链接会出现在添加脚注标识的位置，可以点击链接以跳转至页面底部的脚注内容处。

* Markdown 脚注标识语法：`[^标识符]`

* Markdown 脚注内容语法：`[^标识符]: 脚注内容`

要创建脚注标识，应在方括号内添加符号 `^` 和标识符。标识符可以是数字或单词，但不能包含空格或制表符。标识符仅将脚注标识与脚注内容相关联，在输出中，脚注按顺序进行编号。

在脚注标识后添加冒号 `:` 以创建脚注内容。不必在文档末尾添加脚注内容，可以在除列表、表格之类的其他元素之外的文档中任意位置添加脚注内容。

````Markdown:line-numbers
Markdown footnotes support a single paragraph[^1] as well as multiple paragraphs[^footnote].

[^1]: Here's one with a single paragraph.

[^footnote]: Here's one with multiple paragraphs.

    ```Python
    print("Hello, World!")
    ```

    Other elements are also supported in footnotes.
````

**渲染效果：**

Markdown footnotes support a single paragraph[^1] as well as multiple paragraphs[^footnote].

[^1]: Here's one with a single paragraph.

[^footnote]: Here's one with multiple paragraphs.

    ```Python
    print("Hello, World!")
    ```

    Other elements are also supported in footnotes.

## 标题锚点 {#title-anchor}

许多 Markdown 应用程序支持为标题添加自定义 ID（标题锚点），一些 Markdown 应用程序会自动为标题添加锚点：

```Markdown:line-numbers
[www.minmuslin.cn/guide/markdown-extended-syntax#标题锚点](/guide/markdown-extended-syntax#标题锚点)
```

**渲染效果：**

[www.minmuslin.cn/guide/markdown-extended-syntax#标题锚点](/guide/markdown-extended-syntax#标题锚点)

要为标题添加自定义 ID（标题锚点），而不是使用默认自动生成的锚点，应向标题添加后缀：

```Markdown:line-numbers
## 标题锚点 {#title-anchor}

[www.minmuslin.cn/guide/markdown-extended-syntax#title-anchor](/guide/markdown-extended-syntax#title-anchor)
```

这允许将对应标题链接为 `#title-anchor`，而不是默认自动生成的 `#标题锚点`。

**渲染效果：**

[www.minmuslin.cn/guide/markdown-extended-syntax#title-anchor](/guide/markdown-extended-syntax#title-anchor)

## 定义列表

部分 Markdown 应用程序支持创建术语及其对应的定义列表。要创建定义列表，应在第一行输入术语，在下一行输入冒号 `:`，后跟一个空格和定义。

```Markdown:line-numbers
First Term
: This is the definition of the first term.

Second Term
: This is the first definition of the second term.
: This is the second definition of the second term.
```

**渲染效果：**

First Term
: This is the definition of the first term.

Second Term
: This is the first definition of the second term.
: This is the second definition of the second term.

## 删除线

要在文本上添加删除线，应在文本前后添加两个破浪号 `~`。

```Markdown:line-numbers
~~Deleted Text~~
```

**渲染效果：**

~~Deleted Text~~

## 任务列表

可以创建带有复选框的项目列表作为任务列表，在支持任务列表的 Markdown 应用程序中，复选框将显示在任务列表项左侧。

要创建任务列表，应先按照 Markdown [列表](/guide/markdown-basic-syntax#列表)语法创建有序列表或无序列表，之后在任务列表项之前添加方括号 `[ ]` 表示复选框。要勾选一个复选框，应在方括号 `[ ]` 内添加 `x`。

```Markdown:line-numbers
* [x] First Item
* [ ] Second Item
* [ ] Third Item
```

**渲染效果：**

* [x] First Item
* [ ] Second Item
* [ ] Third Item

## Emoji 表情

有两种方法可以将 Emoji 表情添加到 Markdown 文档中：将 Emoji 表情复制并粘贴到 Markdown 文档中，或输入 Emoji Shortcodes。

```Markdown:line-numbers
:heart:
```

**渲染效果：**

:heart:

这里可以查询 VitePress 支持的所有 [Emoji Shortcodes](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)。

## 自动链接

大部分 Markdown 应用程序会自动将链接或电子邮箱地址转换为可点击的链接，而无需使用尖括号。

```Markdown:line-numbers
https://github.com/MinmusLin
minmuslin@outlook.com
```

不同的 Markdown 应用程序处理链接中空格的方式不一致。为保证兼容性，应使用 `%20` 替代空格。

**渲染效果：**

<https://github.com/MinmusLin><br>
<minmuslin@outlook.com>
