<template>
	<main>
		<div class="content">
			<h1 ref="test" data-scroll>Hello, I'm Samuel.</h1>
			<p>Your friendly earthling web developer.</p>
			<button>Get Started</button>
		</div>
	</main>
</template>

<script>
export default {};
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
		margin-top: -150px;
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
	margin-top: 5px;
	@include breakpoint(400) {
		font-size: 20px;
	}
	@include breakpoint(600) {
		font-size: 22px;
	}
}
button {
	border: none;
	background: white;
	color: $green;
	font-size: 20px;
	padding: 15px;
	width: 150px;
	border-radius: 3px;
	margin-top: 20px;
	box-shadow: 0px 4px 4px rgba(54, 54, 54, 0.178);
	transition: transform 0.2s;
	cursor: pointer;
	outline: none;
	&:hover {
		transform: scale(1.2);
	}
}
@keyframes float {
	0% {
		transform: translateY(-5px);
	}
	100% {
		transform: translateY(5px);
	}
}
</style>
