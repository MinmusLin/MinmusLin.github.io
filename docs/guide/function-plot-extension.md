# 函数图像扩展

[Function Plot](https://mauriciopoppe.github.io/function-plot) 是一个基于 [D3.js](https://d3js.org/) 构建的绘图库，它能够以极简的配置渲染数学函数。

该库目前支持交互式折线图和散点图。当图表比例被修改时，函数会依据新的边界范围重新计算，从而实现 **无限缩放** 的效果。

与其他使用 $n$ 个等距点并通过线段连接来绘图的工具不同，Function Plot 采用了 **区间算法**。这种方法能精确判定屏幕上需要绘制的区域，并仅需少量采样点即可完成。

大多数简单的绘图工具在绘制振荡过于剧烈的函数时会遇到问题。例如，函数 $f(x) = \sin(e^x)$ 在 $x > 5$ 时会快速振荡。无论对函数进行多少次采样评估，这类工具都难以正确渲染该函数。

Function Plot 则通过[区间算法](https://github.com/mauriciopoppe/interval-arithmetic)来评估函数。这意味着，当一个 $x$ 轴边界为 $[x_i, x_{i+1}]$ 的矩形区域显示在屏幕上时，可以确保该矩形包含了所有 $\xi \in [x_i, x_{i+1}]$ 所对应的 $f(\xi)$ 值。最终结果就是：实现曲线的像素级完美呈现。

<FunctionPlot :options="{
  height: 250,
  xAxis: { domain: [-4, 8] },
  disableZoom: true,
  data: [
    { fn: 'sin(exp(x))' }
  ]
}"/>

::: tip
为了让函数图像获得最佳的显示效果，本 VitePress 站点已设置默认函数图像尺寸为 `width: 640px` 和 `height: 480px`。

如果需要自定义函数图像大小，只需在调用 `<FunctionPlot>` 标签时传入 `width` 和 `height` 属性即可覆盖默认值。
:::

::: warning
由于 Function Plot 依赖浏览器的布局 API，因此无法进行 SSR（服务端渲染），只能在前端渲染。因此如果 Function Plot 代码中存在错误，无法在 VitePress 构建时发现，在插入 Function Plot 函数图像时应保证内容按预期呈现。
:::

下面是一些函数图像示例，可以在 [Function Plot](https://mauriciopoppe.github.io/function-plot) 的 [接口文档](https://mauriciopoppe.github.io/function-plot/docs/interfaces/FunctionPlotOptions.html) 中查询完整用法。

## 函数图像绘制

```Vue
<FunctionPlot :options="{
  data: [
    { fn: 'x', color: 'pink' },
    { fn: '-x' },
    { fn: 'x^2' },
    { fn: 'x^3' },
    { fn: 'nthRoot(x, 3)^2' }
  ]
}"/>
```

**渲染效果：**

<FunctionPlot :options="{
  data: [
    { fn: 'x', color: 'pink' },
    { fn: '-x' },
    { fn: 'x^2' },
    { fn: 'x^3' },
    { fn: 'nthRoot(x, 3)^2' }
  ]
}"/>

## 附加选项

```Vue
<FunctionPlot :options="{
  title: 'y = x²',
  disableZoom: true,
  xAxis: {
    label: 'x - axis',
  },
  yAxis: {
    label: 'y - axis'
  },
  grid: true,
  data: [
    { fn: 'x^2' }
  ]
}"/>
```

**渲染效果：**

<FunctionPlot :options="{
  title: 'y = x²',
  disableZoom: true,
  xAxis: {
    label: 'x - axis',
  },
  yAxis: {
    label: 'y - axis'
  },
  grid: true,
  data: [
    { fn: 'x^2' }
  ]
}"/>

## 坐标范围

```Vue
<FunctionPlot :options="{
  yAxis: { domain: [-1, 1] },
  xAxis: { domain: [8, 24] },
  data: [
    { fn: 'sin(x)' }
  ]
}"/>
```

**渲染效果：**

<FunctionPlot :options="{
  yAxis: { domain: [-1, 1] },
  xAxis: { domain: [8, 24] },
  data: [
    { fn: 'sin(x)' }
  ]
}"/>

## 采样数量

```Vue
<FunctionPlot :options="{
  data: [
    { fn: 'sin(x)', nSamples: 200 },
    { fn: 'cos(x)', nSamples: 1000 }
  ]
}"/>
```

