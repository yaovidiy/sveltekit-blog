<script>
	export let data;
	export let form;
</script>

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
							<td><a href="/admin/cat/edit/{category.rowid}">{category.rowid}</a></td>
							<td>{category.name}</td>
							<td>
								<form action="?/deleteCategory" method="post" class="deleteForm">
									<input type="hidden" name="rowid" value={category.rowid} />
									<button class="icon" href="!#">
										<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
											><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
											<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
											<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
											<style>
												svg {
													fill: #e5e7eb;
												}
											</style><path
												d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
											/></svg
										>
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
