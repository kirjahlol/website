import type { Status } from '$lib';
import type { LayoutLoad } from './$types';

async function getStatus(): Promise<Status> {
	const username = 'kirjahri';
	const url = `https://status.cafe/users/${username}/status.json`;

	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Failed to fetch status: ${response.status}`);
	}

	return await response.json();
}

export const load: LayoutLoad = () => {
	return {
		status: getStatus()
	};
};

export const prerender = true;
