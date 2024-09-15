import type { IProject } from '../types'
import type { IIconValueComponent } from '$lib/types'
import { formatNumber } from '$lib/utils/text-format'

export const getProjectLinks = (project: IProject) => {
  const links: IIconValueComponent[] = []
  if (project.githubLink) {
    links.push({ icon: 'fa-brands fa-github', title: project.title, link: project.githubLink })
  }
  if (project.projectLink) {
    links.push({ icon: 'fa-solid fa-arrow-up-right-from-square', title: 'Project', link: project.projectLink })
  }
  if (project.packageLink) {
    links.push({ icon: 'fa-solid fa-arrow-up-right-from-square', title: 'Package', link: project.packageLink })
  }

  return links
}

export const getProjectAwardElements = (project: IProject): IIconValueComponent[] => {
  const awardElements: IIconValueComponent[] = []
  if (project.stars) {
    awardElements.push({ icon: 'fa fa-star', title: formatNumber(project.stars) })
  }
  if (project.downloads) {
    awardElements.push({ icon: 'fa fa-download', title: formatNumber(project.downloads) })
  }
  if (project.awards) {
    project.awards.forEach((award) => {
      awardElements.push({ icon: 'fa fa-trophy', title: award })
    })
  }

  return awardElements
}
