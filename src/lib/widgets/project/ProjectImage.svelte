<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';
	import Image from '$lib/widgets/Image.svelte';
	export let projectElement: IProjectType;
	export let imageSize = 'img-card-2xl';

	const getProjectUrl = () => {
		const url = projectElement.exampleUrl || projectElement.githubUrl;
		if (!url) return ['', ''];
		return [url, url.includes('http') ? '_blank' : ''];
	};

	const [projectUrl, target] = getProjectUrl();
</script>

<a href={projectUrl} {target} rel="noreferrer">
	<Image imageUrl={projectElement.imageUrl} imageAlt={projectElement.title} imageSize={imageSize} />
</a>
