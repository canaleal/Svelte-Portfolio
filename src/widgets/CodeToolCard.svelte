<script lang="ts">
    import { getDevicon } from '../utils/devicon-icons';
    import { TEXT_COLORS } from '../constants';

    export let codeTool: any;
</script>

 <div class="card col-span-1 shadow-xl flex flex-col ">
    <div class="bg-dark py-5 text-center text-white sticky top-0">
        <h1 class="text-xl  ">{codeTool.title}</h1>
    </div>

    <div class="p-4  flex flex-col flex-wrap h-fit">
        {#each codeTool.links as urlElement, i}
            <div class="my-2 flex flex-row items-center">
                {#if urlElement.icon}
                <img
                    height="100"
                    width="auto"
                    title={urlElement.icon}
                    class={`img-icon w-8 mx-2 py-2`}
                    alt=""
                    src={getDevicon(urlElement.icon)}
                    loading="lazy"
                />
                {:else}

               
                <i class="fa-brands fa-{(urlElement.title)?.toLowerCase()} w-8 mx-2 py-2 fa-2x {TEXT_COLORS[((i - 1) % 10) + 1]} ">&#8205; </i>

                   
      
                  
                {/if}
              
                <a href={`${urlElement.url}`} target="_blank" rel="noreferrer" class="hover:underline"
                    >{urlElement.title}</a
                >
            </div>
        {/each}
    </div>
</div>