import type { IIconValueComponent } from '$lib/types'
import type { IExperience } from '../types'

export const getExperienceLinks = (experience: IExperience) => {
  const links: IIconValueComponent[] = []
  if (experience.link) {
    links.push({ icon: 'fa-solid fa-arrow-up-right-from-square', title: experience.company, link: experience.link })
  }

  return links
}
