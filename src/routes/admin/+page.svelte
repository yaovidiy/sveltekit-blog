<script>
	export let data;

	const dummyArticles = [
		{
			rowId: 1,
			title: 'Some title',
			category: 'Some category',
			status: 1
		},
		{
			rowId: 2,
			title: 'Some title',
			category: 'Some category',
			status: 1
		},
		{
			rowId: 3,
			title: 'Some title',
			category: 'Some category',
			status: 1
		},
		{
			rowId: 4,
			title: 'Some title',
			category: 'Some category',
			status: 0
		},
		{
			rowId: 5,
			title: 'Some title',
			category: 'Some category',
			status: 1
		},
		{
			rowId: 6,
			title: 'Some title',
			category: 'Some category',
			status: 0
		},
		{
			rowId: 7,
			title: 'Some title',
			category: 'Some category',
			status: 0
		}
	];
</script>

{#if data?.inited?.lenght}
	<div class="container-md pt-5">
		{JSON.stringify(data?.inited)}
		<h1>Список статтей</h1>
		<div class="table-responsive">
			<table class="table table-striped">
				<thead>
					<tr>
						<th>#</th>
						<th>Заголовок</th>
						<th>Категорія</th>
						<th>Статус</th>
						<th>Видалити</th>
					</tr>
				</thead>
				<tbody>
					{#each dummyArticles as article}
						<tr>
							<td><a href="/admin/edit/{article.rowId}">{article.rowId}</a></td>
							<td>{article.title}</td>
							<td>{article.category}</td>
							<td style:color={article.status ? 'green' : 'red'}
								>{article.status ? 'Active' : 'Inactive'}</td
							>
							<td>
								<a href="!#">
									<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
										><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
										<style>
											svg {
												fill: #e5e7eb;
											}
										</style><path
											d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
										/></svg
									>
								</a>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
{:else}
	<div class="container-md">
		<div class="row pt-5 justify-content-center">
			<button class="btn btn-primary" style="max-width: 250px; min-height: 50px;"
				>Ініціалізувати базу данних</button
			>
		</div>
	</div>
{/if}
