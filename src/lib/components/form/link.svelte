<script lang="ts">
	export let link: string;
	export let isExternal: boolean = link.startsWith('http');
	export let extraClasses: string = 'text-white hover:text-indigo-400';
</script>

<a
	href={link}
	target={isExternal ? '_blank' : '_self'}
	rel="noreferrer"
	class="w-fit {extraClasses}  duration-200"
>
	<slot />
</a>
