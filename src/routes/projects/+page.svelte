<script>
	import Link from '$lib/components/form/link.svelte';
	import ProjectsTable from '$lib/features/projects/projectsTable.svelte';
</script>

<section class="flex flex-col px-8 md:px-16 lg:px-32 xl:px-64 py-16 min-h-screen">
	<Link link="/">
		<span class="fa-solid fa-arrow-left" />
		{"Portfolio"}
	</Link>
	<h1 class="text-5xl text-zinc-50 font-bold my-8">All Projects</h1>
	<ProjectsTable />
</section>
