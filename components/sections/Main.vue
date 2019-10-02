<template>
	<main>
		<div class="content">
			<h1>Hello, I'm Samuel</h1>
			<p>Your friendly earthling web developer</p>
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
}
.content {
	@include breakpoint(800) {
		margin-top: 30px;
		margin-left: 30px;
	}
	@include breakpoint(1400) {
		margin-top: 100px;
		margin-left: 100px;
	}
}
h1 {
	font-size: 9vw;
	/* Limit font size decrease */
	@include breakpoint-max(375) {
		font-size: 34px;
	}
	/* Limit font size increase */
	@include breakpoint(780) {
		font-size: 70px;
	}
}
p {
	font-size: 16px;
	font-weight: 400;
}
</style>
