<script>
	import Link from '$lib/components/form/link.svelte';
	import ProjectsTable from '$lib/features/projects/projectsTable.svelte';
</script>

<section class="px-64 py-32 flex flex-col gap-8">
	<Link
		link="/"
		text={'Portfolio'}
		iconPosition="Left"
		icon="fa-solid fa-arrow-left"
		extraClasses="text-md font-medium text-white hover:text-indigo-400"
	/>
	<h1 class="text-5xl font-bold changing-gradient-text">All Projects</h1>
	<ProjectsTable />
</section>
