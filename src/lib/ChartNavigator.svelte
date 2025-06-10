<script lang="ts">
	import NavigatorList from "./NavigatorList.svelte";
	import type { SongFolder } from "./types";

	const { songFolders }: { songFolders: { [key: string]: SongFolder } } = $props();

	let searchValue = $state("");
</script>

<div id="chart-navigator">
	<div>
		<h2>Chart navigator</h2>
		<form>
			<input
				bind:value={searchValue}
				type="text"
				id="input-chart-search"
				name="chart-search"
				autoComplete="off"
				placeholder="Search"
			/>
		</form>
	</div>

	{#each Object.values(songFolders).toReversed() as folder}
		<div class="song-folder">
			<h4>{folder.title}</h4>

			{#each Object.values(folder.songs) as song}
				<div class="song">
					<span style:overflow="hidden">{song.title}</span>
					<NavigatorList {song} playmode="SP" showMissing={false} />
					<!-- <NavigatorList {song} playmode="DP" /> -->
				</div>
			{/each}
		</div>
	{/each}

	<!-- <div className="game-version-dropdowns">{gameVersionDropdowns}</div> -->
</div>

<style>
	.song {
		display: flex;
		justify-content: space-between;
	}

	.song-folder {
		display: flex;
		flex-direction: column;
		gap: 0.2em;

		padding: 0 0.2em;
	}

	#chart-navigator {
		width: 20%;
		max-height: 90vh;
		float: left;

		background-color: aliceblue;

		text-align: center;

		position: sticky;
		top: 0px;

		overflow: scroll;
	}
</style>
