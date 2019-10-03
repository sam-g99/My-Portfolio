<template>
	<section id="skills">
		<div class="content">
			<h2>Skills</h2>
			<div class="divide"></div>
			<div class="lists-container">
				<div v-for="list in lists" :key="list.title" class="list">
					<h3>{{ list.title }}</h3>
					<div class="skills">
						<p v-for="skill in list.skills" :key="skill">
							{{ skill }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data: () => {
		return {
			lists: [
				{
					title: 'Front End',
					skills: [
						'HTML',
						'CSS',
						'JavaScript',
						'Jquery',
						'React',
						'Vue',
						'Nuxt',
						'SASS/SCSS',
					],
				},
				{
					title: 'Back End',
					skills: ['Node JS', 'MongoDB'],
				},
				{
					title: 'Build Tools',
					skills: ['Gulp', 'Webpack'],
				},

				{
					title: 'Design Tools',
					skills: ['Figma', 'Adobe XD'],
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
.content {
	padding: 10px;
	margin: 0 auto;
	max-width: 1400px;
	position: relative;
	margin-top: 15px;
}
.lists-container {
	display: grid;
	@include breakpoint(900) {
		grid-template-columns: auto auto;
		grid-gap: 10px;
	}
	@include breakpoint(1000) {
		grid-template-columns: auto auto auto;
		grid-gap: 10px;
	}
}
.list {
	text-align: center;
	@include vertical-spacing(20px);
	@include breakpoint(900) {
		margin: 0;
	}
}
h2 {
	font-weight: 500;
	font-size: 50px;
	color: $darkBlue;
	text-align: center;
	@include breakpoint(900) {
		text-align: left;
	}
}
.divide {
	margin: 0 auto;
	margin-bottom: 20px;
	margin-top: 10px;
	width: 50px;
	@include breakpoint(900) {
		margin-left: 0;
		margin-right: 0;
	}
}

h3 {
	font-weight: 500;
	background: $darkBlue;
	color: white;
	font-size: 7.5vw;
	@include breakpoint(400) {
		font-size: 30px;
	}
}

.skills {
	background: $lightGray;
	p {
		font-size: 7vw;
		@include vertical-spacing(15px);
		font-weight: 400;
		color: $black;
		@include breakpoint(375) {
			font-size: 26px;
		}
	}
}
.skills,
h3 {
	padding: 10px;
}
</style>
