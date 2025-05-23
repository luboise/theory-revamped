<script lang="ts">
	import Navbar from "$lib/Navbar.svelte";
	import ChartNavigator from "$lib/ChartNavigator.svelte";

	let { children } = $props();
</script>

<nav>
	<a href="/">home</a>
	<a href="/about">about</a>
</nav>

<div>
	<Navbar />
	<ChartNavigator />
</div>

{@render children()}
