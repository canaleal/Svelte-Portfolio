<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';
	import ProjectButtons from '../project/ProjectButtons.svelte';
	import ProjectDescription from '../project/ProjectDescription.svelte';
	import ProjectIcons from '../project/ProjectIcons.svelte';
	import ProjectImage from '../project/ProjectImage.svelte';
	import ProjectTitle from '../project/ProjectTitle.svelte';
	export let projectElement: IProjectType;
</script>

<ProjectImage {projectElement} />

<div class="p-4">
	<ProjectTitle {projectElement} />
</div>
<hr />
<div class="p-4">
	<ProjectDescription {projectElement} />
</div>

<hr />

<div class="p-4">
	<ProjectButtons {projectElement} />
</div>

<div class="bg-dark  p-4 ">
	<ProjectIcons {projectElement} hasIconColor={true} />
</div>
