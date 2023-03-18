<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';

	export let projectElement: IProjectType;
	export let showEllipsis = true;
</script>

<div class="flex flex-col">
	<div class={`${showEllipsis ? 'ellipsis' : ''} `}>
		{projectElement.description}
	</div>
</div>
