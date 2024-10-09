<script lang="ts">

  const EXAMPLE_IMAGES: string[] = [
    '/assets/images/halo/halo.webp',
    '/assets/images/gallery/fighter.webp',
    '/assets/images/gallery/gaea.webp'
  ]
</script>

<section id="Gallery" class="section section--gallery fade-in">
  {#each EXAMPLE_IMAGES as image}
    <img src={image} alt="" class="special-card__image special-card__image--xl" />
  {/each}
</section>
