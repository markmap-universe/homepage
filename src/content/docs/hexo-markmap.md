---
title: hexo-markmap
---

<div id="badges">

[![Version](https://img.shields.io/npm/v/hexo-markmap)](https://npm.im/hexo-markmap)
[![Version](https://img.shields.io/npm/d18m/hexo-markmap)](https://npm.im/hexo-markmap)
[![GithubStars](https://img.shields.io/github/stars/markmap-universe/hexo-markmap?style=flat&logo=github&color=yellow)](https://github.com/markmap-universe/hexo-markmap)

</div>

<style>
  #badges img {
    display: inline-block;
  }
</style>

Insert mindmap in your hexo blog by markmap.

From now all the syntax like HTML codes, links, inline code, markdown KaTeX, and Codeblocks are possible to use.

> More preview in [this site](https://hexo.markmap.org/posts/markmap-example/).

# Install

```
pnpm add hexo-markmap -D
```

```
npm install hexo-markmap --save-dev
```


```
yarn add hexo-markmap --dev
```

# Usage

```
{% markmap %}
---
options:
  colorFreezeLevel: 2
---
# Markdown
# Syntax
{% endmarkmap %}
```

## Frontmatter Options

The frontmatter integrates style and jsonOptions.
```yaml
id: markmap-example
style: |
  #${id} {
    height: 300px;
    width: 100%;
  }
  @media (min-width: 1280px) {
    #${id} {
      height: 600px;
    }
  }
options:
  colorFreezeLevel: 2
```
  
- **`style`** : Used to define custom CSS styles for the mindmap.  
The `${id}` placeholder can be used in the style field. During rendering, it will be replaced with the actual ID of the `markmap-wrap`, ensuring each mindmap element on the page has unique styles and behaviors.
  
- **`options`** : Correspond to the [`IMarkmapJSONOptions`](https://markmap.js.org/api/interfaces/markmap-view.IMarkmapJSONOptions.html) in the markmap project. For more details, please refer to [`jsonOptions`](https://markmap.js.org/docs/json-options#option-list).



## Example 

````
{% markmap %}
---
id: markmap-example
style: |
  #${id} {
    height: 300px;
    width: 100%;
  }
  @media (min-width: 1280px) {
    #${id} {
      height: 600px;
    }
  }
options:
  colorFreezeLevel: 2
---

## Links

- [Website](https://markmap.js.org/)
- [GitHub](https://github.com/gera2ld/markmap)

## Related Projects

- [coc-markmap](https://github.com/gera2ld/coc-markmap) for Neovim
- [markmap-vscode](https://marketplace.visualstudio.com/items?itemName=gera2ld.markmap-vscode) for VSCode
- [eaf-markmap](https://github.com/emacs-eaf/eaf-markmap) for Emacs

## Features

Note that if blocks and lists appear at the same level, the lists will be ignored.

### Lists

- **strong** ~~del~~ *italic* ==highlight==
- `inline code`
- [x] checkbox
- Katex: $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$ <!-- markmap: fold -->
  - [More Katex Examples](#?d=gist:af76a4c245b302206b16aec503dbe07b:katex.md)
- Now we can wrap very very very very long text based on `maxWidth` option
- Ordered list
  1. item 1
  2. item 2

### Blocks

```js
console.log('hello, JavaScript')
```

| Products | Price |
|-|-|
| Apple | 4 |
| Banana | 2 |

![](https://markmap.js.org/favicon.png)
{% endmarkmap %}
````

## Config

Add your options to `config.yml`.

Convention over configuration, if you don’t need any of the following features, then you don’t need to add these configs.

By default, it works well. Each option has a default value.

### Default options
```yaml
hexo_markmap:
  darkThemeCssSelector: '.dark'
```
- **`darkThemeCssSelector`** : Used to specify the CSS selector for the dark theme.

# Contributors

Thanks to all contributors🥰!

<a href="https://github.com/maxchang3/hexo-markmap/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=maxchang3/hexo-markmap" />
</a>