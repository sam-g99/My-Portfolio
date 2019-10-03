<template>
	<section>
		<div class="content">
			<h2>Projects</h2>
			<div class="divide"></div>
			<div class="projects-container">
				<div
					v-for="project in projects"
					:key="project.name"
					class="project-card"
				>
					<h3>
						{{ project.name }}
					</h3>
					<img
						:src="require(`@/assets/images/projects/${project.image}.svg`)"
					/>
					<h4>Main Languages</h4>
					<div class="langs">
						<p v-for="lang in project.mainLang" :key="lang">{{ lang }}</p>
					</div>
					<p class="description">{{ project.description }}</p>
					<ProjectButtons :liveLink="project.live" :githubLink="project.code" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import ProjectButtons from '~/components/ProjectButtons';
export default {
	components: { ProjectButtons },
	data: () => {
		return {
			projects: [
				{
					name: "Ivel's Personal Training",
					mainLang: ['Nuxt', 'SCSS'],
					description:
						'Landing page created for a client. Used Figma for designing and Nuxt to build it.',
					live: 'https://ivelspersonaltraining.com/',
					image: 'ivels',
				},
				{
					name: 'PSD Template',
					mainLang: ['Gulp', 'SCSS'],
					description:
						'Developed a site based on a free PSD template. Utilized Gulp and SCSS.',
					live: 'https://upbeat-shockley-d4c443.netlify.com/',
					code: 'https://github.com/sam-g99/Tajam-Template-Site-PSD',
					image: 'psd',
				},
				{
					name: 'Movie Site',
					mainLang: ['React', '3rd Party API'],
					description:
						'Movie site that connects to a 3rd party REST API to display info about movies along with easily playing trailers.',
					live: 'https://elegant-hoover-031eef.netlify.com/',
					code: 'https://github.com/sam-g99/Movie-API',
					image: 'movie',
				},
				{
					name: 'Time Zones Made Simple',
					mainLang: ['React', 'Moment.js'],
					description:
						'Single page application which creates links that help people know when an event is happening in their time.',
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
.container {
	padding: 10px;
	margin: 0 auto;
}
h2 {
	margin-left: 10px;
	font-weight: 500;
	font-size: 50px;
	color: $black;
	text-align: center;
	@include breakpoint(900) {
		text-align: left;
	}
}
.project-card {
	padding: 10px;
	@include breakpoint(800) {
		flex-basis: 50%;
		align-self: stretch;
	}
	@include breakpoint(1200) {
		flex-basis: 33.33333333%;
	}
}
.content {
	max-width: 1400px;
	margin: 0 auto;
	padding-bottom: 50px;
	margin-top: 15px;
}
.projects-container {
	display: flex;
	flex-wrap: wrap;
	max-width: 1400px;
	margin: 0 auto;
	@include breakpoint-max(800) {
		justify-content: center;
		max-width: 700px;
	}
}
.langs {
	p {
		display: inline-block;
		background: $darkBlue;
		color: white;
		width: auto;
		border-radius: 5px;
		text-align: center;
		font-weight: 500;
		@include horizontal-spacing(10px);
		padding: 5px;
		padding-left: 15px;
		padding-right: 15px;
	}
}
h3 {
	color: $darkBlue;
	font-weight: 500;
	font-size: 30px;
	margin-bottom: 10px;
}
img {
	width: 100%;
	margin-bottom: 10px;
}
.divide {
	margin-left: 10px;
}
.description {
	font-size: 20px;
	margin-top: 20px;
	margin-bottom: 20px;
	@include breakpoint(1200) {
		height: 81px;
	}
}
h4 {
	color: $black;
	margin-bottom: 5px;
}
.divide {
	margin: 0 auto;
	margin-bottom: 20px;
	margin-top: 15px;
	width: 50px;
	@include breakpoint(900) {
		margin-left: 10px;
		margin-right: 0px;
	}
}
</style>
