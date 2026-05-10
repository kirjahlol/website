import { STEAMGRIDDB_API_KEY } from '$env/static/private';
import type { PageServerLoad } from './$types';

async function getGameCovers(gameIds: number[]): Promise<string[]> {
	const promises = gameIds.map(async (id) => {
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
		return json.data[0].url;
	});

	return Promise.all(promises);
}

export const load: PageServerLoad = async () => {
	const gameIds = [
		5483943 // Mario Kart World
	];

	return {
		gameCovers: await getGameCovers(gameIds)
	};
};
