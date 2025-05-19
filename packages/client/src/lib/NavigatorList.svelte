<script lang="ts">
	import { type PlayMode, type SongData } from "./apitypes";
	const { song, playmode }: { song: SongData; playmode: PlayMode } = $props();
</script>

<div>
	{#each song.chartIds as chartId}
		{#if (playmode === "SP" && chartId <= 5) || (playmode === "DP" && chartId >= 6)}
			<a href={`/song/${song.songId}/${chartId}`} style={`grid-column: ${(chartId % 6) + 1};`}>
				{chartId}
			</a>
		{/if}
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(5, 1fr);

		align-items: center;
		justify-content: center;
		justify-items: sretch;
	}

	a {
		width: 100%;
		height: 100%;

		border-radius: 12%;
		border: solid black 0.2em;
		box-sizing: border-box;

		background-color: red;
	}
</style>
