
import { ALGORITHMS, COMPLETE, FULL_STACK, IN_DEVELOPMENT, MACHINE_LEARNING, MEDIUM, REST_API, SMALL, UI } from '$lib/constants';
import type { IProjectType } from '$lib/types/project-types';


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
      
        imageUrl: '/assets/images/projects/mapping_island.webp',
        optionalContent: [



            {
                id: 2,
                title: "Machine Learning and Data Processing",
                colContent: [

                    {
                        id: 2,
                        colSpan: 1,
                        hasTrans: false,
                        imageUrl: "/assets/images/projects/mapping_high.webp",
                    },
                    {
                        id: 0,
                        colSpan: 2,
                        hasTrans: false,
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
            {
                id: 2,
             
                title: "Data Processing",
                colContent: [

                    {
                        id: 1,
                        colSpan: 3,
                        hasTrans: false,
                        imageSize: "img-card-8xl",
                        imageUrl: "/assets/images/projects/mapping_map.webp",
                    },
                ],
            },
        

        ],
        showImage: true,
        size: MEDIUM,
        applicationField: FULL_STACK,
        projectCompletion: COMPLETE,
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
                        hasTrans: false,
                        imageUrl: "/assets/images/projects/mapping_island.webp",
                    },
                    {
                        id: 1,
                        colSpan: 1,
                        hasTrans: false,
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

        size: MEDIUM,
        applicationField: FULL_STACK,
        projectCompletion: COMPLETE,
    },
    {
        id: 2,
        title: "Traffic Surveillance",
        author: "Alex",
        description: "This is a REST API that provides access to Toronto's traffic cameras. The API is built using NodeJS, Express, and Typescript. The application is currently in development for new additions (Traffic Cameras, Speed Cameras, Highway Cameras, and Traffic Sensors).",
        tools: [
            'nodejs',
            'typescript',
            'express',

            'postgresql',
            'googlecloud',
            'docker'
        ],
        githubUrl: 'https://github.com/canaleal/NODE-Traffic-Camera-API',
       
        imageUrl: '/assets/images/projects/mapping_toronto.webp',
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
                        description: "The Traffic Camera dataset contains the location and number for every Traffic camera in the City of Toronto. Data is updated and archived every 2 minutes in a PostgreSQL database. ",
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
            {
                id: 1,
                title: "Images",
                colContent: [
                    {
                        id: 0,
                        colSpan: 1,
                        imageSize: 'img-card-md',
                        hasTrans: false,
                        imageUrl: "/assets/images/traffic/loc8001.jpg",
                    },
                    {
                        id: 1,
                        colSpan: 1,
                        imageSize: 'img-card-md',
                        hasTrans: false,
                        imageUrl: "/assets/images/traffic/loc8002.jpg",
                    },
                    {
                        id: 2,
                        colSpan: 1,
                        imageSize: 'img-card-md',
                        hasTrans: false,
                        imageUrl: "/assets/images/traffic/loc8003.jpg",
                    },
                    {

                        id: 3,
                        colSpan: 1,
                        imageSize: 'img-card-md',
                        hasTrans: false,
                        imageUrl: "/assets/images/traffic/loc8004.jpg",
                    },
                    {
                        id: 4,
                        colSpan: 1,
                        imageSize: 'img-card-md',
                        hasTrans: false,
                        imageUrl: "/assets/images/traffic/loc8005.jpg",
                    },
                    {
                        id: 5,
                        colSpan: 1,
                        imageSize: 'img-card-md',
                        hasTrans: false,
                        imageUrl: "/assets/images/traffic/loc8006.jpg",
                    },
                    {
                        id: 6,
                        colSpan: 1,

                        imageSize: 'img-card-md',
                        hasTrans: false,
                        imageUrl: "/assets/images/traffic/loc8007.jpg",
                    },
                    {
                        id: 7,
                        colSpan: 1,
                        imageSize: 'img-card-md',
                        hasTrans: false,
                        imageUrl: "/assets/images/traffic/loc8008.jpg",
                    },
                    {
                        id: 8,
                        colSpan: 1,
                        imageSize: 'img-card-md',
                        hasTrans: false,
                        imageUrl: "/assets/images/traffic/loc8009.jpg",
                    },
                ]
            }

        ],

        showImage: true,
        size: SMALL,
        applicationField: REST_API,
        projectCompletion: COMPLETE,
    },


    {
        id: 6,
        title: 'GAN Image Processor',
        author: 'Alex',
        description: 'This project is a utility that can be used to scrape images from the web. Making use of Ruby and Python, this project can be used to scrape images from the web. These images can be used as inspiration and training data for GANs.',
        tools: [
            'ruby',
            'python',
            'pytest',
            'selenium',
            'docker',
            'postgresql',
        ],
        githubUrl: 'https://github.com/canaleal/ImageWebScrapper',
        imageUrl: '/assets/images/vsc/winter_forest.webp',

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
                        imageSize: 'img-card-md',
                        hasTrans: false,
                        imageUrl: 'https://cdnb.artstation.com/p/assets/images/images/030/709/341/large/josh-van-zuylen-renders-rocket-13.jpg?1601410457',
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
                        imageSize: 'img-card-md',
                        hasTrans: false,
                        imageUrl: "/assets/images/projects/ganip.webp",
                    },
                    {
                        id: 1,
                        colSpan: 2,
                        imageSize: 'img-card-md',
                        hasTrans: false,
                        imageUrl: "https://magazine.artstation.com/wp-content/uploads/2016/01/160126_NorthFront_CeresDocksConceptB_v5.jpg",
                    },
                    {
                        id: 2,
                        colSpan: 1,
                        imageSize: 'img-card-md',
                        hasTrans: false,
                        imageUrl: "https://magazine.artstation.com/wp-content/uploads/2016/02/160202_NorthFront_ext_anubis_breaching_pod_01.jpg?resize=1536,864",
                    },
                    {
                        id: 3,
                        colSpan: 1,
                        imageSize: 'img-card-md',
                        hasTrans: false,
                        imageUrl: "https://magazine.artstation.com/wp-content/uploads/2016/01/160126_NorthFront_TychoStation_Concept_03v4.jpg",
                    },
                    {
                        id: 4,
                        colSpan: 1,
                        imageSize: 'img-card-md',
                        hasTrans: false,
                        imageUrl: "https://preview.redd.it/zcywk46modh41.jpg?auto=webp&s=479dc3c0e301839f8b07f48c417df81661e2ade4"
                    },
                    {
                        id: 5,
                        colSpan: 2,
                        imageSize: 'img-card-md',
                        hasTrans: false,
                        imageUrl: "https://cdnb.artstation.com/p/assets/images/images/002/031/011/large/martin-parker-space-port-ship-breaking-yards-1.jpg?1456244275"
                    },
                    {
                        id: 6,
                        colSpan: 1,
                        imageSize: 'img-card-md',
                        hasTrans: false,
                        imageUrl: " https://cdna.artstation.com/p/assets/images/images/019/051/854/large/bastien-grivet-sketch-fusee.jpg?1561807576"
                    },
                    {
                        id: 7,
                        colSpan: 1,
                        imageSize: 'img-card-md',
                        hasTrans: false,
                        imageUrl: "https://cdnb.artstation.com/p/assets/images/images/023/186/651/large/nana-dhebuadze-2.jpg?1578400457",
                    },
                    {
                        id: 8,
                        colSpan: 2,
                        imageSize: 'img-card-md',
                        hasTrans: false,
                        imageUrl: "https://cdna.artstation.com/p/assets/images/images/030/737/070/large/richard-anderson-flaptraps-art-functionkeytest-63.jpg?1601491426",
                    },
                ]
            }

        ],
        showImage: true,
        size: SMALL,
        applicationField: ALGORITHMS,
        projectCompletion: COMPLETE,
    },


    {
        id: 5,
        title: "Object Identification & Monitoring",
        author: "Alex",
        description: "This project is a Machine Learning / REST API that provides access to a object detection and tracking model. The model is built using YOLOv5 and is deployed using FastAPI. The API is hosted on Google Cloud Platform using Cloud Run and Cloud Storage. The API has been optimized for performance and can process images in under 15ms. The API has also been simplified to make it easy to use.",
        tools: [
            'python',
            'opencv',
            'tensorflow',
            'fastapi',
            'pytorch',
            'docker'
        ],

        imageUrl: "/assets/images/projects/car_machine_learning.jpg",
        githubUrl: "https://github.com/canaleal/YOLOv5-MachineLearning-API-Simplified",
        exampleUrl: "/assets/images/projects/car_machine_learning_video.mp4",
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

                            'pytorch'

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
                            'docker'
                        ]
                    },
                    {
                        id: 2,
                        colSpan: 1,
                        title: 'Deployment & Optimization',
                        description: 'The API has been optimized for performance and can process images in under 100ms. The API has also been simplified to make it easy to use.',
                        tools: [
                            'raspberrypi',
                            'googlecloud'

                        ]
                    },

                ]
            },

        ],
        showImage: true,
        size: SMALL,
        applicationField: MACHINE_LEARNING,
        projectCompletion: COMPLETE,
    },

    {
        id: 7,
        title: 'VSC Theme Creator',
        author: 'Alex',
        description: 'This project is a utility that can be used to create custom themes for Visual Studio Code. The project is built using Svelte and TailwindCSS. The project is currently in development.',
        tools: [
            'gatsby',
            'typescript',
            'tailwindcss-plain',
            'docker',
        ],
        githubUrl: '',
        imageUrl: '/assets/images/vsc/forest.webp',
        optionalContent: [
            {
                id: 0,
              
                colContent: [

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
                        codeJsonTheme: "mystic"

                    },
                    {
                        id: 0,
                        colSpan: 1,
                        isCodeJson: true,
                        hasTrans: false,
                        codeJsonTheme: "andromeda"

                    },

                ],
            },
            {
                id: 1,
                

                colContent: [
                    {
                        id: 0,
                        colSpan: 2,
                        imageSize: 'img-card-xl',
                        hasTrans: false,
                        imageUrl: "/assets/images/vsc/forest.webp"

                    },


                    {
                        id: 0,
                        colSpan: 1,
                        isCodeJson: true,
                        hasTrans: false,
                        codeJsonTheme: "forest"

                    },
                    {
                        id: 0,
                        colSpan: 2,
                        hasTrans: false,
                        imageSize: 'img-card-xl',
                        imageUrl: "/assets/images/vsc/hydroponics.webp"
                    },
                    {
                        id: 0,
                        colSpan: 1,
                        isCodeJson: true,
                        hasTrans: false,
                        codeJsonTheme: "monokai",
                    },
                    {
                        id: 0,
                        colSpan: 2,
                        imageSize: 'img-card-xl',
                        hasTrans: false,
                        imageUrl: "/assets/images/vsc/winter_forest.webp",
                    },
                    {
                        id: 0,
                        colSpan: 1,
                        isCodeJson: true,
                        hasTrans: false,
                        codeJsonTheme: "winter",
                    },
                    {
                        id: 0,
                        colSpan: 2,
                        imageSize: 'img-card-xl',
                        hasTrans: false,
                        imageUrl: "/assets/images/vsc/city.webp",
                    },
                    {
                        id: 0,
                        colSpan: 1,
                        isCodeJson: true,
                        hasTrans: false,
                        codeJsonTheme: "canyon",
                    }

                ]
            },


        ],
        showImage: true,
        size: SMALL,
        applicationField: ALGORITHMS,
        projectCompletion: IN_DEVELOPMENT,

    },
    {
        id: 10,
        title: "Eden Botanical E-Commerce",
        author: "Alex",
        description: "This project is an E-Commerce website built using Svelte and Tailwind. Although the application makes use of 3rd Party APIs, the project serves more as UI/UX practice. The website is currently in development.",
        tools: [
            'svelte',
            'tailwindcss-plain',
            'nodejs',
            'express',
            'mongodb',
            'docker',
            'googlecloud',
        ],

        imageUrl: '/assets/images/projects/eden.webp',
        optionalContent: [
            {
                id: 0,
                colContent: [
                    {
                        id: 0,
                        colSpan: 1,
                        title: "Inspiration",
                        description: "The design was significantly influenced by the Royal Botanical Garden, drawing from their sophisticated and refined aesthetic. A careful examination of the Garden's exquisite detail and its well-conceived, deliberate design principles served as a powerful impetus for the overall design strategy.",
                    },

                    {
                        id: 2,
                        colSpan: 1,
                        title: "E-Commerce",
                        description: "The web application in question has been ingeniously crafted as an e-commerce platform. Combining the elegant aesthetic derived from the Royal Botanical Garden with cutting-edge functionality, it aims to provide users with an unparalleled online shopping experience. ",
                    },
                    {
                        id: 3,
                        colSpan: 1,
                        title: "UI/UX Practice",
                        description: "The app covers a broad spectrum of design scenarios, including product display and description pages, a smooth navigation system, a dynamic shopping cart, a streamlined checkout process, and an intuitive user account management system. It also features various additional elements like search functionality, product filters, and customer reviews sections.",
                    },
                ]
            },
            {
                id: 1,
             
                colContent: [
                    {
                        id: 0,
                        colSpan: 2,
                        imageUrl: "/assets/images/projects/eden.webp",
                        imageSize: "img-card-2xl",
                    },
                    {
                        id: 0,
                        colSpan: 1,
                        imageUrl: "/assets/images/projects/eden_plant.webp",
                        imageSize: "img-card-2xl",
                    },
                    {
                        id: 0,
                        colSpan: 3,
                        imageUrl: "/assets/images/projects/eden_offer.webp",
                        imageSize: "img-card-4xl",
                    }

                ]

            },
            {
                id: 2,
                
                colContent: [
                    {
                        id: 0,
                        colSpan: 2,
                        isColorPalette: true,
                        colorPalette: [
                            "#7d9c60",
                            "#4b6637",
                            "#9d6d4e",
                            "#bcbdb0",
                            "#494f64"
                        ]
                    },
                    {
                        id: 0,
                        colSpan: 1,
                        title: "Color Palette",
                        description: "The color palette for the web application has been meticulously curated to evoke the serene yet dynamic hues found throughout nature. With a dominant emphasis on various shades of green, it encapsulates the vibrancy of lush foliage, while splashes of earth tones and floral accents pay homage to the earth's natural landscapes.",

                    }
                ],
            }

        ],
        showImage: true,
        size: SMALL,
        applicationField: UI,
        projectCompletion: IN_DEVELOPMENT,



    }
    // {
    //     id: 3,
    //     title: 'AutoBrand Interface',
    //     author: 'Alex',
    //     description: 'This Vehicle API provides access to a library of vehicle Logos. Instead of using an ID, Logos are retrieved using the Manufacturer Name. This project is currently in development but will be released very soon.',
    //     tools: [
    //         'nodejs',
    //         'mongodb',
    //         'googlecloud',
    //         'docker',
    //     ],

    //     exampleUrl: '/cars',
    //     imageUrl: '/assets/images/projects/car_badge.webp',
    //     githubUrl: 'https://github.com/canaleal/Automobile-API',
    //     showImage: true,

    //     optionalContent: [
    //         {
    //             id: 1,
    //             colContent: [
    //                 {
    //                     id: 0,
    //                     colSpan: 1,
    //                     imageSize: "img-card-2xl",
    //                     imageUrl: "/assets/images/projects/autobrand_mercedes.webp",
    //                 },
    //                 {
    //                     id: 0,
    //                     colSpan: 2,
    //                     imageSize: "img-card-2xl",
    //                     imageUrl: "/assets/images/projects/autobrand_car.webp",
    //                 },

    //             ]
    //         }
    //     ],

    //     size: Small,
    //     applicationField: RestApi,
    //     projectCompletion: IN_DEVELOPMENT,
    // },

];