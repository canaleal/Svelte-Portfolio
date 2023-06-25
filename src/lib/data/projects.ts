
import type { IProjectType } from '$lib/types/project-types';
import { ApplicationField, ProjectSize } from '$lib/types/project-types';
export const PROJECTS: IProjectType[] = [
    {
        id: 0,
        title: 'Spatial Visualization',
        author: 'Alex',
        description: "Lynx City Mapping Dashboard is a map-based web application, providing valuable insights and analysis of road conditions and traffic flow. The application displays Geojson data using Google Maps in an interactive, thoroughly customizable web browser environment, and is powered by vector tiles and WebGL.",
        tools: [
            'svelte',
            'tailwindcss-plain',
            'nodejs',
            'express',
            'fastapi-plain',
            'tensorflow',
            'redis-plain',
            'docker',
            'googlecloud',

        ],
        githubUrl: 'https://github.com/DashboardCameraCapstoneTeam/SVELTE-Firebase-Map',
        exampleUrl: 'https://amdcapstone.netlify.app/',
        imageUrl: '/assets/images/projects/mapping_high.webp',
        optionalContent: [],
        showImage: true,
        size: ProjectSize.Medium,
        applicationField: ApplicationField.FullStack,
        inDevelopment: true,
    },
    {
        id: 1,
        title: 'ADAS Mapping System',
        author: 'Alex',
        description: 'The Advanced Mobile Dashcam is a React Native application meant to run on android devices and work as a stand in for dashcams. The application makes use of Firebase, and a multitude of 3rd party APIs.',
        tools: [
            'react',
            'materialui-plain',
            'fastapi-plain',
            'tensorflow',
            'googlecloud',
            'firebase-plain',
            'docker',

        ],
        githubUrl: 'https://github.com/DashboardCameraCapstoneTeam/EXPO-Advanced-Mobile-Dashcam',
        exampleUrl: 'https://youtu.be/yblBREk6aRw',
        imageUrl: '/assets/images/projects/mapping_usars.webp',
        showImage: true,
        size: ProjectSize.Medium,
        applicationField: ApplicationField.FullStack,
        inDevelopment: false,
    },
    {
        id: 2,
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
        optionalContent: [
            {
                id:0,
                title: "Sample",
                colContent:[
                    {
                       id: 0,
                       title: "Live Data",
                       description: "The Traffic Camera dataset contains the location and number for every Traffic camera in the City of Toronto. These datasets will be updated within 2 minutes when cameras are added, changed, or removed. "
                    },
                    {
                        id: 1,
                        imageUrl: "http://opendata.toronto.ca/transportation/tmc/rescucameraimages/CameraImages/loc8003.jpg"
                    },
                    {
                        id: 2,
                        imageUrl: "http://opendata.toronto.ca/transportation/tmc/rescucameraimages/CameraImages/loc8004.jpg"
                    }
                ]
            },
        ],

        showImage: true,
        size: ProjectSize.Small,
        applicationField: ApplicationField.RestApi,
        inDevelopment: true,
    },

    {
        id: 3,
        title: 'AutoBrand Interface',
        author: 'Alex',
        description: 'This Vehicle API provides access to a library of vehicle Logos. Instead of using an ID, Logos are retrieved using the Manufacturer Name. This project is currently in development but will be released very soon.',
        tools: [
            'nodejs',
            'mongodb',
            'googlecloud',
            'docker',
        ],

        exampleUrl: '/cars',
        imageUrl: '/assets/images/projects/car_badge.webp',

        showImage: true,
        size: ProjectSize.Small,
        applicationField: ApplicationField.RestApi,
        inDevelopment: false,
    },


    {
        id: 4,
        title: 'Traffic Analytics & GeoData Integration',
        author: 'Alex',
        description: "The Toronto Historical Traffic Volume GeoAPI project is an initiative focused on building a robust and interactive API to facilitate the access, analysis, and visualization of historical traffic volume data for the city of Toronto. This two-stage endeavor involves rigorous data cleaning processes and API development for efficient data dissemination in GeoJSON format.",
        tools: [
            'jupyter',
            'pandas',
            'python',
            'docker',
            'dotnetcore',
            'csharp'
        ],
        githubUrl: 'https://github.com/canaleal/Traffic-Volume-Processing',
        imageUrl: 'https://getleo.com/wp-content/uploads/2018/08/Toronto__GTA_Real_Estate_investing_skyline.jpg',
        optionalContent: [
            {
                id: 0,
                colContent: [
                    {
                        id: 0,
                        title: 'Data Cleaning',
                        description: 'The data cleaning process involves the use of Jupyter Notebooks and Pandas to clean and process the data. The data is then stored in a PostgreSQL database.',
                        tools: [
                            'jupyter',
                            'pandas',
                            'python',
                        ]
                    },
                    {
                        id: 1,
                        title: 'API Development',
                        description: 'The API is built using .NET Core and C#. The API is hosted on Google Cloud Platform using Cloud Run and Cloud SQL. The API is currently in development.',
                        tools: [
                            'dotnetcore',
                            'csharp',
                        ]

                    },
                    {
                        id: 2,
                        title: 'Data Visualization',
                        description: 'The data is visualized using Google Maps and Google Charts. The data is also visualized using a custom web application built using Svelte and TailwindCSS.',
                        tools: [
                            'svelte',
                            'tailwindcss-plain',
                            'googlecloud',
                        ]

                    }

                ]
            }
        ],
        showImage: true,
        size: ProjectSize.Small,
        applicationField: ApplicationField.MachineLearning,
        inDevelopment: true,

    },
    {
        id: 5,
        title: "Person Identification & Trajectory Monitoring",
        author: "Alex",
        description: "This project is a Machine Learning / REST API that provides access to a person detection and tracking model. The model is built using YOLOv5 and is deployed using FastAPI. The API is hosted on Google Cloud Platform using Cloud Run and Cloud Storage. The API has been optimized for performance and can process images in under 100ms. The API has also been simplified to make it easy to use.",
        tools: [
            'python',
            'opencv',
            'tensorflow',
            'fastapi',
            'pytorch',
            'docker'
        ],

        imageUrl: "https://viso.ai/wp-content/uploads/2021/03/image-segmentation-background.jpg",
        githubUrl: "https://github.com/canaleal/YOLOv5-MachineLearning-API-Simplified",
        optionalContent: [
            {
                id: 0,
                colContent: [
                    {
                        id: 0,
                        title: 'YoloV5 Model',
                        description: 'YOLOv5 is a state-of-the-art, real-time object detection algorithm. The model is built using PyTorch and is trained on the COCO dataset. The model is deployed using FastAPI and is hosted on Google Cloud Platform using Cloud Run and Cloud Storage.',
                        tools: [

                            'opencv',
                            'tensorflow',

                            'pytorch',

                        ]
                    },
                    {
                        id: 1,
                        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMUdPzWzBlRxvchn8fUgMfYQ4m7Mn1ZTFuCA&usqp=CAU',
                    },
                    {
                        id: 2,
                        imageUrl: 'https://user-images.githubusercontent.com/61612323/204180385-84f3aca9-a5e9-43d8-a617-dda7ca12e54a.png',
                    }

                ]
            }
        ],
        showImage: true,
        size: ProjectSize.Small,
        applicationField: ApplicationField.MachineLearning,
        inDevelopment: true,
    },
    {
        id: 6,
        title: 'Image Processor',
        author: 'Alex',
        description: 'This project is a utility that can be used to scrape images from the web. The Data is saved in a postgres Database with a NodeJS and express backend. Svelte is used to display the images using CRUD format. The project is currently in development.',
        tools: [
            'python',
            'pytest',
            'selenium',
            'docker',
            'postgresql',
        ],
        githubUrl: 'https://github.com/canaleal/ImageWebScrapper',
        imageUrl: '/assets/images/projects/scraper_house.webp',
        optionalContent: [],
        showImage: true,
        size: ProjectSize.Small,
        applicationField: ApplicationField.Algorithms,
        inDevelopment: true,
    },


];