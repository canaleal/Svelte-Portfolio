import type { IProject } from '../types'

export const PROJECTS: IProject[] = [
  {
    title: 'Devicon',
    projectType: 'Fullstack',
    description:
      'Devicon UI is a component library offering over 400+ high-quality icons for developers. With over 9,000 GitHub stars and rising rapidly, Devicon UI is trusted and loved by the developer community.',
    technologies: ['React', 'Tailwindcss', 'Storybook', 'Vite', 'Redux', 'Cypressio', 'Vercel'],
    stars: 9900,
    downloads: 250000,
    githubLink: 'https://github.com/devicons',
    projectLink: 'https://devicon-ui.vercel.app/',
    image: '/assets/images/devicon/devicon.webp',
    extraImages: ['/assets/images/devicon/devicon2.webp', '/assets/images/devicon/devicon3.webp'],
    year: 2024
  },
  {
    title: 'USARs Mapping',
    projectType: 'Fullstack',
    description:
      'A map-based web application, providing valuable insights and analysis of road conditions and traffic flow. The application displays Geojson data using Google Maps in an interactive, thoroughly customizable web browser environment, and is powered by vector tiles and WebGL.',
    technologies: ['Svelte', 'Tailwindcss', 'Nodejs', 'Googlecloud', 'Redis', 'RabbitMq', 'Google Maps'],
    githubLink: 'https://github.com/Lynx-Data-Processing',

    awards: ['CAAI Collaborative Project'],
    image: '/assets/images/usars/usars.webp',
    extraImages: ['/assets/images/usars/usars2.webp', '/assets/images/usars/usars3.webp'],
    year: 2022
  },
  {
    title: 'Object Identification',
    projectType: 'Machine Learning',
    description:
      'A cloud-based tool allowing users to analyze high-resolution dashcam footage with machine learning models. This project leverages advanced image processing and machine learning techniques to extract valuable insights from video data.',
    technologies: ['Python', 'FastAPI', 'YOLOv5', 'Docker', 'AWS'],
    githubLink: 'https://github.com/canaleal/YOLOv5-MachineLearning-API-Simplified',

    awards: ['1st Place - Capstone Project'],
    image: '/assets/images/usars/usars3.webp',
    year: 2022
  },
  {
    title: 'Halo: Cole Protocol',
    projectType: 'Game',
    description:
      'A 3D Ace Combat style game built using Unrealengine, Blender, C++, and Gaea. Command multiple ships of varying classes and sizes in a battle against the Covenant.',
    technologies: ['Unrealengine', 'C++', 'Gaea', 'Blender', 'Photoshop'],
    githubLink: 'https://github.com/canaleal/HaloColeProtocol',
    image: '/assets/images/halo/halo4.webp',
    extraImages: ['/assets/images/halo/halo2.mp4', '/assets/images/halo/halo3.mp4', '/assets/images/halo/halo.webp'],
    year: 2023,

  }
]
