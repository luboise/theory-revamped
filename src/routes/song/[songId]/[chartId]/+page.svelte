<script lang="ts">
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();

	/*
function makeSortFunction(
	property,
	descending = true,
	subsortProperty = "score"
) {
	return (a, b) => {
		const larger = a[property] > b[property];
		const smaller = a[property] < b[property];

		// Compare subsort if
		if (
			!larger &&
			!smaller &&
			a[subsortProperty] &&
			b[subsortProperty] &&
			property != subsortProperty
		) {
			if (a[subsortProperty] < b[subsortProperty]) return 1;
			else return -1;
		}

		if (descending ? smaller : larger) return 1;
		else return -1;
	};
}
*/

	/*
 const SORT_TYPES = {
	"Highest Voted": makeSortFunction("score"),
	"Easiest": makeSortFunction("difficulty", false),
	"Hardest": makeSortFunction("difficulty"),
	"Newest": makeSortFunction("timestamp"),
	"Oldest": makeSortFunction("timestamp", false),
};
*/

	/*
const MakeSortButton = (ButtonText, onclickFunction) => {
	return (
		// <button key={"sort-button-" + ButtonText.toLowerCase().replace(" ", "-")} onClick={() => {SortMethods(ButtonText)}}>{ButtonText}</button>
		<button
			key={"sort-button-" + ButtonText.toLowerCase().replace(" ", "-")}
			onClick={() => {
				onclickFunction(ButtonText);
			}}
		>
			{ButtonText}
		</button>
	);
};
*/

	/*
const MakeSortButtons = (TextArray, onclickFunction) => {
	let returnJSX = [];

	TextArray.forEach((text) => {
		const newButton = MakeSortButton(text, onclickFunction);
		returnJSX.push(newButton);
	});

	return returnJSX;
};
*/
</script>

<div>
	<h1>
		{data.song.title}
	</h1>

	<div class="chart-method-container">
		{#if data.methods.length > 0}
			<div id="method-sorting-buttons">
				{""}
			</div>

			{#each data.methods as method, i (i)}
				<div class="chart-method">
					<h2 style:grid-area="title">{method.title}</h2>
					<p style:grid-area="author">Submitted by {method.authorName}</p>
					<!-- <div class="chart-method-header"> -->
					<!-- <div id="chart-method-rating-container"> -->
					<!-- <button class="btn-vote">\/</button> -->
					<!-- <p>{method.rating}</p> -->
					<!-- <button class="btn-vote">/\</button> -->
					<!-- </div> -->
					<!-- </div> -->

					<p style:grid-area="rating">{method.rating}</p>
					<p style:grid-area="difficulty">Difficulty: {method.difficulty}</p>
					<p style:grid-area="method">{method.body}</p>
				</div>
			{/each}
		{:else}
			<div class="info-box">
				<p>There are currently no methods for this chart.</p>
			</div>
		{/if}
	</div>
</div>

<style>
	.chart-method-container {
		display: flex;
		flex-direction: column;

		padding: 20px;

		gap: 20px;
	}

	.chart-method {
		padding: 1em;

		border-radius: 0.5em;

		border: 1px solid black;
		display: grid;
		grid-template-areas:
			"title author difficulty difficulty"
			"method method method rating";
		grid-template-columns: 4fr 2fr 1fr 0.5fr;
	}
</style>
