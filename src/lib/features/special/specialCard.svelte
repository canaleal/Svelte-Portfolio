<script lang="ts">
  export let title = 'Special Card'
  export let content: string[] = []
</script>

<div class="flex-1 flex flex-col p-4 border shadow-md hover:scale-105 transition-all duration-300 rounded-md gap-2 ">
  <p class="text-lg font-bold">{title}</p>

  <ul class="list-disc list-inside">
    {#each content as item}
      <li>{item}</li>
    {/each}
  </ul>
</div>
