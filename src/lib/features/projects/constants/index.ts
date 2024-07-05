import type { IProject } from '../types'

export const PROJECTS: IProject[] = [
  {
    title: 'Devicon',
    projectType: 'Fullstack',
    description:
      'Devicon UI is a component library offering over 400+ high-quality icons for developers. Built with React, TypeScript, and Tailwind CSS, it provides easy access to icons representing a wide range of programming languages, tools, and technologies. The library is open-source, customizable, and available on NPM for seamless integration into your projects. With over 9,000 GitHub stars and rising rapidly, Devicon UI is trusted and loved by the developer community.',
    technologies: ['React', 'Tailwind', 'Storybook', 'Vite', 'Zustand', 'Cypress', 'Vercel'],
    stars: 9300,
    downloads: 250000,
    githubLink: 'https://github.com/devicons',
    projectLink: 'https://devicon-ui.vercel.app/',
    image: '/assets/images/devicon/devicon.webp',
    extraImages: ['/assets/images/devicon/devicon2.webp'],
    year: 2024,
    madeAt: 'Open Source'
  },
  {
    title: 'USARs Mapping',
    projectType: 'Fullstack',
    description:
      'A map-based web application, providing valuable insights and analysis of road conditions and traffic flow. The application displays Geojson data using Google Maps in an interactive, thoroughly customizable web browser environment, and is powered by vector tiles and WebGL.',
    technologies: ['Svelte', 'Tailwind', 'Node', 'Big Query', 'Redis', 'RabbitMq', 'Google Maps'],
    githubLink: 'https://github.com/Lynx-Data-Processing',

    awards: ['CMI Collaborative Project'],
    image: '/assets/images/usars/usars.webp',
    extraImages: ['/assets/images/usars/usars2.webp', '/assets/images/usars/usars3.webp'],
    year: 2022,
    madeAt: 'CMI'
  },
  {
    title: 'Object Identification',
    projectType: 'Machine Learning',
    description:
      'A cloud-based tool allowing users to analyze high-resolution dashcam footage with machine learning models. This project leverages advanced image processing and machine learning techniques to extract valuable insights from video data.',
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
