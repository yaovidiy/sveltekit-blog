<script>
	export let img = '';
	export let title = '';
	export let description = '';
	export let slug = '/';
	export let createdAt = '';
	export let category = '';

	function showReadableDate(date) {
		let data = new Date();

		if (date) {
			data = date;
		}

		return new Intl.DateTimeFormat('uk', { dateStyle: 'medium' }).format(data);
	}
</script>

<a href={`article/${slug}`} class="card text-decoration-none">
	<img src={img} alt={`${title} | article image`} class="card-img-top" />
	<div class="card-body">
		<h5 class="card-title">{title}</h5>
		<p class="card-text">{description}</p>
		<p class="card-text d-flex justify-content-between">
			<span class="badge text-bg-primary">{category.name}</span>
			<small class="text-body-secondary">{showReadableDate(createdAt)}</small>
		</p>
	</div>
</a>

<style>
  .card-title {
    transition: color 0.3s;
  }
	.card:hover .card-title {
		color: var(--bs-primary);
	}
</style>
