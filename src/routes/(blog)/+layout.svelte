<script>
	import Header from '$lib/components/client/Header/Header.svelte';
	import Footer from '$lib/components/client/Footer/Footer.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	inject({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();
</script>

<Header />
<main class="container-md mt-5 mb-5">
	<slot />
</main>
<Footer />
