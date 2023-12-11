<script>
	import Link from '$lib/components/form/link.svelte';
	import ProjectsTable from '$lib/features/projects/projectsTable.svelte';
</script>

<section class="flex flex-col main-container">

	<Link link="/">
		<span class="fa-solid fa-arrow-left" />
		{"Portfolio"}
	</Link>
	<h1 class="text-5xl font-bold changing-gradient-text my-8">All Projects</h1>
	<ProjectsTable />
</section>
