import { error } from "@sveltejs/kit";
import { isChartDiff, type ChartDiff, type SongData } from "$lib/database/types";
import { SAMPLE_SONG } from "$lib/test/samples";
import type { PageServerLoad } from "./$types";

interface ChartMethod {}

interface Data {
	song: SongData;
	chartId: ChartDiff;

	methods: ChartMethod[];
}

export const load: PageServerLoad = async ({ params }) => {
	const id = Number(params.chartId);

	if (!isChartDiff(id)) {
		error(403, `Invalid request for chart ID ${params.chartId}.`);
	}

	const data: Data = {
		song: { ...SAMPLE_SONG },
		chartId: id,
		methods: []
	};
	return data;
};
