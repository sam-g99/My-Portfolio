<template>
	<footer>
		<h2>
			Want to get in touch?
		</h2>
		<a href="mailto:samuel.graham099dev@gmail.com">Email Me</a>
		<p class="copyright">©2019</p>
	</footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
footer {
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	background: $yellow;
	color: white;
	padding-top: 80px;
	padding-bottom: 120px;
	position: relative;
}
h2 {
	color: $black;
	font-size: 8vw;
	@include breakpoint(630) {
		font-size: 50px;
	}
}
a {
	text-decoration: none;
	border-radius: 5px;
	border: 2px solid $darkBlue;
	color: $darkBlue;
	padding: 10px;
	display: block;
	margin-top: 30px;
	font-size: 26px;
	transition: transform 0.2s;
	width: 100%;
	max-width: 250px;
	text-align: center;
	&:hover {
		background: $darkBlue;
		color: white;
		transform: scale(1.2);
	}
}
.copyright {
	color: $black;
	position: absolute;
	bottom: 10px;
	right: 10px;
}
</style>
