<script>
	import ArticleCard from '$lib/components/client/ArticleCard/ArticleCard.svelte';
	import Button from '$lib/components/client/Basic/Button/Button.svelte';

	export let data;

	let { articles, total } = data;
	let loading = false;

	let lastArticleId = articles.slice(-1)[0]?.id;

	async function fetchMore(lastId) {
		try {
			loading = true;
			const resp = await fetch('/api/load-more', {
				method: 'POST',
				body: JSON.stringify({
					lastId
				})
			});

			const res = await resp.json();

			articles = articles.concat(res);
			lastArticleId = articles.slice(-1)[0].id;
		} catch (err) {
			console.error(err);
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>
		SvelteBlog | Статті
	</title>
</svelte:head>

<div class="container-lg">
	{#if articles.length}
		<div class="row gap-3">
			{#each articles as article}
				<div class="col-12 col-md-6 col-lg-4">
					<ArticleCard slug={article.id} {...article} img={article.thumbnail} />
				</div>
			{/each}
		</div>
		{#if total !== articles.length}
			<div class="row mt-5 align-items-center justify-content-center">
				<Button
					clickEvent={() => fetchMore(lastArticleId)}
					isLoading={loading}
					isDisabled={loading}
					classes={`w-25`}
				>
					Load more
				</Button>
			</div>
		{/if}
	{:else}
		<h3>Тут поки нічого не має!</h3>
	{/if}
</div>
