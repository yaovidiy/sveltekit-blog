<script>
	import { page } from '$app/stores';

	export let data;
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
	<div class="container-md">
		<a
			class="navbar-brand"
			style="font-size: 36px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      color: #D97878"
			href="/">SvelteBlog</a
		>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNavDropdown"
			aria-controls="navbarNavDropdown"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarNavDropdown">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" class:active={$page.url.pathname === '/admin'} aria-current="page" href="/admin">Статті</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" class:active={$page.url.pathname === '/admin/cat'} href="/admin/cat">Категорії</a>
				</li>
				<li class="nav-item dropdown">
					<a
						class="nav-link dropdown-toggle"
						href="!#"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						{data?.username}
					</a>
					<ul class="dropdown-menu">
						<li>
							<form action="?/logout" method="post">
								<input class="dropdown-item" type="submit" value="Вийти" />
							</form>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</nav>

<slot />
