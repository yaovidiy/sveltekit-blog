<script>
	import { browser } from '$app/environment';
	const ComponentConstructor = browser
		? import('trix').then((module) => module.Component)
		: new Promise(() => {});

	if (browser) {
		document.addEventListener('trix-attachment-add', (e) => {
			console.log(e);
		});
	}
</script>

<svelte:head>
	<link rel="stylesheet" type="text/css" href="https://unpkg.com/trix@2.0.0/dist/trix.css" />
</svelte:head>

{#await ComponentConstructor}
	<p>No data here</p>
{:then module}
	<input type="hidden" name="content" id="trix" />
	<trix-editor class="trix-content" input="trix" />
{/await}

<style>
</style>
