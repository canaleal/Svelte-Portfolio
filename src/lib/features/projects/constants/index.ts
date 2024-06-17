import type { IProject } from '../types'

export const PROJECTS: IProject[] = [
  {
    title: 'Devicon',
    projectType: 'Fullstack',
    description:
      'Devicon UI is a component library that provides access to over 400+ icons. The library is built using React, Typescript, and Tailwind CSS. The library is open source and is available on NPM.',
    technologies: ['React', 'Tailwind', 'Storybook', 'Vite', 'Zustand'],
    stars: 9300,
    downloads: 250000,
    githubLink: 'https://github.com/devicons',
    projectLink: 'https://devicon-ui.vercel.app/',
    image: '/assets/images/devicon.webp',
    year: 2024,
    madeAt: 'Open Source'
  },
  {
    title: 'USARs Mapping',
    projectType: 'Fullstack',
    description:
      'A map-based web application, providing valuable insights and analysis of road conditions and traffic flow. The application displays Geojson data using Google Maps in an interactive, thoroughly customizable web browser environment, and is powered by vector tiles and WebGL.',
    technologies: ['Svelte', 'Tailwind', 'Node', 'Big Query', 'Redis'],
    githubLink: 'https://github.com/Lynx-Data-Processing',

    awards: ['CMI Collaborative Project'],
    image: '/assets/images/usars/usars.webp',
    extraImages: ['/assets/images/usars/usars2.webp'],
    year: 2022,
    madeAt: 'CMI'
  },
  {
    title: 'Object Identification',
    projectType: 'Machine Learning',
    description:
      'A cloud-based tool allowing users to analyze high-resolution dashcam footage with machine learning models.',
    technologies: ['Python', 'FastAPI', 'YOLOv5', 'Docker', 'AWS'],
    githubLink: 'https://github.com/canaleal/YOLOv5-MachineLearning-API-Simplified',

    awards: ['1st Place - Capstone Project'],
    image: '/assets/images/machine_learning.webp',
    year: 2022,
    madeAt: 'Sheridan College'
  },
  {
    title: 'Halo: Cole Protocol',
    projectType: 'Game',
    description:
      'A 3D Ace Combat style game built using Unreal, Blender, C++, and Gaea. Command multiple ships of varying classes and sizes in a battle against the Covenant.',
    technologies: ['Unreal', 'C++', 'Gaea', 'Blender', 'Photoshop'],
    githubLink: 'https://github.com/canaleal/HaloColeProtocol',
    projectLink: 'https://halo-tcp.vercel.app/',
    image: '/assets/images/halo/halo4.webp',
    extraImages: ['/assets/images/halo/halo2.mp4', '/assets/images/halo/halo3.mp4', '/assets/images/halo/halo.webp'],
    year: 2023,
    madeAt: 'Personal'
  }
]
