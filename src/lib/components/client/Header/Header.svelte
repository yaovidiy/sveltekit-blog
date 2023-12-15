<script>
	import { page } from '$app/stores';

</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<div class="container-lg">
		<a
			class="navbar-brand"
			style="font-size: 36px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      color: #D97878;"
			href="/">Blogini</a
		>
		<button
			class="navbar-toggler mb-3"
			style="margin-left: auto;"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#headerToggle"
			aria-controls="headerToggle"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="headerToggle">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link" class:active={$page.url.pathname === '/'} href="/">Головна</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" class:active={$page.url.pathname === '/articles'} href="/articles">Статті</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" class:active={$page.url.pathname === '/news'} href="/news">Новини</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" class:active={$page.url.pathname === '/about-us'} href="/about-us">Про нас</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
