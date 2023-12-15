<script>
	import RichText from '$lib/components/admin/RichText/RichText.svelte';

	export let data;
	export let form;
</script>

<div class="container-md pt-5">
	<div class="row justify-content-center">
		{#if form?.success}
			<p class="alert alert-success">
				Успішно додано нову статю. <a href="/admin">Перейти на Дашборд</a>
			</p>
		{/if}
		{#if form?.success === false}
			<p class="alert alert-danger">Сталася помилка при додавані статті</p>
		{/if}
		<form method="post" enctype="multipart/form-data" class="card col-12 col-md-6 p-0">
			<div class="card-header text-center"><h1>Додати нову статтю</h1></div>
			<div class="card-body">
				<div class="form-floating mb-3 w-100">
					<input
						type="text"
						name="title"
						class="form-control"
						id="title"
						placeholder="MyCoolUserName"
						required
					/>
					<label for="title">Заголовок</label>
					<span class="invalid-feedback">Обов'язково до заповнення</span>
				</div>
				<div class="form-floating mb-3">
					<select
						name="categoryId"
						class="form-select"
						id="floatingSelect"
						aria-label="Категорія статті"
					>
						<option value="" selected>Оберіть категорію</option>
						{#each data.categories as category}
							<option value={category.id}>{category.name}</option>
						{/each}
					</select>
					<label for="floatingSelect">Категорія</label>
				</div>
				<div class="mb-3">
					<label for="image" class="form-label">Мініатюра</label>
					<input class="form-control" accept="image/*" name="image" type="file" id="image" />
				</div>
				<div class="mb-3">
					<RichText></RichText>
				</div>
				<div class="mb-3 row gap-2 pe-3 ps-3">
					<h5 class="col-12 text-center">Статус</h5>
					<input
						type="radio"
						class="btn-check"
						name="status"
						id="success-outlined"
						autocomplete="off"
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
						checked
						autocomplete="off"
						value="0"
					/>
					<label class="btn btn-outline-danger col-12 col-md-5" for="danger-outlined"
						>Не активна</label
					>
				</div>

				<button class="btn btn-primary w-100">Додати</button>
			</div>
		</form>
	</div>
</div>
