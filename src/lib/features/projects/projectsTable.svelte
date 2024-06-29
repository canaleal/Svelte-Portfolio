<script context="module" lang="ts">
  export const TABLE_STYLES = {
    th: 'py-3 px-4 text-left',
    td: 'py-3 px-4 text-left',
    uniqueColor: 'font-semibold text-white  text-sm',
    hidden: 'hidden lg:table-cell'
  }
</script>

<script lang="ts">
  import TechnologiesBar from '$lib/components/elements/technologiesBar.svelte'
  import { PROJECTS } from '$lib/features/projects/constants/index'
  import AwardsBar from './widgets/projectAwardsBar.svelte'
  import ProjectLink from './widgets/projectLink.svelte'
</script>

<div class="flex flex-col overflow-hidden rounded-md  border border-dark-400 ">
  <table>
    <thead class="text-white bg-dark-900 border-b border-dark-400">
      <tr>
        <th class="{TABLE_STYLES.th} {TABLE_STYLES.hidden}">Project</th>
        <th class="{TABLE_STYLES.th} {TABLE_STYLES.hidden}">Technologies</th>
        <th class="{TABLE_STYLES.th} {TABLE_STYLES.hidden}">Awards</th>
        <th class={TABLE_STYLES.th}>Link</th>
      </tr>
    </thead>
    <tbody class="bg-dark-700">
      {#each PROJECTS as project}
        <tr>
          <td class="{TABLE_STYLES.td} {TABLE_STYLES.hidden}  {TABLE_STYLES.uniqueColor}">{project.title}</td>
          <td class="{TABLE_STYLES.td} {TABLE_STYLES.hidden}">
            <TechnologiesBar technologies={project.technologies} />
          </td>
          <td class="{TABLE_STYLES.td} {TABLE_STYLES.hidden}">
            <AwardsBar {project} />
          </td>
          <td class={TABLE_STYLES.td}>
            <ProjectLink {project} />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
