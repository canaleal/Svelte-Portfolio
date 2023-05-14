<script lang="ts">
	import { getDevicon } from '$lib/utils/devicon-icons';

	export let icons: string[] = [];
	export let hasIconColor = false;
</script>

<div class="flex flex-wrap">
	{#each icons as icon}
		<img
			height="100"
			width="auto"
			title={icon}
			class={`img-icon ${hasIconColor ? 'img-icon-color' : ''} w-8 mx-2 py-2 `}
			alt=""
			src={getDevicon(icon)}
			loading="lazy"
		/>
	{/each}
</div>
