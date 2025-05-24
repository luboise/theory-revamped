<script lang="ts">
	import LinkTree from "./LinkTree.svelte";

	import type { LinkTreeData } from "./types";

	const { root = "/", tree, ...rest }: { root?: string; tree: LinkTreeData } = $props();
</script>

<div {...rest}>
	<a href={root + tree.url}>{tree.label}</a>

	{#if tree.links}
		{#each tree.links as subtree}
			{#if true}
				<LinkTree root={root + tree.url} tree={subtree} {...rest} />
			{/if}
		{/each}
	{/if}
</div>

<style>
	div {
		display: block;
	}
	div > * {
		width: 100%;
	}
	div > a {
		height: 100%;
	}

	div > *:not(:first-child) {
		color: red;
	}
</style>
