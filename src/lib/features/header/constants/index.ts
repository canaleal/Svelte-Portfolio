import type { IContact, ISections } from '../types'

export const SECTIONS: ISections[] = [
  {
    title: 'About',
    link: '#About',
    icon: 'fa-solid fa-user'
  },
  {
    title: 'Work',
    link: '#Work',
    icon: 'fa-solid fa-briefcase'
  },
  {
    title: 'Projects',
    link: '#Projects',
    icon: 'fa-solid fa-project-diagram'
  },
  {
    title: 'Education',
    link: '#Education',
    icon: 'fa-solid fa-graduation-cap'
  }
]

export const CONTACT_ITEMS: IContact[] = [
  {
    title: 'Github',
    link: 'https://github.com/canaleal',
    icon: 'fa-brands fa-github'
  },
  {
    title: 'Linkedin',
    link: 'https://www.linkedin.com/in/alex-canales/',
    icon: 'fa-brands fa-linkedin'
  },
  {
    title: 'CodePen',
    link: 'https://codepen.io/canaleal',
    icon: 'fa-brands fa-codepen'
  }
]
