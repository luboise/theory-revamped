<script lang="ts">
</script>

<h1>Welcome to SvelteKit</h1>
<Navbar />

<div style:display="flex">
	<ChartNavigator />
	<div className="page-contents">
		<RouterProvider {router} />
	</div>
</div>

<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
