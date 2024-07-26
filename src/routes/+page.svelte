<script lang="ts">
  import About from '$lib/features/about/about.svelte'
  import Education from '$lib/features/education/education.svelte'
  import Experience from '$lib/features/experience/experience.svelte'
  import Projects from '$lib/features/projects/projects.svelte'
  import Header from '$lib/features/header/header.svelte'
  import Modal from '$lib/features/projects/modal.svelte'
  import ProjectsOverview from '$lib/features/projects/projectsOverview.svelte'
  import Navigation from '$lib/features/navigation/navigation.svelte'
</script>

<Modal />
<Navigation />
<Header />
<main id="home" class="flex-1 flex flex-col py-32 px-8 items-center">
  <div class="flex flex-col max-w-5xl gap-16">
    <About />
    <ProjectsOverview />
    <Experience />
    <Projects />
    <Education />
  </div>
</main>