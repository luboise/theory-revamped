// export const SORT_TYPES = [
// 	"Highest Voted",
// 	"Easiest",
// 	"Hardest",
// 	"Newest",
// 	"Oldest",
// ];

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

export const SORT_TYPES = {
	"Highest Voted": makeSortFunction("score"),
	Easiest: makeSortFunction("difficulty", false),
	Hardest: makeSortFunction("difficulty"),
	Newest: makeSortFunction("timestamp"),
	Oldest: makeSortFunction("timestamp", false),
};

export const SVG_THUMBS_DOWN = (
	<svg
		width="28"
		height="27"
		viewBox="0 0 28 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M0 0H5V14H0V0ZM21 0H7V14.803L10.042 19.366L10.887 25.283C10.9571 25.7587 11.1954 26.1935 11.5587 26.5086C11.922 26.8236 12.3862 26.998 12.867 27H13C13.7954 26.9992 14.558 26.6829 15.1204 26.1204C15.6829 25.558 15.9992 24.7954 16 24V18H24C25.0605 17.9987 26.0771 17.5768 26.827 16.827C27.5768 16.0771 27.9987 15.0605 28 14V7C27.9979 5.14413 27.2597 3.36489 25.9474 2.05259C24.6351 0.740295 22.8559 0.00211736 21 0Z"
			fill="black"
		/>
	</svg>
);

export const SVG_THUMBS_UP = (
	<svg
		width="32"
		height="32"
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M2 16H7V30H2V16ZM23 30H9V15.197L12.042 10.634L12.887 4.717C12.9571 4.24128 13.1954 3.80646 13.5587 3.49143C13.922 3.1764 14.3862 3.00204 14.867 3H15C15.7954 3.00079 16.558 3.31712 17.1204 3.87956C17.6829 4.44199 17.9992 5.20459 18 6V12H26C27.0605 12.0013 28.0771 12.4232 28.827 13.173C29.5768 13.9229 29.9987 14.9395 30 16V23C29.9979 24.8559 29.2597 26.6351 27.9474 27.9474C26.6351 29.2597 24.8559 29.9979 23 30Z"
			fill="black"
		/>
	</svg>
);

export const SVG_STAR_FILLED = (
	<svg
		width="46"
		height="44"
		viewBox="0 0 46 44"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M9.10625 43.5L12.7625 27.6938L0.5 17.0625L16.7 15.6562L23 0.75L29.3 15.6562L45.5 17.0625L33.2375 27.6938L36.8937 43.5L23 35.1187L9.10625 43.5Z"
			fill="black"
		/>
	</svg>
);

export const SVG_STAR_HOLLOW = (
	<svg
		width="46"
		height="44"
		viewBox="0 0 46 44"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M15.9125 34.1063L23 29.8313L30.0875 34.1625L28.2312 26.0625L34.475 20.6625L26.2625 19.9312L23 12.2812L19.7375 19.875L11.525 20.6062L17.7688 26.0625L15.9125 34.1063ZM9.10625 43.5L12.7625 27.6938L0.5 17.0625L16.7 15.6562L23 0.75L29.3 15.6562L45.5 17.0625L33.2375 27.6938L36.8937 43.5L23 35.1187L9.10625 43.5Z"
			fill="black"
		/>
	</svg>
);

export const STAR_MAX_DIFFICULTY = 5;
