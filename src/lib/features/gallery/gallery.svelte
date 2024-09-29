<script lang="ts">
  const EXAMPLE_IMAGES: string[] = [
    '/assets/images/halo/halo.webp'
]

</script>

<section id="Gallery" class="grid grid-cols-1 gap-8 px-8 py-12">
  {#each EXAMPLE_IMAGES as image}
    <img src={image} alt="" class="special-card__image special-card__image--xl shadow" />
  {/each}
</section>
