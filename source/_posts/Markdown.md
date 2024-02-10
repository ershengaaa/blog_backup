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
>
> 在线`latex`工具 [math.vercel.app](https://math.vercel.app/home)

#### 7.2 数学公式
##### 7.2.1. 内联公式
**开头的`$`必须在其右边紧跟一个非空格字符，而结尾的`$`必须在其左边紧接一个非空格字符，并且不能紧跟一个数字。**

- 勾股定理: <img src="https://math.now.sh?inline=a%5E2%2Bb%5E2%3Dc%5E2" style="filter: opacity(75%);transform:scale(0.75);text-align:centerdisplay:inline-block;margin: 0;">
- 等差数列求和公式: <img src="https://math.now.sh?inline=S_%7Bn%7D%3Dn%20a_%7B1%7D%2B%5Cfrac%7Bn%28n-1%29%7D%7B2%7D%20d%2C%20n%20%5Cin%20N%5E%7B*%7D" style="filter: opacity(75%);transform:scale(0.75);text-align:centerdisplay:inline-block;margin: 0;">
- 牛顿-莱布尼茨公式: <img src="https://math.now.sh?inline=%5Cint_%7Ba%7D%5E%7Bb%7D%20f%28x%29%20d%20x%3DF(b)-F(a)%3D%5Cleft.F(x)%5Cright%7C_%7Ba%7D%20%5E%7Bb%7D" style="filter: opacity(75%);transform:scale(0.75);text-align:centerdisplay:inline-block;margin: 0;">
- 二项分布: <img src="https://math.now.sh?inline=P_%7Bn%7D%28k%29%3DC_%7Bn%7D%5E%7Bk%7D%20p%5E%7Bk%7D%20q%5E%7Bn-k%7D%20%5Cquad%20k%3D0%2C1%2C2%20%5Cldots%20%5Cldots%2C%20n" style="filter: opacity(75%);transform:scale(0.75);text-align:centerdisplay:inline-block;margin: 0;">
##### 7.2.2. 块公式
正态分布<img src="https://math.now.sh?inline=X%20%5Csim%20N%28%5Cmu%2C%5Csigma%5E2%29" style="filter: opacity(75%);transform:scale(0.75);text-align:centerdisplay:inline-block;margin: 0;">: 

<img src="https://math.now.sh?from=f%28x%29%20%3D%20%5Cfrac%7B1%7D%7B%5Csqrt%7B2%5Cpi%7D%5Csigma%7De%5E%7B-%5Cfrac%7B(x-%5Cmu)%5E2%7D%7B2%5Csigma%5E2%7D%7D%0A">

斐波那契数列<img src="https://math.now.sh?inline=A_n%3DA_%7Bn-1%7D%2BA_%7Bn-2%7D" style="filter: opacity(75%);transform:scale(0.75);text-align:centerdisplay:inline-block;margin: 0;">,前后两项的比值逐渐收敛到黄金分割比例

<img src="https://math.now.sh?from=%5Clim_%7Bn%5Cto%20%5Cinfty%7D%5Cfrac%7BA_%7Bn-1%7D%7D%7BA_n%7D%3D%5Cfrac%7B%5Csqrt%7B5%7D-1%7D%7B2%7D.%0A">

因式分解

<img src="https://math.now.sh?from=%5Cbegin%7Bsplit%7D%28x%E2%88%921%29(x%E2%88%923)%26%3Dx%5E2%E2%88%924x%2B3%20%5C%5C%20%0A%26%3Dx%5E2%E2%88%924x%2B4%E2%88%921%20%5C%5C%20%0A%26%3D(x%E2%88%922)%5E2%E2%88%921%0A%5Cend%7Bsplit%7D%0A">

狄利克雷函数

<img src="https://math.now.sh?from=D%28x%29%3D%0A%5Cbegin%7Bcases%7D%0A1%2C%26%20x%20%5Cin%20Q%20%5C%5C%0A0%2C%26%20x%20%5Cnotin%20Q%0A%5Cend%7Bcases%7D%0A">

高斯公式

<img src="https://math.now.sh?from=%5Ciiint_%7B%5COmega%7D%5Cleft%28%5Cfrac%7B%5Cpartial%20P%7D%7B%5Cpartial%20x%7D%2B%5Cfrac%7B%5Cpartial%20Q%7D%7B%5Cpartial%20y%7D%2B%5Cfrac%7B%5Cpartial%20R%7D%7B%5Cpartial%20z%7D%5Cright%29%20d%20v%3D%5Ciint_%7B%5CSigma%7D%20P%20d%20y%20d%20z%2BQ%20d%20z%20d%20x%2BR%20d%20x%20d%20y%0A">

范德蒙行列式

<img src="https://math.now.sh?from=D_%7Bn-1%7D%3D%5Cleft%7C%5Cbegin%7Barray%7D%7Bcccc%7D%0A1%20%26%201%20%26%20%5Cdots%20%26%201%20%5C%5C%0Ax_%7B2%7D%20%26%20x_%7B3%7D%20%26%20%5Cdots%20%26%20x_%7Bn%7D%20%5C%5C%0A%5Cvdots%20%26%20%5Cvdots%20%26%20%26%20%5Cvdots%20%5C%5C%0Ax_%7B2%7D%5E%7Bn-2%7D%20%26%20x_%7B3%7D%5E%7Bn-2%7D%20%26%20%5Cdots%20%26%20x_%7Bn%7D%5E%7Bn-2%7D%0A%5Cend%7Barray%7D%5Cright%7C%3D%5Cprod_%7B2%20%5Cleq%20j%3Ci%20%5Cleq%20n%7D%5Cleft%28x_%7Bi%7D-x_%7Bj%7D%5Cright%29" style="filter: opacity(75%);transform:scale(0.75);text-align:centerdisplay:inline-block;margin: 0;">

线性方程组

<img src="https://math.now.sh?from=%5Cleft%5C%7B%5Cbegin%7Baligned%7D%0Aa_%7B11%7D%20x_%7B1%7D%2Ba_%7B12%7D%20x_%7B2%7D%2B%5Ccdots%2Ba_%7B1%20n%7D%20x_%7Bn%7D%20%26%3Db_%7B1%7D%20%5C%5C%0Aa_%7B21%7D%20x_%7B1%7D%2Ba_%7B22%7D%20x_%7B2%7D%2B%5Ccdots%2Ba_%7B2%20n%7D%20x_%7Bn%7D%20%26%3Db_%7B2%7D%20%5C%5C%0A%5Ccdots%20%5Ccdots%20%5Ccdots%20%5C%5C%0Aa_%7Bm%201%7D%20x_%7B1%7D%2Ba_%7Bm%202%7D%20x_%7B2%7D%2B%5Ccdots%2Ba_%7Bm%20n%7D%20x_%7Bn%7D%20%26%3Db_%7Bm%7D%0A%5Cend%7Baligned%7D%5Cright.">

#### 7.3. 物理公式

- 牛顿第一定律: <img src="https://math.now.sh?inline=%5Csum%20%5Cvec%7BF%7D_%7Bi%7D%3D%5Cfrac%7B%5Cmathrm%7Bd%7D%20%5Cvec%7Bv%7D%7D%7B%5Cmathrm%7Bd%7D%20t%7D%3D0" style="filter: opacity(75%);transform:scale(0.75);text-align:centerdisplay:inline-block;margin: 0;">
- 牛顿第二定律: <img src="https://math.now.sh?inline=%5Cvec%7BF%7D%3D%5Cfrac%7B%5Cmathrm%7Bd%7D%20m%7D%7B%5Cmathrm%7Bd%7D%20t%7D%20%5Cvec%7Bv%7D%2Bm%20%5Cfrac%7B%5Cmathrm%7Bd%7D%20%5Cvec%7Bv%7D%7D%7B%5Cmathrm%7Bd%7D%20t%7D%3D%5Cfrac%7B%5Cmathrm%7Bd%7D%20m%7D%7B%5Cmathrm%7Bd%7D%20t%7D%20%5Cvec%7Bv%7D%2Bm%20%5Cvec%7Ba%7D%3D%5Cfrac%7B%5Cmathrm%7Bd%7D%20m%7D%7B%5Cmathrm%7Bd%7D%20t%7D%20%5Cvec%7Bv%7D%2Bm%20%5Cfrac%7B%5Cmathrm%7Bd%7D%5E%7B2%7D%20%5Cvec%7Br%7D%7D%7B%5Cmathrm%7Bd%7D%20t%5E%7B2%7D%7D" style="filter: opacity(75%);transform:scale(0.75);text-align:centerdisplay:inline-block;margin: 0;">
- 牛顿第三定律: <img src="https://math.now.sh?inline=%5Coverrightarrow%7BF_%7B12%7D%7D%3D-%5Coverrightarrow%7BF_%7B21%7D%7D" style="filter: opacity(75%);transform:scale(0.75);text-align:centerdisplay:inline-block;margin: 0;">
- 质能守恒: <img src="https://math.now.sh?inline=E%3Dmc%5E2" style="filter: opacity(75%);transform:scale(0.75);text-align:centerdisplay:inline-block;margin: 0;">

万有引力定律: <img src="https://math.now.sh?inline=F%3D%5Cfrac%7BG%20M%20m%7D%7Br%5E%7B2%7D%7D" style="filter: opacity(75%);transform:scale(0.75);text-align:centerdisplay:inline-block;margin: 0;">

<img src="https://math.now.sh?from=G%20%5Cfrac%7Bm%20M%7D%7B%28r%2Bh%29%5E%7B2%7D%7D%3Dm%20%5Cfrac%7B%5Cnu%5E%7B2%7D%7D%7B(r%2Bh)%7D%0A">

基尔霍夫定律
<img src="https://math.now.sh?from=%5Cleft%5B%5Cfrac%7B%5Cpartial%5Cleft%28%5CDelta_%7Br%7D%20H_%7Bm%7D%5Cright%29%7D%7B%5Cpartial%20T%7D%5Cright%5D_%7Bp%7D%3D%5Csum_%7BB%7D%20v_%7BB%7D%20C_%7Bp%2C%20m%7D(B)%0A" style="filter: opacity(75%);transform:scale(0.75);text-align:centerdisplay:inline-block;margin: 0;">
热力学第二定律
<img src="https://math.now.sh?from=d%20S%20%5Cgeq%20%5Cfrac%7B%5Cdelta%20Q%7D%7BT%7D%0A" style="filter: opacity(75%);transform:scale(0.75);text-align:centerdisplay:inline-block;margin: 0;">

#### 7.4. 化学公式

离子反应与沉淀: <img src="https://math.now.sh?inline=%5Cce%7BSO4%5E2-%20%2B%20Ba%5E2%2B%20-%3E%20BaSO4%20v%7D" style="filter: opacity(75%);transform:scale(0.75);text-align:centerdisplay:inline-block;margin: 0;">

氮气氢气合成氨

<img src="https://math.now.sh?from=%5Cce%7BN2%20%2B%203H2%20%3C%3D%3ET%5B%E9%AB%98%E6%B8%A9%E3%80%81%E5%8A%A0%E5%8E%8B%5D%5B%E5%82%AC%E5%8C%96%E5%89%82%5D%202NH3%7D%0A">

化学平衡常数:<img src="https://math.now.sh?inline=%5Cmathrm%7BZn%7D%2B2%20%5Cmathrm%7BHCl%7D%28%5Cmathrm%7Baq%7D%29%3D%5Cmathrm%7BH%7D_%7B2%7D%2B%5Cmathrm%7BZnCl%7D_%7B2%7D%20%5Cquad(%5Cmathrm%7Baq%7D)" style="filter: opacity(75%);transform:scale(0.75);text-align:centerdisplay:inline-block;margin: 0;">

<img src="https://math.now.sh?from=K%5E%7B%5Ctheta%7D%3D%5Cfrac%7B%5Cleft%5Bp%5Cleft%28%5Cmathrm%7BH%7D_%7B2%7D%5Cright%29%20%2F%20p%5E%7B%5Ctheta%7D%5Cright%5D%5Cleft%5Bc%5Cleft(%5Cmathrm%7BZnCl%7D_%7B2%7D%5Cright)%5Cright%5D%7D%7Bc%5E%7B2%7D(%5Cmathrm%7BHC%7D)%7D%0A">

#### 7.4. 生物公式
光合作用

<img src="https://math.now.sh?from=%5Cce%7B%7BCO%7D_%7B2%7D%20%2B%202%7BH%7D_%7B2%7D%7BO%7D%20-%3ET%5B%E5%85%89%E3%80%81%E5%8F%B6%E7%BB%BF%E4%BD%93%5D%5B%E9%85%B6%5D%20%28%7BCH%7D_%7B2%7DO%29%20%2B%20%7BH%7D_%7B2%7D%7BO%7D%20%2B%20%7BO%7D_%7B2%7D%7D%0A">

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

