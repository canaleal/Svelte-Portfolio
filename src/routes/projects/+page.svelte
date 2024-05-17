<script>
	import Link from '$lib/components/form/link.svelte';
	import ProjectsTable from '$lib/features/projects/projectsTable.svelte';
</script>

<section
	class="flex flex-col w-screen mx-auto min-h-screen max-w-screen-2xl px-6 py-12  md:px-12 md:py-20 lg:px-24 lg:py-0"
>
	<div class="flex-1 flex flex-col gap-4 pt-24 lg:py-24">
		<Link link="/">
			<span class="fa-solid fa-arrow-left" />
			{'Portfolio'}
		</Link>
		<h1 class="text-5xl font-bold my-8">All Projects</h1>
		<ProjectsTable />
	</div>
</section>
