<script lang="ts">
    import type { IExperience } from './types/index'

    export let experience: IExperience

</script>

<div class="flex flex-row">

    <div class="flex-1">
        <p>{experience.start} - {experience.end}</p>

    </div>


    <div class="flex-1 flex flex-col">
        <h5>{experience.company}</h5>
        <p>{experience.position}</p>
        <p>{experience.description}</p>


        <div class="flex flex-row gap-2 flex-wrap mt-4">
            {#each experience.technologies as technologies}
                <div class="rounded-full px-4 py-1  bg-zinc-800 text-white">
                    <p>{technologies}</p>
                </div>
            {/each}
        </div>

    </div>


</div>