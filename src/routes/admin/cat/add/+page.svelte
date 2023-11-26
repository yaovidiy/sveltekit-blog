<script>
  export let form;

  console.log(form);
</script>

<div class="container-md pt-5">
	<div class="row justify-content-center">
		<form method="post" class="card col-12 col-md-6 p-0">
			<div class="card-header text-center"><h1>Додати нову категорію</h1></div>
			<div class="card-body">
				<div class="form-floating mb-3 w-100">
					<input
						type="text"
						name="name"
						class="form-control"
						id="name"
						placeholder="Назва категорії"
						required
					/>
					<label for="name">Назва</label>
					<span class="invalid-feedback">Обов'язково до заповнення</span>
				</div>

				<button class="btn btn-primary w-100">Додати</button>
			</div>
		</form>
	</div>
</div>
