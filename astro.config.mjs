// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Markmap Universe',
			social: {
				github: 'https://github.com/markmap-universe',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'List of Tools', slug: 'tools/example' },
					],
				},
			],
		}),
	],
});
