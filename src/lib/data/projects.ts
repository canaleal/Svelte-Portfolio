
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
        optionalContent: [



            {
                id: 2,
                title: "Machine Learning and Data Processing",
                colContent: [

                    {
                        id: 2,
                        colSpan: 1,
                        hasTrans: true,
                        imageUrl: "/assets/images/projects/mapping_island.webp",
                    },
                    {
                        id: 0,
                        colSpan: 2,
                        hasTrans: true,
                        imageUrl: "/assets/images/projects/car_machine_learning_video.mp4",
                    },



                ],
            },
            {
                id: 1,
                title: "Features",
                colContent: [
                    {
                        id: 0,
                        colSpan: 1,
                        title: "Map",
                        description: "The map is the main feature of the application. It displays the processed data in the form of markers, lines, and polygons. The map is highly customizable, allowing the user to change the map style, add or remove layers, and change the color of the data.",
                        tools: [
                            'svelte',
                            'typescript',
                            'tailwindcss-plain',
                        ]
                    },
                    {
                        id: 1,
                        colSpan: 1,
                        title: "Data Processing",
                        description: "The data processing feature allows the user to view the processed data. The user can view the data in the form of markers, lines, and polygons. The filtering system allows users to select the exact data they want on the Map.",
                        tools: [
                            'nodejs',
                            'express',
                            'docker',
                            'redis-plain'
                        ],

                    },
                    {
                        id: 1,
                        colSpan: 1,
                        title: "Enhanced Safety Measures",
                        description: "Identifying hazardous conditions, such as jaywalking pedestrians and potholes, allows organizations to take proactive measures to address them promptly. This leads to increased safety for both drivers and pedestrians.",
                        tools: [
                            'tensorflow',
                            'pytorch',
                            'opencv',
                        ],

                    },

                ],
            },


        ],
        showImage: true,
        size: ProjectSize.Medium,
        applicationField: ApplicationField.FullStack,
        inDevelopment: true,
    },
    {
        id: 1,
        title: 'ADAS Mapping System',
        author: 'Alex',
        description: 'The Advanced Driver Assistance Systems (ADAS) Mapping System is an innovative cloud-based tool allowing users to analyze high-resolution dashcam footage with features like pausing, rewinding, geo-tagging, and AI-enhanced anomaly detection through a user-friendly web interface. Ensuring robust data privacy and security, it serves as a powerful instrument for fleet managers, drivers, and researchers to understand driving environments, improve safety, and study traffic patterns.',
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
        optionalContent: [
            {
                id: 0,
                title: "Sample",
                colContent: [
                    {
                        id: 0,
                        colSpan: 2,
                        imageSize: "img-card-xl",
                        hasTrans: true,
                        imageUrl: "/assets/images/projects/mapping_island.webp",
                    },
                    {
                        id: 1,
                        colSpan: 1,
                        hasTrans: true,
                        imageSize: "img-card-xl",
                        imageUrl: "/assets/images/projects/mapping_grid.webp",
                    }
                ],
            },
   
            {
                id: 1,
                title: "What is ADAS?",
                colContent: [
                    {
                        id: 0,
                        colSpan: 1,
                        title: "Advanced Driver Assistance Systems",
                        description: "Advanced Driver Assistance Systems (ADAS) are systems developed to automate, adapt, and enhance vehicle systems for safety and better driving.",
                        linkButtons: [
                            {
                                id: 0,
                                title: "Learn More",
                                url: "https://en.wikipedia.org/wiki/Advanced_driver-assistance_systems",
                            }
                        ]
                    },
                    {
                        id: 1,
                        colSpan: 1,
                        title: "Capture and Process Data",
                        description: "Capture rich data from sensors, cameras, and OEM integrations, and centralize all of your operations data on one unified platform. All the data is cached locally on the device, and uploaded to the cloud when a connection is available.",
                        tools: [
                            'redis-plain',
                            'docker',
                            'googlecloud',
                        ]
                    },
                    {
                        id: 2,
                        colSpan: 1,
                        title: "Machine Learning",
                        description: "The data is processed using machine learning algorithms to identify hazardous conditions, such as jaywalking pedestrians and potholes. This allows organizations to take proactive measures to address them promptly.",
                        tools: [
                            'tensorflow',
                            'pytorch',
                            'opencv',
                        ]

                    },
                ],
            },
         

        ],

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
        exampleUrl: '/projects/2',
        imageUrl: '/assets/images/projects/camera_toronto.webp',
        optionalContent: [
            {
                id: 0,
                title: "Sample",
                colContent: [
                    {
                        id: 0,
                        colSpan: 1,
                        title: "Live Data",
                        description: "The Traffic Camera dataset contains the location and number for every Traffic camera in the City of Toronto. These datasets will be updated within 2 minutes when cameras are added, changed, or removed. ",
                        tools: [
                            'nodejs',
                            'typescript',

                            'postgresql',
                            'googlecloud',
                            'docker'
                        ],
                    },
                    {
                        id: 0,
                        colSpan: 1,
                        title: "Open Data Portal",
                        description: "The City of Torontos Open Data Portal is an open source delivery tool to bring people and data together. The portal provides access to the Citys datasets for anyone to view and use.",
                        linkButtons: [
                            {
                                id: 0,
                                title: "Open Data Portal",
                                url: "https://open.toronto.ca/",
                                icon: "fa-solid fa-tree-city"
                            }
                        ],
                    },
                    {
                        id: 2,
                        colSpan: 1,
                        title: "Historical Data",
                        description: "The Traffic Camera dataset contains the location and number for every Traffic camera in the City of Toronto. These datasets will be updated within 2 minutes when cameras are added, changed, or removed. ",
                        linkButtons: [
                            {
                                id: 0,
                                title: "Historical Data",
                                url: "https://www.toronto.ca/services-payments/streets-parking-transportation/road-restrictions-closures/restrictions-map/?camera=true#location=&lat=&lng=",
                                icon: "fa-solid fa-timeline"
                            }
                        ],
                    },

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

        optionalContent: [
            {
                id: 1,
                colContent: [
                    {
                        id: 0,
                        colSpan: 1,
                        imageSize: "img-card-2xl",
                        imageUrl: "https://images.unsplash.com/photo-1654789068137-7594793bda0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80",
                    },
                    {
                        id: 0,
                        colSpan: 2,
                        imageSize: "img-card-2xl",
                        imageUrl: "https://di-uploads-pod7.dealerinspire.com/mercedesbenztorontoregionalgroup/uploads/2019/04/CLAcoupeSmallPlate.jpg",
                    },

                ]
            }
        ],

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
                        colSpan: 1,
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
                        colSpan: 1,
                        title: 'API Development',
                        description: 'The API is built using .NET Core and C#. The API is hosted on Google Cloud Platform using Cloud Run and Cloud SQL. The API is currently in development.',
                        tools: [
                            'dotnetcore',
                            'csharp',
                        ]

                    },
                    {
                        id: 2,
                        colSpan: 1,
                        title: 'Data Visualization',
                        description: 'The data is visualized using Google Maps and Google Charts. The data is also visualized using a custom web application built using Svelte and TailwindCSS.',
                        tools: [
                            'svelte',
                            'tailwindcss-plain',
                            'googlecloud',
                        ]

                    },

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
                        colSpan: 1,
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
                        colSpan: 1,
                        title: 'API Development',
                        description: 'The API is built using FastAPI and Python. The API is hosted on Google Cloud Platform using Cloud Run and Cloud Storage. The API is currently in development.',
                        tools: [
                            'python',
                            'fastapi',
                            'docker',
                        ]
                    },
                    {
                        id: 2,
                        colSpan: 1,
                        title: 'Deployment & Optimization',
                        description: 'The API has been optimized for performance and can process images in under 100ms. The API has also been simplified to make it easy to use.',
                        tools: [
                            'raspberrypi',
                            'googlecloud',

                        ]
                    },

                ]
            },

        ],
        showImage: true,
        size: ProjectSize.Small,
        applicationField: ApplicationField.MachineLearning,
        inDevelopment: true,
    },
    {
        id: 6,
        title: 'GAN Image Processor',
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
        imageUrl: '/assets/images/projects/ganip.webp',
        optionalContent: [
          {
            id: 0,
            colContent: [
                {
                    id: 0,
                    colSpan: 1,
                    title: "Inspiration",
                    description: "This project was created as a way to scrape the web for images that can be used as inspiration and training data for GANs. This project involves collecting diverse images from the web. These images not only fuel creativity but also serve as vital training data for our Generative Adversarial Networks (GANs), augmenting our AI capabilities.",
                    tools: [
                        'python',
                        'pytest',
                        'selenium',
                        'docker',
                        'postgresql',
                    ]
                },
                {

                    id: 1,
                    colSpan: 2,
                    imageSize: 'img-card-xl',
                    hasTrans: true,
                    imageUrl: 'https://external-preview.redd.it/ZTKr8M_eT2Er2ZyCXVbX9csL-71IXBbsqqo3ZLUQnxs.png?width=960&crop=smart&auto=webp&v=enabled&s=8bd128fc7703ca0ef36cf16ea6bf4c804b2a394f',
                },
            ],
          },
          {
            id: 1,
            title: "Images",
            colContent: [
                {
                    id: 0,
                    colSpan: 1,
                    imageSize: 'img-card-4xl',
                    hasTrans: false,
                    imageUrl: "https://i.redd.it/azzs9qmyz4x41.jpg",
                },
                {
                    id: 1,
                    colSpan: 2,
                    imageSize: 'img-card-4xl',
                    hasTrans: false,
                    imageUrl: "https://magazine.artstation.com/wp-content/uploads/2016/01/160126_NorthFront_CeresDocksConceptB_v5.jpg",
                },
                {
                    id: 2,
                    colSpan: 1,
                    imageSize: 'img-card-xl',
                    hasTrans: false,
                    imageUrl: "https://magazine.artstation.com/wp-content/uploads/2016/02/160202_NorthFront_ext_anubis_breaching_pod_01.jpg?resize=1536,864",
                },
                {
                    id: 3,
                    colSpan: 1,
                    imageSize: 'img-card-xl',
                    hasTrans: false,
                    imageUrl: "https://magazine.artstation.com/wp-content/uploads/2016/01/160126_NorthFront_TychoStation_Concept_03v4.jpg",
                },
                {
                    id: 4,
                    colSpan: 1,
                    imageSize: 'img-card-xl',
                    hasTrans: false,
                    imageUrl: "https://preview.redd.it/zcywk46modh41.jpg?auto=webp&s=479dc3c0e301839f8b07f48c417df81661e2ade4"
                },
                {
                    id: 5,
                    colSpan: 2,
                    imageSize: 'img-card-xl',
                    hasTrans: false,
                    imageUrl: "https://cdnb.artstation.com/p/assets/images/images/002/031/011/large/martin-parker-space-port-ship-breaking-yards-1.jpg?1456244275"
                },
                {
                    id: 6, 
                    colSpan: 1,
                    imageSize: 'img-card-xl',
                    hasTrans: false,
                    imageUrl: "https://cdna.artstation.com/p/assets/images/images/024/831/106/large/martin-parker-imerial-facility-rework.jpg?1583685723"
                }
            ]
          }
          
        ],
        showImage: true,
        size: ProjectSize.Small,
        applicationField: ApplicationField.Algorithms,
        inDevelopment: true,
    },
    {
        id: 7,
        title: 'VSC Theme Creator',
        author: 'Alex',
        description: 'This project is a utility that can be used to create custom themes for Visual Studio Code. The project is built using Svelte and TailwindCSS. The project is currently in development.',
        tools: [
            'nextjs',
            'typescript',
            'tailwindcss-plain',
            'docker',
        ],
        githubUrl: '',
        imageUrl: '/assets/images/projects/vsc_theme.webp',
        optionalContent: [
            {
                id: 0,
                colContent: [
                    {
                        id: 0,
                        colSpan: 1,
                        isCodeJson: true,
                        hasTrans: false,
                        codeJsonTheme: "andromeda"

                    },
                    {
                        id: 0,
                        colSpan: 1,
                        isCodeJson: true,
                        hasTrans: false,
                        codeJsonTheme: "vscode"
                    },
                    {
                        id: 0,
                        colSpan: 1,
                        isCodeJson: true,
                        hasTrans: false,
                        codeJsonTheme: "neon"
                    }
                ]
            },
            {
                id: 0,
                colContent: [
                    {
                        id: 0,
                        colSpan: 1,
                        isCodeJson: true,
                        hasTrans: false,
                        codeJsonTheme: "mystic"

                    },
                    {
                        id: 0,
                        colSpan: 1,
                        isCodeJson: true,
                        hasTrans: false,
                        codeJsonTheme: "solar"
                    },
                    {
                        id: 0,
                        colSpan: 1,
                        isCodeJson: true,
                        hasTrans: false,
                        codeJsonTheme: "monokai",
                    }
                ]
            },
            
        ],
        showImage: true,
        size: ProjectSize.Small,
        applicationField: ApplicationField.Algorithms,
        inDevelopment: true,
    
    }

];