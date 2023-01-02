<script lang="ts">
	import SectionHeader from '../../../widgets/SectionHeader.svelte';
	import AttentionBar from '../../../widgets/AttentionBar.svelte';
	import type { projectType } from '../../../types/project-types';
	import { getDevicon } from '../../../utils/devicon-icons';
	export let data: any;
	let projectElement: projectType = data.projectElement;
</script>
<section>
	<SectionHeader title={projectElement.title} color="bg-primary" />

    <div class="py-8 px-4">
        <div class="flex flex-col sm:flex-row">
            <div class="flex-1">
                <a
                    href={projectElement.exampleUrl || projectElement.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        height="100"
                        width="auto"
                        src={`${projectElement.imageUrl}`}
                        alt={`${projectElement.title}`}
                        class="img-card img-card-4xl rounded-xl  "
                        loading="lazy"
                    />
                </a>
            </div>
    
            <div class="flex-1 flex flex-col">
               
    
                <div class="p-4 h-fit">
                    <p class="text-lg font-bold">Description</p>
                    <div class="ellipsis">
                        <p class="my-2 ">{projectElement.description}</p>
                    </div>
                    <hr class="my-4" />
                    <p class="text-lg font-bold">Size</p>
                    <p>{projectElement.size}</p>
    
                    {#if projectElement.githubUrl}
                        <a
                            href={projectElement.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            class="card-btn card-btn-blue my-4 rounded-lg">Code</a
                        >
                    {/if}
    
                    {#if projectElement.exampleUrl}
                        <a
                            href={projectElement.exampleUrl}
                            target={projectElement.exampleUrl.includes('http') ? '_blank' : ''}
                            rel="noreferrer"
                            class="card-btn  my-4 rounded-lg">Example</a
                        >
                    {/if}
                </div>

                <div class="bg-smoke rounded-b-lg  p-4 text-center text-white mt-auto">
                    <div class="flex flex-wrap">
                        {#each projectElement.tools as icon}
                            <img
                                height="100"
                                width="auto"
                                title={icon}
                                class={`img-icon w-8 mx-2 py-2`}
                                alt=""
                                src={getDevicon(icon)}
                                loading="lazy"
                            />
                        {/each}
                    </div>
                </div>
    
                
            </div>
        </div>
    </div>
	
</section>
