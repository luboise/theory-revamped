<script lang="ts">
	import ChartNavigator from "$lib/ChartNavigator.svelte";
	import LinkTree from "$lib/LinkTree.svelte";
	import type { LinkTreeData } from "$lib/types";

	import type { LayoutProps } from "./$types";

	let { children, data }: LayoutProps = $props();

	const tree: LinkTreeData = {
		url: "info/",
		label: "Info",
		links: [
			{
				url: "soflan/",
				label: "Soflan",
				links: [{ url: "basics", label: "Soflan Basics" }]
			}
		]
	};
</script>

<nav>
	<a href="/" id="logo" class="navitem">Theory</a>
	<a href="/tech" class="navitem">Techniques/Info</a>

	<LinkTree {tree} class="navitem" />
	<a href="/info" class="navitem">Info</a>
	<a href="/info/glossary">Glossary</a>
	<a href="/info/soflan">Glossary</a>
	<!-- <a href="/charts">Chart Directory</a> -->

	<!---->
	<!-- <ul class="navbar__link-wrapper"> -->
	<!-- 	<li className={"navlink" + (path === href ? " active" : "")}> -->
	<!-- 		<a {href} {...props}> -->
	<!-- 			{children} -->
	<!-- 		</a> -->
	<!-- 	</li> -->
	<!---->
	<!-- 	<CustomLink href="/">Home</CustomLink> -->
	<!-- 	<CustomLink href="songpage">Song Page</CustomLink> -->
	<!-- </ul> -->
</nav>

<div style:display="flex">
	{#if data.folders !== undefined}
		<ChartNavigator songFolders={data.folders} />
	{/if}

	<main style:flex="1">
		{@render children()}
	</main>
</div>

<style>
	nav {
		background-color: #00b2ff;

		display: flex;
		flex-direction: row;

		width: 100%;
		max-height: 200px;
		/*height: --navbar-height;*/

		font-size: 1.5rem;

		box-sizing: border-box;

		/* justify-content: space-between; */
		align-items: center;

		z-index: 20;

		margin-bottom: 1rem;

		border-collapse: collapse;
	}

	nav > * {
		background-color: inherit;
		/* flex: 1; */
		/* height: 100%; */
		min-width: 20%;

		/* padding: 0 1rem; */

		padding: 2rem 2rem;

		font-weight: bold;
		text-align: center;

		color: white;
		text-decoration: none;

		border: solid black 0.2rem;

		border-top: none;
		border-bottom: none;
	}

	#logo {
		background-color: #0092ff;

		text-align: center;
		padding-right: 5rem;
		border-left: none;
	}

	main {
		padding: 1em;
	}
</style>
