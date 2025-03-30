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
			logo: {
				src: "~/assets/logo.png"
			},
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
			editLink: {
			  baseUrl: 'https://github.com/markmap-universe/homepage/tree/main/',
			},
			customCss: [
				'./src/styles/custom.css',
				'./src/assets/landing.css',
			]
		}),
	],
	markdown: {
		remarkPlugins: [
			[remarkMarkmap,{darkThemeSelector:()=>'[data-theme=dark]'}]
		]
	}
});
