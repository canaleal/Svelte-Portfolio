
import { ALGORITHMS, COMPLETE, FULL_STACK, IN_DEVELOPMENT, MACHINE_LEARNING, MEDIUM, REST_API, SMALL, TRAFFIC_CAMERAS_EXAMPLE, UI, WEB_MOCK } from '$lib/features/project/constants';
import type { IProjectType } from '$lib/features/project/types/project-types';

export const PROJECTS: IProjectType[] = [
    {
        id: 0,
        title: 'Spatial_Visualization',
        author: 'Alex',
        description: "Lynx City Mapping Dashboard is a map-based web application, providing valuable insights and analysis of road conditions and traffic flow. The application displays Geojson data using Google Maps in an interactive, thoroughly customizable web browser environment, and is powered by vector tiles and WebGL.",
        tools: [
            'svelte-original-github',
            'tailwindcss-plain',
            'nodejs',
            'express',
            'supabase-original-github',
            'redis-plain',
            'docker',
            'googlecloud',
        ],
        imageUrl: '/assets/images/projects/mapping_usars.webp',
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
                id: 3,
                colContent: [
                    {
                        id: 0,
                        colSpan: 3,
                        imageSize: "img-card-8xl",
                        mockup: WEB_MOCK,
                        imageUrl: '/assets/images/projects/mapping_usars_table.webp'
                    }
                ]
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
                id: 3,
                title: "Mockup",
                colContent: [
                    {
                        id: 1,
                        colSpan: 1,
                        title: "Mockup",
                        description: "The Lynx City Mapping Dashboard prototype was a simple, Figma-designed mockup that prioritized foundational features like basic GeoJSON data overlay on Google Maps. While limited in its capabilities, its main goal was to serve as a starting point for user experience (UX) design and testing. User interactions were observed to assess the intuitiveness of the UI, providing invaluable insights for future, more complex iterations of the application.",
                        tools: [
                            'javascript',
                            'figma'
                        ],
                        hasShadow: false,
                        noSidePadding: true,
                    },
                    {
                        id: 1,
                        colSpan: 2,
                        imageSize: "img-card-lg",
                        hasShadow: false,
                        imageUrl: "/assets/images/projects/mapping_usars_mockup.webp",
                    },
           
                    
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
        title: 'ADAS_System',
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
        imageUrl: '/assets/images/projects/mapping_usars_video.mp4',
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
                        imageUrl: "/assets/images/projects/mapping_dashcam.png",
                    },
                    {
                        id: 0,
                        colSpan: 1,
                        imageSize: "img-card-xl",
                        imageUrl: "/assets/images/projects/mapping_dashcam_2.png",
                    },
                  
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

                ],
            },
            {
                id: 3,
                title: "Data Processing",
                colContent: [
                    {

                        id: 1,
                        colSpan: 3,
                        imageSize: "img-card-8xl",
                        title: "Database Schema",
                        scaleOnHover: false,
                        showImageSource: false,
                        noSidePadding: true,
                        hasShadow: false,
                        imageUrl: "/assets/images/projects/adas_database.svg",

                    },
                ],

            },
          
        ],
        size: MEDIUM,
        applicationField: FULL_STACK,
        projectCompletion: COMPLETE,
    },
    {
        id: 6,
        title: "Database_Visualization",
        author: "Alex",
        description: "Web-based database visualization tool transforms SQL queries into dynamic, interactive graphs composed of nodes and edges. The platform aims to make database exploration and management more intuitive by rendering relationships and structures visually, all directly in your web browser. ",
        tools: [
            'react',
            'redux',
            'nodejs',
            'graphql-plain',
            'mongodb',
            'vercel-github'
        ],
        githubUrl: 'https://github.com/canaleal/DB-Visualizer',
        imageUrl: '/assets/images/projects/database.webp',
        showImage: true,
        size: SMALL,
        applicationField: FULL_STACK,
        projectCompletion: IN_DEVELOPMENT,
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
                        description: "Many web-based visualization tools do not allow the import or export of SQL queries. This limitation hampers the seamless transition of work across different platforms or between team members. By not being able to import SQL, users are restricted to building queries from scratch each time they use a new tool or instance. On the other hand, not being able to export SQL queries limits the scope of reproducibility and sharing of data insights. Some tools opt for Markdown or other query languages that are less versatile or expressive than SQL for database interactions. While Markdown is excellent for text formatting and simple data presentations, it lacks the robust capabilities of SQL in dealing with complex database queries, filtering, and manipulations. A tool that can handle SQL is usually more powerful and flexible, allowing for intricate queries that can be transformed into dynamic, interactive visualizations.",
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
                        title: "Current Features",
                        listItems: [
                            "Load SQL Queries",
                            "Visualize SQL Queries",
                            "Save Images and Graphs",
                            "Feature Rich Editor",
                        ],
                    },
                    {
                        id: 1,
                        colSpan: 1,
                        noSidePadding: true,
                        hasShadow: false,
                        title: "Planned Features",
                        listItems: [
                            "Export SQL into other formats",
                            "Display Graph Database Schemas",
                            "Prisma Integration",
                            "Saving and Loading SQL Queries",
                        ],
                    },
                    {
                        id: 2,
                        colSpan: 1,
                        noSidePadding: true,
                        hasShadow: false,
                        title: "Considerations",
                        listItems: [
                            "Login System for storing User Data",
                            "LLM (Language Language Model) for SQL Interpretation",
                            "Enhanced Graph Visualization",
                            "Collaborative Editing and Sharing"

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
                        imageUrl: "/assets/images/projects/database.webp",
                    },

                ],
            },

        ]




    },
    {
        id: 2,
        title: "Traffic_Surveillance",
        author: "Alex",
        description: "This is a REST API that provides access to Toronto's traffic cameras. The API is built using NodeJS, Express, and Typescript. The application is currently in development for new additions (Traffic Cameras, Speed Cameras, Highway Cameras, and Traffic Sensors).",
        tools: [
            'nodejs',
            'express',
            'supabase-original-github',
            'docker',
            'googlecloud',
        ],
        githubUrl: 'https://github.com/canaleal/NODE-Traffic-Camera-API',
        imageUrl: '/assets/images/projects/mapping_toronto.webp',
        optionalContent: [


            {
                id: 0,
                title: "Sample",
                hasStaggeredDelay: true,
                bgColor: 'bg-white',
                colContent: [
                    {
                        id: 0,
                        colSpan: 1,
                        noSidePadding: true,
                        hasShadow: false,
                        title: "Live Data",
                        description: "The Traffic Camera dataset contains the location and number for every Traffic camera in the City of Toronto. These datasets will be updated within 2 minutes when cameras are updated. ",
                        linkButtons: [
                            {
                                id: 0,
                                title: "Camera 1",
                                url: 'http://opendata.toronto.ca/transportation/tmc/rescucameraimages/CameraImages/loc8006.jpg'
                            },
                            {
                                id: 1,
                                title: 'Camera 2',
                                url: "http://opendata.toronto.ca/transportation/tmc/rescucameraimages/CameraImages/loc8004.jpg"
                            }
                        ]
                    },
                    {
                        id: 0,
                        colSpan: 1,
                        title: "Open Data Portal",
                        noSidePadding: true,
                        hasShadow: false,
                        description: "The City of Torontos Open Data Portal is an open source delivery tool to bring people and data together. The portal provides access to the Citys datasets for anyone to view and use.",

                    },
                    {
                        id: 2,
                        colSpan: 1,
                        title: "Historical Data",
                        noSidePadding: true,
                        hasShadow: false,
                        description: "The Traffic Camera dataset contains the location and number for every Traffic camera in the City of Toronto. Data is updated and archived every 2 minutes in a PostgreSQL database. ",

                    },
                ]
            },

            {
                id: 1,
                bgColor: "bg-smoke",
                title: "Images",
                colSpan: 3,
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
                    {
                        id: 8,
                        colSpan: 1,
                        imageSize: 'img-card-sm',
                        imageUrl: "/assets/images/traffic/loc8009.jpg",
                    },
                ]
            },
            {
                id: 3,
                title: "Traffic Lights",
                bgColor: "bg-white",
                colContent: [
                    {
                        id: 1,
                        colSpan: 1,
                        hasShadow: false,
                        noSidePadding: true,
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
                        codeJsonTheme: "winter",
                        cardHeight: "card-xl",
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
        title: "Object_Identification",
        author: "Alex",
        description: "This project is a Machine Learning / REST API that provides access to a object detection and tracking model. The model is built using YOLOv5 and is deployed using FastAPI. The API is hosted on Google Cloud Platform using Cloud Run and Cloud Storage. The API has been optimized for performance and can process images in under 15ms. The API has also been simplified to make it easy to use.",
        tools: [
            'streamlit-plain-github',
            'fastapi',
            'opencv',
            'tensorflow',
            'pytorch',
            'docker',
            'amazonwebservices'
        ],
        imageUrl: "/assets/images/projects/car_machine_learning_video.mp4",
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
                        hasShadow: false,
                        noSidePadding: true,
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
                        hasShadow: false,
                        noSidePadding: true,
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
                        hasShadow: false,
                        noSidePadding: true,
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
    // {
    //     id: 8,
    //     author: "Alex",
    //     title: "Quantum Rift",
    //     description: "In Quantum Rift, you control a customizable spaceship equipped not just with lasers and shields, but also with build modules. Navigate through treacherous asteroid fields, dodging or destroying the space rocks that come your way. But that's just scratching the surface.",
    //     imageUrl: "/assets/images/projects/atmos_planet.webp",
    //     tools: ['csharp', 'unity', 'blender', 'photoshop-plain'],
    //     showImage: true,
    //     size: SMALL,
    //     applicationField: FULL_STACK,
    //     projectCompletion: IN_DEVELOPMENT,
    //     optionalContent: [
    //         {
    //             id: 0,
    //             bgColor: "bg-white",
    //             title: "Challenge",
    //             colSpan: 3,
    //             colContent: [
    //                 {
    //                     id: 0,
    //                     colSpan: 3,
    //                     noSidePadding: true,
    //                     hasShadow: false,
    //                     title: "The Challenge",
    //                     description: "Creating this game mockup, inspired by 'Geometry Wars,' presented a series of unique challenges, especially since it was one of my earliest software projects. From a game design standpoint, emulating the frenetic energy and geometric elements was no small feat. Implementing core gameplay mechanics that captured the essence of the classic game while introducing novel elements stretched my understanding of JavaScript and game design principles. UI/UX also posed difficulties. I had to strike a balance between a user interface that was both intuitive and true to the retro feel of arcade gaming. Adding art elements, with limited experience, meant I had to learn the basics of game aesthetics on the fly. The project was a crash course in software development, design thinking, and creative problem-solving. Despite the challenges, it provided valuable insights into the complexities of building a game, from code to visual elements."
    // }

    //             ]
    //         },
    //         {
    //             id: 3,
    //             bgColor: "bg-dark",
    //             title: "Data Processing",
    //             hasStaggeredDelay: true,
    //             colContent: [
    //                 {
    //                     id: 0,
    //                     colSpan: 1,
    //                     noSidePadding: true,
    //                     hasShadow: false,
    //                     title: "Current Features",
    //                     listItems: [
    //                         "Ship Customization",
    //                         "Resource Management",
    //                         "Dynamic Environments",
    //                         "Enemies and Bosses",
    //                         "Small, Action-Packed Levels"
    //                     ],
    //                 },
    //                 {
    //                     id: 1,
    //                     colSpan: 1,
    //                     noSidePadding: true,
    //                     hasShadow: false,
    //                     title: "Planned Features",
    //                     listItems: [

    //                         "Planet Exploration",
    //                         "Story Campaign",
    //                         "Trade System",
    //                         "Faction Alliances",
    //                         "Music"
    //                     ],
    //                 },
    //                 {
    //                     id: 2,
    //                     colSpan: 1,
    //                     noSidePadding: true,
    //                     hasShadow: false,
    //                     title: "Considerations",
    //                     listItems: [
    //                         "Player Profiles and Account Management",
    //                         "Advanced AI Behaviors",
    //                         "Expanding Universe with Randomly Generated Systems",


    //                         "In-Game Economy and Market",
    //                         "Crafting System"
    //                     ],
    //                 }
    //             ]

    //         },
    //         {
    //             id: 1,
    //             bgColor: "bg-white",
    //             title: "Images",
    //             colSpan: 4,
    //             colContent: [
    //                 {
    //                     id: 0,
    //                     colSpan: 3,
    //                     imageSize: 'img-card-8xl',
    //                     hasShadow: false,
    //                     imageUrl: "/assets/images/adas/ships.png",
    //                 },

    //             ]
    //         },
    //         {
    //             id: 2,
    //             title: "Data Processing",
    //             bgColor: "bg-white",
    //             colContent: [
    //                 {
    //                     id: 1,
    //                     colSpan: 3,
    //                     imageSize: "img-card-8xl",
    //                     hasShadow: false,
    //                     imageUrl: "/assets/images/adas/planet-1.png",
    //                 },
    //             ],
    //         },
    //         {
    //             id: 3,
    //             title: "Mockup",
    //             colContent: [
    //                 {
    //                     id: 1,
    //                     colSpan: 1,
    //                     title: "2018 Mockup",
    //                     description: "Created in 2018, this JavaScript mockup drew its inspiration from the retro Xbox arcade classic, 'Geometry Wars.' Although it was a rudimentary prototype, it effectively captured the frenetic energy and geometric challenges that made 'Geometry Wars' an enduring fan favorite. Simple in execution but rich in concept, the mockup serves as a nostalgic nod to the golden age of arcade gaming. ",
    //                     tools: [
    //                         'javascript',
    //                         'figma'
    //                     ]
    //                 },
    //                 {
    //                     id: 1,
    //                     colSpan: 1,
    //                     imageSize: "img-card-lg",
    //                     hasShadow: false,
    //                     imageUrl: "/assets/images/adas/mockup.png",
    //                 },
    //                 {
    //                     id: 1,
    //                     colSpan: 1,
    //                     imageSize: "img-card-lg",
    //                     hasShadow: false,
    //                     imageUrl: "/assets/images/adas/mockup-2.png",  
    //                 }
    //             ]
    //         }
    //     ]
    // }

];