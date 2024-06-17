<script lang="ts">
  import About from '$lib/features/about/about.svelte'
  import Education from '$lib/features/education/education.svelte'
  import Experience from '$lib/features/experience/experience.svelte'
  import Projects from '$lib/features/projects/projects.svelte'
  import Header from '$lib/features/header/header.svelte'
  import Modal from '$lib/features/projects/modal.svelte'
</script>

<Modal />
<section
  class="flex flex-col xl:flex-row w-screen mx-auto min-h-screen max-w-screen-2xl px-6 py-12  md:px-12 md:py-20 lg:px-24 lg:py-0"
>
  <div class="flex-1 flex flex-col gap-16 lg:py-24">
    <Header />
  </div>

  <main class="flex-1 flex flex-col gap-16 pt-24 lg:py-24">
    <About />
    <Experience />
    <Projects />
    <Education />
  </main>
</section>
