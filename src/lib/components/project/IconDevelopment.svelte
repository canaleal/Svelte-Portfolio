<script lang="ts">
	export let inDevelopment: boolean = false;
    export let isRounded: boolean = false;
	let iconColor = inDevelopment ? 'bg-error' : 'bg-success';
</script>

<div class="flex flex-row gap-2">
	<div class="w-4 h-4 {isRounded ? 'rounded-full': ''} {iconColor}" />
	<p class="text-xs">
		{inDevelopment ? 'In Development' : 'Complete'}
	</p>
</div>
