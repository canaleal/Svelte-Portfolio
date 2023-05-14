<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';
	import ProjectButtons from '../project/ProjectButtons.svelte';
	import IconsBar from '../IconsBar.svelte';
	import ProjectImage from '../project/ProjectImage.svelte';
	import ProjectTitle from '../project/ProjectTitle.svelte';
	import TextDescription from '../TextDescription.svelte';
	export let projectElement: IProjectType;
</script>

<ProjectImage {projectElement} />

<div class="p-4">
	<ProjectTitle {projectElement} />
</div>
<hr />
<div class="p-4">
	<TextDescription text={projectElement.description} />
</div>

<hr />

<div class="p-4">
	<ProjectButtons {projectElement} />
</div>

<div class="bg-dark  p-4 ">
	<IconsBar icons={projectElement.tools} hasIconColor={true} isDevicon={true}/>
</div>
