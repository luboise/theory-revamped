export interface UserRow {
	id: number;
	username: string;
	password_hashed: string;
}

export interface SongRow {
	id: number;
	game_version: number;
	title: string;
	title_ascii: string;
	artist: string;
	genre: string;
}

export interface ChartRow {
	song_id: number;
	difficulty: number;
}

export interface MethodRow {
	id: number;
	song_id: number;
	difficulty: number;

	title: string;

	author_id: number;

	rating: number;
	timestamp: number;

	body: string;
}
