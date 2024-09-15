import type { IIconValueComponent } from '$lib/types'
import type { IEducation } from '../types'

export const getEducationLinks = (education: IEducation) => {
  const links: IIconValueComponent[] = []
  if (education.link) {
    links.push({ icon: 'fa-solid fa-arrow-up-right-from-square', title: education.school, link: education.link })
  }

  return links
}

export const getEducationAwardElements = (education: IEducation): IIconValueComponent[] => {
  const awardElements: IIconValueComponent[] = []
  if (education.grade) {
    awardElements.push({ icon: 'fa fa-star', title: education.grade })
  }
  if (education.awards) {
    education.awards.forEach((award) => {
      awardElements.push({ icon: 'fa fa-trophy', title: award })
    })
  }

  return awardElements
}
