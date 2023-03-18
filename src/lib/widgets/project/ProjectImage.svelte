<script lang="ts">
	import type { IProjectType } from '$lib/types/project-types';
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
	<img
		height="100"
		width="auto"
		src={`${projectElement.imageUrl}`}
		alt={`${projectElement.title}`}
		class="img-card {imageSize} "
		loading="lazy"
	/>
</a>
