<script lang="ts">
	import type { projectType } from '../../types/project-types';
	import { applicationFieldFontIcon } from '../../types/project-types';
	export let projectElement: projectType;
</script>

<p class="text-xl">
	{projectElement.title}
</p>
<hr class="bg-primary my-4 w-16 h-1 rounded-lg" />

<p class="py-1">
	<i class="{applicationFieldFontIcon[projectElement.applicationField]} mr-1" />
	{projectElement.applicationField}
</p>
