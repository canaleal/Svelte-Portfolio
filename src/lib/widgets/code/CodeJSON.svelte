<script lang="ts">
	import { onMount } from 'svelte';
	import SelectionButtons from '../SelectionButtons.svelte';

	export let value: any;
    const options: String[] = ['vscode', 'andromeda'];
	let selectedOption: String = options[0];


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

		const element = document.getElementById('jsonPreTag');
		if (!element) return;

		element.innerHTML = formattedJSON;
	}

	onMount(() => {
		syntaxHighlight(value);
	});

	$: (value || selectedOption) && syntaxHighlight(value);
</script>

<div class="flex flex-col  gap-4">
    <SelectionButtons bind:selectedOption {options} />

    <div class="flex flex-row gap-4">
        <pre  id="jsonPreTag" class="flex-1 bg-dark p-4 rounded-lg" />
      
    </div>

    
    
</div>
