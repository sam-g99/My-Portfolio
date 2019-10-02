<template>
	<div class="container">
		<Main />
		<Projects />
		<Skills />
	</div>
</template>

<script>
import Main from '~/components/sections/Main';
import Projects from '~/components/sections/Projects';
import Skills from '~/components/sections/Skills';

export default {
	components: { Main, Projects, Skills },
};
</script>

<style></style>
