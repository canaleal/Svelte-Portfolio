<script lang="ts">
	import type { projectType } from '../../types/project-types';

	export let projectElement: projectType;
	export let showEllipsis = true;
</script>

<div class="flex flex-col">
	<div class={`${showEllipsis ? 'ellipsis' : ''} lg:w-[32rem]`}>
		{projectElement.description}
	</div>
</div>
