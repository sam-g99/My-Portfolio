<template>
	<section>
		<div v-for="project in projects" :key="project.name">
			<h3>
				{{ project.name }}
			</h3>
		</div>
	</section>
</template>

<script>
export default {
	data: () => {
		return {
			projects: [
				{
					name: "Ivel's Personal Training",
					mainLang: ['Nuxt', 'Scss'],
					description:
						'Landing page created for a client. Used Figma for designing and Nuxt for server-side rendering and webpack',
					live: 'https://ivelspersonaltraining.com/',
					image: 'ivels',
				},
				{
					name: 'PSD Template',
					mainLang: ['Gulp', 'Scss'],
					description:
						'Developed a site based on a free PSD template. Utilized Gulp and SCSS.',
					live: 'https://upbeat-shockley-d4c443.netlify.com/',
					code: 'https://github.com/sam-g99/Tajam-Template-Site-PSD',
					image: 'psd',
				},
				{
					name: 'Movie Site',
					mainLang: ['React', '3rd Party Api'],
					description:
						'Movie site that connects to an API to display different types of info about a movie. Using React.',
					live: 'https://elegant-hoover-031eef.netlify.com/',
					code: 'https://github.com/sam-g99/Movie-API',
					image: 'movie',
				},
				{
					name: 'Time Zones Made Simple',
					mainLang: ['React', 'Moment.js'],
					description:
						'SPA that creates links that help people know when an event is happening in their time. Using React and Moment JS.',
					live: 'https://priceless-goldberg-a9cfed.netlify.com/',
					code: 'https://github.com/sam-g99/Time-Zones-Made-Simple',
					image: 'timezones',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
</style>
