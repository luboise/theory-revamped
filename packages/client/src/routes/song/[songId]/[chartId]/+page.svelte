<script lang="ts">
	import { page } from "$app/state";
</script>

<div>
	<p>Song ID: {page.params.songId}</p>
	<p>Chart ID: {page.params.chartId}</p>
</div>
