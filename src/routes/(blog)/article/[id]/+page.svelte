<script>
	export let data;

	const { thumbnail, description, title, category } = data.article ?? {};
</script>

<svelte:head>
	<title>SvelteBlog | {title}</title>
</svelte:head>

<section class="container-lg">
	<div class="row">
		<article class="col-12">
			{#if title}
				<h1 class="mb-3 text-md-center">{title}</h1>
			{/if}

			{#if thumbnail}
				<figure class="figure mb-3">
					<img src={thumbnail} alt={`${title} - main image`} class="figure-img img-fluid rounded" />
				</figure>
			{/if}

			{#if description}
				<article class="mb-3">
					{@html description}
				</article>
			{/if}

			{#if category}
				<span class="badge text-bg-primary">{category.name}</span>
			{/if}
		</article>
	</div>
</section>
