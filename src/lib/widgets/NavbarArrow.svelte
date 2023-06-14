<script lang="ts">
	export let url: string;
	export let text: string = '';
</script>

<a class="round-button" href={url} aria-label={text}>
	<div class="fill-from-center"></div>
	<div class="flex flex-col">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 14l-7 7m0 0l-7-7m7 7V3"
			/>
		</svg>

		{#if text}
			<p>{text}</p>
		{/if}
	</div>
</a>
