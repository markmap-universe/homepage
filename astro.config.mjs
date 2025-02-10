// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMarkmap from 'remark-markmap';

// https://astro.build/config
export default defineConfig({
	site: 'https://markmap.org',
	integrations: [
		starlight({
			title: 'Markmap Universe',
			social: {
				github: 'https://github.com/markmap-universe',
			},
			sidebar: [
				{ label: 'Overview', slug: 'overview' },
				{
					label: 'Packages',
					items: [
						{ label: 'hexo-markmap', slug: 'hexo-markmap' },
						{ label: 'remark-markmap', slug: 'remark-markmap' },
					],
				},
			],
			favicon: '/favicon.png',
		}),
	],
	markdown: {
		remarkPlugins: [
			[remarkMarkmap,{darkThemeCssSelector: '[data-theme=dark]'}]
		]
	}
});
