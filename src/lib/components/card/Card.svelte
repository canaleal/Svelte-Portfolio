<script lang="ts">
	export let colSize: string = 'col-span-1';
	export let cardHeight = 'h-full';
	export let noHover: boolean = false;
	export let isRounded = false;
	export let slideAnimation: string = '';
	export let extraClasses: string = '';
	export let hasShadow: boolean = true;
	export let isOverflowHidden: boolean = false;
</script>

<div
	class="card
	{isOverflowHidden ? 'overflow-hidden' : ''}
	{hasShadow ? 'card-shadow ' : ''}  
	{cardHeight}
	{isRounded ? 'card-rounded' : ''} {colSize} {extraClasses} {slideAnimation}  flex flex-col  
	{noHover ? 'card-no-hover' : ''}"
>
	<slot />
</div>
