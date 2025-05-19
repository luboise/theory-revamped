<script lang="ts">
	import { type PlayMode, type SongData, type ChartDiff } from "./apitypes";

	const { song, playmode }: { song: SongData; playmode: PlayMode } = $props();

	const indices: ChartDiff[] = playmode === "SP" ? [0, 1, 2, 3, 4] : [6, 7, 8, 9, 10];

	const lookups: { [key: number]: { text: string; color: string } } = {
		0: { text: "SPB", color: "#009900" },
		1: { text: "SPN", color: "#4A7DB9" },
		2: { text: "SPH", color: "#CFA240" },
		3: { text: "SPA", color: "#A0424D" },
		4: { text: "SPL", color: "#CC49CC" },
		6: { text: "DPB", color: "#840E82" },
		7: { text: "DPN", color: "#4A7DB9" },
		8: { text: "DPH", color: "#CFA240" },
		9: { text: "DPA", color: "#A0424D" },
		10: { text: "DPL", color: "#CC49CC" }
	} as const;
</script>

<div>
	{#each indices as id}
		<a href={`/song/${song.songId}/${id}`} style={`grid-column: ${(id % 6) + 1};`}>
			<button style:background-color={lookups[id].color} disabled={!song.chartIds.includes(id)}>
				{lookups[id].text}
			</button>
		</a>
	{/each}
</div>

<style>
	a:has(> button:disabled) {
		opacity: 20%;
		pointer-events: none;
	}

	div {
		display: grid;
		grid-template-columns: repeat(5, 1fr);

		align-items: center;
		justify-content: center;
		justify-items: sretch;
	}

	a > button {
		width: 100%;
		height: 100%;

		border-radius: 12%;
		border: solid black 0.2em;
		box-sizing: border-box;
	}
</style>
