<script lang="ts">

  const EXAMPLE_IMAGES: string[] = [
    '/assets/images/halo/halo.webp',
    '/assets/images/gallery/fighter.webp',
    '/assets/images/gallery/gaea.webp',
]

</script>

<section id="Gallery" class="flex flex-col lg:flex-row gap-8 px-8 py-12">
  {#each EXAMPLE_IMAGES as image, idx}
    <img src={image} alt="" class="special-card__image special-card__image--xl"/>
  {/each}
</section>
