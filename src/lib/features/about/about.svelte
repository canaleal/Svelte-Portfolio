<script>
  import InfiniteScroll from '$lib/components/elements/infiniteScroll.svelte'
  import { UNIQUE_TECHNOLOGIES } from './constants/constants'
  import { getUniqueTechnologiesWithIcon } from '$lib/utils/devicon-icons'
</script>

<section id="About" class="container px-8 my-16">
  <h2 class="section-title">Full Stack Developer</h2>

  <p class="mb-16">
    I'm a <span class="font-bold text-smoke-300 ">software developer</span> with <span class="font-bold text-smoke-300 ">3 years</span> of experience
    and a passion for building robust, user-friendly applications. My work spans from
    <span class="font-bold text-smoke-300 ">machine learning</span>
    and <span class="font-bold text-smoke-300 ">web development</span> to
    <span class="font-bold text-smoke-300 ">UI design and 3D modeling</span>. I'm always eager to learn new technologies and expand my
    skill set. In my free time, I delve into
    <span class="font-bold text-smoke-300 ">game development</span>, creating engaging and enjoyable gaming experiences.
  </p>
  <InfiniteScroll items={getUniqueTechnologiesWithIcon(UNIQUE_TECHNOLOGIES)} rows={1} />
</section>

<style lang="postcss">
  .container {
    @apply flex flex-col relative gap-8;
  }
</style>
