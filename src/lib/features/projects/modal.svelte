<script lang="ts">
  import { projectStore } from '$lib/features/projects/store/projectStore'
  import type { IProject } from '$lib/features/projects/types'

  let project: IProject | undefined
  projectStore.subscribe((value) => {
    project = value.selectedProject
  })

  let images: string[] = []
  let currentImageIDX = 0
  let lastImageIDX = 0

  const setupImages = () => {
    if (!project) return
    images = [project.image, ...(project.extraImages ?? [])]
    currentImageIDX = 0
    lastImageIDX = images.length - 1
  }

  const nextImage = () => {
    currentImageIDX = (currentImageIDX + 1) % images.length
  }

  const previousImage = () => {
    currentImageIDX = (currentImageIDX - 1) % images.length
  }

  $: project && setupImages()

  const close = () => {
    projectStore.clearSelectedProject()
  }
</script>

{#if project}
  <section class="modal">
    <div class="modal-black-bg " />
    <button class="modal__close-button" on:click={close}>
      <span class="fa fa-x" />
    </button>

    <div class="carousel">
      <button
        disabled={currentImageIDX == 0}
        class={`carousel__button ${currentImageIDX == 0 ? 'carousel__button--disabled' : ''}`}
        on:click={previousImage}
        on:keydown={() => {}}
      >
        <span class="fa fa-chevron-left" />
      </button>

      <div class="flex flex-col gap-4">
        {#if images[currentImageIDX].includes('.mp4')}
          <video src={images[currentImageIDX]} class="media" controls autoplay muted loop />
        {:else}
          <img
            src={images[currentImageIDX]}
            alt={project.title}
            class="media"
            loading="lazy"
            width="200"
            height="48"
            decoding="async"
          />
        {/if}
      </div>

      <button
        disabled={currentImageIDX === lastImageIDX}
        class={`carousel__button ${currentImageIDX === lastImageIDX ? 'carousel__button--disabled' : ''}`}
        on:click={nextImage}
        on:keydown={() => {}}
      >
        <span class="fa fa-chevron-right" />
      </button>

      <ol class="carousel__indicators">
        {#each images as image, idx}
          <li
            class="carousel__indicators__item {currentImageIDX === idx ? 'carousel__indicators__item--selected' : ''}"
          />
        {/each}
      </ol>
    </div>
  </section>
{/if}

<style lang="postcss">
  .modal {
    @apply fixed z-40 h-screen w-screen flex;
  }

  .modal-black-bg {
    @apply absolute top-0 left-0 bg-black bg-opacity-95 h-screen w-screen;
  }

  .modal__close-button {
    @apply absolute top-10 right-10 text-white p-2  text-2xl;
  }

  .modal__close-button:hover {
    @apply hover:text-frog-700;
  }

  .carousel {
    @apply my-auto mx-auto z-50 flex flex-row gap-4 relative;
  }

  .carousel__indicators {
    @apply absolute bottom-[-2.5rem] w-full flex justify-center gap-2;
  }

  .carousel__indicators__item {
    @apply w-10 h-2 bg-dark-400 transition-all duration-300;
  }

  .carousel__indicators__item--selected {
    @apply bg-white;
  }

  .carousel__button {
    @apply w-fit h-fit my-auto p-4 text-white  text-xl;
  }

  .carousel__button:hover {
    @apply text-frog-700;
  }

  .carousel__button--disabled {
    @apply text-dark-400;
  }

  .carousel__button--disabled:hover {
    @apply text-dark-400;
  }

  .media {
    @apply w-[52rem] h-[25rem] lg:w-[84rem] lg:h-[40rem] object-cover border border-dark-400;
  }
</style>
