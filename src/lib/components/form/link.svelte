<script lang="ts">
	export let link: string;
	export let isExternal: boolean = link.startsWith('http');
	export let text: string | undefined = undefined;
	export let icon: string | undefined = undefined;
	export let iconPosition: string = 'Right';
	export let extraClasses: string = 'text-white hover:text-indigo-400 duration-200';
</script>

<a
	href={link}
	target={isExternal ? '_blank' : '_self'}
	rel="noreferrer"
	class="duration-200 {extraClasses}"
>
	{#if icon && iconPosition == 'Left'}
		<span class={icon} />
	{/if}
	{#if text}
		{text}
	{/if}
	{#if icon && iconPosition == 'Right'}
		<span class={icon} />
	{/if}
</a>
