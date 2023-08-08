<script lang="ts">
	import { SPACE_OBJECT_EXAMPLE } from '$lib/constants/code';
	import { CodeJsonThemes } from '$lib/types/code-json-type';
	import { syntaxHighlight } from '$lib/utils/syntax-highlight';
	import { onMount } from 'svelte';
	import { getDataWithAxios } from '$lib/services/fetch';

	export let data: any = SPACE_OBJECT_EXAMPLE;
	export let dataPath: string = '';
	export let isRounded: boolean = false;
	export let height: string = 'h-full';
	export let color: string = 'bg-dark';
	export let codeTheme: string = CodeJsonThemes[0];

	let jsonPreTag: HTMLPreElement | null = null;

	const setJsonPreData = async () => {
		if (!jsonPreTag) return;
		const tempData = dataPath ? await getDataWithAxios(dataPath) : data;
		data = tempData;
		jsonPreTag.innerHTML = syntaxHighlight(tempData, codeTheme);
	};

	onMount(() => {
		setJsonPreData();
	});
</script>


<div class="bg-smoke-dark border flex flex-col overflow-hidden h-full w-full" >
    <div class="bg-base-400 flex flex-row   py-4 gap-2 px-4">
        <div class="w-4 h-4 rounded-full bg-stone-400 hover:bg-stone-500" />
        <div class="w-4 h-4 rounded-full bg-stone-400 hover:bg-stone-500" />
        <div class="w-4 h-4 rounded-full bg-stone-400 hover:bg-stone-500" />
    </div>
    <pre
		bind:this={jsonPreTag}
		class="{height} transition-all overflow-scroll {color} bg-grid-dot p-4 {isRounded ? 'rounded-md' : ''}"
	/>
</div>
