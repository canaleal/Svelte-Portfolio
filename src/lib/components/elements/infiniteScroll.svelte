<script lang="ts">
  export let items: { link: string; title: string }[] = []
  export let rows: number = 1

  // Function to split items into rows
  function splitItemsIntoRows(items: string | any[], rows: number) {
    const itemsPerRow = Math.ceil(items.length / rows)
    const result = []
    for (let i = 0; i < rows; i++) {
      result.push(items.slice(i * itemsPerRow, (i + 1) * itemsPerRow))
    }
    return result
  }

  const rowsOfItems = splitItemsIntoRows(items, rows)
</script>

{#if items.length > 0}
  <div class="infinite-scroll-container masked-image">
    {#each rowsOfItems as row}
      <div class="animate-infinite-scroll__row">
        {#each Array(2) as _}
          <ul
            class=" animate-infinite-scroll"
          >
            {#each row as item}
              <li>
                <img src={item.link} alt={item.title} class="h-10 w-10" />
              </li>
            {/each}
          </ul>
        {/each}
      </div>
    {/each}
  </div>
{/if}

<style lang="postcss">

  .infinite-scroll-container {
    @apply w-full inline-flex flex-col overflow-hidden  gap-4;
  }

  .animate-infinite-scroll__row {
    @apply w-full inline-flex flex-nowrap overflow-hidden;
  }

  .animate-infinite-scroll {
    @apply flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none;
    animation: infinite-scroll 50s linear infinite;
  }

  @keyframes infinite-scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .masked-image {
    mask-image: linear-gradient(to right, transparent, black 30%, black 90%, transparent);
    mask-composite: intersect;
    -webkit-mask-composite: source-in;
  }
</style>
