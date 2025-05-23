<script lang="ts">
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
</script>

<div>
	<h1>
		{data.song.title}
	</h1>
</div>
