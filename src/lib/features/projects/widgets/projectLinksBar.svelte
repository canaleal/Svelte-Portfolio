<script lang="ts">
    import Link from '$lib/components/form/link.svelte';
    import type { IProject } from '../types';

    export let project: IProject;
    export let extraClasses = '';
</script>

<div class="flex flex-row gap-4 {extraClasses}">
    {#if project.githubLink}
        <Link link={project.githubLink}>
            <span class="fa-brands fa-github" />
            {`${project.title}`}
        </Link>
    {/if}
    {#if project.projectLink}
        <Link link={project.projectLink}>
            <span class="fa-solid fa-arrow-up-right-from-square" />
            {`Website`}
        </Link>
    {/if}
</div>