const ALIAS: { [key: string]: string } = {
  aws: 'amazonwebservices',
  'c++': 'cplusplus',
  yolov5: 'scikitlearn',
  gaea: 'bash'
}

const ALIAS_FONT: { [key: string]: string } = {
  jest: 'plain',
  amazonwebservices: 'original-wordmark'
}

export const getDeviconLink = (toolString: string) => {
  const BASE_URL = 'https://raw.githubusercontent.com/devicons/devicon/develop/icons'
  const icon = ALIAS[toolString.toLowerCase()] || toolString.toLowerCase()
  const suffix = ALIAS_FONT[icon] ? ALIAS_FONT[icon] : 'original'
  return `${BASE_URL}/${icon}/${icon}-${suffix}.svg`
}

export const getUniqueTechnologies = (technologies: string[]) => {
  return Array.from(new Set(technologies))
}

export const getUniqueTechnologiesWithIcon = (technologies: string[]) => {
  return getUniqueTechnologies(technologies).map((tech) => {
    return {
      link: getDeviconLink(tech),
      title: tech
    }
  })
}
