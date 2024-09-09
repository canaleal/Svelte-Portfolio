<script>
  import { PROJECTS } from '$lib/features/projects/constants/index'
  import { formatNumber } from '$lib/utils/text-format'

  const NUMBER_OF_AWARDS = PROJECTS.reduce((acc, project) => acc + (project.awards?.length || 0), 0)
  const NUMBER_OF_TECHNOLOGIES = PROJECTS.reduce((acc, project) => acc + project.technologies.length, 0)

  const TOTAL_STARS = formatNumber(PROJECTS.reduce((acc, project) => acc + (project.stars || 0), 0))
  const TOTAL_DOWNLOADS = formatNumber(PROJECTS.reduce((acc, project) => acc + (project.downloads || 0), 0))

  const cards = [
    {
      title: 'Project Awards',
      content: NUMBER_OF_AWARDS.toString(),
      subContent: 'All unique project awards',
      icon: 'fa-solid fa-medal',
      iconColor: 'group-hover:text-frog-700'
    },
    {
      title: 'Technologies',
      content: NUMBER_OF_TECHNOLOGIES.toString(),
      subContent: 'Tools and Frameworks',
      icon: 'fa-solid fa-cogs',
      iconColor: 'group-hover:text-frog-700'
    },
    {
      title: 'Stars',
      content: TOTAL_STARS,
      subContent: 'Total number of github stars',
      icon: 'fa-solid fa-star',
      iconColor: 'group-hover:text-frog-700'
    },
    {
      title: 'Downloads',
      content: TOTAL_DOWNLOADS,
      subContent: 'Total package downloads',
      icon: 'fa-solid fa-download',
      iconColor: 'group-hover:text-frog-700'
    }
  ]
  
</script>

<section class="overview-container">
  {#each cards as card, i}
    <div class="overview-card fade-in group">
      <div class="overview-card__header">
        <p class="text-sm font-bold">{card.title}</p>
        <i class="{card.icon} {card.iconColor}" />
      </div>
      <p class="text-xl font-bold">{card.content}</p>
      <p class="text-xs hidden md:inline-flex">{card.subContent}</p>
    </div>
  {/each}
</section>

<style lang="postcss">

  .overview-container {
    @apply grid grid-cols-2 md:grid-cols-4 gap-4;
  }

  .overview-card {
    @apply flex flex-col p-4 border border-smoke-300 bg-smoke-100  rounded-xl   shadow-md transition-all duration-300 gap-2;
  }

  .overview-card:hover {
    @apply shadow-lg scale-105 bg-smoke-300;
  }

  .overview-card__header {
    @apply flex flex-row items-center justify-between;
    @apply transition-colors duration-300;
  }

  .fade-in {
    animation: fade-in 0.3s ease-in-out both;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
