<script lang="ts">
	import ChartObject from '$lib/types';

	const [songAndChartObjects, setSongAndChartObjects] = useState([null, null]);

	/*
	function getGameVersionDropdowns(
		GAME_VERSION_GROUPS,
		chartObjects: { [key: string]: ChartData }
	) {
		if (!GAME_VERSION_GROUPS || !chartObjects) return [];

		const chartDiffGroups = Object.values(chartObjects).reduce((groups, item) => {
			const group = groups[item.song_id] || [];
			group.push(item.diff);
			groups[item.song_id] = group;npm create svelte@latest my-app
			return groups;
		});

		let gameVersionDropdowns = [];
		for (const key in GAME_VERSION_GROUPS) {
			gameVersionDropdowns.push(
				<GameVersionFolder
					versionTitle={
						key in GAME_VERSION_TITLES ? GAME_VERSION_TITLES[key] : `${key}: IIDX ${key}`
					}
					versionSongData={GAME_VERSION_GROUPS[key]}
					chartDiffGroups={chartDiffGroups}
				/>
			);
		}

		return gameVersionDropdowns;
	}*/

	let searchValue = $state('');

for 


	const GAME_VERSION_GROUPS = useMemo(() => {
		if (!songObjects) return {};

		const groups: { [key: string]: Array<ChartObject> } = {};

		for (const key in songObjects) {
			const item = songObjects[key];

			// Check that game version exists
			groups[item.game_version] = groups[item.game_version] || [];

			console.debug('Pushing ', item);
			groups[item.game_version].push(item);
		}

		// console.debug(groups);
		return groups;
	}, [songAndChartObjects]);

	const gameVersionDropdowns = getGameVersionDropdowns(GAME_VERSION_GROUPS, chartObjects);

	const handleData = async () => {
		const arrayCopy = songAndChartObjects.slice();

		await fetchJSONResource('song_objects.json', arrayCopy, 0);
		await fetchJSONResource('chart_objects.json', arrayCopy, 1);

		setSongAndChartObjects(arrayCopy);

		// console.log(songAndChartObjects);
	};

	useEffect(() => {
		handleData();
	}, []);

	useEffect(() => {}, [songAndChartObjects]);
</script>

<div class="chart-navigator">
	<div class="chart-navigator-header">
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

	<div className="game-version-dropdowns">{gameVersionDropdowns}</div>
</div>

<style>
	div.chart-navigator {
		width: 20%;
		height: 100%;
		float: left;

		background-color: aliceblue;

		text-align: center;

		position: sticky;
		top: 0px;
	}
</style>
