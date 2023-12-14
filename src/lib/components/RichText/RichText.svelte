<script>
	import { browser } from '$app/environment';
	const ComponentConstructor = browser
		? import('trix').then((module) => module.Component)
		: new Promise(() => {});

	if (browser) {
		document.addEventListener('trix-attachment-add', async (e) => {

			const formData = new FormData();
			formData.set('file', e.attachment.attachment.file);
			const resp = await fetch('/api/upload-file', {
				method: 'POST',
				body: formData
			});
			const attributes = await resp.json();

			e.attachment.attachment.setAttributes(attributes);
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
