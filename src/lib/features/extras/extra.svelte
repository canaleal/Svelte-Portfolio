<script lang="ts">
  import { EXTRA } from './constants'
  import { getExtraLinks } from './utils/extraUtils'
  import CardIcons from '$lib/components/elements/iconLinks.svelte'
  import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte'

</script>

<section id="Extra" class="flex flex-col gap-16 px-8 py-12 bg-dark-300  rounded-3xl shadow">
  <h2 class="text-xl font-bold uppercase">Extras</h2>

  {#each EXTRA as extra}
    <div class="special-card">
      <div class="special-card__left">
        <div class="special-card__header">
          <p class="special-card__title">{extra.title}</p>
          <CardIcons links={getExtraLinks(extra)} />
        </div>

        <div class="special-card__body">
          <p>{extra.description}</p>
        </div>

        <div class="special-card__footer">
            <TechnologiesBar technologies={extra.technologies}/>
        </div>
      </div>

      <div class="special-card__right">

      </div>
    </div>
  {/each}

  
</section>
