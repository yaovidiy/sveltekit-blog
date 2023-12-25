<script>
	import Button from '$lib/components/client/Basic/Button/Button.svelte';
	import { enhance, applyAction } from '$app/forms';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let loading = false;

	function submitHandler({ formElement, formData, action, cancel }) {
		loading = true;
		return async ({ result }) => {
			if (result.type === 'redirect') {
				goto(result.location);
			} else {
				await applyAction(result);
			}

			loading = false;
		};
	}
</script>

<div class="container-md d-flex justify-content-center pt-5">
	<form method="post" class="card col-12" use:enhance={submitHandler}>
		<div class="card-header">
			<h1 class="text-center">Login</h1>
		</div>
		<div class="card-body d-flex flex-column justify-content-center align-items-center">
			<div class="form-floating mb-3 w-100">
				<input
					type="text"
					name="username"
					class={`form-control ${
						typeof $page.form?.message === 'string' && $page.form?.message !== ''
							? 'is-invalid'
							: ''
					}`}
					id="username"
					placeholder="MyCoolUserName"
					required
				/>
				<label for="username">Username</label>
			</div>

			<div class="form-floating mb-3 w-100">
				<input
					type="password"
					name="password"
					class={`form-control ${
						typeof $page.form?.message === 'string' && $page.form?.message !== ''
							? 'is-invalid'
							: ''
					}`}
					id="password"
					placeholder="Password"
					required
				/>
				<label for="password">Password</label>
			</div>

			<div class="mb-3 create">
				<a href="/signup">Create account</a>
			</div>
			{#if $page.form?.message}
				<span class="text-danger mb-3">{$page.form.message}</span>
			{/if}
			<Button isLoading={loading} isDisabled={loading}>Login</Button>
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
</style>
