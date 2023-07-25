<script lang="ts">
	import { COMPLETE, IN_DEVELOPMENT } from "$lib/constants";
	import type { IProjectCompletion } from "$lib/types/project-types";

	export let projectCompletion: IProjectCompletion = COMPLETE;
    export let isRounded: boolean = false;
	let iconColor = projectCompletion===IN_DEVELOPMENT ? 'bg-error' : 'bg-success';
</script>

<div class="flex flex-row gap-2">
	<div class="w-4 h-4 {isRounded ? 'rounded-full': ''} {iconColor}" />
	<p class="text-xs">
		{projectCompletion}
	</p>
</div>
