<template>
	<div class="project-button-container">
		<a
			v-if="liveLink"
			:href="liveLink"
			target="_blank"
			rel="noopener noreferrer"
			class="live"
		>
			View Live
		</a>
		<a
			v-if="githubLink"
			:href="githubLink"
			target="_blank"
			rel="noopener noreferrer"
			class="github"
		>
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
.project-button-container {
	display: flex;
}
a {
	display: block;
	text-decoration: none;
	font-size: 20px;
	font-weight: 400;
	padding: 10px;
	width: 100%;
	text-align: center;
	@include horizontal-spacing(10px);
	transition: transform 0.2s, box-shadow 0.2s;
	&:hover {
		transform: scale(1.1);
		box-shadow: 0px 5px 5px rgba(75, 75, 75, 0.664);
	}
	&:active {
		transform: scale(1);
	}
}
.live {
	background: $yellow;
	color: $darkBlue;
}
.github {
	background: $darkBlue;
	color: white;
}
</style>
