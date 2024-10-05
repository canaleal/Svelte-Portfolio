<script lang="ts">
  import About from '$lib/features/about/about.svelte'
  import Education from '$lib/features/education/education.svelte'
  import Experience from '$lib/features/experience/experience.svelte'
  import Projects from '$lib/features/projects/projects.svelte'
  import Modal from '$lib/features/projects/modal.svelte'
  import Gallery from '$lib/features/gallery/gallery.svelte'

</script>

<Modal />
<main id="home" class="flex-1 flex flex-col py-36 px-8 items-center">
  <div class="flex flex-col max-w-md lg:max-w-7xl gap-28">
    <About />
    <Projects />
    <Experience />
    <Education />
    <Gallery />
  </div>
</main>
