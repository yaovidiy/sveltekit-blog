<script>
	import { enhance } from "$app/forms";
</script>

<div class="container-md d-flex justify-content-center pt-5">
	<form method="post" class="card col-12" use:enhance>
		<div class="card-header">
			<h1 class="text-center">Login</h1>
		</div>
		<div class="card-body d-flex flex-column justify-content-center align-items-center">
			<div class="form-floating mb-3 w-100">
				<input
					type="text"
					name="username"
					class="form-control"
					id="username"
					placeholder="MyCoolUserName"
				/>
				<label for="username">Username</label>
			</div>

			<div class="form-floating mb-3 w-100  ">
				<input
					type="password"
					name="password"
					class="form-control"
					id="password"
					placeholder="Password"
				/>
				<label for="password">Password</label>
			</div>

      <div class="mb-3 create">
        <a href="/signup">Create account</a>
      </div>

			<button class="btn btn-primary">Login</button>
		</div>
	</form>
</div>

<style>
  .card {
    max-width: 500px;
  }

  .create {
    align-self: flex-start;
  }

  .btn {
    min-width: 250px;
    min-height: 50px;
  }
</style>