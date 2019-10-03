module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    "vue/attribute-hyphenation": 0,
    "prettier/prettier": ["error", { 
			"singleQuote": true,
			"useTabs": true,
			"tabWidth": 2,
			"trailingComma": "es5"
		}]
  }
}
