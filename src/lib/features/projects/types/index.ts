type ProjectType = 'Fullstack' | 'Frontend' | 'Backend' | 'Game' | 'Machine Learning' | 'Mobile'

export interface IProject {
  title: string
  description: string
  technologies: string[]
  projectType: ProjectType
  stars?: number
  downloads?: number
  awards?: string[]
  githubLink: string
  projectLink?: string
  packageLink?: string
  image: string
  extraImages?: string[]
  year: number
  madeAt?: string
}
