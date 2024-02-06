---
title: Markdown
top: false
cover: false
toc: true
mathjax: false
date: 2024-01-21 11:50:23
author:
img:
coverImg:
password:
summary:
tags:
    - Markdown
categories:
    - Markdown
---

### 1. Markdown注释

``` markdown
#### 基于HTML标签的注释

<!-- 注释：春风若有怜花意，可否许我再少年~ -->

春风若有怜花意，可否许我再少年~

#### 基于HTML样式

<div style="display:none">
注释：春风若有怜花意，可否许我再少年~
</div>

春风若有怜花意，可否许我再少年~


#### 通过Markdown解析达到注释效果

[//]: (注释：春风若有怜花意，可否许我再少年~)

春风若有怜花意，可否许我再少年~
```

#### 1.1. 基于HTML标签的注释
<!-- 注释：春风若有怜花意，可否许我再少年~ -->
春风若有怜花意，可否许我再少年~

#### 1.2. 基于HTML样式
<div style="display:none">
注释：春风若有怜花意，可否许我再少年~
</div>
春风若有怜花意，可否许我再少年~

#### 1.3. 通过Markdown解析达到注释效果
[//]: (注释：春风若有怜花意，可否许我再少年~)
春风若有怜花意，可否许我再少年~

### 2. tag 按钮

#### 2.1. 使用方法

```markdown
{% button url, text, icon [class], [title] %}

or

{% btn url, text, icon [class], [title] %}
```

- `url`：URL的绝对/相对路径
- `text`：按钮文本，如果未指定图标则为必填项
- `icon`：Font Awesome 图标，如果未指定文本则为必填项
- `class`：可选参数，Font Awesome类：`fa-fw` | `fa-lg` | `fa-2x` | `fa-3x` | `fa-4x` | `fa-5x`
- `title`：可选参数，鼠标悬停时的工具提示

#### 2.2. 示例

```markdown
{% button #, Text %} <!-- 普通按钮 -->
{% btn #, Text & Title,, Title %} <!-- 带title的按钮，省略icon -->
```

{% button #, Text %} <!-- 普通按钮 -->
{% btn #, Text & Title,, Title %} <!-- 带title的按钮 -->

```markdown
{% button #,, home fa-5x %} <!-- home图标，大小为5x，省略文本 -->
{% btn #,, home fa-2x %} <!-- home图标，大小为2x -->
{% btn #,, home %} <!-- home图标，默认大小 -->
```

{% button #,, home fa-5x %} <!-- home图标，大小为5x -->
{% btn #,, home fa-2x %} <!-- home图标，大小为2x -->
{% btn #,, home %} <!-- home图标，默认大小 -->

```markdown
{% button #, Text & icon, home %} <!-- text + 图标，默认大小 -->
{% btn #, Text & icon (fixed width), home fa-fw %} <!-- text + 图标，fixed width -->
```

{% button #, Text & icon, home %} <!-- text + 图标，默认大小 -->
{% btn #, Text & icon (fixed width), home fa-fw %} <!-- text + 图标，fixed width -->

```markdown
青丝白发一瞬间，年华老去向谁言。{% btn #, mark, bookmark fa-fw fa-light %} 春风若有怜老意，可否许我再少年？<!-- 文字内嵌按钮 -->
```

青丝白发一瞬间，年华老去向谁言。{% btn #, mark, bookmark fa-fw fa-light %} 春风若有怜老意，可否许我再少年？<!-- 文字内嵌按钮 -->

```markdown
{% note info %} <!-- note内嵌图标 -->
{% btn #, Text & icon (fixed width), home fa-fw %}

{% btn #,, home, Title %}{% btn #, Text %}
{% endnote %}
```

{% note info %}
{% btn #, Text & icon (fixed width), home fa-fw %}

{% btn #,, home, Title %}{% btn #, Text %}
{% endnote %}



```markdown
<div class="center"><div>{% btn #,, heading %}{% btn #,, fab fa-edge %}{% btn #,, times %}{% btn #,, circle-notch %}</div>  <!-- 图标对齐 -->
<div>{% btn #,, italic %}{% btn #,, fab fa-scribd %}{% btn #,, bookmark fa-light %}{% btn #,, fab fa-instagram %}</div>
<div>{% btn #,, fab fa-google %}{% btn #,, fab fa-chrome %}{% btn #,, fab fa-opera %}{% btn #,, gem fa-rotate-270 %}</div></div>
```

<div class="center"><div>{% btn #,, heading %}{% btn #,, fab fa-edge %}{% btn #,, times %}{% btn #,, circle-notch %}</div>  <!-- 图标对齐 -->
<div>{% btn #,, italic %}{% btn #,, fab fa-scribd %}{% btn #,, bookmark fa-light %}{% btn #,, fab fa-instagram %}</div>
<div>{% btn #,, fab fa-google %}{% btn #,, fab fa-chrome %}{% btn #,, fab fa-opera %}{% btn #,, gem fa-rotate-270 %}</div></div>



```markdown
<div class="center">{% btn https://github.com, Github, fab fa-github fa-fw fa-lg, Github %}</div> <!-- 带URL链接的按钮 -->
```

<div class="center">{% btn https://github.com, Github, fab fa-github fa-fw fa-lg, Github %}</div>

### 3. tag 备注

#### 3.1. 使用方法

```markdown
{% note [class] [no-icon] [summary] %}
Any content (support inline tags)
{% endnote %}
```

* `class`：可选参数，支持值：`default` | `primary` | `success` | `info` | `warning` | `danger`
* `no-icon`：在note中不显示图标
* `summary`：可选的注释摘要

#### 3.2. 示例

```markdown
{% note %}
普通note
{% endnote %}
```

{% note %}
普通note
{% endnote %}

```markdown
{% note default %}
default note
{% endnote %}
```

{% note default %}
default note
{% endnote %}

```markdown
{% note primary %}
primary note
{% endnote %}
```

{% note primary %}
primary note
{% endnote %}

```markdown
{% note success %}
success note
{% endnote %}
```

{% note success %}
success note
{% endnote %}

```markdown
{% note  info %}
info note
{% endnote %}
```

{% note  info %}
info note
{% endnote %}

```markdown
{% note warning %}
warning note
{% endnote %}
```

{% note warning %}
warning note
{% endnote %}

```markdown
{% note danger %}
danger note
{% endnote %}
```

{% note danger %}
danger note
{% endnote %}

```markdown
{% note no-icon %}
no-icon note
{% endnote %}
```

{% note no-icon %}
no-icon note
{% endnote %}

```markdown
{% note no-icon Summary %}
no-icon summary note
{% endnote %}
```

{% note no-icon Summary %}
no-icon summary note
{% endnote %}

````markdown
{% note info %}
<!-- note中插入代码块 -->
```c
#include <stdlib.h>
#include <stdio.h>

int main ()
{
	printf("hello world!\n");
	return 0;
}
```
{% endnote %}
````

{% note info %}
<!-- note中插入代码块 -->
```c
#include <stdlib.h>
#include <stdio.h>

int main ()
{
	printf("hello world!\n");
	return 0;
}
```
{% endnote %}

```markdown
{% note info %}
<!-- note中插入列表、表格 -->
* word
* word
	* word
	* word
1. word
2. word
	1. word
	2. word
3. word

| 1 | 2 |
| - | - |
| 3 | 4 |

{% endnote %}
```

{% note info %}
<!-- note中插入列表、表格 -->

* word
* word
	* word
	* word
1. word
2. word
	1. word
	2. word
3. word

| 1    | 2    |
| ---- | ---- |
| 3    | 4    |

{% endnote %}

### 4. tag 标签

> 当前`matery`主题不支持，需手动添加支持`label`
>
> 可参考[fluid主题](https://github.com/fluid-dev/hexo-theme-fluid/tree/master/scripts/tags)

#### 4.1. 使用方法

```markdown
{% label classes @text %}

or

<span class="label label-primary">Label</span>
```

* `classes`：可选参数，支持值：`default` | `primary` | `success` | `info` | `warning` | `danger`
* `text`：使用第一种方法时，`text`不能以`@`开头

#### 4.2. 示例

```markdown
* {% label default @default %}
* {% label primary @primary %}
* {% label success @success %}
* {% label info @info %}
* {% label warning @warning %}
* {% label danger @danger %}

```

* {% label default @default %}
* {% label primary @primary %}
* {% label success @success %}
* {% label info @info %}
* {% label warning @warning %}
* {% label danger @danger %}

### 5. tag 图组

> 当前`matery`主题不支持，需手动添加支持`group-image`

> 可参考[fluid主题](https://github.com/fluid-dev/hexo-theme-fluid/tree/master/scripts/tags)

#### 5.1. 使用方法

```markdown
{% gi total n1-n2-... %}
	![](url)
	![](url)
	![](url)
{% endgi %}
```

* `total`：图片总数量，对呀图片`url`数量
* `n1-n2-...`：每行的图片数量，可以省略，每行最多三张图

#### 5.2. 示例

```markdown
{% gi 4 2-2 %}
![](https://cdn.jsdelivr.net/gh/ershengaaa/ershengaaa.github.io/medias/images/03.jpg)
![](https://cdn.jsdelivr.net/gh/ershengaaa/ershengaaa.github.io/medias/images/01.jpg)
![](https://cdn.jsdelivr.net/gh/ershengaaa/ershengaaa.github.io/medias/images/01.jpg)
![](https://cdn.jsdelivr.net/gh/ershengaaa/ershengaaa.github.io/medias/images/03.jpg)
{% endgi %}
```

{% gi 4 2-2 %}
![](https://cdn.jsdelivr.net/gh/ershengaaa/ershengaaa.github.io/medias/images/03.jpg)
![](https://cdn.jsdelivr.net/gh/ershengaaa/ershengaaa.github.io/medias/images/01.jpg)
![](https://cdn.jsdelivr.net/gh/ershengaaa/ershengaaa.github.io/medias/images/01.jpg)
![](https://cdn.jsdelivr.net/gh/ershengaaa/ershengaaa.github.io/medias/images/03.jpg)
{% endgi %}

### 6. hexo-admonition

> [hexo-admonition](https://github.com/lxl80/hexo-admonition)

#### 6.1. 使用方法

```markdown
!!! type Test Hexo-admonition
    Test Hexo-admonition
```

* `type`：支持类型，`note` | `info` | `todo` | `warning` | `attention` | `caution` | `error` | `failure` | `missing` | `fail`

#### 6.2. 示例

````markdown
```
!!! note 
    note采用默认title示例 <!-- 内容开头需4个空格，使用tab存在问题 -->
```

```
!!! note ""
    不采用默认title示例
```

```
!!! info 嵌套链接及引用块
    嵌套链接：[昭阳](https://www.ershengaaa.cn)
    > 引用信息
```

```
!!! error Hexo-admonition 插件使用示例
    这是基于 hexo-admonition 插件渲染的一条提示信息。类型为 note，并设置了自定义标题。
    提示内容开头留 4 个空格，可以有多行，最后用空行结束此标记。
```
````

!!! note 
    note采用默认title示例

!!! note ""
    不采用默认title示例

!!! info 嵌套链接及引用块
    嵌套链接：[昭阳](https://www.ershengaaa.cn)
    > 引用信息

!!! error Hexo-admonition 插件使用示例
    这是基于 hexo-admonition 插件渲染的一条提示信息。类型为 note，并设置了自定义标题。
    提示内容开头留 4 个空格，可以有多行，最后用空行结束此标记。

### 7. 公式测试

#### 7.1. 用法

> [markdown-it-latex2img](https://github.com/MakerGYT/markdown-it-latex2img)
>
> [demo](https://makergyt.github.io/markdown-it-latex2img/)

#### 7.2 数学公式
##### 7.2.1. 内联公式
**开头的`$`必须在其右边紧跟一个非空格字符，而结尾的`$`必须在其左边紧接一个非空格字符，并且不能紧跟一个数字。**

- 勾股定理: $a^2+b^2=c^2$
- 等差数列求和公式: $S_{n}=n a_{1}+\frac{n(n-1)}{2} d, n \in N^{*}$
- 牛顿-莱布尼茨公式: $\int_{a}^{b} f(x) d x=F(b)-F(a)=\left.F(x)\right|_{a} ^{b}$
- 二项分布: $P_{n}(k)=C_{n}^{k} p^{k} q^{n-k} \quad k=0,1,2 \ldots \ldots, n$
##### 7.2.2. 块公式
正态分布$X \sim N(\mu,\sigma^2)$: 
$$
f(x) = \frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(x-\mu)^2}{2\sigma^2}}
$$
斐波那契数列$A_n=A_{n-1}+A_{n-2}$,前后两项的比值逐渐收敛到黄金分割比例
$$
\lim_{n\to \infty}\frac{A_{n-1}}{A_n}=\frac{\sqrt{5}-1}{2}.
$$
因式分解
$$
\begin{split}(x−1)(x−3)&=x^2−4x+3 \\ 
&=x^2−4x+4−1 \\ 
&=(x−2)^2−1
\end{split}
$$
狄利克雷函数
$$
D(x)=
\begin{cases}
1,& x \in Q \\
0,& x \notin Q
\end{cases}
$$
高斯公式
$$
\iiint_{\Omega}\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right) d v=\iint_{\Sigma} P d y d z+Q d z d x+R d x d y
$$
范德蒙行列式
$$
D_{n-1}=\left|\begin{array}{cccc}
1 & 1 & \dots & 1 \\
x_{2} & x_{3} & \dots & x_{n} \\
\vdots & \vdots & & \vdots \\
x_{2}^{n-2} & x_{3}^{n-2} & \dots & x_{n}^{n-2}
\end{array}\right|=\prod_{2 \leq j<i \leq n}\left(x_{i}-x_{j}\right)
$$
线性方程组
$$
\left\{\begin{aligned}
a_{11} x_{1}+a_{12} x_{2}+\cdots+a_{1 n} x_{n} &=b_{1} \\
a_{21} x_{1}+a_{22} x_{2}+\cdots+a_{2 n} x_{n} &=b_{2} \\
\cdots \cdots \cdots \\
a_{m 1} x_{1}+a_{m 2} x_{2}+\cdots+a_{m n} x_{n} &=b_{m}
\end{aligned}\right.
$$

#### 7.3. 物理公式

- 牛顿第一定律: $\sum \vec{F}_{i}=\frac{\mathrm{d} \vec{v}}{\mathrm{d} t}=0$
- 牛顿第二定律: $\vec{F}=\frac{\mathrm{d} m}{\mathrm{d} t} \vec{v}+m \frac{\mathrm{d} \vec{v}}{\mathrm{d} t}=\frac{\mathrm{d} m}{\mathrm{d} t} \vec{v}+m \vec{a}=\frac{\mathrm{d} m}{\mathrm{d} t} \vec{v}+m \frac{\mathrm{d}^{2} \vec{r}}{\mathrm{d} t^{2}}$
- 牛顿第三定律: $\overrightarrow{F_{12}}=-\overrightarrow{F_{21}}$
- 质能守恒: $E=mc^2$

万有引力定律: $F=\frac{G M m}{r^{2}}$
$$G \frac{m M}{(r+h)^{2}}=m \frac{\nu^{2}}{(r+h)}$$
基尔霍夫定律
$$\left[\frac{\partial\left(\Delta_{r} H_{m}\right)}{\partial T}\right]_{p}=\sum_{B} v_{B} C_{p, m}(B)$$
热力学第二定律
$$d S \geq \frac{\delta Q}{T}$$

#### 7.4. 化学公式

离子反应与沉淀: $\ce{SO4^2- + Ba^2+ -> BaSO4 v}$

氮气氢气合成氨
$$
\ce{N2 + 3H2 <=>T[高温、加压][催化剂] 2NH3}
$$
化学平衡常数:$\mathrm{Zn}+2 \mathrm{HCl}(\mathrm{aq})=\mathrm{H}_{2}+\mathrm{ZnCl}_{2} \quad(\mathrm{aq})$
$$K^{\theta}=\frac{\left[p\left(\mathrm{H}_{2}\right) / p^{\theta}\right]\left[c\left(\mathrm{ZnCl}_{2}\right)\right]}{c^{2}(\mathrm{HC})}$$

#### 7.4. 生物公式
光合作用
$$
\ce{CO}_{2} + 2{H}_{2}{O} ->T[光、叶绿体][酶] ({CH}_{2}O) + {H}_{2}{O} + {O}_{2}
$$

#### 7.5. 语法参考
[MathJax basic tutorial and quick reference](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)

### 8. 插入PDF

> [hexo-pdf](https://github.com/superalsrk/hexo-pdf)

#### 8.1. 用法

##### 8.1.1. Normal PDF

```
{% pdf http://7xov2f.com1.z0.glb.clouddn.com/bash_freshman.pdf %}

{% pdf ./bash_freshman.pdf %}
```



#### 8.2. 预览

##### 8.2.1. Normal PDF

{% pdf  /pdf/Linux学习笔记.pdf %}

