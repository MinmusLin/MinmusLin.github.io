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
