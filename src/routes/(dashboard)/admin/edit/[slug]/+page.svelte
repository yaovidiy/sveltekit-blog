<script>
	import RichText from '$lib/components/admin/RichText/RichText.svelte';

	export let data;
	export let form;

	let isReplacingImage = false;
</script>

<div class="container-md pt-5">
	{#if form?.success}
		<p class="alert alert-success">Успішно відредаговано <a href="/admin">Перейти на Дашборд</a></p>
	{/if}
	{#if form?.success === false}
		<p class="alert alert-danger">Помилка при редагуванні</p>
	{/if}
	<div class="row justify-content-center">
		<form method="post" enctype="multipart/form-data" class="card col-12 col-md-6 p-0">
			<div class="card-header text-center"><h1>Оновити статтю</h1></div>
			<div class="card-body">
				<div class="form-floating mb-3 w-100">
					<input
						type="text"
						name="title"
						class="form-control"
						id="title"
						placeholder="MyCoolUserName"
						value={data.article.title}
						required
					/>
					<label for="title">Заголовок</label>
					<span class="invalid-feedback">Обов'язково до заповнення</span>
				</div>
				<div class="form-floating mb-3">
					<select
						value={data.article.categoryId}
						name="categoryId"
						class="form-select"
						id="floatingSelect"
						aria-label="Категорія статті"
					>
						<option selected>Оберіть категорію</option>
						{#each data.categories as category}
							<option value={category.id}>{category.name}</option>
						{/each}
					</select>
					<label for="floatingSelect">Категорія</label>
				</div>
				<div class="mb-3 d-flex gap-2 justify-content-center align-items-center">
					{#if data.article.thumbnail && !isReplacingImage}
						<img
							class="img-thumbnail"
							src={`${data.article.thumbnail}`}
							width="120"
							height="50"
							alt={`мініатюра ${data.article.title}`}
						/>
						<input type="hidden" name="image" value={data.article.thumbnail} />
						<button
							on:click={() => (isReplacingImage = true)}
							class="btn btn-danger"
							style="max-width: 120px; max-height: 40px">Замініти</button
						>
					{:else}
						<label for="image" class="form-label mb-0">Мініатюра</label>
						<input class="form-control" accept="image/*" name="image" type="file" id="image" />
					{/if}
				</div>
				<div class="form-floating mb-3">
					<textarea
						class="form-control"
						placeholder="Короткий опис"
						id="shortDesc"
						name="shortDesc"
						style="height: 100px">{data.article.shortDesc ?? ''}</textarea
					>
					<label for="shortDesc">Короткий опис</label>
				</div>
				<div class="mb-3">
					<RichText defaultValue={data.article.description} />
				</div>
				<div class="mb-3 row gap-2 pe-3 ps-3">
					<h5 class="col-12 text-center">Статус</h5>
					<input
						type="radio"
						class="btn-check"
						name="status"
						id="success-outlined"
						autocomplete="off"
						checked={data.article.status === 1}
						value="1"
					/>
					<label class="btn btn-outline-success col-12 col-md-6" for="success-outlined"
						>Активна</label
					>

					<input
						type="radio"
						class="btn-check"
						name="status"
						id="danger-outlined"
						autocomplete="off"
						checked={data.article.status === 0}
						value="0"
					/>
					<label class="btn btn-outline-danger col-12 col-md-5" for="danger-outlined"
						>Не активна</label
					>
					<input type="hidden" name="description" value="Some value" />
					<input type="hidden" name="id" value={data?.article?.id} />
				</div>

				<button class="btn btn-primary w-100">Оновити</button>
			</div>
		</form>
	</div>
</div>
