
import type { IProjectType } from '$lib/types/project-types';
import { ApplicationField, ProjectSize } from '$lib/types/project-types';
export const PROJECTS: IProjectType[] = [{
    id: 0,
    title: 'Road Obstacle Detection',
    author: 'Alex',
    description: 'This program uses OpenCV and Tensorflow to detect POIs in Images, and Videos. The model was built using YOLOv5 and the pothole dataset from RoboFlow.com. Currently, this project is under development.',
    tools: [
        'python',
        'opencv',
        'pandas',
        'tensorflow',
        'pytorch',
        'selenium',
        'pytest',
    ],
    githubUrl: 'https://github.com/canaleal/PotholeObjectDetection',
    exampleUrl: 'https://www.youtube.com/watch?v=0LRjngTz3N4',
    imageUrl: '/assets/images/projects/car_machine_learning_video.mp4',
    optionalImageUrls: [
     
    ],
    size: ProjectSize.medium,
    applicationField: ApplicationField.machineLearning,
    inDevelopment: true,
},
{
    id: 1,
    title: '3D Mapping',
    author: 'Alex',
    description: 'Mapbox is a provider of custom online maps for websites and applications such as ride-hailing services, real estate, and gaming. The companys mapping platform allows users to create and customize maps with their own content, such as data layers and imagery, using a range of tools and APIs. Mapbox is known for its fast and reliable maps, which are used by millions of people around the world.. Interactive, thoroughly customizable maps in the browser, powered by vector tiles and WebGL.',
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
    imageUrl: 'https://miro.medium.com/max/1400/1*qqu5TUCsfbBwO4_CyxT8mQ.gif',
    optionalImageUrls: [
        '/assets/images/projects/mapping_mountains.webp',
        '/assets/images/projects/mapping_app.webp',
        'https://assets.website-files.com/5e832e12eb7ca02ee9064d42/5f7db57af8fb5265fc92b03a_Group%20801.jpg',
        '/assets/images/projects/mapping_high.webp',
    ],
    size: ProjectSize.medium,
    applicationField: ApplicationField.web,
    inDevelopment: true,
},
{
    id: 2,
    title: 'AMD Capstone',
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
    imageUrl: 'https://media0.giphy.com/media/d2bZ1XB4ZVFSKMLjpd/giphy.gif?cid=ecf05e47msh7rwxwpeif4onzullmuqwrsl44ubnjr7j7k6df&rid=giphy.gif&ct=g',
    optionalImageUrls: [
        '/assets/images/projects/car_dashboard.webp',
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
    title: "Toronto Traffic Camera API",
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
    exampleUrl: '/cameras',
    imageUrl: 'https://www.gta-homes.com/wp-content/uploads/tocore-a-plan-for-downtown-toronto.jpg',
    optionalImageUrls: [
    ],
    size: ProjectSize.medium,
    applicationField: ApplicationField.api,
    inDevelopment: true,
},

{
    id: 4,
    title: 'Automobile Logo API',
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
    exampleUrl: '/cars',
    imageUrl: 'https://i.pinimg.com/originals/4d/2d/8a/4d2d8a6d5523864ab7afe0ffa34b729a.gif',
    optionalImageUrls: [

    ],
    size: ProjectSize.medium,
    applicationField: ApplicationField.api,
    inDevelopment: false,
},
{
    id: 5,
    title: 'Halo 2/3 Modding',
    author: 'Alex',
    description: 'Video game modding is the practice of modifying a video game, such as by altering a game\'s executable code, level data, or graphics, to make it behave differently or appear different. This project is currently in development.',
    tools: [
        'python',
        'pytest',
        'selenium',
        'docker',
        'github',
    ],
    exampleUrl: 'https://support.halowaypoint.com/hc/en-us/articles/11285208310932-Halo-Infinite-Custom-Game-Browser-CGB-Overview',
    imageUrl: 'https://media.tenor.com/xiQp_xgPidoAAAAd/master-chief-halo-infinite-dynamic.gif',
    optionalImageUrls: [
        '/assets/images/projects/modding_halo_odst.webp',
        'https://media.sketchfab.com/models/26d769db866e4004a7fa9cf6b39ad3f3/thumbnails/c61fde05180f4141afc2f693232c6db2/52b0d6ed7216429081ebc78fc9d4ea6d.jpeg',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2cb8789f-cc33-4232-a7aa-a11936682a99/d5gnkrt-77f4a927-a1f3-4aab-a877-394bce46bf46.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjYjg3ODlmLWNjMzMtNDIzMi1hN2FhLWExMTkzNjY4MmE5OVwvZDVnbmtydC03N2Y0YTkyNy1hMWYzLTRhYWItYTg3Ny0zOTRiY2U0NmJmNDYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EnOLeVQl20fn7ByhBiUepLoE22I9-uRr0XE8Y9Ay57g',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/058d4b4c-eee9-4520-8b8c-818c32e00f0a/d909wy7-3b8b9681-9040-40f0-ad51-d963ea712a46.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA1OGQ0YjRjLWVlZTktNDUyMC04YjhjLTgxOGMzMmUwMGYwYVwvZDkwOXd5Ny0zYjhiOTY4MS05MDQwLTQwZjAtYWQ1MS1kOTYzZWE3MTJhNDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.a0Dxm6aSv0iTPjqLKOPskdYKLV8eeJ_D9H3Z9Kfnr5c',
        '/assets/images/projects/modding_halo_drop.webp',
        '/assets/images/projects/modding_halo_night.webp',
    ],
    size: ProjectSize.large,
    applicationField: ApplicationField.game,
    inDevelopment: true,
},

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
    imageUrl: 'https://i.pinimg.com/564x/be/2d/5c/be2d5c5d3d0684fe627546b839f8dba6.jpg',
    optionalImageUrls: [
        '/assets/images/projects/portfolio_nature.webp',
        '/assets/images/projects/portfolio_castle.webp',
        '/assets/images/projects/portfolio_minecraft.webp',
        '/assets/images/projects/portfolio_game.webp',
        '/assets/images/projects/portfolio_jesta.webp',
        '/assets/images/projects/portfolio_zaku.webp',
        '/assets/images/projects/portfolio_trail.webp',
        '/assets/images/projects/portfolio_tree.webp',
    ],
    size: ProjectSize.small,
    applicationField: ApplicationField.web,
    inDevelopment: true,
},

// {
//     id: 9,
//     title: 'Image Upscaler',
//     author: 'Alex',
//     description: 'Image upscaling is the process of increasing the resolution of an image. This project is currently in development. Implementation of the paper "Deep Learning for Single Image Super-Resolution: A Brief Review"',
//     tools: [
//         'python',
//         'pytest',
//         'selenium',
//         'docker',
//         'github',
//     ],
//     githubUrl: null,
//     exampleUrl: 'https://arxiv.org/pdf/1808.03344.pdf',
//     imageUrl: 'https://i.pinimg.com/564x/2d/04/64/2d04641c262958f97e690b3b4a05e30b.jpg ',
//     optionalImageUrls: [
//         '/assets/images/projects/upscale_clouds.jpg',
//         '/assets/images/projects/upscale_waterfall.jpg',
//         '/assets/images/projects/portfolio_trail.webp',
//         '/assets/images/projects/portfolio_tree.webp',
//     ],
//     size: ProjectSize.small,
//     applicationField: ApplicationField.algorithms,
//     inDevelopment: true,
// },
{
    id: 10,
    title: 'Image Scraper Utility and API',
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
    imageUrl: ' https://cutewallpaper.org/25/anime-nature-gif-wallpaper/pin-by-gul-rizvi-on-animation-in-2021-anime-scenery-anime-scenery-wallpaper-nature-gif.gif',
    optionalImageUrls: [
        'https://s.yimg.com/ny/api/res/1.2/imuRzahr1VIqluox7WZP7Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/entertainment_weekly_785/d648e85668b2b4651c95069acf992f16',
        'https://images.squarespace-cdn.com/content/v1/5a90557e1137a6fdeeb6bb3e/1592826840025-480VRTRITOXKWGI2OQ3V/sWbKISN.jpg',
        'https://lh6.googleusercontent.com/-1HL8ZlpzzAs/Ukjcg2VKB4I/AAAAAAAAab8/URNZ6g4rcrY/s800/dBVdpr2.jpg',
        'https://turnafeezy.files.wordpress.com/2018/11/egturn-a_gundam_bd_351080p_10bitbf3b73f2-mkv_snapshot_21-48_2017-01-22_13-42-13.jpg'
    ],
    size: ProjectSize.small,
    applicationField: ApplicationField.api,
    inDevelopment: true,
}
];