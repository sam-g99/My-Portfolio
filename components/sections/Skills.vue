<template>
	<section>
		<div v-for="list in lists" :key="list.title">
			<hX>{{ list.title }}</hX>
			<ul>
				<li v-for="skill in list.skills" :key="skill">
					{{ skill }}
				</li>
			</ul>
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
					title: 'Build Tools',
					skills: ['Gulp', 'Webpack'],
				},
				{
					title: 'Back End',
					skills: ['Node JS', 'MongoDB'],
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
</style>
