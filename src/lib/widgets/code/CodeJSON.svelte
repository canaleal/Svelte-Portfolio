<script lang="ts">
	import { onMount } from 'svelte';

	export let value: any;
	export let isRounded: boolean = true;
	export let height: string = 'h-full';
	export let color: string = 'bg-dark';
	const options: String[] = ['vscode', 'andromeda'];
	let selectedOption: String = options[1];

	let jsonPreTag: HTMLPreElement | null = null;
	function syntaxHighlight(json: any) {
		if (typeof json != 'string') {
			json = JSON.stringify(json, undefined, 2);
		}
		json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		const formattedJSON = json.replace(
			/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?|(\{|\}|\[|\]|\,))/g,
			function (match: string) {
				let cls = 'number';
				if (/^"/.test(match)) {
					if (/:$/.test(match)) {
						cls = 'key';
					} else {
						cls = 'string';
					}
				} else if (/true|false/.test(match)) {
					cls = 'boolean';
				} else if (/null/.test(match)) {
					cls = 'null';
				} else if (/[\{\}\[\],]/.test(match)) {
					cls = 'punctuation';
				}
				return `<span class=" ${selectedOption}-${cls}-value text-lg">${match}</span>`;
			}
		);
		if (jsonPreTag) jsonPreTag.innerHTML = formattedJSON;
	}

	onMount(() => {
		syntaxHighlight(value);
	});

	$: (value || selectedOption) && syntaxHighlight(value);
</script>

<pre bind:this={jsonPreTag} class="{height} overflow-scroll flex-1  {color} bg-grid p-4 {isRounded ? 'rounded-lg' : ''}" />
