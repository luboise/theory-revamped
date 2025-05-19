<script lang="ts">
	import SONG_FOLDERS from "./folders";
	import NavigatorList from "./NavigatorList.svelte";

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

	{#each Object.values(SONG_FOLDERS) as folder}
		<h4>{folder.title}</h4>

		{#each folder.songs as song}
			<div>
				{song.title}

				<NavigatorList {song} playmode="SP" />
				<NavigatorList {song} playmode="DP" />
			</div>
		{/each}
	{/each}

	<!-- <div className="game-version-dropdowns">{gameVersionDropdowns}</div> -->
</div>

<style>
	#chart-navigator {
		width: 20%;
		height: 100%;
		float: left;

		background-color: aliceblue;

		text-align: center;

		position: sticky;
		top: 0px;
	}
</style>
