<script lang="ts">
	import { onMount } from 'svelte';
	import PaginationButtons from './PaginationButtons.svelte';
	import CarTable from './CarTable.svelte';
	export let tableData: any;
	
	let totalNumberOfItems = tableData.length;
	let paginatedData: any[] = [];
	let paginationPage = 0;
	const numberOfItemsPerPageList = [10, 20, 30];
	let numberOfItemsPerPage = numberOfItemsPerPageList[0];
	let numberOfPages = 0;
	let paginationFrom = 0;
	let paginationTo = 0;

	onMount(() => {
		updatePaginationFiles();
	});

	//* Update the current pagination page
	const setPaginationPage = (page: number) => {
		if (page < 0) {
			paginationPage = 0;
		} else if (page >= numberOfPages) {
			paginationPage = numberOfPages - 1;
		} else {
			paginationPage = page;
		}

		updatePaginationFiles();
	};

	const resetPagination = () => {
		paginationPage = 0;
		paginationFrom = 0;
		paginationTo = 0;

		updatePaginationFiles();
	};

	const updatePaginationFiles = () => {
		numberOfPages = Math.ceil(tableData.length / numberOfItemsPerPage);
		paginationFrom = paginationPage * numberOfItemsPerPage;
		paginationTo = Math.min((paginationPage + 1) * numberOfItemsPerPage, tableData.length);
		paginatedData = tableData.slice(
			paginationPage * numberOfItemsPerPage,
			paginationPage * numberOfItemsPerPage + numberOfItemsPerPage
		);
	};
	$: tableData && resetPagination();
</script>

<div class="flex flex-col">
	
		<CarTable carElements={paginatedData}/>
		<PaginationButtons
			{paginationFrom}
			{paginationTo}
			{paginationPage}
			{totalNumberOfItems}
			{numberOfPages}
			{setPaginationPage}
		/>
	
</div>
