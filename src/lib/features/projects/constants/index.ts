import type { IProject } from '../types';

export const PROJECTS: IProject[] = [
	{
		title: 'Devicon',
		description:
			'Devicon UI is a component library that provides access to over 400+ icons. The library is built using React, Typescript, and Tailwind CSS. The library is open source and is available on NPM.',
		technologies: ['React', 'Tailwind', 'Storybook', 'Vite', 'Zustand'],
		stars: '8,400',
		downloads: '250k+ Installs',
		githubLink: 'https://github.com/devicons',
		projectLink: 'https://devicon-ui.vercel.app/',
		image: '/assets/images/devicon.webp'
	},
	{
		title: 'USARs Mapping',
		description:
			'A map-based web application, providing valuable insights and analysis of road conditions and traffic flow. The application displays Geojson data using Google Maps in an interactive, thoroughly customizable web browser environment, and is powered by vector tiles and WebGL.',
		technologies: ['Svelte', 'Tailwind', 'Node', 'Big Query', 'Redis'],
		githubLink: 'https://github.com/Lynx-Data-Processing',
		projectLink: 'https://github.com/Lynx-Data-Processing',
		awards: ['CMI Collaborative Project'],
		image: '/assets/images/usars.webp'
	},
	{
		title: 'DBMS Designer',
		description:
			'Web-based database visualization tool transforms SQL queries into dynamic, interactive graphs composed of nodes and edges. The platform aims to make database exploration and management more intuitive by rendering relationships and structures visually, all directly in your web browser.',
		technologies: ['React', 'Redux', 'GraphQL', 'MongoDB', 'Redis'],
		githubLink: 'https://github.com/canaleal/DB-Visualizer',
		projectLink: 'https://dbvisualizer.vercel.app/',
		image: '/assets/images/dbms.webp'
	},
	{
		title: 'TensorFlow Object Identification',
		description:
			'The Advanced Driver Assistance Systems (ADAS) Mapping System is an innovative cloud-based tool allowing users to analyze high-resolution dashcam footage with features like pausing, rewinding, geo-tagging, and AI-enhanced anomaly detection through a user-friendly web interface.',
		technologies: ['Python', 'FastAPI', 'YOLOv5', 'Docker'],
		githubLink: 'https://github.com/canaleal/YOLOv5-MachineLearning-API-Simplified',
		projectLink: '',
		awards: ['1st Place - Capstone Project'],
		image: '/assets/images/machine_learning.webp'
	}
];
