# VitePress Markdown 扩展

VitePress 带有内置的 Markdown 扩展。

## 自定义容器

自定义容器可以通过它们的类型、标题和内容来定义。

### 默认标题

```Markdown
::: info
This is an `info` block.

> Quote Paragraph

[Internal Link Example](/guide)

[External Link Example](https://github.com/MinmusLin)
:::

::: tip
This is a `tip` block.

> Quote Paragraph

[Internal Link Example](/guide)

[External Link Example](https://github.com/MinmusLin)
:::

::: warning
This is a `warning` block.

> Quote Paragraph

[Internal Link Example](/guide)

[External Link Example](https://github.com/MinmusLin)
:::

::: danger
This is a `danger` block.

> Quote Paragraph

[Internal Link Example](/guide)

[External Link Example](https://github.com/MinmusLin)
:::

::: details
This is a `details` block.

> Quote Paragraph

[Internal Link Example](/guide)

[External Link Example](https://github.com/MinmusLin)
:::
```

**渲染效果：**

::: info
This is an `info` block.

> Quote Paragraph

[Internal Link Example](/guide)

[External Link Example](https://github.com/MinmusLin)
:::

::: tip
This is a `tip` block.

> Quote Paragraph

[Internal Link Example](/guide)

[External Link Example](https://github.com/MinmusLin)
:::

::: warning
This is a `warning` block.

> Quote Paragraph

[Internal Link Example](/guide)

[External Link Example](https://github.com/MinmusLin)
:::

::: danger
This is a `danger` block.

> Quote Paragraph

[Internal Link Example](/guide)

[External Link Example](https://github.com/MinmusLin)
:::

::: details
This is a `details` block.

> Quote Paragraph

[Internal Link Example](/guide)

[External Link Example](https://github.com/MinmusLin)
:::

### 自定义标题

可以通过在容器的“type”之后附加文本来设置自定义标题。

```Markdown
::: tip Custom Title
This is a `tip` block.
:::
```

**渲染效果：**

::: tip Custom Title
This is a `tip` block.
:::

### `raw` 容器

`raw` 是一个特殊的容器，可以用来防止与 VitePress 的样式和路由冲突。

```Markdown
::: raw
This is a `raw` block.
:::
```

**渲染效果：**

::: raw
This is a `raw` block.
:::

## GitHub 风格的警报

VitePress 同样支持以标注的方式渲染 [GitHub 风格的警报](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts)，它们和[自定义容器](#自定义容器)的渲染方式相同。

### 默认标题

```Markdown
> [!NOTE]
> This is a `note` block.
>
> > Quote Paragraph
>
> [Internal Link Example](/guide)
>
> [External Link Example](https://github.com/MinmusLin)

> [!TIP]
> This is a `tip` block.
>
> > Quote Paragraph
>
> [Internal Link Example](/guide)
>
> [External Link Example](https://github.com/MinmusLin)

> [!IMPORTANT]
> This is an `important` block.
>
> > Quote Paragraph
>
> [Internal Link Example](/guide)
>
> [External Link Example](https://github.com/MinmusLin)

> [!WARNING]
> This is a `warning` block.
>
> > Quote Paragraph
>
> [Internal Link Example](/guide)
>
> [External Link Example](https://github.com/MinmusLin)

> [!CAUTION]
> This is a `caution` block.
>
> > Quote Paragraph
>
> [Internal Link Example](/guide)
>
> [External Link Example](https://github.com/MinmusLin)
```

**渲染效果：**

> [!NOTE]
> This is a `note` block.
>
> > Quote Paragraph
>
> [Internal Link Example](/guide)
>
> [External Link Example](https://github.com/MinmusLin)

> [!TIP]
> This is a `tip` block.
>
> > Quote Paragraph
>
> [Internal Link Example](/guide)
>
> [External Link Example](https://github.com/MinmusLin)

> [!IMPORTANT]
> This is an `important` block.
>
> > Quote Paragraph
>
> [Internal Link Example](/guide)
>
> [External Link Example](https://github.com/MinmusLin)

> [!WARNING]
> This is a `warning` block.
>
> > Quote Paragraph
>
> [Internal Link Example](/guide)
>
> [External Link Example](https://github.com/MinmusLin)

> [!CAUTION]
> This is a `caution` block.
>
> > Quote Paragraph
>
> [Internal Link Example](/guide)
>
> [External Link Example](https://github.com/MinmusLin)

### 自定义标题

同样可以通过在容器的“[!type]”之后附加文本来设置自定义标题。

```Markdown
> [!TIP] Custom Title
> This is a `tip` block.
```

**渲染效果：**

> [!TIP] Custom Title
> This is a `tip` block.

## 代码块

### 语法高亮

VitePress 使用 [Shiki](https://github.com/shikijs/shiki) 在 Markdown 代码块中使用彩色文本实现语法高亮。

这里可以查询 Shiki 支持的所有[编程语言](https://shiki.style/languages)。

### 行高亮

可以在语言后通过花括号 `{}` 指定行号，实现行高亮。

````Markdown
```JavaScript{4}
export default {
  data() {
    return {
      msg: "Highlight Text"
    }
  }
}
```
````

**渲染效果：**

```JavaScript{4}
export default {
  data() {
    return {
      msg: "Highlight Text"
    }
  }
}
```

除了指定单行高亮外，还可以指定多个单行、多行，或两者均指定，实现行高亮。

````Markdown
```JavaScript{4,6,7-8,10-11}
export default {
  data() {
    return {
      msg1: "Highlight Text 1",
      msg2: "Normal Text",
      msg3: "Highlight Text 2",
      msg4: "Normal Text",
      msg5: "Highlight Text 3",
      msg6: "Highlight Text 4",
      msg7: "Normal Text",
      msg8: "Highlight Text 5",
      msg9: "Highlight Text 6"
    }
  }
}
```
````

**渲染效果：**

```JavaScript{4,6,8-9,11-12}
export default {
  data() {
    return {
      msg1: "Highlight Text 1",
      msg2: "Normal Text",
      msg3: "Highlight Text 2",
      msg4: "Normal Text",
      msg5: "Highlight Text 3",
      msg6: "Highlight Text 4",
      msg7: "Normal Text",
      msg8: "Highlight Text 5",
      msg9: "Highlight Text 6"
    }
  }
}
```

也可以使用 `// [!code highlight]` 注释实现行高亮。

````Markdown
```JavaScript
export default {
  data() {
    return {
      msg: "Highlight Text" // [!​code highlight]
    }
  }
}
```
````

**渲染效果：**

```JavaScript
export default {
  data() {
    return {
      msg: "Highlight Text" // [!code highlight]
    }
  }
}
```

### 聚焦

可以使用 `// [!code focus]` 注释将这一行代码聚焦，并模糊代码的其他部分。

````Markdown
```JavaScript
export default {
  data() {
    return {
      msg: "Highlight Text" // [!​code focus]
    }
  }
}
```
````

**渲染效果：**

```JavaScript
export default {
  data() {
    return {
      msg: "Highlight Text" // [!code focus]
    }
  }
}
```

也可以使用 `// [!code focus:lines]` 注释定义要聚焦的行数。

````Markdown
```JavaScript
export default {
  data() {
    return { // [!​code focus:3]
      msg: "Highlight Text"
    }
  }
}
```
````

**渲染效果：**

```JavaScript
export default {
  data() {
    return { // [!code focus:3]
      msg: "Highlight Text"
    }
  }
}
```

### 差异

在某一行添加 `// [!code --]` 或 `// [!code ++]` 注释将为该行创建 Diff，同时保留代码块的颜色。

````Markdown
```JavaScript
export default {
  data() {
    return {
      msg: 'Removed Text' // [!​code --]
      msg: 'Added Text' // [!​code ++]
    }
  }
}
```
````

**渲染效果：**

```JavaScript
export default {
  data() {
    return {
      msg: 'Removed Text' // [!code --]
      msg: 'Added Text' // [!code ++]
    }
  }
}
```

也可以直接创建 Diff。

````Markdown
```Diff
@@ -1,7 +1,7 @@
 export default {
   data() {
     return {
-      msg: 'Removed Text'
+      msg: 'Added Text'
     }
   }
 }
```
````

**渲染效果：**

```Diff
@@ -1,7 +1,7 @@
 export default {
   data() {
     return {
-      msg: 'Removed Text'
+      msg: 'Added Text'
     }
   }
 }
```

### “错误”和“警告”

在某一行添加 `// [!code warning]` 或 `// [!code error]` 注释将为该行创建相应的着色。

````Markdown
```JavaScript
export default {
  data() {
    return {
      msg: 'Error Text', // [!​code error]
      msg: 'Warning Text' // [!​code warning]
    }
  }
}
```
````

**渲染效果：**

```JavaScript
export default {
  data() {
    return {
      msg: 'Error Text', // [!code error]
      msg: 'Warning Text' // [!code warning]
    }
  }
}
```

### 行号

本 VitePress 站点已经配置为每个代码块默认启用行号：

```JavaScript [docs/.vitepress/config.mts]
export default defineConfig({
  ...
  markdown: {
    lineNumbers: true
  }
  ...
})
```

可以在代码块中添加 `:line-numbers`（启用行号）或 `:no-line-numbers`（禁用行号）标记来覆盖默认配置。

还可以通过在 `:line-numbers` 标记之后添加等号 `=` 来自定义起始行号，如 `:line-numbers=2` 表示代码块中的行号从 2 开始。

````Markdown
```TypeScript {1}
// 默认启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```TypeScript {1}
// 显式启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```TypeScript:line-numbers=2 {1}
// 显式启用行号（行号从 2 开始）
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```

```TypeScript:no-line-numbers {1}
// 禁用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```
````

**渲染效果：**

```TypeScript {1}
// 默认启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```TypeScript {1}
// 显式启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```TypeScript:line-numbers=2 {1}
// 显式启用行号（行号从 2 开始）
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```

```TypeScript:no-line-numbers {1}
// 禁用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

### 导入代码片段

### 代码组

## 包含 Markdown 文件
