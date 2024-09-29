import type { IIconValueComponent } from '$lib/types'
import type { IExtra } from '../types'

export const getExtraLinks = (volunteer: IExtra) => {
  const links: IIconValueComponent[] = []
  if (volunteer.githubLink) {
    links.push({ icon: 'fa-brands fa-github', title: volunteer.title, link: volunteer.githubLink })
  }

  return links
}
