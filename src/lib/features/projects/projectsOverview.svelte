<script>
  import ProjectOverviewCard from './widgets/projectOverviewCard.svelte'
  import { PROJECTS } from '$lib/features/projects/constants/index'
  import { formatNumber } from '$lib/utils/text-format'

  const NUMBER_OF_AWARDS = PROJECTS.reduce((acc, project) => acc + (project.awards?.length || 0), 0)
  const NUMBER_OF_TECHNOLOGIES = PROJECTS.reduce((acc, project) => acc + project.technologies.length, 0)

  const TOTAL_STARS = formatNumber(PROJECTS.reduce((acc, project) => acc + (project.stars || 0), 0))
  const TOTAL_DOWNLOADS = formatNumber(PROJECTS.reduce((acc, project) => acc + (project.downloads || 0), 0))
</script>

<section class="grid grid-cols-4 gap-4 ">
  <ProjectOverviewCard
    title="Project Awards"
    content={NUMBER_OF_AWARDS.toString()}
    subContent="Total number of awards"
    icon="fa-solid fa-medal"
  />
  <ProjectOverviewCard
    title="Technologies"
    content={NUMBER_OF_TECHNOLOGIES.toString()}
    subContent="Total number of technologies"
    icon="fa-solid fa-cogs"
  />
  <ProjectOverviewCard title="Stars" content={TOTAL_STARS} subContent="Total number of stars" icon="fa-solid fa-star" />
  <ProjectOverviewCard
    title="Downloads"
    content={TOTAL_DOWNLOADS}
    subContent="Total number of downloads"
    icon="fa-solid fa-download"
  />
</section>
