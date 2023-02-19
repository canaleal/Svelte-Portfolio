<script lang="ts">
	import type { projectType } from '../../types/project-types';
	export let projectElement: projectType;
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
