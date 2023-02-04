
import type { projectIdeaType, projectType } from '../types/project-types';
import { applicationField, projectSize } from '../types/project-types';
export const PROJECTS: projectType[] = [{
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
    optionalImageUrls: [
        '/assets/images/projects/car_machinelearning.webp',
        'https://deci.ai/wp-content/uploads/2021/04/shutterstock_1062059720-2.jpg',

    ],
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
    optionalImageUrls: [
        '/assets/images/projects/mapping_mountains.webp',
        'https://assets.website-files.com/5e832e12eb7ca02ee9064d42/5f7db57af8fb5265fc92b03a_Group%20801.jpg',
    ],
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
    githubUrl: 'https://github.com/DashboardCameraCapstoneTeam/EXPO-Advanced-Mobile-Dashcam',
    exampleUrl: 'https://youtu.be/yblBREk6aRw',
    imageUrl: 'https://media0.giphy.com/media/d2bZ1XB4ZVFSKMLjpd/giphy.gif?cid=ecf05e47msh7rwxwpeif4onzullmuqwrsl44ubnjr7j7k6df&rid=giphy.gif&ct=g',
    optionalImageUrls: [
        '/assets/images/projects/car_dashboard.webp',
        '/assets/images/projects/car_mobile_app.webp',

    ],
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
    optionalImageUrls: [

    ],
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
    optionalImageUrls: [
        '/assets/images/projects/modding_halo_odst.webp',
    ],
    size: projectSize.large,
    applicationField: applicationField.game,
    inDevelopment: false,
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
//     inDevelopment: false,    // },
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
    optionalImageUrls: [
        'https://avatars.githubusercontent.com/u/49886351?s=400&u=c0db03d5386b4a4bee4d44f75489d7805a00af8c&v=4',
    ],
    size: projectSize.small,
    applicationField: applicationField.web,
    inDevelopment: true,
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
    title: 'Image Upscaler',
    author: 'Alex',
    description: 'Image upscaling is the process of increasing the resolution of an image. This project is currently in development. Implementation of the paper "Deep Learning for Single Image Super-Resolution: A Brief Review"',
    tools: [
        'python',
        'pytest',
        'selenium',
        'docker',
        'github',
    ],
    githubUrl: null,
    exampleUrl: 'https://arxiv.org/pdf/1808.03344.pdf',
    imageUrl: 'https://i.pinimg.com/564x/2d/04/64/2d04641c262958f97e690b3b4a05e30b.jpg ',
    optionalImageUrls: [
        '/assets/images/projects/upscale_clouds.jpg',
        '/assets/images/projects/upscale_waterfall.jpg',
        'https://avatars.githubusercontent.com/u/49886351?s=400&u=c0db03d5386b4a4bee4d44f75489d7805a00af8c&v=4',
    ],
    size: projectSize.small,
    applicationField: applicationField.algorithms,
    inDevelopment: true,
},
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
        'github',
        'nodejs',
        'express',
        'postgresql',
        'svelte-plain',
    ],
    githubUrl: 'https://github.com/canaleal/ImageWebScrapper',
    exampleUrl: null,
    imageUrl: ' https://media.tenor.com/8fCoAFhaseUAAAAd/aesthetic-anime.gif',
    optionalImageUrls: [
        'https://s.yimg.com/ny/api/res/1.2/imuRzahr1VIqluox7WZP7Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/entertainment_weekly_785/d648e85668b2b4651c95069acf992f16',
        'https://images.squarespace-cdn.com/content/v1/5a90557e1137a6fdeeb6bb3e/1592826840025-480VRTRITOXKWGI2OQ3V/sWbKISN.jpg',
        'https://lh6.googleusercontent.com/-1HL8ZlpzzAs/Ukjcg2VKB4I/AAAAAAAAab8/URNZ6g4rcrY/s800/dBVdpr2.jpg',
        'https://turnafeezy.files.wordpress.com/2018/11/egturn-a_gundam_bd_351080p_10bitbf3b73f2-mkv_snapshot_21-48_2017-01-22_13-42-13.jpg'
    ],
    size: projectSize.small,
    applicationField: applicationField.api,
    inDevelopment: true,
}
];
export const FULLSTACK_PROJECT_IDEAS: projectIdeaType[] = [
    {
        id: 1,
        title: 'Tesla/Netflix/Amazon Clone with Stripe',
        description: 'Create a clone of Tesla, Netflix, or Amazon. This could be done by creating a web application that allows users to search for real estate properties. This could be done by creating a web application that allows users to search for properties, and then visualizes them on a map.',
        consider: ['How is the front end project layed Out', 'Number of calls to the IMDb API or how much fake Mokaroo data', 'How is Data Stored', 'Is the UI clean, response and easy to use'],
        recommendations: ['Next, React, or Svelte', 'Firebase or Supabase for Database', 'Stripe for payments', 'TMDb API', 'Mokaroo to create fake data'],
        applicationFieldList: [applicationField.web, applicationField.api, applicationField.database],
        imageUrl: 'https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png',
        exampleUrl: 'https://www.tesla.com/',
        difficulty: 'Hard'
    },
    {
        id: 2,
        title: 'Real Estate Platform with Map',
        description:
            'Create a web application that allows users to search for real estate properties. This could be done by creating a web application that allows users to search for properties, and then visualizes them on a map.',
        recommendations: ['Zillow API', 'Google Maps API or Mapbox', 'Next or React', 'Chart.js, D3.js, or AmCharts', 'Firebase or Supabase for Database'],
        consider: ['How is the front end project layed Out', 'Number of calls to Zillow API and Google Maps API', 'How to store data in database', 'Is the UI clean, response and easy to use'],
        applicationFieldList: [applicationField.web, applicationField.api, applicationField.database, applicationField.visualization, applicationField.map],
        imageUrl: 'https://ammultimedia.ca/wp-content/uploads/2021/03/real-estate-multimedia.gif',
        exampleUrl: 'https://www.zillow.com/',
        difficulty: 'Hard'
    },
    {
        id: 3,
        title: 'Web Scraping Tool with GUI', description:
            'Create a web scraping tool that allows users to scrape data from websites. The data collected should be stored in a database. Later, this data can be used to create an API for testing purposes.', recommendations: ['Streamlit', 'Selenium', 'BeautifulSoup', 'PostgreSQL', 'Firebase or Supabase for Database'],
        consider: ['How is the back end project layed Out', 'How fast is the web scraper', 'How is date stored in database', 'If images are scraped, how are they stored in database'], applicationFieldList: [
            applicationField.algorithms,
            applicationField.api,
            applicationField.database
        ],
        imageUrl: 'https://i.pinimg.com/736x/2b/41/a1/2b41a1a638bfb8f745f6bb80b2d27ff0.jpg',
        exampleUrl: 'https://www.streamlit.io/',
        difficulty: 'Medium'
    },
    {
        id: 4,
        title: 'Portfolio Website',
        description: 'Create a portfolio website that showcases your projects. Show off your skills by creating a portfolio website that showcases your projects.',
        recommendations: ['Next, React, Svelte, Angular, Vue', 'Firebase or Supabase for Database', 'Vercel or Netlify for hosting', 'Tailwind CSS or Bootstrap', 'Jest and Selenium for testing', 'Devicon for icons'],
        consider: ['How is the front end project layed Out', 'How is Data Stored', 'Is the UI clean, response and easy to use'],
        applicationFieldList: [applicationField.web, applicationField.api, applicationField.database],
        imageUrl: 'https://i.pinimg.com/originals/ac/6c/71/ac6c71785e81cb6a85629490142d505f.png',
        exampleUrl: 'https://bruno-simon.com/',
        difficulty: 'Medium'
    },

    {
        id: 6,
        title: 'Nasa Space Apps Challenge',
        description: 'Use the Nasa API to create a web application that allows users to search for space related data. This could be done by creating a web application that allows users to search for space related data, and then visualizes them using charts',
        recommendations: ['Nasa API', 'Next or React', 'Chart.js, D3.js, or AmCharts', 'Firebase or Supabase for Database'],
        consider: ['How is the front end project layed Out', 'Number of calls to the Nasa API', 'How is Data Stored', 'Is the UI clean, response and easy to use', 'How is the data visualized'],
        applicationFieldList: [applicationField.web, applicationField.api, applicationField.database],
        imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/jsc2020e000649.jpg',
        exampleUrl: 'https://api.nasa.gov/',
        difficulty: 'Medium'
    },
    {
        id: 7,
        title: 'Financial Data Visualization',
        description: 'Download your banking data into csv and load it into pandas, then use a data visualization library to create a dashboard that allows users to visualize their financial data.',
        recommendations: ['Pandas', 'Matplotlib', 'Seaborn', 'Plotly', 'Dash'],
        consider: ['How large is the dataset', 'How many different types of charts are needed', 'How is the data visualized', 'How is the python code organized', 'Are you making use of virtual environments'],
        applicationFieldList: [applicationField.algorithms, applicationField.api, applicationField.visualization],
        imageUrl: 'https://i.pinimg.com/736x/e8/74/0a/e8740a5d6d703e3231f59a00a4ca9479.jpg',
        exampleUrl: 'https://plotly.com/',
        difficulty: 'Medium'
    },
    {
        id: 8,
        title: 'Hand Gesture Recognition to Audio or Text',
        description: 'Use OpenCV to create a program that recognizes hand gestures and converts them to audio or text. Use a webcam to capture hand gestures and use OpenCV to recognize them. Then convert the hand gestures to audio or text using a text to speech library.',
        recommendations: ['OpenCV', 'Tensorflow', 'Keras', 'PyTorch'],
        consider: ['What type of gestures are you trying to recognize', 'How many different gestures are there', 'How is the data collected', 'How is the data stored'],
        applicationFieldList: [applicationField.algorithms, applicationField.machineLearning, applicationField.visualization],
        imageUrl: 'https://research2reality.com/wp-content/uploads/2020/10/Back-of-your-hand-feature.jpg',
        exampleUrl: 'https://www.tensorflow.org/',
        difficulty: 'Medium'
    },
    {
        id: 9,
        title: 'Deviant Art Web Clone with API',
        description: 'Deviant Art is a website where artists can upload their artwork and share it with the world. Create a web clone of Deviant Art that fetches data from the Deviant Art API. The web clone should allow users to search for artists and their artwork. Some of the art is NSFW, so be careful. Use tags to filter out NSFW art or implement an NSFW machine learning model.',
        recommendations: ['Deviant Art API', 'Svelte, Next, Angular, or React', 'Firebase, Rails, Azure SQL or Supabase for Database', 'Vercel or Netlify for hosting'],
        consider: ['How is the front end project layed Out', 'How is content fetched from the Deviant Art API', 'How is data filtered', 'How clean is the UI'],
        applicationFieldList: [applicationField.web, applicationField.api, applicationField.database],
        imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/9757d496-239b-46c5-baea-6873cbfe9b3d/ddltwlt-1775ac31-5b13-408d-b257-9cd728113a5b.jpg',
        exampleUrl: 'https://www.deviantart.com/',
        difficulty: 'Hard'
    },
    {
        id: 10,
        title: 'Selenium Web Driver Test Automation',
        description: 'Create a program that uses Selenium Web Driver to automatically test a website. Use the Selenium Web Driver extension and begin creating test cases for a website. The test cases should test the functionality of the website. The test cases should be written in a way that they can be easily reused.',
        recommendations: ['Selenium Web Driver', 'Jest', 'Mocha', 'Chai', 'Cypress'],
        consider: ['How many test cases are there', 'How many different browsers are being tested', 'How is the test data generated', 'How is the test data stored'],
        applicationFieldList: [applicationField.algorithms, applicationField.api, applicationField.visualization],
        imageUrl: 'https://images.squarespace-cdn.com/content/v1/5c19c13a96e76f71c4163174/1545534426193-5NE0MQ84QJJG3ZF9TB3O/Amazon2.jpg?format=2500w',
        exampleUrl: 'https://www.selenium.dev/',
        difficulty: 'Easy'
    }
];

