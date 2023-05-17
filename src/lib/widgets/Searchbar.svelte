<script lang="ts">
	let search: string = '';
	export let placeholder: string = 'Search...';
	export let onChangeFunction: Function;
</script>

<div class="flex flex-col">
	<p class="font-bold">Search Bar</p>
	<div class="relative rounded-md shadow-sm mt-2">
		<input
			on:change={() => onChangeFunction(search)}
			id="search"
			class="form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
			{placeholder}
			type="search"
			bind:value={search}
			required
		/>
		<button class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
			<svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
				<path
					fill-rule="evenodd"
					d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
</div>
