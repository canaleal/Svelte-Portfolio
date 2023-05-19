<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';
	import Image from '$lib/widgets/Image.svelte';
	export let projectElement: IProjectType;
	export let imageSize = 'img-card-lg';

	const getProjectUrl = () => {
		const url = projectElement.exampleUrl || projectElement.githubUrl;
		if (!url) return ['', ''];
		return [url, url.includes('http') ? '_blank' : ''];
	};

	const [projectUrl, target] = getProjectUrl();
</script>


	<a href={projectUrl} {target} rel="noreferrer" aria-label={projectUrl}>
		<Image imageUrl={projectElement.imageUrl} imageAlt={projectElement.title} {imageSize} />
	</a>
