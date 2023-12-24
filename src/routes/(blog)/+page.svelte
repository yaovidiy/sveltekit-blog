<script>
	import ArticleCard from '$lib/components/client/ArticleCard/ArticleCard.svelte';

	export let data;

	let { articles, total } = data;

	$: lastArticle = articles.slice(-1);

	async function fetchMore(lastId) {
		try {
			const resp = await fetch('/api/load-more', {
				method: 'POST',
				body: JSON.stringify({
					lastId
				})
			});

			const res = await resp.json();

			articles = articles.concat(res);
		} catch (err) {
			console.error(err);
		}
	}
</script>

<div class="container-lg">
	<div class="row">
		{#each articles as article}
			<div class="col-12 col-md-6 col-lg-4">
				<ArticleCard slug={article.id} {...article} img={article.thumbnail} />
			</div>
		{/each}
	</div>
	{#if total !== articles.length}
		<div class="row mt-5 align-items-center justify-content-center">
			<button class="btn btn-primary w-25" on:click={() => fetchMore(lastArticle.id)}
				>Load more</button
			>
		</div>
	{/if}
</div>
