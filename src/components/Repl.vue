<script setup lang="ts">
// text
import codeString from '@/assets/markmap-example.md?raw'
// vue
import { onMounted, ref, shallowRef } from 'vue'
// codemirror
import { Codemirror } from 'vue-codemirror'
import { EditorView, basicSetup } from 'codemirror'
import { markdown } from '@codemirror/lang-markdown'
import { yamlFrontmatter } from "@codemirror/lang-yaml"
import { vscodeDark } from '@/assets/codemirror-theme-vscode-dark';

const markdownWithFrontMatter = yamlFrontmatter( { content: markdown() } )
const extensions = [basicSetup, vscodeDark, markdownWithFrontMatter]
const cmView = shallowRef<EditorView>()
const onCmReady = ({view}:{view:EditorView}) => cmView.value = view
// markmap
import { Transformer } from 'markmap-lib'
import { debounce } from 'markmap-common'
import { Markmap, deriveOptions, defaultOptions } from "markmap-view"
import { Toolbar } from "markmap-toolbar"
const transformer = new Transformer()
const markmapInstance = ref<Markmap>()
const transform = (markmapCode:string) => {
  const { root, frontmatter } = transformer.transform(markmapCode)
  const options = { ...defaultOptions, ...deriveOptions(frontmatter?.markmap) ?? {} }
  return { root, options }
}
// utils
const resize = {
  event: new Event('resize'),
  observer: new ResizeObserver((entries) =>
    entries.forEach((entry) => entry.target.dispatchEvent(resize.event))
  ),
  observe: (el:HTMLElement, func:()=>void) => {
    resize.observer.observe(el)
    el.addEventListener('resize', func)
  },
}
const toolbar = (markmapInstance:Markmap,{fullscreenElement}:{fullscreenElement:HTMLElement}) => {
  const toolbar = Toolbar.create(markmapInstance)
  toolbar.setBrand(false)
  toolbar.register({
    id: 'fullScreen',
    title: 'Full Screen View',
    content: Toolbar.icon('M4 9v-4h4v2h-2v2zM4 11v4h4v-2h-2v-2zM16 9v-4h-4v2h2v2zM16 11v4h-4v-2h2v-2z'),
    onClick: () => document.fullscreenElement ? document.exitFullscreen() : fullscreenElement.requestFullscreen()
  })
  fullscreenElement.addEventListener('fullscreenchange',()=>fullscreenElement.classList[document.fullscreenElement?'add':'remove']('fullscreen'))
  toolbar.setItems([...toolbar.items, 'fullScreen'])
  return toolbar.el
}

// repl
const code = ref<string>(codeString)
const previewEl = ref<HTMLElement>();

onMounted(() => {

  const wrap = previewEl.value!
  const svg = wrap.querySelector('svg')!
  const { options, root } = transform(codeString)
  const mm = markmapInstance.value = Markmap.create(svg, options, root)
  wrap.appendChild(toolbar(mm,{fullscreenElement:wrap}))
  resize.observe(wrap, debounce(()=>{ mm.fit() }, 100))
  
})

const onCodeChange = (code:string) => {
  const { options, root } = transform(code)
  const mm = markmapInstance.value
  mm?.setData(root,options)
}
</script>

<template>
  <div class="repl-container">
    <codemirror
      v-model="code"
      placeholder=""
      :style="{width:'50%'}"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      class="codemirror"
      @change="onCodeChange"
    />
    <div class="preview markmap-dark" ref="previewEl"><svg></svg></div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/markmap-toolbar/dist/style.css">
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
.main {
  overflow: hidden;
  height: calc(100vh - 4.1rem);
}
.repl-container {
  display: flex;
  height: 100%;
}
.codemirror * {
  font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace;
}
.preview,.preview > svg {
  width: 100%;
  height: 100%;
}
.preview {
  width: 50%;
  border-left: solid 2px #333;
  background: #1E1E1E;
}
.mm-toolbar {
  position: absolute;
  bottom: .5em;
  right: .5em;
}
</style>
