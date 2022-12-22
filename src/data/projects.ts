/* eslint-disable max-len */
import type { projectType } from '../types/project-types';
import { projectSize, applicationField } from '../types/project-types';
export const PROJECTS: projectType[] = [
    
    {
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
        imageUrl: 'https://storage.googleapis.com/gweb-cloudblog-publish/original_images/vehicle_tracking_480.gif',
        size: projectSize.medium,
        applicationField: applicationField.machineLearning,
        inDevelopment: false,
    },
    {
        id: 1,
        title: '3D Mapping',
        author: 'Alex',
        description: 'Mapbox is a provider of custom online maps for websites and applications such as ride-hailing services, real estate, and gaming. The companys mapping platform allows users to create and customize maps with their own content, such as data layers and imagery, using a range of tools and APIs. Mapbox is known for its fast and reliable maps, which are used by millions of people around the world.. Interactive, thoroughly customizable maps in the browser, powered by vector tiles and WebGL.',
        tools: [
            'svelte',
            'react',
            'tailwindcss-plain',
            'redux',
            'nodejs',
            'fastapi-plain',
            'googlecloud',
        ],
        githubUrl: 'https://github.com/DashboardCameraCapstoneTeam/SVELTE-Firebase-Map',
        exampleUrl: 'https://amdcapstone.netlify.app/',
        imageUrl: 'https://miro.medium.com/max/1400/1*qqu5TUCsfbBwO4_CyxT8mQ.gif',
        size: projectSize.medium,
        applicationField: applicationField.web,
        inDevelopment: false,
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
            'svelte',
            'jest-plain',
        ],
        githubUrl: 'hhttps://github.com/DashboardCameraCapstoneTeam/EXPO-Advanced-Mobile-Dashcam',
        exampleUrl: 'https://youtu.be/yblBREk6aRw',
        imageUrl: 'https://media0.giphy.com/media/d2bZ1XB4ZVFSKMLjpd/giphy.gif?cid=ecf05e47msh7rwxwpeif4onzullmuqwrsl44ubnjr7j7k6df&rid=giphy.gif&ct=g',
        size: projectSize.medium,
        applicationField: applicationField.mobile,
        inDevelopment: false,
    },
    {
        id: 4,
        title: 'Automobile Logo API',
        author: 'Alex',
        description: 'This Vehicle API provides access to a library of vehicle Logos. Instead of using an ID, Logos are retrieved using the Manufacturer Name. This project is currently in development but will be released very soon.',
        tools: [
            'nodejs',
            'mongodb',
            'express',
            'postgresql',
            'eslint',
            'googlecloud',
            'docker',
        ],
        githubUrl: 'https://github.com/canaleal/AutomobileAPI',
        exampleUrl: '/cars',
        imageUrl: 'https://i.pinimg.com/originals/4d/2d/8a/4d2d8a6d5523864ab7afe0ffa34b729a.gif',
        size: projectSize.medium,
        applicationField: applicationField.api,
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
        githubUrl: null,
        exampleUrl: 'https://support.halowaypoint.com/hc/en-us/articles/11285208310932-Halo-Infinite-Custom-Game-Browser-CGB-Overview',
        imageUrl: 'https://media.tenor.com/xiQp_xgPidoAAAAd/master-chief-halo-infinite-dynamic.gif',
        size: projectSize.large,
        applicationField: applicationField.game,
        inDevelopment: true,
    },
    // {
    //     id: 6,
    //     title: 'Live Algorithm Sorting',
    //     author: 'Alex',
    //     description: 'This project is a visualization of the most common sorting algorithms. The project is built using Svelte, TailwindCSS, and Typescript. The project is currently in development.',
    //     tools: [
    //         'typescript',
    //         'svelte-plain',
    //         'tailwindcss-plain',
    //         'jest-plain',
    //         'eslint',
    //         'docker',
    //         'github',
    //     ],
    //     githubUrl: 'https://github.com/canaleal/Svelte-Portfolio',
    //     exampleUrl: '/algorithms',
    //     imageUrl: 'https://thecodingbay.com/wp-content/uploads/2022/05/Machine-Learning-Algorithm.gif',
    //     size: projectSize.small,
    //     applicationField: applicationField.algorithms,
    //     inDevelopment: false,

    // },
    {
        id: 7,
        title: 'Portfolio',
        author: 'Alex',
        description: 'This is my portfolio website. It is built using Svelte, TailwindCSS, and Typescript. For datastorage I am making use of supabase. The project is currently in development.',
        tools: [
            'typescript',
            'svelte',
            'tailwindcss-plain',
            'jest-plain',
            'googlecloud',
            'postgresql',
            'eslint',
            'docker',
            'github',
        ],
        githubUrl: 'https://github.com/canaleal/Svelte-Portfolio',
        exampleUrl: '/',
        imageUrl: 'https://i.pinimg.com/564x/be/2d/5c/be2d5c5d3d0684fe627546b839f8dba6.jpg',
        size: projectSize.small,
        applicationField: applicationField.web,
        inDevelopment: false,
    },
    // {
    //     id: 8,
    //     title: 'TF-IDF Algorithm',
    //     author: 'Alex',
    //     description: 'TF-IDF is a numerical statistic that is intended to reflect how important a word is to a document in a collection or corpus. The TF-IDF Vector Matrix is then used to create a machine learning model for later use. The project is currently in development.',
    //     tools: [
    //         'python',
    //         'pytest',
    //         'selenium',
    //         'docker',
    //         'github',
    //     ],
    //     githubUrl: null,
    //     exampleUrl: null,
    //     imageUrl: 'https://joselyntoscano.files.wordpress.com/2017/10/giphy-big-data.gif',
    //     size: projectSize.small,
    //     applicationField: applicationField.algorithms,
    //     inDevelopment: false,
    // },
    {
        id: 9,
        title: 'Simple Learning Image Upscaler',
        author: 'Alex',
        description: 'Image upscaling is the process of increasing the resolution of an image. This project is currently in development.',
        tools: [
            'python',
            'pytest',
            'selenium',
            'docker',
            'github',
        ],
        githubUrl: null,
        exampleUrl: null,
        imageUrl: 'https://media.tenor.com/8fCoAFhaseUAAAAd/aesthetic-anime.gif',
        size: projectSize.small,
        applicationField: applicationField.algorithms,
        inDevelopment: true,
    },
    {
        id: 10,
        title: 'Image Scraper Utility and API',
        author: 'Alex',
        description: 'This project is a utility that can be used to scrape images from the web. There is also a front end system. The project is currently in development.',
        tools: [
            'python',
            'pytest',
            'selenium',
            'docker',
            'github',
            'nodejs',
            'express',
            'postgresql',
            'eslint',
            'jest-plain',
            'svelte-plain',
        ],
        githubUrl: null,
        exampleUrl: null,
        imageUrl: 'https://i.pinimg.com/564x/2d/04/64/2d04641c262958f97e690b3b4a05e30b.jpg',
        size: projectSize.small,
        applicationField: applicationField.api,
        inDevelopment: true,
    }


        









];

