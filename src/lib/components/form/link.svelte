<script lang="ts">
	export let link: string;
	export let isExternal: boolean = link.startsWith('http');
	export let text: string | undefined = undefined
	export let icon: string | undefined = undefined
    export let extraClasses: string = ''
</script>

<a
	href={link}
	target={isExternal ? '_blank' : '_self'}
	rel="noreferrer"
	class="hover:text-white duration-200 {extraClasses}"
>
    {#if icon}
        <span class={icon} />
    {/if}
    {#if text}
        {text}
    {/if}
</a>
