import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import type { D1PreparedStatement } from "@cloudflare/workers-types";
import type { SongObjectsUploadPayload } from "$lib/types/midend";

export const POST: RequestHandler = async ({ request, platform }) => {
	try {
		if (!platform) {
			error(500, "Platform undefined.");
		}

		const body = (await request.json()) as SongObjectsUploadPayload;

		const chartStatements: D1PreparedStatement[] = [];

		const statements: D1PreparedStatement[] = Object.entries(body).map(([songId, song]) => {
			const statement = platform.env.DB.prepare(
				`INSERT INTO song(id, game_version, title, title_ascii, artist, genre) VALUES (?, ?, ?, ?, ?, ?);`
			).bind(songId, song.game_version, song.title, song.title_ascii, song.artist, song.genre);

			song.chart_ids.forEach((difficulty) =>
				chartStatements.push(
					platform.env.DB.prepare(`INSERT INTO chart(song_id, difficulty) VALUES (?, ?);`).bind(
						songId,
						difficulty
					)
				)
			);

			return statement;
		});

		console.log(`Inserting ${statements.length} songs, and ${chartStatements.length} charts.`);

		await platform.env.DB.batch(statements);
		await platform.env.DB.batch(chartStatements);

		return new Response("Success.");
	} catch (e) {
		error(500, (e as Error).message);
	}
};
