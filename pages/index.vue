<template>
	<div class="container">
		<Main />
		<Skills />
		<Projects />
		<Contact />
	</div>
</template>

<script>
import Main from '~/components/sections/Main';
import Projects from '~/components/sections/Projects';
import Skills from '~/components/sections/Skills';
import Contact from '~/components/sections/Contact';

export default {
	components: { Main, Projects, Skills, Contact },
};
</script>

<style></style>
