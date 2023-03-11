<script lang="ts">
    import { PUBLIC_GITHUB } from '$env/static/public'
	import { onMount } from 'svelte';
	import { createChart } from '../utils/chart-utils';
	async function getFollowers(username: string, value: number = 1) {
		const response = await fetch(`https://api.github.com/users/${username}/followers`);
		const data = await response.json();
		if (!data.length) return [];
		return data.map((follower: any) => ({ name: follower.login, value }));
	}
	async function fetchFollowers(username: string, depth: number = 1, currentDepth: number = 1) {
		const followers = await getFollowers(username, 15);
		let childrenFollowers: any[] = [];

		if (currentDepth < depth) {
			childrenFollowers = await Promise.all(
				followers.map((follower: any) => fetchFollowers(follower.name, depth, currentDepth + 1))
			);
		}

		const formattedFollowers = followers.map((follower: any, i: number) => ({
			...follower,
			linkWith: childrenFollowers[i]?.map((follower: any) => follower.name) || []
		}));

		const tempRootData = {
			name: 'Root',
			value: 0,
			children: [
				{
					name: username,
					value: 25,
					linkWith: formattedFollowers.map((follower: any) => follower.name)
				},
				...formattedFollowers,
				...childrenFollowers.flat()
			]
		};

		tempRootData.children = removeDuplicatesByName(tempRootData.children);
		return tempRootData;
	}

	const removeDuplicatesByName = (arr: any) => {
		const unique = arr
			.map((e: any) => e.name)
			.map((e: any, i: any, final: any) => final.indexOf(e) === i && i)
			.filter((e: any) => arr[e])
			.map((e: any) => arr[e]);
		return unique;
	};

	const initializeChart = async () => {
		const chartData = await fetchFollowers('canaleal', 2);
		createChart('chartdiv', chartData);
	};

	onMount(() => {
		//initializeChart();
	});
</script>

<main>
	<div id="chartdiv" class="img-card-2xl" />
</main>
