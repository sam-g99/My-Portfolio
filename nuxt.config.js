export default {
	mode: 'universal',
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'Samuel Graham Web Developer',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content:
					"Hello, I'm Samuel and this site is to show some of my skills and work.",
			},
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
	},
	server: {
		port: 8000,
		host: '0.0.0.0',
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },
	/*
	 ** Global CSS
	 */
	css: [],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [],
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {},
	},
};
