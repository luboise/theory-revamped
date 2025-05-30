import type { SongRow } from "$lib/types";
import type { D1Database } from "@cloudflare/workers-types";

export async function getSong(db: D1Database, song_id: number): Promise<SongRow | null> {
	const statement = db.prepare("SELECT * FROM song s WHERE s.id = ?").bind(song_id);
	return await statement.first<SongRow>();
}
