<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchFollowers } from '../services/git';
	import { createChart } from '../utils/chart-utils';
	import Searchbar from '../widgets/Searchbar.svelte';

	let search: string = '';
	let chart: any;

	const initializeChart = async () => {
		const chartData = await fetchFollowers('canaleal');
		chart = await createChart('chartdiv', chartData);
	};

	onMount(() => {
		initializeChart();
	});

	const newSearch = async () => {
		if (!chart || !search) return;
		const chartData = await fetchFollowers(search);
		chart.data.setAll([chartData]);
	};
</script>

<div class="p-4">
	<Searchbar bind:search onChangeFunction={newSearch} />

	<div id="chartdiv" class="img-card-4xl" />
</div>
