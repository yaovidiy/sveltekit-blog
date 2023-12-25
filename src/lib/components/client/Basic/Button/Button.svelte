<script>
	import ButtonLoader from '$lib/components/client/Basic/ButtonLoader/ButtonLoader.svelte';

	export let type = 'primary';
	export let isLoading = false;
	export let isDisabled = false;
	export let clickEvent = () => {};
	export let styles = '';
	export let classes = '';
</script>

<button
	on:click={clickEvent}
	disabled={isDisabled}
	class={`btn btn-${type} ${classes}`}
	style:bind={styles}
>
	{#if isLoading}
		<ButtonLoader />
	{:else}
		<slot />
	{/if}
</button>
