import { error } from "@sveltejs/kit";
import { isChartDiff, type ChartDiff, type SongData } from "$lib/database/types";
import { SAMPLE_SONG } from "$lib/test/samples";
import type { PageServerLoad } from "./$types";

interface ChartMethod {
	title: string;

	authorId: string;
	authorName: string;

	rating: number;
	difficulty: number;
	timestamp: Date;

	body: string;
}

interface Data {
	song: SongData;
	chartId: ChartDiff;

	methods: ChartMethod[];
}

export const load: PageServerLoad = async ({ params, platform }) => {
	const id = Number(params.chartId);

	if (!platform) {
		throw Error("Platform undefined.");
	}

	const query = `
	SELECT * FROM 
	`;

	const result = await platform.env.DB.prepare("SELECT * FROM users LIMIT 5").run();

	if (!isChartDiff(id)) {
		error(403, `Invalid request for chart ID ${params.chartId}.`);
	}

	//TODO: Implement in database
	const song = { ...SAMPLE_SONG };

	if (!song.chartIds.includes(id)) {
		error(404, `Chart ID ${id} does not exist for this song.`);
	}

	const methods: ChartMethod[] = [];

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

	const data: Data = {
		song,
		chartId: id,
		methods
	};
	return data;
};
