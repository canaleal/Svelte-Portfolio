interface ISubProject {
  name: string
  description?: string
  link: string
}

export interface IExperience {
  link: string
  company: string
  position: string
  description: string
  start: string
  end: string
  technologies: string[]
  experienceLink: string
  subProjectLinks?: ISubProject[]
}
