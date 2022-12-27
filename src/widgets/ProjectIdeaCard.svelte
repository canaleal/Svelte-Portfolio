<script lang="ts">
	
	import { applicationFieldFontIcon } from '../types/project-types';


    import type { projectIdeaType } from '../types/project-types';

    export let projectIdea: projectIdeaType;
</script>

<div class="card col-span-1 shadow-xl flex flex-col ">
    <img
        height="100"
        width="auto"
        src={`${projectIdea.imageUrl}`}
        alt={`${projectIdea.title}`}
        class="img-card img-card-lg"
        loading="lazy"
    />

    <div class="bg-teal py-5 text-center text-white sticky top-0">
        <h1 class="text-xl  ">{projectIdea.title}</h1>
    </div>

    <div class="p-4 h-fit">
        <p class="my-2 ">{projectIdea.description}</p>
        <hr class="my-4" />
        <p class="text-lg font-bold">Considerations</p>
        <ul>
            {#each projectIdea.consider as consideration}
                <li class="my-2 ">{consideration}</li>
            {/each}
        </ul>

        <hr class="my-4" />
        <p class="text-lg font-bold">Recommendations</p>
        <ul>
            {#each projectIdea.recommendations as recommendation}
                <li class="my-2 ">{recommendation}</li>
            {/each}
        </ul>

        <hr class="my-4" />
        <p class="text-lg font-bold">Difficulty</p>
        <p>{projectIdea.difficulty}</p>

        {#if projectIdea.exampleUrl}
            <a
                href={projectIdea.exampleUrl}
                target={projectIdea.exampleUrl.includes('http') ? '_blank' : ''}
                rel="noreferrer"
                class="card-btn  my-4 rounded-lg">Example</a
            >
        {/if}
    </div>

    <div class="bg-smoke rounded-b-lg  p-4 text-center text-white mt-auto">
        <div class="flex flex-wrap">
            {#each projectIdea.applicationFieldList as icon}
                <i
                    class="{applicationFieldFontIcon[icon]} text-black w-8 mx-2 py-2 fa-2x"
                    title={icon}
                />
            {/each}
        </div>
    </div>
</div>