<template>
	<div class="container">
		<a :href="liveLink" target="_blank" rel="noopener noreferrer">
			View Live
		</a>
		<a :href="githubLink" target="_blank" rel="noopener noreferrer">
			View Code
		</a>
	</div>
</template>

<script>
export default {
	props: {
		liveLink: {
			type: String,
			default: null,
		},
		githubLink: {
			type: String,
			default: null,
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
</style>