**渲染效果：**

<FunctionPlot :options="{
  data: [
    { fn: 'sin(x)', nSamples: 200 },
    { fn: 'cos(x)', nSamples: 1000 }
  ]
}"/>

## 函数图像类型

```Vue
<FunctionPlot :options="{
  data: [
    { fn: '-sqrt(-x)', nSamples: 100, graphType: 'scatter' },
    { fn: 'sqrt(x)', graphType: 'polyline' },
    { fn: 'x^2', graphType: 'interval' }
  ]
}"/>
```

**渲染效果：**

<FunctionPlot :options="{
  data: [
    { fn: '-sqrt(-x)', nSamples: 100, graphType: 'scatter' },
    { fn: 'sqrt(x)', graphType: 'polyline' },
    { fn: 'x^2', graphType: 'interval' }
  ]
}"/>

## 定义域与闭合路径

```Vue
<FunctionPlot :options="{
  xAxis: { domain: [-2, 12] },
  data: [
    { fn: '3 + sin(x)', range: [2, 8], closed: true }
  ]
}"/>
```

**渲染效果：**

<FunctionPlot :options="{
  xAxis: { domain: [-2, 12] },
  data: [
    { fn: '3 + sin(x)', range: [2, 8], closed: true }
  ]
}"/>

## 对数刻度

```Vue
<FunctionPlot :options="{
  xAxis: { type: 'log', domain: [0.01, 1] },
  yAxis: { domain: [-100, 100] },
  grid: true,
  data: [
    { fn: '1/x * cos(1/x)', closed: true }
  ]
}"/>
```

**渲染效果：**

<FunctionPlot :options="{
  xAxis: { type: 'log', domain: [0.01, 1] },
  yAxis: { domain: [-100, 100] },
  grid: true,
  data: [
    { fn: '1/x * cos(1/x)', closed: true }
  ]
}"/>

## 注解

```Vue
<FunctionPlot :options="{
  yAxis: { domain: [-1, 9] },
  data: [
    { fn: 'x^2'}
  ],
  annotations: [
    { x: -1 },
    { x: 1, text: 'x = 1' },
    { y: 2, text: 'y = 2' }
  ]
}"/>
```

**渲染效果：**

<FunctionPlot :options="{
  yAxis: { domain: [-1, 9] },
  data: [
    { fn: 'x^2'}
  ],
  annotations: [
    { x: -1 },
    { x: 1, text: 'x = 1' },
    { y: 2, text: 'y = 2' }
  ]
}"/>

## 提示

```Vue
<FunctionPlot :options="{
  tip: {
    xLine: true,
    yLine: true,
    renderer: function (x, y, index) {
      return 'x=' + x + ', y=' + y + ', index=' + index
    }
  },
  yDomain: [-1, 9],
  data: [
    { fn: 'x^2' },
    { fn: 'x' },
    { fn: '-x', skipTip: true }
  ]
}"/>
```

**渲染效果：**

<FunctionPlot :options="{
  tip: {
    xLine: true,
    yLine: true,
    renderer: function (x, y, index) {
      return 'x=' + x + ', y=' + y + ', index=' + index
    }
  },
  yDomain: [-1, 9],
  data: [
    { fn: 'x^2' },
    { fn: 'x' },
    { fn: '-x', skipTip: true }
  ]
}"/>

## 割线

::: code-group
```Vue [静态割线]
<FunctionPlot :options="{
  yAxis: { domain: [-1, 9] },
  xAxis: { domain: [-3, 3] },
  data: [
    {
      fn: 'x^2',
      secants: [
        { x0: 1, x1: 3 },
        { x0: 1, x1: 2.5 },
        { x0: 1, x1: 2 }
      ]
    }
  ]
}"/>
```

```Vue [动态割线]
<FunctionPlot :options="{
  data: [
    {
      fn: 'x^2',
      secants: [
        { x0: 2, updateOnMouseMove: true },
        { x0: -2, updateOnMouseMove: true }
      ]
    }
  ]
}"/>
```
:::

**渲染效果：**

::: tabs
=== 静态割线

<FunctionPlot :options="{
  yAxis: { domain: [-1, 9] },
  xAxis: { domain: [-3, 3] },
  data: [
    {
      fn: 'x^2',
      secants: [
        { x0: 1, x1: 3 },
        { x0: 1, x1: 2.5 },
        { x0: 1, x1: 2 }
      ]
    }
  ]
}"/>

