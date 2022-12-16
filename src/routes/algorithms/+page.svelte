<script lang="ts">
	import AttentionBar from "../../widgets/AttentionBar.svelte";
	import SectionHeader from "../../widgets/SectionHeader.svelte";
	import { COLORS } from "../../constants";

	let isRunning = false;
	let steps = 0;
	let numberOfElements = 30;
	let data: number[] = Array.from({ length: numberOfElements * 10 }, () =>
		Math.floor(Math.random() * 10 + 1)
	);
	let originalData = [...data];

	// Define a function to visualize the sorting process
	const visualizeBubbleSort = async () => {
		let tempData = [...data];
		// Use the bubbleSort algorithm to sort the data
		for (let i = 0; i < tempData.length; i++) {
			for (let j = 0; j < tempData.length - i - 1; j++) {
				if (tempData[j] > tempData[j + 1]) {
					// Swap the values
					[tempData[j], tempData[j + 1]] = [tempData[j + 1], tempData[j]];
					steps++;
					// Update the reactive data with the new values
					data = [...tempData];

					// Add a delay to see the sorting process
					await new Promise((resolve) => setTimeout(resolve, 1));
				}
			}
		}
	};

	const visualizeInsertionSort = async () => {
		let tempData = [...data];
		// Loop through the array, starting from the second element
		for (let i = 1; i < tempData.length; i++) {
			// Get the current element and its value
			let currentElement = tempData[i];
			let currentValue = tempData[i];

			// Loop backwards through the array, starting from the current element
			for (let j = i - 1; j >= 0 && tempData[j] > currentValue; j--) {
				// Swap the current element with the previous element
				tempData[j + 1] = tempData[j];
				tempData[j] = currentElement;
				steps++;
				// Visualize the current state of the array
				data = [...tempData];

				await new Promise((resolve) => setTimeout(resolve, 1));
			}
		}

		isRunning = false;
	};

	// Function to visualize the selection sort algorithm
	const visualizeSelectionSort = async () => {
		let tempData = [...data];
		// Loop through the array, starting from the first element
		for (let i = 0; i < tempData.length; i++) {
			// Set the minimum value and index to the current element
			let minValue = tempData[i];
			let minIndex = i;

			// Loop through the remaining elements in the array
			for (let j = i + 1; j < tempData.length; j++) {
				// If the current element has a smaller value, update the minimum value and index
				if (tempData[j] < minValue) {
					minValue = tempData[j];
					minIndex = j;
				}
			}

			// If the minimum value is not the current element, swap the current element with the minimum element
			if (minIndex !== i) {
				let temp = tempData[i];
				tempData[i] = tempData[minIndex];
				tempData[minIndex] = temp;
				steps++;

				// Visualize the current state of the array
				data = [...tempData];

				await new Promise((resolve) => setTimeout(resolve, 1));
			}
		}
	};

	const countingSort = async () => {
		let tempData = [...data];
		const counts = new Array(Math.max(...tempData) + 1).fill(0);
		for (const element of tempData) {
			counts[element]++;
		}

		for (let i = 1; i < counts.length; i++) {
			counts[i] += counts[i - 1];
			steps++;
		}

		for (let i = tempData.length - 1; i >= 0; i--) {
			data[--counts[tempData[i]]] = tempData[i];
			await new Promise((resolve) => setTimeout(resolve, 1));
		}
	};

	const resetDataFunction = () => {
		steps = 0;
		data = [...originalData];
	};

	const callSortingAlgorithmGivenName = async (name: string) => {
		isRunning = true;
		steps = 0;
		switch (name) {
			case 'Bubble Sort':
				await visualizeBubbleSort();
				break;
			case 'Insertion Sort':
				await visualizeInsertionSort();
				break;
			case 'Selection Sort':
				await visualizeSelectionSort();
				break;
			case 'Counting Sort':
				await countingSort();
				break;
			default:
				break;
		}
		isRunning = false;
	};

	let sortingFunctions = [
		{ id: 0, name: 'Bubble Sort' },
		{ id: 1, name: 'Insertion Sort' },
		{ id: 2, name: 'Selection Sort' },
		{ id: 3, name: 'Counting Sort' }
	];
	let selectedAlgorithm = sortingFunctions[0];


</script>

<section>

	<SectionHeader title="Algorithms" color="bg-green" />
	<AttentionBar
		message="This page contains a visualization of some sorting algorithms. The algorithms are implemented in Svelte and the visualization is done using the Svelte Repl."
	/>
	
	<div id="projects" class="grid  grid-cols-1 md:grid-cols-1  gap-4 py-8 px-4">
		<div class="rounded-xl col-span-1 shadow-xl flex flex-col justify-between">
			<div class="rounded-t-xl bg-dark  py-5 text-center text-white top-0">
				<h1 class="text-xl  ">{selectedAlgorithm.name}</h1>
			</div>

			<div class="flex flex-row">
				<div class="p-4 h-fit flex flex-col flex-wrap">
					{#each sortingFunctions as sortingFunction}
						<label class="inline-flex items-center">
							<input
								disabled={isRunning}
								type="radio"
								class="form-radio"
								name="menuType"
								on:change={() => {
									data = [...originalData];
									steps = 0;
								}}
								value={sortingFunction.name}
								bind:group={selectedAlgorithm.name}
							/>
							<span class="ml-2">{sortingFunction.name}</span>
						</label>
					{/each}

					<p class="mt-4">Total Steps: {steps}</p>
				</div>
			</div>

			<div  class="p-4 h-fit flex flex-row gap-1 justify-even align-bottom flex-wrap overflow-hidden">
				{#each data as item}
					<div style="--speed: {item/numberOfElements*10}ms;" class="slide-in-right w-16 text-center text-white p-2 {COLORS[item]}">
						{numberOfElements < 100 ? item : ''}
					</div>
				{/each}
			</div>

			<div class="p-4 h-fit">
				<button
					disabled={isRunning}
					on:click={() => callSortingAlgorithmGivenName(selectedAlgorithm.name)}
					class="card-btn card-btn-blue my-4 rounded-lg disabled:opacity-25"
					>Run {selectedAlgorithm.name}</button
				>

				<button
					disabled={isRunning}
					on:click={() => resetDataFunction()}
					class="card-btn  my-4 rounded-lg disabled:opacity-25">Reset Data</button
				>
			</div>
		</div>
	</div>
</section>
