<script lang="ts">
	export let link: string;
	export let isExternal: boolean = link.startsWith('http');
	export let text: string | undefined = undefined;
	export let icon: string | undefined = undefined;
	export let extraClasses: string = 'text-white hover:text-indigo-400 duration-200';
</script>

<a
	href={link}
	target={isExternal ? '_blank' : '_self'}
	rel="noreferrer"
	class="duration-200 {extraClasses}"
>
	{#if text}
		{text}
	{/if}
	{#if icon}
		<span class={icon} />
	{/if}
</a>
