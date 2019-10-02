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
			zenscroll.toY(500);
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
	@include breakpoint(1300) {
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
	margin-top: 50px;
	@include breakpoint(1300) {
		margin-top: -40px;
	}
}
h1 {
	font-size: 10vw;
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
$padding: 14px;
button {
	border: none;
	background: white;
	color: $green;
	font-size: 20px;
	padding: $padding;
	width: 170px;
	border-radius: 3px;
	transition: transform 0.2s;
	font-weight: 500;
	cursor: pointer;
	outline: none;
	margin-right: 40px;
	&:hover {
		transform: scale(1.2);
	}
	&:active {
		transform: scale(1);
	}
}
.action-buttons {
	display: flex;
	justify-content: center;
	margin-top: 35px;
}
a {
	display: inline-block;
	border: 2px solid $black;
	color: $black;
	text-decoration: none;
	padding: $padding;
	font-weight: 500;
	font-size: 20px;
	transition: transform 0.2s;
	border-radius: 5px;
	width: 170px;
	&:hover {
		transform: scale(1.2);
	}
	&:active {
		transform: scale(1);
	}
}
</style>