=== 动态割线

<FunctionPlot :options="{
  data: [
    {
      fn: 'x^2',
      secants: [
        { x0: 2, updateOnMouseMove: true },
        { x0: -2, updateOnMouseMove: true }
      ]
    }
  ]
}"/>
:::

## 导数

::: code-group
```Vue [固定点切线]
<FunctionPlot :options="{
  yAxis: { domain: [-1, 9] },
  data: [
    {
      fn: 'x^2',
      derivative: { fn: '2 * x', x0: 2 }
    }
  ]
}"/>
```

```Vue [动态切线]
<FunctionPlot :options="{
  yAxis: { domain: [-1, 9] },
  data: [
    {
      fn: 'x^2',
      derivative: { fn: '2 * x', updateOnMouseMove: true }
    }
  ]
}"/>
```

```Vue [多函数动态切线]
<FunctionPlot :options="{
  data: [
    {
      fn: 'x * x',
      derivative: { fn: '2 * x', updateOnMouseMove: true }
    },
    {
      fn: 'x * x * x',
      derivative: { fn: '3 * x * x', updateOnMouseMove: true }
    }
  ]
}"/>
```
:::

**渲染效果：**

::: tabs
=== 固定点切线

<FunctionPlot :options="{
  yAxis: { domain: [-1, 9] },
  data: [
    {
      fn: 'x^2',
      derivative: { fn: '2 * x', x0: 2 }
    }
  ]
}"/>

=== 动态切线

<FunctionPlot :options="{
  yAxis: { domain: [-1, 9] },
  data: [
    {
      fn: 'x^2',
      derivative: { fn: '2 * x', updateOnMouseMove: true }
    }
  ]
}"/>

=== 多函数动态切线

<FunctionPlot :options="{
  data: [
    {
      fn: 'x * x',
      derivative: { fn: '2 * x', updateOnMouseMove: true }
    },
    {
      fn: 'x * x * x',
      derivative: { fn: '3 * x * x', updateOnMouseMove: true }
    }
  ]
}"/>
:::

## 函数连续性

::: code-group
```Vue [反比例函数]
<FunctionPlot :options="{
  data: [
    {
      fn: '1 / x',
      derivative: { fn: '-1 / x / x', updateOnMouseMove: true }
    }
  ]
}"/>
```

```Vue [正切函数]
<FunctionPlot :options="{
  data: [
    {
      fn: 'tan(x)',
      derivative: { fn: '1 / (cos(x) ^ 2)', updateOnMouseMove: true }
    }
  ]
}"/>
```
:::

**渲染效果：**

::: tabs
=== 反比例函数

<FunctionPlot :options="{
  data: [
    {
      fn: '1 / x',
      derivative: { fn: '-1 / x / x', updateOnMouseMove: true }
    }
  ]
}"/>

=== 正切函数

<FunctionPlot :options="{
  data: [
    {
      fn: 'tan(x)',
      derivative: { fn: '1 / (cos(x) ^ 2)', updateOnMouseMove: true }
    }
  ]
}"/>
:::

## 参数方程

::: code-group
```Vue [单位圆]
<FunctionPlot :options="{
  xAxis: { domain: [-3, 3] },
  data: [
    {
      x: 'cos(t)',
      y: 'sin(t)',
      fnType: 'parametric',
      graphType: 'polyline'
    }
  ]
}"/>
```

```Vue [蝴蝶曲线]
<FunctionPlot :options="{
  xAxis: { domain: [-7, 7] },
  data: [
    {
      x: 'sin(t) * (exp(cos(t)) - 2 cos(4t) - sin(t/12)^5)',
      y: 'cos(t) * (exp(cos(t)) - 2 cos(4t) - sin(t/12)^5)',
      range: [-10 * Math.PI, 10 * Math.PI],
      fnType: 'parametric',
      graphType: 'polyline'
    }
  ]
}"/>
```
:::

**渲染效果：**

::: tabs
=== 单位圆

<FunctionPlot :options="{
  xAxis: { domain: [-3, 3] },
  data: [
    {
      x: 'cos(t)',
      y: 'sin(t)',
      fnType: 'parametric',
      graphType: 'polyline'
    }
  ]
}"/>

=== 蝴蝶曲线

