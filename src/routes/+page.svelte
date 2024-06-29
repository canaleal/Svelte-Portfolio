<script lang="ts">
  import About from '$lib/features/about/about.svelte'
  import Education from '$lib/features/education/education.svelte'
  import Experience from '$lib/features/experience/experience.svelte'
  import Projects from '$lib/features/projects/projects.svelte'
  import Header from '$lib/features/header/header.svelte'
  import Modal from '$lib/features/projects/modal.svelte'
</script>

<Modal />
<section class="flex flex-col lg:flex-row w-screen mx-auto min-h-screen ">
  <div class="flex-1 flex flex-col gap-16 py-24 px-8 items-center bg-dark-800 border-r border-dark-400 ">
    <Header />
  </div>

  <main class="flex-1 flex flex-col gap-16 py-24 items-center bg-dark-700 ">
    <div class="flex flex-col gap-16  max-w-2xl px-8">
      <About />
      <Experience />
      <Projects />
      <Education />
    </div>
  </main>
</section>
