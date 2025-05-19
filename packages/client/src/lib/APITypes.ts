interface SongData {
	songId: number;
	gameVersion: number;
	title: string;
	title_ascii: string;
	genre: string;
	artist: string;
	chartIds: string[];
}

type ChartDiff = 0 | 1 | 2 | 3 | 4;

interface ChartData {
	chart_id: string;
	song_id: string;
	diff: ChartDiff;
	methods: Array<string>;
}

interface SongFolder {
	style: number;
	title: string;
	songs: SongData[];
}
