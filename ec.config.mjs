
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default ({
    themes: ['light-plus', 'dark-plus'],
    plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
})
