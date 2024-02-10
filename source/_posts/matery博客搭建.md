---
title: matery博客搭建
top: false
cover: false
toc: true
mathjax: false
date: 2024-02-06 15:42:05
author:
img:
coverImg:
password:
summary:
tags:
  - blog
  - hexo
  - matery
categories:
  - blog
---

### 1. 安装nodejs

> 下载地址：[node.js官网](https://nodejs.org/en/)
>
> 安装步骤：[node.js 安装详细步骤教程](https://blog.csdn.net/antma/article/details/86104068)

#### 1.1. 设置npm在安装全局模块时的路径

* `nodejs`安装目录创建`node_cache`、`node_global`文件夹

* `cmd`输入如下命令：

  ```
  npm config set prefix "D:\nodejs\node_global"
  npm config set cache "D:\nodejs\node_cache"
  ```

​	![](/medias/images/blog_images/matery/npm_set_config.jpg)

#### 1.2. 设置环境变量

* `win11`路径：控制面板 --> 系统和安全 --> 系统 --> 查看RAM的大小和处理器速度 --> 高级系统设置 --> 环境变量

* 用户变量里的`npm path`修改为：`D:\nodejs\node_global`

  ![](/medias/images/blog_images/matery/npm_env.jpg)

* 系统变量添加`NODE_PATH`变量名，值为`D:\nodejs\node_global\node_modules`

  ![](/medias/images/blog_images/matery/npm_env1.jpg)

### 2. 安装Hexo

* `Github`创建一个仓库，命令格式为`username.github.io`
* 安装`Hexo`，初始化 && 静态部署 && 本地服务
* 安装`hexo-deployer-git`，将`Hexo`部署到`Github`

```markdown
<!-- 安装Hexo -->
npm install -g hexo-cli

<!-- 初始化 && 静态部署 && 本地服务 -->
hexo init && hexo g && hexo s
<!-- 本地服务启动后，浏览器输入http://localhost:4000可以看到本地部署的网页 -->

<!-- 安装hexo-deployer-git -->
npm install hexo-deployer-git --save
<!-- Hexo部署到Github：修改根目录下的_config.yml -->
# Deployment
## Docs: https://hexo.io/docs/one-command-deployment
deploy:
  - type: git
    repository: https://github.com/ershengaaa/ershengaaa.github.io.git  #你的仓库地址
    branch: main #注意此处最新为main
  - type: git
    repository: git@gitee.com:ershengaaa/ershengaaa.git #你的仓库地址
    branch: master
    
<!-- 部署命令 -->
hexo clean && hexo g && hexo deployer

<!-- 部署后访问：https://ershengaaa.github.io -->
```

#### 2.1. 博客目录结构

```markdown
.
├── _config.yml # 博客网站生成时需要用到的插件的配置文件
├── db.json # 网站数据
├── node_modules # 类库
├── package-lock.json # 该博客网站生成需要的依赖项
├── package.json # 博客网站生成需要的全局依赖项，执行npm install指令可以安装这些依赖项
├── public # 博客网站的静态文件，会把该文件夹发布到远程服务器
├── scaffolds # 新建一篇文章时的front-matter用到的模板，front-matter是后面静态文件生成时，文章显示参数的设置，包括文章标题，新建日期，标签等
├── source # 里面存放着博客编写的文章
└── themes # 博客用到的主题资源库
```

#### 2.2. 博客内容更新

```markdown
hexo new [post] new_paper # 创建一篇新的文章，会在/source/_posts中生成new_paper.md

hexo new page new page # 生成一个新的页面，会在/source中生成new_page文件夹，又来存放该页面的文章
hexo new new_page new_paper # 在新的页面中生成一篇新的文章

hexo new draft new_draft # 生成一篇草稿，这个仅自己可见，不会出现在正式网站上
hexo publish draft new_draft # 将草稿发布到post页面
```

### 3. matery主题

#### 3.1. 主题特性

- 简单漂亮，文章内容美观易读
- [Material Design](https://material.io/) 设计
- 响应式设计，博客在桌面端、平板、手机等设备上均能很好的展现
- 首页轮播文章及每天动态切换 `Banner` 图片
- 瀑布流式的博客文章列表（文章无特色图片时会有 `24` 张漂亮的图片代替）
- 时间轴式的归档页
- **词云**的标签页和**雷达图**的分类页
- 丰富的关于我页面（包括关于我、文章统计图、我的项目、我的技能、相册等）
- 可自定义的数据的友情链接页面
- 支持文章置顶和文章打赏
- 支持 `MathJax`
- 支持中文繁简转换
- `TOC` 目录
- 可设置复制文章内容时追加版权信息
- 可设置阅读文章时做密码验证
- [Gitalk](https://gitalk.github.io/)、[Gitment](https://imsun.github.io/gitment/)、[Valine](https://valine.js.org/) 和 [Disqus](https://disqus.com/) 评论模块（推荐使用 `Gitalk`）
- 集成了[不蒜子统计](http://busuanzi.ibruce.info/)、谷歌分析（`Google Analytics`）和文章字数统计等功能
- 支持在首页的音乐播放和视频播放功能
- 支持`emoji`表情，用`markdown emoji`语法书写直接生成对应的能**跳跃**的表情。
- 支持 [DaoVoice](http://www.daovoice.io/)、[Tidio](https://www.tidio.com/) 在线聊天功能。

#### 3.2. 主题安装

```markdown
<!-- 在Hexo博客的themes目录下 -->
git clone https://github.com/blinkfox/hexo-theme-matery.git

<!-- 修改Hexo根目录下的_config.yml theme值 -->
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: hexo-theme-matery
```

#### 3.3. 主题目录结构

```markdown
themes
└── matery
    ├── LICENSE
    ├── README.md
    ├── README_CN.md
    ├── _config.yml # 主题的配置文件
    ├── languages # 默认是英文显示，若要其他语言显示，则需要在此添加对应语言的翻译规则，需要修改语言时，修改 /_config.yml 中的 "language: "为"language: zh-CN"
    ├── layout # 页面js文件
    └── source # 图片等资源存放目录，这个目录对应为生成的静态网站的root路径
```

#### 3.4. 主题配置

> 基础配置参考：[hexo-theme-matery中文说明](https://github.com/blinkfox/hexo-theme-matery/blob/develop/README_CN.md)

##### 3.4.1. 页脚显示时间

{% note info %}

页脚显示时间精确到时分秒

{% endnote %}

```js
//修改路径： themes\hexo-theme-matery\layout\_partial\footer.ejs

	var diffYears = Math.floor(diff / years);
    var diffDays = Math.floor((diff / days) - diffYears * 365);
    var diffHours = Math.floor((diff / hours) - diffDays * 24 - diffYears * 365 * 24);
    var diffMinutes = Math.floor((diff / minutes) - diffHours * 60 - diffDays * 24 * 60 - diffYears * 365 * 24 * 60);
    var diffSeconds = Math.floor((diff / seconds) - diffMinutes * 60 - diffHours * 60 * 60 - diffDays * 24 * 60 * 60 - diffYears * 365 * 24 * 60 * 60);

    // 区分是否有年份.
    var language = '<%- config.language %>';
    if (diffDays + diffYears * 365 < 365) {
        document.getElementById("year").innerHTML = todayYear;
        var daysTip = 'This site has been running for ' + diffDays + ' days';
        if (language === 'zh-CN') {
            daysTip = '本站已运行 ' + diffDays + ' 天 ' + diffHours + ' 小时 ' + diffMinutes + ' 分 ' + diffSeconds + ' 秒';
        } else if (language === 'zh-HK') {
            daysTip = '本站已運行 ' + diffDays + ' 天 ' + diffHours + ' 小时 ' + diffMinutes + ' 分 ' + diffSeconds + ' 秒';
        }
        document.getElementById("sitetime").innerHTML = daysTip;
    } else {
        document.getElementById("year").innerHTML = startYear + " - " + todayYear;
        var yearsAndDaysTip = 'This site has been running for ' + diffYears + ' years and '+ diffDays + ' days';
        if (language === 'zh-CN') {
        yearsAndDaysTip = '本站已运行 ' + diffYears + ' 年 ' + diffDays + ' 天 ' + diffHours + ' 小时 ' + diffMinutes + ' 分 ' + diffSeconds + ' 秒';
        } else if (language === 'zh-HK') {
            yearsAndDaysTip = '本站已運行 ' + diffYears + ' 年 ' + diffDays + ' 天 ' + diffHours + ' 小时 ' + diffMinutes + ' 分 ' + diffSeconds + ' 秒';
        }
        document.getElementById("sitetime").innerHTML = yearsAndDaysTip;
    }
}
calcSiteTime();
```

显示效果：

![](/medias/images/blog_images/matery/footer.jpg)

##### 3.4.2. 博客动态标签

```js
//修改路径：themes\hexo-theme-matery\layout\layout.ejs
//添加如下代码

	<!-- 博客动态标签 -->
	<script type="text/javascript">
    var OriginTitile = document.title,
        st;
    document.addEventListener("visibilitychange", function () {
        document.hidden ? (document.title = "看不见我🙈~看不见我🙈~", clearTimeout(st)) : (document.title =
            "(๑•̀ㅂ•́) ✧被发现了～", st = setTimeout(function () {
                document.title = OriginTitile
            }, 3e3))
    })
	</script>

</body>
```

显示效果：

{% gi 2 2 %}

![](/medias/images/blog_images/matery/layout1.jpg)

![](/medias/images/blog_images/matery/layout2.jpg)
{% endgi %}



##### 3.4.3. 音乐界面

```yml
# 修改路径：主题下的_config.yml配置文件
# 当前关闭首页显示音乐，启用单独音乐界面

# Whether to display the musics.
# 是否在首页显示音乐.
music:
  enable: false
  title: #非吸底模式有效
    enable: true
    show: 听听音乐
  autoHide: true    # hide automaticaly
  server: netease   #require	music platform: netease, tencent, kugou, xiami, baidu
  type: playlist    #require song, playlist, album, search, artist
  id: 503838841     #require	song id / playlist id / album id / search keyword
  fixed: false       # 开启吸底模式
  autoplay: false   # 是否自动播放
  theme: '#42b983'
  loop: 'all'       # 音频循环播放, 可选值: 'all', 'one', 'none'
  order: 'random'   # 音频循环顺序, 可选值: 'list', 'random'
  preload: 'auto'   # 预加载，可选值: 'none', 'metadata', 'auto'
  volume: 0.7       # 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
  listFolded: true  # 列表默认折叠
  hideLrc: true     # 隐藏歌词

# Whether to display the musics.
# 单独的音乐页面.
musics:
  enable: true
  title:          #非吸底模式有效
    enable: true
    show: 听听音乐
  server: tencent   #require music platform: netease, tencent, kugou, xiami, baidu
  type: playlist    #require song, playlist, album, search, artist
  id: 8792069423     #require song id / playlist id / album id / search keyword
  fixed: false      # 开启吸底模式
  autoplay: true   # 是否自动播放
  theme: '#42b983'
  loop: 'all'       # 音频循环播放, 可选值: 'all', 'one', 'none'
  order: 'random'   # 音频循环顺序, 可选值: 'list', 'random'
  preload: 'auto'   # 预加载，可选值: 'none', 'metadata', 'auto'
  volume: 0.7       # 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
  listFolded: false  # 列表默认折叠
  listMaxHeight: "525px" #列表最大高度
```

开启如上配置后出现如下报错：

![](/medias/images/blog_images/matery/music_err.jpg)

{% note warning %}
当前`matery`主题使用的`Meting.min.js`中的`API`为`https://api.i-meto.com/meting/api`，该`API`已过期，需更换为`https://api.injahow.cn/meting/`

更换后由于部分歌曲无`VIP`，所以可能也会提示如上报错~

{% endnote %}

修复后效果：

![](/medias/images/blog_images/matery/music.jpg)



##### 3.4.4. 樱花飞舞

```yml
# 修改路径：主题下的_config.yml配置文件
# 当前选择少量樱花飞舞

# | 文件名             | 说明                   |
# | :----------------- | :--------------------- |
# | sakura-small.js    | 少量樱花               |
# | sakura-half.js     | 樱花相对原效果数量减半 |
# | sakura-reduce.js   | 樱花相对原效果减少1/4  |
# | sakura.js          | 樱花数量不变（原效果） |
# 默认事sakura.js，如需修改，请到下面地址修改
# libs
#   js:
#     sakura: /libs/others/sakura-reduce.js
# 是否激活页面樱花效果, 只在桌面版网页启用特效
# 下面三种特效建议选择一种就够了，
sakura:
  enable: true

...

js:
	sakura: /libs/others/sakura-small.js
```

##### 3.4.5. valine评论

```yml
# 修改路径：主题下的_config.yml配置文件

# The configuration of the Valine comment module is not activated by default.
# To use it, activate the configuration item and set appId and appKey.
# Valine 评论模块的配置，默认为不激活，如要使用，就请激活该配置项，并设置 appId 和 appKey.
valine:
  enable: true
  appId:  #填写你的appId
  appKey: #填写你的appKey
  serverURLs: #LeanCloud中的Request域名
  notify: false
  verify: false
  visitor: true
  avatar: 'mm' # Gravatar style : mm/identicon/monsterid/wavatar/retro/hide
  pageSize: 10
  placeholder: 'just go go' # Comment Box placeholder
  background: https://cdn.jsdelivr.net/gh/ershengaaa/ershengaaa.github.io/medias/comment_bg.png
  coolpushkey:
```

使用`LeanCloud`国际版：

> 目前使用`LeanCloud`国际版，国内用户暂无法评论~

* 注册 --> 创建应用 --> 设置 --> 应用凭证，可查看对应的`appId`、`appKey`、`serverURLs`

  ![](/medias/images/blog_images/matery/leancloud.jpg)

* 绑定`API`访问域名

  ![](/medias/images/blog_images/matery/leancloud1.jpg)

  配置访问域名`DNS`解析

  ![](/medias/images/blog_images/matery/leancloud3.jpg)

  

* 设置`web`安全域名

  ![](/medias/images/blog_images/matery/leancloud2.jpg)

{% note warning %}
使用`valine`时遇到问题 --> `Valine enable`后点击提交无响应，`web`也无法抓到请求 --> 找`valine`作者帮忙分析才发现是注释无空格导致无法正确解析`appId`、`appKey`
{% endnote %}

![](/medias/images/blog_images/matery/valine.jpg)

##### 3.4.6. 背景动态彩带

```yml
# 修改路径：主题下的_config.yml配置文件

# 背景动态彩带.
ribbon_dynamic:
  enable: true
```

##### 3.4.7. 配置CDN访问加速

```yml
# 修改路径：主题下的_config.yml配置文件

# CDN访问加速 
# 第一次使用本功能，一定要先配置url，再`hexo cl && hexo g && hexo d`部署到GitHub的仓库，注意！必须是GitHub的仓库！
# 如果必须要使用国内的coding或者gitee，可以采用双部署，同时将网站部署到两个仓库（其中一个必须是GitHub的仓库）
# URL配置规则（例子如下）： https://cdn.jsdelivr.net/gh/你的GitHub用户名/你的仓库名
# 如果想关闭此功能，将 url地址 注释或删除即可！
#
# 注：配置了此项，就代表着本地调试的时候，网站依然会去GitHub请求资源（原来的资源），本地调试的时候记得将 此项配置 注释或者删除掉
# 更多关于访问速度优化，请查看：https://blog.sky03.cn/posts/42790.html
# 注：jsdelivr可以自动帮你生成.min版的js和css，所以你在上面设置js及css路径中可以直接写.min.xxx
jsDelivr:
  url: https://cdn.jsdelivr.net/gh/ershengaaa/ershengaaa.github.io
```

{% note info %}
本地调试切记注释掉该`url`，否则部分本地修改`CSS`样式会不生效
{% endnote %}

##### 3.4.8. 代码块

当前`matery`主题代码块显示异常，可参考如下配置：

* 安装`hexo-prism-plugin`插件：`npm install hexo-prism-plugin --save`

* `Hexo`根目录`_config.yml`添加如下配置

  ```yml
  # 添加prism_plugin配置项
  prism_plugin:
    mode: 'preprocess'    # realtime/preprocess
    theme: 'duotone-dark'
    line_number: true    # default false
    custom_css:
  ```

  

* 代码块`css`样式显示异常，修改如下：

  ```css
  /* 修改路径：themes\hexo-theme-matery\source\css\matery.css */
  
  pre {
      padding: 1.5rem 1.5rem 1.5rem 3.3rem !important;
      margin: 1rem 0 !important;
      background: #272822;
      overflow: auto;
      border-radius: 0.35rem;
      tab-size: 4;
  }
  ```

##### 3.4.9. 图片懒加载

> 懒加载：一般是当图片滚动进可视窗口内才加载图片，可视窗口外的图片不加载
>
> 优点：对服务器有一定的缓解作用
>
> 可使用图片懒加载插件：[hexo-lazyload-image](https://github.com/Troy-Yang/hexo-lazyload-image)

下载插件：`npm install hexo-lazyload-image --save`

`Hexo`根目录配置文件添加如下配置：

```yml
# 图片懒加载
lazyload:
  enable: true  # 是否开启图片懒加载
  onlypost: false  # 是否只对文章的图片做懒加载
  loadingImg: # eg ./images/loading.gif
  isSPA: false # optional. For performance considering, isSPA is added. If your theme is a SPA page, please set it as true
  preloadRatio: 3 # optional, default is 1
```

一般情况下懒加载会和`gallery`插件会发生冲突，结果可能就是点开图片，左翻右翻都是`loading image`。`matery`主题的解决方案如下：

```js
//修改路径：themes\hexo-theme-matery\source\js\matery.js

$('#articleContent, #myGallery').lightGallery({
	selector: '.img-item',
	// 启用字幕
	subHtmlSelectorRelative: true
});

$(document).find('img[data-original]').each(function()  {
        $(this).parent().attr("href", $(this).attr("data-original"));
});

// progress bar init
const progressElement = window.document.querySelector('.progress-bar');
if (progressElement) {
	new ScrollProgress((x, y) => {
		progressElement.style.width = y * 100 + '%';
	});
}
};
articleInit();
```

##### 3.4.10. 代码压缩

> `Hexo`生成的`html`、`css`、`js`都有很多的空格或者换行，而空格和换行也是占用字节的，所以需要将空格换行去掉进行代码压缩。
>
> 可以使用`gulp`或者`neat`插件进行代码压缩，`gulp`较为复杂，在这里使用`neat`插件进行代码压缩~

下载插件：`npm install hexo-neat --save`

`Hexo`根目录配置文件添加如下配置：

```yml
#hexo-neat 优化提速插件（去掉HTML、css、js的blank字符）
neat_enable: true
neat_html:
  enable: true
  exclude:
    - '**/*.md'  #解决压缩md文件会使markdown语法的代码块消失bug
neat_css:
  enable: true
  exclude:
    - '**/*.min.css'
neat_js:
  enable: true
  mangle: true
  output:
  compress:
  exclude:
    - '**/*.min.js'
    - '**/**/instantpage.js'
    - '**/matery.js'
```

##### 3.4.11. 支持label标签

> 参考[fluid主题](https://github.com/fluid-dev/hexo-theme-fluid/tree/master/scripts/tags)

添加`label.js`文件：

```js
//路径：themes\hexo-theme-matery\scripts\tags\label.js

/**
 * label.js | https://github.com/fluid-dev/hexo-theme-fluid/tree/master/scripts/tags
 */

'use strict';

module.exports = ctx => function(args) {
  args = args.join(' ').split('@');
  var classes = args[0] || 'default';
  var text = args[1] || '';

  if (!text) {
    ctx.log.warn('Label text must be defined.');
  }

  return `<span class="label label-${classes.trim()}">${text}</span>`;
};
```

`index.js`文件修改添加如下代码：

```js
//路径：themes\hexo-theme-matery\scripts\tags\index.js

const postLabel = require('./label')(hexo);

hexo.extend.tag.register('label', postLabel);
hexo.extend.tag.register('sublabel', postLabel);
```

`my.css`添加支持`label`样式：

```css
/* tag label */
.label {
    display: inline;
    border-radius: 3px;
    font-size: 85%;
    margin: 0;
    padding: 0.2rem 0.4rem;
    color: #3c4858;
    transition: color .2s ease-in-out;
}

.label-default {
    background: rgba(187, 187, 187, .25);
}

.label-primary {
    background: rgba(183, 160, 224, .25);
}

.label-info {
    background: rgba(160, 197, 228, .25);
}

.label-success {
    background: rgba(174, 220, 174, .25);
}

.label-warning {
    background: rgba(248, 214, 166, .25);
}

.label-danger {
    background: rgba(236, 169, 167, .25);
}
```

效果如下：

* {% label default @default %}
* {% label primary @primary %}
* {% label success @success %}
* {% label info @info %}
* {% label warning @warning %}
* {% label danger @danger %}

##### 3.4.12. 支持图组

> 参考[fluid主题](https://github.com/fluid-dev/hexo-theme-fluid/tree/master/scripts/tags)

添加`group-image.js`文件：

```js
/**
 * group-image.js | https://github.com/fluid-dev/hexo-theme-fluid/tree/master/scripts/tags
 */

'use strict';

const DEFAULT_LAYOUTS = {
  2 : [1, 1],
  3 : [2, 1],
  4 : [2, 2],
  5 : [3, 2],
  6 : [3, 3],
  7 : [3, 2, 2],
  8 : [3, 2, 3],
  9 : [3, 3, 3],
  10: [3, 2, 2, 3]
};

const groupBy = (total, layout) => {
  const r = [];
  for (let count of total) {
    r.push(layout.slice(0, count));
    layout = layout.slice(count);
  }
  return r;
};

const templates = {

  dispatch: (images, total, layout) => {
    const valid = layout && (layout.reduce((prev, current) => prev + current) === total);
    const _layout = valid ? layout : DEFAULT_LAYOUTS[total];
    return _layout ? templates.getHTML(groupBy(_layout, images)) : templates.defaults(images);
  },

  defaults: (images) => {
    const ROW_SIZE = 3;
    const rows = images.length / ROW_SIZE;
    const imageArr = [];

    for (let i = 0; i < rows; i++) {
      imageArr.push(images.slice(i * ROW_SIZE, (i + 1) * ROW_SIZE));
    }

    return templates.getHTML(imageArr);
  },

  getHTML: (rows) => {
    return rows.map(row => {
      return `<div class="group-image-row">${templates.getColumnHTML(row)}</div>`;
    }).join('');
  },

  getColumnHTML: (images) => {
    return images.map(image => {
      return `<div class="group-image-wrap">${image}</div>`;
    }).join('');
  }
};

module.exports = ctx => function (args, content) {
  const total = parseInt(args[0], 10);
  const layout = args[1] && args[1].split('-').map((v) => parseInt(v, 10));

  content = ctx.render.renderSync({ text: content, engine: 'markdown' });

  const images = content.match(/<img[\s\S]*?>/g);

  return `<div class="group-image-container">${templates.dispatch(images, total, layout)}</div>`;
};

/*
  {% groupimage total n1-n2-n3-... %}
  ![](url)
  ![](url)
  ![](url)
  {% endgroupimage %}
 */
```

`index.js`文件修改添加如下代码：

```js
//路径：themes\hexo-theme-matery\scripts\tags\index.js

const postGroupImage = require('./group-image')(hexo);

hexo.extend.tag.register('groupimage', postGroupImage, true);
hexo.extend.tag.register('gi', postGroupImage, true);
```

`my.css`添加支持`group-image`样式：

```css
/* tag group-image */
.group-image-container {
    margin: 1.5rem auto;

    & img {
        margin: 0 auto;
        border-radius: 3px;
        background-color: transparent;
        box-shadow: 0 3px 9px 0 rgba(0, 0, 0, 0.15), 0 3px 9px 0 rgba(0, 0, 0, 0.15);
    }
}

.group-picture img {
    margin: 0 auto;
    padding: 0 3px;
}

.group-image-row {
    margin-bottom: .5rem;
    display: flex;
    justify-content: center;
}

.group-image-wrap {
    flex: 1;
    display: flex;
    justify-content: center;

    &:not(:last-child) {
        margin-right: .25rem;
    }
}
```

效果如下：

{% gi 4 2-2 %}
![](https://cdn.jsdelivr.net/gh/ershengaaa/ershengaaa.github.io/medias/images/03.jpg)
![](https://cdn.jsdelivr.net/gh/ershengaaa/ershengaaa.github.io/medias/images/01.jpg)
![](https://cdn.jsdelivr.net/gh/ershengaaa/ershengaaa.github.io/medias/images/01.jpg)
![](https://cdn.jsdelivr.net/gh/ershengaaa/ershengaaa.github.io/medias/images/03.jpg)
{% endgi %}

##### 3.4.13. 支持hexo-admonition插件

> [hexo-admonition](https://github.com/lxl80/hexo-admonition)

下载插件：`npm install hexo-admonition --save`

`my.css`添加支持`admonition`样式[此处`css`内容注释掉，防止对博客本身产生影响]：

```css
/* hexo-admonition */
/*.admonition {
    margin: 1.5625em 0;
    padding: .6rem;
    overflow: hidden;
    font-size: .64rem;
    page-break-inside: avoid;
    border-left: .3rem solid #42b983;
    border-radius: .3rem;
    box-shadow: 0 0.1rem 0.4rem rgba(0,0,0,.05), 0 0 0.05rem rgba(0,0,0,.1);
    background-color: #eef3fc;
}*/

/* 与tag note CSS样式冲突 */
/*.admonition.note {
    padding: .6rem !important;
    border-left: .3rem solid #42b983 !important;
    border-radius: .3rem !important;
}

p.admonition-title {
    position: relative;
    margin: -.6rem -.6rem .8em -.6rem !important;
    padding: .4rem .6rem .4rem 2.5rem;
    font-weight: 700;
    background-color:rgba(66, 185, 131, .1);
}

.admonition-title::before {
    position: absolute;
    top: .9rem;
    left: 1rem;
    width: 12px;
    height: 12px;
    background-color: #42b983;
    border-radius: 50%;
    content: ' ';
}

.info>.admonition-title, .todo>.admonition-title {
    background-color: rgba(0,184,212,.1);
}

.warning>.admonition-title, .attention>.admonition-title, .caution>.admonition-title {
    background-color: rgba(255,145,0,.1);
}

.failure>.admonition-title, .missing>.admonition-title, .fail>.admonition-title, .error>.admonition-title {
    background-color: rgba(255,82,82,.1);
}

.admonition.info, .admonition.todo {
    border-color: #00b8d4;
}

.admonition.warning, .admonition.attention, .admonition.caution {
    border-color: #ff9100;
}

.admonition.failure, .admonition.missing, .admonition.fail, .admonition.error {
    border-color: #ff5252;
}

.info>.admonition-title::before, .todo>.admonition-title::before {
    background-color: #00b8d4;
    border-radius: 50%;
}

.warning>.admonition-title::before, .attention>.admonition-title::before, .caution>.admonition-title::before {
    background-color: #ff9100;
    border-radius: 50%;
}

.failure>.admonition-title::before,.missing>.admonition-title::before,.fail>.admonition-title::before,.error>.admonition-title::before{
    background-color: #ff5252;;
    border-radius: 50%;
}

.admonition>:last-child {
    margin-bottom: 0 !important;
}*/
```

效果如下：

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

##### 3.4.14. 支持相册

`matery`主题支持相册功能，按照如下配置即可：

* 主题配置文件开启相册配置：

  ```yml
  # 修改路径：主题下的_config.yml配置文件
  
  #Friends:
    #  url: /friends
    #  icon: fas fa-address-book
    # 二级菜单写法如下
  Medias:
    icon: fas fa-list
    children:
    ...
    - name: 相册
      url: /galleries
      icon: fas fa-image
  ```

* 创建`galleries page`

  ```markdown
  hexo new page galleries
  
  <!-- 创建单独相册列表：type及layout均为gallery -->
  <!-- galleries目录下 -->
  hexo new page 2023
  hexo new page 2024
  
  <!-- 如下
  ---
  title: 2024
  date: 2024-01-16 21:58:06
  type: "gallery"
  layout: "gallery"
  ---
  -->
  ```

* `source`目录创建`_data`目录，创建`galleries.json`配置文件，内容参考如下：

  ```json
  [
      {
          "name": "2023",
          "cover": "/medias/images/01.jpg",
          "description": "images",
          "photos": [
            "/medias/images/01.jpg",
            "/medias/images/02.jpg",
            "/medias/images/03.jpg"
          ]
      },
      {
        "name": "2024",
        "cover": "/medias/banner/2.jpg",
        "description": "banner",
        "photos": [
          "/medias/banner/1.jpg",
          "/medias/banner/3.jpg",
          "/medias/banner/6.jpg"
        ]
      }
  ]
  ```

效果如下：

{% gi 2 2 %}

![](/medias/images/blog_images/matery/galleries.jpg)

![](/medias/images/blog_images/matery/galleries_2023.jpg)
{% endgi %}

##### 3.4.15. 支持豆瓣书单

> [hexo-douban](https://github.com/mythsman/hexo-douban)

下载插件：`npm install hexo-douban --save`

`Hexo`根目录配置文件添加如下配置【[豆瓣ID获取](https://www.zhihu.com/question/19634899)】：

```yml
#支持豆瓣书/影单
douban:
  id: # 填写个人豆瓣ID
  builtin: true
  item_per_page: 10
  meta_max_line: 4
  book:
      title: '我的书单'
      quote: '看见，理解，远方'
timeout: 10000
```

主题配置文件开启相册配置：

```yml
# 修改路径：主题下的_config.yml配置文件

#Friends:
  #  url: /friends
  #  icon: fas fa-address-book
  # 二级菜单写法如下
Medias:
  icon: fas fa-list
  children:
  ...
  - name: 书单
    url: /books
    icon: fas fa-book
```

创建`books page`：

```markdown
hexo new page books
```

添加`douban.ejs`文件：

```js
//路径：themes\hexo-theme-matery\layout\douban.ejs

<%- partial('_partial/post-cover') %>
<style>
    .hexo-douban-picture img {
        width: 100%;
    }
</style>
<main class="content">
    <div id="contact" class="container chip-container">
        <div class="card">
            <div class="card-content" style="padding: 30px">
                <h1 style="margin: 10px 0 10px 0px;"><%= page.title %></h1>
                <%- page.content %>
            </div>
        </div>
        <div class="card">
            <div class="card-content" style="text-align: center">
              <h3 style="margin: 5px 0 5px 5px;">如果你有好的内容推荐，欢迎在下面留言！</h3>
            </div>
         </div>
        <div class="card">
            <% if (theme.gitalk && theme.gitalk.enable) { %>
            <%- partial('_partial/gitalk') %>
            <% } %>

            <% if (theme.gitment.enable) { %>
            <%- partial('_partial/gitment') %>
            <% } %>

            <% if (theme.disqus.enable) { %>
            <%- partial('_partial/disqus') %>
            <% } %>

            <% if (theme.livere && theme.livere.enable) { %>
            <%- partial('_partialvere') %>
            <% } %>

            <% if (theme.valine && theme.valine.enable) { %>
            <%- partial('_partial/valine') %>
            <% } %>
        </div>
    </div>
</main>
```

效果如下：

{% gi 2 2 %}

![](/medias/images/blog_images/matery/books.jpg)

![](/medias/images/blog_images/matery/books_comment.jpg)
{% endgi %}

### 4. 博客备份与恢复

#### 4.1. 备份内容

当前`Hexo`默认忽略的内容如下：

```markdown
.DS_Store
Thumbs.db
db.json
*.log
node_modules/
public/
.deploy*/
_multiconfig.yml
```

我们只需要如下文件：

* `_config.yml`：站点配置文件
* `package.json`：依赖的模块列表
* `scaffolds`：包含创建的文章、分类、标签界面的模版
* `source`：包含生成的网页所需要的源文件
* `themes`：主题文件

那么只需要将`package-lock.json`加入`.gitignore`文件即可~

这里我选择的是重新开一个`git`仓库用来存储备份文件，将以上我们需要的内容全部传到这个`git`仓库，后续有修改同步该处即可~

#### 4.2. 恢复

新的环境按之前的步骤搭好`git`、`nodejs`等环境后，安装项目依赖即可恢复~

```markdown
git clone repository
cd repository

npm install
```

### 5. Reference

[从零开始搭建个人博客](https://zhuanlan.zhihu.com/p/102592286)
[hexo个人博客搭建](https://www.citisy.site/posts/4be3.html)
[hexo-theme-matery中文说明](https://github.com/blinkfox/hexo-theme-matery/blob/develop/README_CN.md)
[Hexo系列教程](https://blog.17lai.site/posts/cf0f47fd/#%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B)
[Hexo进阶之各种优化](https://blog.sky03.cn/posts/42790.html)
[Hexo 博客备份与恢复](https://mupceet.com/2019/09/backup-hexo-blog/)
