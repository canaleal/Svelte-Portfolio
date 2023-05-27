
import type { IProjectType } from '$lib/types/project-types';
import { ApplicationField, ProjectSize } from '$lib/types/project-types';
export const PROJECTS: IProjectType[] = [
{
    id: 1,
    title: 'Spatial Visualization',
    author: 'Alex',
    description: 'Application uses MAPBOX to display Geojson data. Interactive, thoroughly customizable maps in the browser, powered by vector tiles and WebGL.',
    tools: [
        'svelte',
        'tailwindcss-plain',
        'fastapi-plain',
        'postgresql',
        'docker',
        'googlecloud',
        'jest-plain',
    ],
    githubUrl: 'https://github.com/DashboardCameraCapstoneTeam/SVELTE-Firebase-Map',
    exampleUrl: 'https://amdcapstone.netlify.app/',
    imageUrl: '/assets/images/projects/mapping_high.webp',
    optionalImageUrls: [
        '/assets/images/projects/mapping_mountains.webp',
        '/assets/images/projects/mapping_dark.webp',

    ],
    size: ProjectSize.medium,
    applicationField: ApplicationField.web,
    inDevelopment: true,
},
{
    id: 2,
    title: 'ADAS Mapping System',
    author: 'Alex',
    description: 'The Advanced Mobile Dashcam is a React Native application meant to run on android devices and work as a stand in for dashcams. The application makes use of Firebase, and a multitude of 3rd party APIs.',
    tools: [
        'react',
        'tailwindcss-plain',
        'fastapi-plain',
        'googlecloud',
        'firebase-plain',
        'docker',
        'jest-plain',
    ],
    githubUrl: 'https://github.com/DashboardCameraCapstoneTeam/EXPO-Advanced-Mobile-Dashcam',
    exampleUrl: 'https://youtu.be/yblBREk6aRw',
    imageUrl: '/assets/images/projects/mapping_dark.webp',
    optionalImageUrls: [

        '/assets/images/projects/car_mobile_app.webp',
        '/assets/images/projects/car_machine_learning_video.mp4',
        '/assets/images/projects/mapping_dark.webp',

    ],
    size: ProjectSize.medium,
    applicationField: ApplicationField.mobile,
    inDevelopment: true,
},
{
    id: 6,
    title: "Traffic Surveillance",
    author: "Alex",
    description: "This is a REST API that provides access to Toronto's traffic cameras. The API is built using NodeJS, Express, and Typescript. The data is stored in a PostgreSQL database. The API is hosted on Google Cloud Platform using Cloud Run and Cloud SQL. The API is currently in development.",
    tools: [
        'nodejs',
        'typescript',
        'express',
        'jest-plain',
        'postgresql',
        'googlecloud',
        'docker'
    ],
    githubUrl: 'https://github.com/canaleal/NODE-Traffic-Camera-API',
    imageUrl: '/assets/images/projects/camera_toronto.webp',
    optionalImageUrls: [
        'https://pbs.twimg.com/media/EcksPSPWoAAcKWX.jpg',
        'https://images.squarespace-cdn.com/content/v1/5989d744f5e231b64a57d4aa/1633635461503-MMLN2UZPW3CLTF0HQXSH/1200px-Roncey_Avenue_storefronts_%2845679731361%29.jpeg?format=1500w',
        'https://images.thestarimages.com/t_LkdTEZDeqe4duvMK08o6CXOuU=/1086x815/smart/filters:cb(1580329085467)/https://www.thestar.com/content/dam/thestar/news/gta/the-fixer/2020/01/29/automated-speed-cameras-are-sitting-ducks-for-vandalism/fixer.jpg'
    ],
    size: ProjectSize.medium,
    applicationField: ApplicationField.api,
    inDevelopment: true,
},

{
    id: 4,
    title: 'CarBadge API',
    author: 'Alex',
    description: 'This Vehicle API provides access to a library of vehicle Logos. Instead of using an ID, Logos are retrieved using the Manufacturer Name. This project is currently in development but will be released very soon.',
    tools: [
        'nodejs',
        'mongodb',
        'postgresql',
        'eslint',
        'googlecloud',
        'docker',
    ],
    githubUrl: 'https://github.com/canaleal/AutomobileAPI',
    imageUrl: '/assets/images/projects/logo_car.gif',
    optionalImageUrls: [

    ],
    size: ProjectSize.small,
    applicationField: ApplicationField.api,
    inDevelopment: false,
},
// {
//     id: 5,
//     title: 'Halo 2/3 Modding',
//     author: 'Alex',
//     description: 'Video game modding is the practice of modifying a video game, such as by altering a game\'s executable code, level data, or graphics, to make it behave differently or appear different. This project is currently in development.',
//     tools: [
//         'python',
//         'pytest',
//         'selenium',
//         'docker',
//         'github',
//     ],
//     exampleUrl: 'https://support.halowaypoint.com/hc/en-us/articles/11285208310932-Halo-Infinite-Custom-Game-Browser-CGB-Overview',
//     imageUrl: 'https://media.tenor.com/xiQp_xgPidoAAAAd/master-chief-halo-infinite-dynamic.gif',
//     optionalImageUrls: [
//         '/assets/images/projects/modding_halo_odst.webp',

//         '/assets/images/projects/modding_halo_drop.webp',
//         '/assets/images/projects/modding_halo_night.webp',
//     ],
//     size: ProjectSize.large,
//     applicationField: ApplicationField.game,
//     inDevelopment: true,
// },

{
    id: 7,
    title: 'Portfolio',
    author: 'Alex',
    description: 'This is my portfolio website. It is built using Svelte, TailwindCSS, and Typescript. For datastorage I am making use of supabase. The project is currently in development.',
    tools: [
        'svelte',
        'typescript',
        'tailwindcss-plain',
        'jest-plain',
        'googlecloud',
        'postgresql',
        'eslint',
        'docker'
    ],
    githubUrl: 'https://github.com/canaleal/Svelte-Portfolio',
    exampleUrl: '/',
    imageUrl: '/assets/images/projects/portfolio_nature.webp',
    optionalImageUrls: [



        '/assets/images/projects/portfolio_trail.webp',
        '/assets/images/projects/portfolio_tree.webp',
    ],
    size: ProjectSize.small,
    applicationField: ApplicationField.web,
    inDevelopment: true,
},
{
    id: 9,
    title: 'Image Processor',
    author: 'Alex',
    description: 'This project is a utility that can be used to scrape images from the web. The Data is saved in a postgres Database with a NodeJS and express backend. Svelte is used to display the images using CRUD format. The project is currently in development.',
    tools: [
        'python',
        'pytest',
        'selenium',
        'docker',
        'nodejs',
        'postgresql',
    ],
    githubUrl: 'https://github.com/canaleal/ImageWebScrapper',
    imageUrl: ' /assets/images/projects/scraper_river.gif',
    optionalImageUrls: [

    ],
    size: ProjectSize.small,
    applicationField: ApplicationField.api,
    inDevelopment: true,
}
];