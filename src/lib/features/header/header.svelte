<script lang="ts">
  import Link from '$lib/components/form/link.svelte'
  import Navigation from './navigation.svelte'
</script>

<header id="Header" class="flex flex-col  h-full xl:fixed">
  <h1 class="text-4xl uppercase font-extrabold">Alex Canales</h1>
  <h2 class="text-md font-semibold text-navy-600 mt-2">Software Developer</h2>

  <Navigation extraClasses="mt-16" />

  <div class="flex flex-row gap-6 mt-16 xl:mt-32 w-full">
    <Link link="https://github.com/canaleal" title="github" extraClasses="cursor-hover-trigger hover:text-navy-600 ">
      <span class="fa-brands fa-github text-3xl" />
    </Link>

    <Link
      link="https://www.linkedin.com/in/alex-canales/"
      title="linkedin"
      extraClasses="cursor-hover-trigger hover:text-navy-600 "
    >
      <span class="fa-brands fa-linkedin text-3xl" />
    </Link>

    <Link link="https://codepen.io/canaleal" title="codepen" extraClasses="cursor-hover-trigger hover:text-navy-600 ">
      <span class="fa-brands fa-codepen text-3xl " />
    </Link>
  </div>
</header>
