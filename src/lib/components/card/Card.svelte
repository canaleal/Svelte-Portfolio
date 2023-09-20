<script lang="ts">
	export let colSize: string = 'col-span-1';
	export let cardHeight = 'h-full';
	export let noHover: boolean = false;
	export let isRounded = true;
	export let slideAnimation: string = '';
	export let extraClasses: string = '';
	export let hasShadow: boolean = true;
	export let isOverflowHidden: boolean = true;
	export let style: string = '';
</script>

<div
	class="card
	{isOverflowHidden ? 'overflow-hidden' : ''}
	{hasShadow ? 'card-shadow ' : ''}  
	{cardHeight}
	{isRounded ? 'rounded-lg' : ''} {colSize} {extraClasses} {slideAnimation}  flex flex-col  
	{noHover ? 'card-no-hover' : ''}"
	style="{style}"
>
	<slot />
</div>
