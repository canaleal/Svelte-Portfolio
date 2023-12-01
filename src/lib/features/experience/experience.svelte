<script lang="ts">

    import Card from "./card.svelte";
import { EXPERIENCE } from "./constants";



</script>

<section id="experience">

    {#each EXPERIENCE as experience}
        <Card {experience}/>
    {/each}

    
</section>