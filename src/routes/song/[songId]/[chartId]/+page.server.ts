import { error } from "@sveltejs/kit";
import { isChartDiff, type ChartDiff, type SongData } from "$lib/types/midend";
import { SAMPLE_SONG } from "$lib/test/samples";

import type { PageServerLoad } from "./$types";
import type { MethodRow, UserRow } from "$lib/types";

interface ChartMethod {
	title: string;

	authorId: number;
	authorName: string;

	rating: number;
	difficulty: ChartDiff;
	timestamp: Date;

	body: string;
}

interface Data {
	song: SongData;
	chartId: ChartDiff;

	methods: ChartMethod[];
}

type MethodQueryRow = MethodRow & Omit<UserRow, "password_hashed">;

export const load: PageServerLoad = async ({ params, platform }) => {
	if (!platform) {
		throw Error("Platform undefined.");
	}

	if (!isChartDiff(Number(params.chartId))) {
		error(403, `Invalid request for chart ID ${params.chartId}.`);
	}

	const chartCount = await platform.env.DB.prepare(
		"SELECT COUNT(*) AS count FROM chart c WHERE c.song_id = ? AND c.difficulty = ?;"
	)
		.bind(params.songId, params.chartId)
		.first<{ count: number }>();

	if (!chartCount || !chartCount.count) {
		error(404, `Song ${params.songId} has no chart ${params.chartId}.`);
	}

	const query = `
	SELECT u.id, u.username, m.* FROM method m
		JOIN user u
		WHERE m.song_id = ?
		AND m.difficulty = ?;
	`;

	const result = await platform.env.DB.prepare(query)
		.bind(params.songId, params.chartId)
		.all<MethodQueryRow>();

	if (!result.success) {
		error(500, "Unable to retrieve methods from the database.");
	}

	const song = { ...SAMPLE_SONG };

	const methods: ChartMethod[] = result.results.map((r): ChartMethod => {
		const { username, author_id, title, timestamp, body, rating } = r;
		return {
			authorId: author_id,
			authorName: username,
			difficulty: Number(params.chartId) as ChartDiff,
			title,
			rating,
			body,
			timestamp: new Date(timestamp)
		};
	});

	/*
	methods.push(
		{
			title: "No tech",
			timestamp: new Date(),
			authorId: "0",
			authorName: "luboise",
			difficulty: 4,
			rating: 0,

			body: `If you can read scratch decently well and read slow decently well you can get away with no-teching Theory. If you're less comfortable with reading slow, try non-ran or mirror. This will give you a comfortable 13 57 roll every time.

While a click track (listed above) helps with all methods, it helps the most with no tech because of the 24th and 32nd scratch patterns weaved in with the rest of the 16ths. These can be tricky to read at low scroll.`
		},
		{
			title: "Gear shift",
			timestamp: new Date(),
			authorId: "0",
			authorName: "luboise",
			difficulty: 3,
			rating: 2,

			body: `
Gear shift up by 2 at the blue circle and down by 2 at the purple circle. Don't be afraid to miss notes to hit the gear shift accurately. You'll make it up with your accuracy during the scratch section.`
		}
	);
	*/

	const data: Data = {
		song,
		chartId: params.chartId,
		methods
	};
	return data;
};
