
import { ALGORITHMS, COMPLETE, FULL_STACK, IN_DEVELOPMENT, MACHINE_LEARNING, MEDIUM, REST_API, SMALL, TRAFFIC_CAMERAS_EXAMPLE, UI, WEB_MOCK } from '$lib/constants';
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
                id: 0,
                bgColor: "bg-white",
                title: "Challenge",
                colSpan: 3,
                colContent: [
                    {
                        id: 0,
                        colSpan: 3,
                        noSidePadding: true,
                        hasShadow: false,
                        title: "The Challenge",
                        description: "City planning and tracking utilizing Geographic Information System (GIS) software introduces a multitude of challenges, chief among them being the accurate mapping and sophisticated analysis of highly intricate urban environments. As cities continue to expand and evolve, the dynamic nature of urban landscapes poses an increasingly complex problem for planners and authorities. This dynamic change includes shifts in population densities, evolving land use patterns, transportation networks, and infrastructure development. Tracking these changes requires constant data collection, data updating, and the application of complex algorithms to interpret changes. Moreover, the rate of these changes often outpaces the ability to analyze them, leading to data backlogs and potential inaccuracies.",
                    }
                    
                ]
            },
            {
                id: 3,
                bgColor: "bg-white",
                title: "Data Processing",
                hasStaggeredDelay: true,
                colContent: [
                    {
                        id: 0,
                        colSpan: 1,
                        noSidePadding: true,
                        hasShadow: false,
                        title: "Platforms",
                        listItems: [
                            "Web (Responsive)",
                            "ArcGIS",
                            "Google Maps",
                        ],
                    },
                    {
                        id: 1,
                        colSpan: 1,
                        noSidePadding: true,
                        hasShadow: false,
                        title: "Roles",
                        listItems: [
                            "Product Strategy",
                            "User Research",
                            "UI UX Design",
                            "Interaction Design",
                            "User Testing",
                            "Quality Assurance",
                        ],
                    },
                    {
                        id: 2,
                        colSpan: 1,
                        noSidePadding: true,
                        hasShadow: false,
                        title: "Deliverables",
                        listItems: [
                            "Responsive Web Design",
                            "YoloV5 Machine Learning Model",
                            "Data Processing Pipeline",
                            "REST API",
                            "End-to-end Development"
                        ],
                    }
                ]

            },
            {
                id: 2,
                title: "Data Processing",
                colContent: [
                    {
                        id: 1,
                        colSpan: 3,
                        imageSize: "img-card-8xl",
                        mockup: WEB_MOCK,
                        imageUrl: "/assets/images/projects/mapping_map.webp",
                    },
                ],
            },
            {
                id: 1,
                colContent: [
                    {
                        id: 0,
                        colSpan: 3,
                        noSidePadding: true,
                        hasShadow: false,
                        title: "Google Maps Customization",
                        description: "The incorporation of Google Maps into Lynx's application not only enhances its user interface, making it more intuitive and engaging, but it also significantly elevates its analytical capabilities. Users are now able to examine the data within the geographical confines of the city of Kingston, providing an additional layer of understanding and context to the issues at hand. This has proven to be an invaluable tool for city planners and officials, who are able to visualize the problems and assess potential solutions within the familiar interface of Google Maps.",
                        tools: [
                            'google'
                        ]
                    }
                ]
            },
            {
                id: 3,
                colContent: [
                    {
                        id: 0,
                        colSpan: 3, 
                        imageSize: "img-card-8xl",
                        mockup: WEB_MOCK,
                        imageUrl: '/assets/images/projects/mapping_usars_world.webp'
                    }
                ]
            }
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
                        imageUrl: "/assets/images/projects/mapping_island.webp",
                    },
                    {
                        id: 1,
                        colSpan: 1,
                        imageSize: "img-card-xl",
                        imageUrl: "/assets/images/projects/mapping_grid.webp",
                    }
                ],
            },
            {
                id: 1,
                title: "What is ADAS?",
                hasStaggeredDelay: true,
                colContent: [
                    {
                        id: 0,
                        colSpan: 3,
                        title: "Advanced Driver Assistance Systems",
                        hasShadow: false,
                        noSidePadding: true,
                        description: "Advanced Driver Assistance Systems (ADAS) represent a significant evolution in automotive technology, designed to automate, adapt, and optimize vehicle systems for heightened safety and improved driving experiences. These sophisticated systems, incorporating a blend of sensors, cameras, and artificial intelligence, actively monitor the vehicle's environment, alerting drivers to potential hazards and even taking corrective action when needed. From features such as adaptive cruise control and lane-keep assistance to forward collision warnings and automatic emergency braking, ADAS is paving the way towards more secure, efficient, and ultimately, autonomous driving.",
                        linkButtons: [
                            {
                                id: 0,
                                title: "Learn More",
                                url: "https://en.wikipedia.org/wiki/Advanced_driver-assistance_systems",
                            }
                        ]
                    },
                    {
                        id: 0,
                        colSpan: 1,
                        title: "App Interface",
                        description: "DashCam AI employs mobile devices to capture videos, subsequently utilizing cloud-based virtual machines and digital image processing functions via OpenCV/YoloV5 for robust image and video analysis. ",
                        tools: [
                            'react',
                            'materialui-plain',
                            'fastapi-plain',
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
                hasStaggeredDelay: true,
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
                colSpan: 4,
                colContent: [
                    {
                        id: 0,
                        colSpan: 1,
                        imageSize: 'img-card-sm',
                        imageUrl: "/assets/images/traffic/loc8001.jpg",
                    },
                    {
                        id: 1,
                        colSpan: 1,
                        imageSize: 'img-card-sm',
                        imageUrl: "/assets/images/traffic/loc8002.jpg",
                    },
                    {
                        id: 2,
                        colSpan: 1,
                        imageSize: 'img-card-sm',
                        imageUrl: "/assets/images/traffic/loc8003.jpg",
                    },
                    {
                        id: 3,
                        colSpan: 1,
                        imageSize: 'img-card-sm',
                        imageUrl: "/assets/images/traffic/loc8004.jpg",
                    },
                    {
                        id: 4,
                        colSpan: 1,
                        imageSize: 'img-card-sm',
                        imageUrl: "/assets/images/traffic/loc8005.jpg",
                    },
                    {
                        id: 5,
                        colSpan: 1,
                        imageSize: 'img-card-sm',
                        imageUrl: "/assets/images/traffic/loc8006.jpg",
                    },
                    {
                        id: 6,
                        colSpan: 1,
                        imageSize: 'img-card-sm',
                        imageUrl: "/assets/images/traffic/loc8007.jpg",
                    },
                    {
                        id: 7,
                        colSpan: 1,
                        imageSize: 'img-card-sm',
                        imageUrl: "/assets/images/traffic/loc8008.jpg",
                    },
                ]
            },
            {
                id: 3,
                title: "Traffic Lights",
                colContent: [
                    {
                        id: 1,
                        colSpan: 1,
                        title: "Download Traffic Camera Data",
                        description: "The data is provided in Geojson format. This data can be added to Google Maps, Mapbox, and Leaflet maps. Geojson supports the following geometry types: ",
                        listItems: [
                            "Point",
                            "LineString",
                            "Polygon",
                            "MultiPoint",
                            "MultiLineString",
                            "MultiPolygon",
                            "GeometryCollection",
                        ],
                        linkButtons: [
                            {
                                id: 0,
                                title: "Traffic Cameras",
                                url: "/assets/data/traffic_cameras.json",
                                icon: "fa-solid fa-download"
                            },
                        ]
                    },
                    {
                        id: 0,
                        colSpan: 2,
                        isCodeJson: true,
                        codeJsonTheme: "vscode",
                        cardHeight: "card-2xl",
                        codeJsonData: TRAFFIC_CAMERAS_EXAMPLE
                    },
                ]
            },
         
        ],
        showImage: true,
        size: SMALL,
        applicationField: REST_API,
        projectCompletion: IN_DEVELOPMENT,
    },
    {
        id: 5,
        title: "Object Identification & Monitoring",
        author: "Alex",
        description: "This project is a Machine Learning / REST API that provides access to a object detection and tracking model. The model is built using YOLOv5 and is deployed using FastAPI. The API is hosted on Google Cloud Platform using Cloud Run and Cloud Storage. The API has been optimized for performance and can process images in under 15ms. The API has also been simplified to make it easy to use.",
        tools: [
            'streamlit-plain-github',
            'python',
            'opencv',
            'tensorflow',
            'fastapi',
            'pytorch',
            'docker'
        ],
        imageUrl: "/assets/images/projects/car_machine_learning.jpg",
        githubUrl: "https://github.com/canaleal/YOLOv5-MachineLearning-API-Simplified",
        optionalContent: [
            {
                id: 0,
                bgColor: 'bg-white',
                hasStaggeredDelay: true,
                colContent: [
                    {
                        id: 0,
                        colSpan: 1,
                        title: 'YoloV5 Model',
                        description: 'YOLOv5 is a state-of-the-art, real-time object detection algorithm. The model is built using PyTorch and is trained on the COCO dataset.',
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
                        description: 'The API is built using FastAPI and Python. The API is hosted on Google Cloud Platform using Cloud Run and Cloud Storage.',
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
                            'googlecloud',
                            'nginx-original',
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
                hasStaggeredDelay: true,
                colContent: [
                    {
                        id: 0,
                        colSpan: 1,
                        isCodeJson: true,
                        codeJsonTheme: "vscode"
                    },
                    {
                        id: 0,
                        colSpan: 1,
                        isCodeJson: true,
                        codeJsonTheme: "mystic"
                    },
                    {
                        id: 0,
                        colSpan: 1,
                        isCodeJson: true,
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
                        imageUrl: "/assets/images/vsc/forest.webp"
                    },
                    {
                        id: 0,
                        colSpan: 1,
                        isCodeJson: true,
                        codeJsonTheme: "forest"
                    },
                    {
                        id: 0,
                        colSpan: 2,
                        imageSize: 'img-card-xl',
                        imageUrl: "/assets/images/vsc/hydroponics.webp"
                    },
                    {
                        id: 0,
                        colSpan: 1,
                        isCodeJson: true,
                        codeJsonTheme: "monokai",
                    },
                    {
                        id: 0,
                        colSpan: 2,
                        imageSize: 'img-card-xl',
                        imageUrl: "/assets/images/vsc/winter_forest.webp",
                    },
                    {
                        id: 0,
                        colSpan: 1,
                        isCodeJson: true,
                        codeJsonTheme: "winter",
                    },
                    {
                        id: 0,
                        colSpan: 2,
                        imageSize: 'img-card-xl',
                        imageUrl: "/assets/images/vsc/city.webp",
                    },
                    {
                        id: 0,
                        colSpan: 1,
                        isCodeJson: true,
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
        githubUrl: 'https://github.com/canaleal/Eden',
        imageUrl: '/assets/images/projects/eden.webp',
        optionalContent: [
            {
                id: 0,
                bgColor: "bg-white",
                title: "Challenge",
                colSpan: 3,
                colContent: [
                    {
                        id: 0,
                        colSpan: 3,
                        noSidePadding: true,
                        hasShadow: false,
                        title: "Inspiration",
                        description: "The design was significantly influenced by the Royal Botanical Garden, drawing from their sophisticated and refined aesthetic. A careful examination of the Garden's exquisite detail and its well-conceived, deliberate design principles served as a powerful impetus for the overall design strategy. The app covers a broad spectrum of design scenarios, including product display and description pages, a smooth navigation system, a dynamic shopping cart, a streamlined checkout process, and an intuitive user account management system. It also features various additional elements like search functionality, product filters, and customer reviews sections.",
                    }
                    
                ]
            },
            {
                id: 3,
                bgColor: "bg-white",
                title: "Data Processing",
                hasStaggeredDelay: true,
                colContent: [
                    {
                        id: 0,
                        colSpan: 1,
                        noSidePadding: true,
                        hasShadow: false,
                        title: "Platforms",
                        listItems: [
                            "Web (Responsive)",
                            "Mobile"
                        ],
                    },
                    {
                        id: 1,
                        colSpan: 1,
                        noSidePadding: true,
                        hasShadow: false,
                        title: "Roles",
                        listItems: [
                            "Product Strategy",
                            "User Research",
                            "UI UX Design",
                            "Interaction Design",
                            "User Testing",
                            "Quality Assurance",
                        ],
                    },
                    {
                        id: 2,
                        colSpan: 1,
                        noSidePadding: true,
                        hasShadow: false,
                        title: "Deliverables",
                        listItems: [
                            "Responsive Web Design",
                            "REST API",
                            "End-to-end Development",
                            "Product Design",
                            "UI/UX Strategy"
                        ],
                    }
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
                        noSidePadding: true,
                        hasShadow: false,
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
    },
];