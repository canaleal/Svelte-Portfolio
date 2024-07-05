<script>
  import { LINK_ICON_BUTTON_STYLE } from '$lib/components/elements/link.svelte'
  import Header from '$lib/features/header/header.svelte'
  import ProjectsOverview from '$lib/features/projects/projectsOverview.svelte'
  import ProjectsTable from '$lib/features/projects/projectsTable.svelte'
</script>

<section class="flex flex-col lg:flex-row w-screen mx-auto min-h-screen ">
  <Header />
  <main class="flex-1 flex flex-col gap-16 py-32 items-center ">
    <div class="flex flex-col gap-16  max-w-5xl px-8">
      <a href="/" class={LINK_ICON_BUTTON_STYLE.base}>
        <i class="fa-solid fa-arrow-left" />
        <p>Portfolio</p>
      </a>
      <h1 class="text-3xl font-bold ">All Projects</h1>
      <ProjectsOverview />
      <ProjectsTable />
    </div>
  </main>
</section>
