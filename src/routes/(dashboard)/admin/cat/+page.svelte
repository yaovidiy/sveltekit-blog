<script>
	export let data;
	export let form;
</script>

<svelte:head>
	<title>Адмін панель | Категорії</title>
</svelte:head>
<div class="container-md pt-5">
	{#if form?.deleted}
		<p class="alert alert-success">Успішно видалено</p>
	{/if}
	{#if form?.deleted === false}
		<p class="alert alert-danger">Помилка при видаленні</p>
	{/if}
	{#if data.categories.length > 0}
		<div class="row justify-content-between align-items-center">
			<h1 style="width: 50%;">Список статтей</h1>
			<a href="/admin/cat/add" class="btn btn-primary" style="max-width: 250px; max-height: 40px"
				>Додати нову категорію</a
			>
		</div>
		<div class="table-responsive">
			<table class="table table-striped">
				<thead>
					<tr>
						<th>#</th>
						<th>Категорія</th>
						<th>Видалити</th>
					</tr>
				</thead>
				<tbody>
					{#each data.categories as category}
						<tr>
							<td><a href="/admin/cat/edit/{category.id}">{category.id}</a></td>
							<td>{category.name}</td>
							<td>
								<form action="?/deleteCategory" method="post" class="deleteForm">
									<input type="hidden" name="id" value={category.id} />
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
			<p class="text-center">Не має категорій</p>
			<a href="/admin/cat/add" class="btn btn-primary" style="max-width: 250px; min-height: 50px;"
				>Додайте свою першу категорію</a
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
