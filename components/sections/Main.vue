<template>
	<main>
		<div class="content">
			<h1 ref="test" data-scroll>Hello, I'm Samuel.</h1>
			<p>Your friendly earthling web developer.</p>
			<div class="action-buttons">
				<button @click="scrollToSkills">Scroll Down</button>
				<a
					href="http://github.com/sam-g99"
					target="_blank"
					rel="noopener noreferrer"
				>
					View Github
				</a>
			</div>
		</div>
	</main>
</template>

<script>
import zenscroll from 'zenscroll';
export default {
	methods: {
		scrollToSkills() {
			zenscroll.toY(600);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
main {
	background: $yellow;
	height: 100vh;
	width: 100%;
	padding: 10px;
	@include breakpoint(900) {
		display: flex;
		flex-flow: column;
		justify-content: center;
		min-height: 500px;
	}
	@include filtered-background('../../assets/images/vscode.png');
}

.content {
	z-index: 5;
	position: relative;
	text-align: center;
	height: 100%;
	display: flex;
	flex-flow: column;
	@include breakpoint(900) {
		height: auto;
		margin-top: -40px;
	}
}
h1 {
	font-size: 10vw;
	margin-top: 50px;
	color: $black;
	/* Limit font size decrease */
	@include breakpoint-max(375) {
		font-size: 34px;
	}
	/* Limit font size increase */
	@include breakpoint(780) {
		font-size: 78px;
	}
}
p {
	font-size: 16px;
	font-weight: 400;
	color: $black;
	margin-top: 15px;
	@include breakpoint(400) {
		font-size: 20px;
	}
	@include breakpoint(600) {
		font-size: 22px;
	}
}
.action-buttons {
	display: flex;
	flex-flow: column;
	margin-top: auto;
	align-items: center;
	margin-top: auto;
	margin-bottom: 90px;
	@include breakpoint(900) {
		justify-content: center;
		flex-flow: row;
		margin-top: 35px;
		margin-bottom: 0;
	}
}
button,
a {
	width: 100%;
	font-weight: 500;
	padding: 15px;
	transition: transform 0.2s;
	border-radius: 3px;
	font-size: 20px;
	max-width: 350px;

	@include breakpoint(900) {
		height: 60px;
		width: 170px;
		&:hover {
			transform: scale(1.2);
		}
		&:active {
			transform: scale(1);
		}
	}
}
button {
	border: none;
	background: white;
	color: $green;
	cursor: pointer;
	outline: none;
	@include breakpoint(900) {
		margin-right: 40px;
	}
}

a {
	display: inline-block;
	border: 2px solid $black;
	color: $black;
	text-decoration: none;
	margin-top: 20px;
	@include breakpoint(900) {
		margin-top: 0;
	}
}
</style>
