<script lang="ts">
	import { SPACE_OBJECT_EXAMPLE, SYNTAX_HIGHLIGHTING } from '$lib/constants/code';
	import { CodeJsonThemes } from '$lib/types/code-json-type';
	import { syntaxHighlight } from '$lib/utils/syntax-highlight';
	import { onMount } from 'svelte';

	export let value: any = SPACE_OBJECT_EXAMPLE;
	export let isRounded: boolean = false;
	export let height: string = 'h-full';
	export let color: string = 'bg-dark';
	export let codeTheme: string = CodeJsonThemes[0];

	let jsonPreTag: HTMLPreElement | null = null;

	const setJsonPreData = () => {
		if (!jsonPreTag || !value) return;
		jsonPreTag.innerHTML = syntaxHighlight(value, codeTheme);
	};

	onMount(() => {
		setJsonPreData();
	});

	$: (value || codeTheme) && setJsonPreData();
</script>

<div class="flex flex-col w-full h-full">
	<pre
		bind:this={jsonPreTag}
		class="{height} overflow-scroll {color} bg-grid-dot p-4 {isRounded ? 'rounded-md' : ''}"
	/>

</div>