<FunctionPlot :options="{
  xAxis: { domain: [-7, 7] },
  data: [
    {
      x: 'sin(t) * (exp(cos(t)) - 2 cos(4t) - sin(t/12)^5)',
      y: 'cos(t) * (exp(cos(t)) - 2 cos(4t) - sin(t/12)^5)',
      range: [-10 * Math.PI, 10 * Math.PI],
      fnType: 'parametric',
      graphType: 'polyline'
    }
  ]
}"/>
:::

## 极坐标方程

::: code-group
```Vue [单位圆]
<FunctionPlot :options="{
  xAxis: { domain: [-3, 3] },
  data: [
    {
      r: 'r0 * cos(theta - gamma) + sqrt(a^2 - r0^2 * (sin(theta - gamma))^2)',
      scope: { a: 1, r0: 0, gamma: 0 },
      fnType: 'polar',
      graphType: 'polyline'
    }
  ]
}"/>
```

```Vue [玫瑰曲线]
<FunctionPlot :options="{
  xAxis: { domain: [-3, 3] },
  data: [
    {
      r: '2 * sin(4 theta)',
      fnType: 'polar',
      graphType: 'polyline'
    }
  ]
}"/>
```
:::

**渲染效果：**

::: tabs
=== 单位圆

<FunctionPlot :options="{
  xAxis: { domain: [-3, 3] },
  data: [
    {
      r: 'r0 * cos(theta - gamma) + sqrt(a^2 - r0^2 * (sin(theta - gamma))^2)',
      scope: { a: 1, r0: 0, gamma: 0 },
      fnType: 'polar',
      graphType: 'polyline'
    }
  ]
}"/>

=== 玫瑰曲线

<FunctionPlot :options="{
  xAxis: { domain: [-3, 3] },
  data: [
    {
      r: '2 * sin(4 theta)',
      fnType: 'polar',
      graphType: 'polyline'
    }
  ]
}"/>
:::

## 隐函数

::: code-group
```Vue [实隐函数]
<FunctionPlot :options="{
  xAxis: { domain: [-3, 3] },
  data: [
    { fn: 'x * x + y * y - 1', fnType: 'implicit' }
  ]
}"/>
```

```Vue [复隐函数]
<FunctionPlot :options="{
  xAxis: { domain: [-6, 6] },
  disableZoom: true,
  data: [
    { fn: 'cos(PI * x) - cos(PI * y)', fnType: 'implicit' }
  ]
}"/>
```
:::

**渲染效果：**

::: tabs
=== 实隐函数

<FunctionPlot :options="{
  xAxis: { domain: [-3, 3] },
  data: [
    { fn: 'x * x + y * y - 1', fnType: 'implicit' }
  ]
}"/>

=== 复隐函数

<FunctionPlot :options="{
  xAxis: { domain: [-6, 6] },
  disableZoom: true,
  data: [
    { fn: 'cos(PI * x) - cos(PI * y)', fnType: 'implicit' }
  ]
}"/>
:::

## 点、折线、向量与文本

```Vue
<FunctionPlot :options="{
  data: [
    {
      points: [
        [1, 1], [2, 1], [2, 2], [1, 2], [1, 1]
      ],
      fnType: 'points',
      graphType: 'scatter'
    },
    {
      points: [
        [1, -1], [2, -1], [2, -2], [1, -2], [1, -1]
      ],
      fnType: 'points',
      graphType: 'polyline'
    },
    {
      vector: [2, 1],
      offset: [-3, -2],
      graphType: 'polyline',
      fnType: 'vector'
    },
    {
      graphType: 'text',
      location: [-3, 1],
      text: 'Second Quadrant',
      color: 'purple'
    },
  ]
}"/>
```

**渲染效果：**

<FunctionPlot :options="{
  data: [
    {
      points: [
        [1, 1], [2, 1], [2, 2], [1, 2], [1, 1]
      ],
      fnType: 'points',
      graphType: 'scatter'
    },
    {
      points: [
        [1, -1], [2, -1], [2, -2], [1, -2], [1, -1]
      ],
      fnType: 'points',
      graphType: 'polyline'
    },
    {
      vector: [2, 1],
      offset: [-3, -2],
      graphType: 'polyline',
      fnType: 'vector'
    },
    {
      graphType: 'text',
      location: [-3, 1],
      text: 'Second Quadrant',
      color: 'purple'
    },
  ]
}"/>
