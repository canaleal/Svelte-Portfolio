
import type { IProjectType } from '$lib/types/project-types';
import { ApplicationField, ProjectSize } from '$lib/types/project-types';
export const PROJECTS: IProjectType[] = [
    {
        id: 1,
        title: 'Spatial Visualization',
        author: 'Alex',
        description: "Lynx City Mapping Dashboard is a map-based web application, providing valuable insights and analysis of road conditions and traffic flow. The application displays Geojson data using Google Maps in an interactive, thoroughly customizable web browser environment, and is powered by vector tiles and WebGL.",
        tools: [
            'svelte',

            'fastapi-plain',
            'postgresql',
            'docker',
            'googlecloud',

        ],
        githubUrl: 'https://github.com/DashboardCameraCapstoneTeam/SVELTE-Firebase-Map',
        exampleUrl: 'https://amdcapstone.netlify.app/',
        imageUrl: '/assets/images/projects/mapping_high.webp',
        optionalImageUrls: [
            '/assets/images/projects/mapping_mountains.webp',
            '/assets/images/projects/mapping_dark.webp',

        ],
        showImage: true,
        size: ProjectSize.Medium,
        applicationField: ApplicationField.Web,
        inDevelopment: true,
    },
    {
        id: 2,
        title: 'ADAS Mapping System',
        author: 'Alex',
        description: 'The Advanced Mobile Dashcam is a React Native application meant to run on android devices and work as a stand in for dashcams. The application makes use of Firebase, and a multitude of 3rd party APIs.',
        tools: [
            'react',

            'fastapi-plain',
            'googlecloud',
            'firebase-plain',
            'docker',

        ],
        githubUrl: 'https://github.com/DashboardCameraCapstoneTeam/EXPO-Advanced-Mobile-Dashcam',
        exampleUrl: 'https://youtu.be/yblBREk6aRw',
        imageUrl: '/assets/images/projects/mapping_usars.webp',
        optionalImageUrls: [

            '/assets/images/projects/car_mobile_app.webp',
            '/assets/images/projects/car_machine_learning_video.mp4',
            '/assets/images/projects/mapping_dark.webp',

        ],
        showImage: true,
        size: ProjectSize.Medium,
        applicationField: ApplicationField.Mobile,
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
        showImage: true,
        size: ProjectSize.Small,
        applicationField: ApplicationField.API,
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
          

            'googlecloud',
            'docker',
        ],
        githubUrl: 'https://github.com/canaleal/AutomobileAPI',
        exampleUrl: '/cars',
        imageUrl: '/assets/images/projects/car_badge.webp',
        optionalImageUrls: [

        ],
        showImage: true,
        size: ProjectSize.Small,
        applicationField: ApplicationField.API,
        inDevelopment: false,
    },
  
    // {
    //     id: 7,
    //     title: 'Portfolio',
    //     author: 'Alex',
    //     description: 'This is my portfolio website. It is built using Svelte, TailwindCSS, and Typescript. For datastorage I am making use of supabase. The project is currently in development.',
    //     tools: [
    //         'svelte',
    //         'typescript',

    //         'googlecloud',
    //         'postgresql',
    //         'eslint',
    //         'docker'
    //     ],
    //     githubUrl: 'https://github.com/canaleal/Svelte-Portfolio',
    //     exampleUrl: '/',
    //     imageUrl: '/assets/images/Header.webp',
    //     optionalImageUrls: [
    //         '/assets/images/projects/portfolio_trail.webp',
    //         '/assets/images/projects/portfolio_tree.webp',
    //     ],
    //     showImage: false,
    //     size: ProjectSize.Small,
    //     applicationField: ApplicationField.Web,
    //     inDevelopment: true,
    // },
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
        imageUrl: '/assets/images/projects/scraper_house.webp',
        showImage: true,
        size: ProjectSize.Small,
        applicationField: ApplicationField.API,
        inDevelopment: true,
    },
    {
        id: 10,
        title: 'Traffic Analytics & GeoData Integration',
        author: 'Alex',
        description: "The Toronto Historical Traffic Volume GeoAPI project is an initiative focused on building a robust and interactive API to facilitate the access, analysis, and visualization of historical traffic volume data for the city of Toronto. This two-stage endeavor involves rigorous data cleaning processes and API development for efficient data dissemination in GeoJSON format.",
        tools: [
            'jupyter',
            'python',
            'selenium',
            'docker',
            'dotnetcore',
            'csharp'
        ],
        githubUrl: 'https://github.com/canaleal/Traffic-Volume-Processing',
        imageUrl: 'https://getleo.com/wp-content/uploads/2018/08/Toronto__GTA_Real_Estate_investing_skyline.jpg',
        showImage: true,
        size: ProjectSize.Small,
        applicationField: ApplicationField.MachineLearning,
        inDevelopment: true,

    },
    // {
    //     id: 11,
    //     title: "Guardian Surveillance (Person Detection)",
    //     author: "Alex",
    //     description: "This project is a sentry camera that can be used to detect and track objects. The project is built using a Raspberry Pi, a camera, and a servo motor. The project is currently in development. (1x Raspberry Pi 4 Model B Quad Core, 2x Nema 17 Stepper Motor Bipolar) ",
    //     tools: [
    //         'python',
    //         'opencv',
    //         'raspberrypi',
    //         'docker'
    //     ],

    //     imageUrl: "https://lp.logitechclub.com/vc/images/product/rallycamera/rally-camera-2.jpg",
    //     showImage: false,
    //     size: ProjectSize.Small,

    //     applicationField: ApplicationField.MachineLearning,
    //     inDevelopment: true,
    
    // }

];