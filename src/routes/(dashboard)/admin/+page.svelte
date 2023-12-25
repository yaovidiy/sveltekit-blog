<script>
	export let data;
	export let form;
</script>

<svelte:head>
	<title>Адмін панель | Статі</title>
</svelte:head>

<div class="container-md pt-5">
	{#if form?.deleted}
		<p class="alert alert-success">Успішно видалено</p>
	{/if}
	{#if form?.deleted === false}
		<p class="alert alert-danger">Помилка при видаленні</p>
	{/if}
	{#if data.articles.length > 0}
		<div class="row justify-content-between align-items-center">
			<h1 style="width: 50%;">Список статтей</h1>
			<a href="/admin/add" class="btn btn-primary" style="max-width: 250px; max-height: 40px"
				>Додати нову статтю</a
			>
		</div>
		<div class="table-responsive">
			<table class="table table-striped">
				<thead>
					<tr>
						<th>#</th>
						<th>Мініатюра</th>
						<th>Заголовок</th>
						<th>Категорія</th>
						<th>Статус</th>
						<th>Видалити</th>
					</tr>
				</thead>
				<tbody>
					{#each data.articles as article}
						<tr>
							<td><a href="/admin/edit/{article.id}">{article.id}</a></td>
							<td>
								{#if article.thumbnail}
									<img
										class="img-thumbnail"
										src={`${article.thumbnail}`}
										alt={`Мініатюра ${article.title}`}
										width="100"
										height="50"
									/>
								{/if}
							</td>
							<td>{article.title}</td>
							<td>{article?.category?.name ?? 'Категорія не обрана'}</td>
							<td style:color={article.status ? 'green' : 'red'}
								>{article.status ? 'Active' : 'Inactive'}</td
							>
							<td>
								<form action="?/deleteArticle" method="post" class="deleteForm">
									<input type="hidden" name="id" value={article.id} />
									<button class="icon" href="!#">
										<i class="bi bi-trash3" />
									</button>
								</form>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{:else}
		<div class="row pt-5 justify-content-center">
			<p class="text-center">Не має статтей</p>
			<a href="/admin/add" class="btn btn-primary" style="max-width: 250px; min-height: 50px;"
				>Додайте свою першу статтю</a
			>
		</div>
	{/if}
</div>

<style>
	button.icon {
		background: none;
		border: none;
	}
</style>
