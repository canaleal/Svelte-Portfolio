<script>
  import { LINK_ICON_BUTTON_STYLE } from '$lib/components/elements/link.svelte'
  import ProjectsOverview from '$lib/features/projects/projectsOverview.svelte'
  import ProjectsTable from '$lib/features/projects/projectsTable.svelte'
</script>

<section class="flex flex-col lg:flex-row w-screen mx-auto min-h-screen bg-dark-800 py-24 justify-center">
  <main class="flex-1 flex flex-col gap-8 max-w-8xl px-8">
    <a href="/" class={LINK_ICON_BUTTON_STYLE.base}>
      <i class="fa-solid fa-arrow-left" />
      <p>Portfolio</p>
    </a>
    <h1 class="text-3xl font-semibold text-white">All Projects</h1>
    <ProjectsOverview />
    <ProjectsTable />
  </main>
</section>
