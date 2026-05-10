import { STEAMGRIDDB_API_KEY } from '$env/static/private';
import type { PageServerLoad } from './$types';

function getGameCovers(gameIds: number[]): string[] {
	const gameCovers: string[] = [];

	gameIds.forEach(async (id) => {
		const response = await fetch(
			`https://www.steamgriddb.com/api/v2/grids/game/${id}?dimensions=600x900`,
			{
				headers: {
					Authorization: `Bearer ${STEAMGRIDDB_API_KEY}`
				}
			}
		);
		if (!response.ok) throw new Error(`Fetch failed: ${response.status}`);

		const json: { data: [{ url: string }] } = await response.json();

		gameCovers.push(json.data[0].url);
	});

	return gameCovers;
}

export const load: PageServerLoad = () => {
	const gameIds = [
		5483943 // Mario Kart World
	];

	return {
		gameCovers: getGameCovers(gameIds)
	};
};
