<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';
	import { ApplicationFieldFontIcon } from '$lib/types/project-types';
	export let projectElement: IProjectType;
</script>

<p class="text-xl">
	{projectElement.title}
</p>
<hr class="bg-primary my-4 w-16 h-1 rounded-lg" />

<p class="py-1">
	<i class="{ApplicationFieldFontIcon[projectElement.applicationField]} mr-1" />
	{projectElement.applicationField}
</p>
