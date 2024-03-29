import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
		}),
		mdsvex(),
	],

	extensions: ['.svelte', '.svx'],
	kit: {
		adapter: adapter(),

		vite: {
			resolve: {
				alias: {
					$components: path.resolve('src/components/'),
					$common: path.resolve('src/common/'),
					$assets: path.resolve('src/assets/'),
					$store: path.resolve('src/store/'),
				},
			},
			ssr: {
				noExternal: ['@fortawesome/*'],
			},
		},
	},
}

export default config
