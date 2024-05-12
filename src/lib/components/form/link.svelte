<script lang="ts">
	export let link: string;
	export let isExternal: boolean = link.startsWith('http');
	export let extraClasses: string = 'text-zinc-50 hover:text-indigo-400';
</script>

<a
	href={link}
	target={isExternal ? '_blank' : '_self'}
	rel="noreferrer"
	class="w-fit {extraClasses}  duration-200 flex flex-row gap-2 hover:gap-3 items-center"
>
	<slot />
</a>
