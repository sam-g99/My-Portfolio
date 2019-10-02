<template>
	<main>
		<div class="content">
			<h1 ref="test" data-scroll>Hello, I'm Samuel.</h1>
			<p>Your friendly earthling web developer.</p>
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
}
.content {
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
</style>
