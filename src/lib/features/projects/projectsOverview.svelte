<script>
  import ProjectOverviewCard from './widgets/projectOverviewCard.svelte'
  import { PROJECTS } from '$lib/features/projects/constants/index'
  import { formatNumber } from '$lib/utils/text-format'
  import { PORTFOLIO_COLORS } from '$lib/constants/colors/colors'


  const NUMBER_OF_AWARDS = PROJECTS.reduce((acc, project) => acc + (project.awards?.length || 0), 0)
  const NUMBER_OF_TECHNOLOGIES = PROJECTS.reduce((acc, project) => acc + project.technologies.length, 0)

  const TOTAL_STARS = formatNumber(PROJECTS.reduce((acc, project) => acc + (project.stars || 0), 0))
  const TOTAL_DOWNLOADS = formatNumber(PROJECTS.reduce((acc, project) => acc + (project.downloads || 0), 0))

  const cards = [
    { title: 'Project Awards', content: NUMBER_OF_AWARDS.toString(), subContent: 'All unique project awards', icon: 'fa-solid fa-medal', iconColor: 'text-frog-700' },
    { title: 'Technologies', content: NUMBER_OF_TECHNOLOGIES.toString(), subContent: 'Tools and Frameworks', icon: 'fa-solid fa-cogs',  iconColor: 'text-frog-700' },
    { title: 'Stars', content: TOTAL_STARS, subContent: 'Total number of github stars', icon: 'fa-solid fa-star',  iconColor: 'text-frog-700' },
    { title: 'Downloads', content: TOTAL_DOWNLOADS, subContent: 'Total package downloads', icon: 'fa-solid fa-download',  iconColor: 'text-frog-700' }
  ];
</script>

<section class="grid grid-cols-4 gap-4 ">
  {#each cards as card, i}
    <ProjectOverviewCard
      title={card.title}
      content={card.content}
      subContent={card.subContent}
      icon={card.icon}
      fadeInDelayMultiplier={i}
      iconColor={card.iconColor}
    />
  {/each}
</section>
