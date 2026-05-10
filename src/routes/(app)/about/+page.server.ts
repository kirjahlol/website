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
	const gameIdsDictionary: Record<string, number> = {
		'Mario Kart World': 5483943,
		'Mario Kart Wii': 36054,
		'Super Mario Maker 2': 5249544,
		'Splatoon 3': 5277939,
		'Tomodachi Life: Living the Dream': 5483703
	};
	const gameIds = Object.values(gameIdsDictionary);

	const gameCoversArray = await getGameCovers(gameIds);
	const gameCovers: Record<string, string> = {};
	Object.keys(gameIdsDictionary).forEach((name, index) => {
		gameCovers[name] = gameCoversArray[index];
	});

	return {
		gameCovers
	};
};
