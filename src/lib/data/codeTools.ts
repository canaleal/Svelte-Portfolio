import type { ICodeToolType } from "$lib/types/project-types";

export const CODE_TOOLS : ICodeToolType[] = [
    {
        id : 1,
        title: 'Javacript Frameworks',
        description: 'Javascript frameworks and libraries',
        links: [
            {
                title: 'React',
                url: 'https://reactjs.org/',
                icon: 'react'
            },
            {
                title: 'Vue',
                url: 'https://vuejs.org/',
                icon: 'vuejs'
            },
            {
                title: 'Angular',
                url: 'https://angular.io/',
                icon: 'angularjs'
            },
            {
                title: 'Svelte',
                url: 'https://svelte.dev/',
                icon: 'svelte'
            },

            
            {
                title: 'Meteor',
                url: 'https://www.meteor.com/',
                icon: 'meteor'
            },
        
            {
                title: 'Backbone',
                url: 'https://backbonejs.org/',
                icon: 'backbonejs'
            },
            {
                title: 'Elm',
                url: 'https://elm-lang.org/',
                icon: 'elm'
            }
        ]
    },
    {
        id : 2,
        title: 'Static Site Generators',
        description: 'Static site generators',
        links: [
            {
                title: 'Gatsby',
                url: 'https://www.gatsbyjs.com/',
                icon: 'gatsby'
            },
            {
                title: 'Nuxt',
                url: 'https://nuxtjs.org/',
                icon: 'nuxtjs'
            },
            {
                title: 'Hugo',
                url: 'https://gohugo.io/',
                icon: 'hugo'
            },
            {
                title: 'Eleventy',
                url: 'https://www.11ty.dev/',
                icon: 'eleventy'
            },

        ]
    },
    {
        id : 3,
        title: 'API Frameworks',
        description: 'API frameworks and libraries',
        links: [
            {
                title: 'Express',
                url: 'https://expressjs.com/',
                icon: 'express'
            },
            {
                title: 'Nest',
                url: 'https://nestjs.com/',
                icon: 'nestjs-plain'
            },
            {
                title: 'FastAPI',
                url: 'https://fastapi.tiangolo.com/',
                icon: 'fastapi'
            },
            {
                title: 'Flask',
                url: 'https://flask.palletsprojects.com/',
                icon: 'flask'
            },
            {
                title: 'Django',
                url: 'https://www.djangoproject.com/',
                icon: 'django-plain'
            },
            {
                title: 'Laravel',
                url: 'https://laravel.com/',
                icon: 'laravel-plain'
            },
            {
                title: 'Spring',
                url: 'https://spring.io/',
                icon: 'spring'
            },
         
        ]
    

    },
    {
        id : 4,
        title: 'API Frameworks (continued)',
        description: 'API frameworks and libraries',
        links:[
            {
                title: 'ASP.NET',
                url: 'https://dotnet.microsoft.com/apps/aspnet',
                icon: 'dot-net'
            },
            {
                title: 'Ruby on Rails',
                url: 'https://rubyonrails.org/',
                icon: 'rails-plain'
            },
            {
                title: 'Node.js',
                url: 'https://nodejs.org/',
                icon: 'nodejs-plain'
            },
            {
                title: 'GraphQL',
                url: 'https://graphql.org/',
                icon: 'graphql-plain'
            },
        ],


    },
    

    {
        id : 5,
        title: 'CSS Frameworks',
        description: 'CSS frameworks and libraries',
        links: [
            {
                title: 'Tailwind',
                url: 'https://tailwindcss.com/',
                icon: 'tailwindcss-plain',
            },
            {
                title: 'Bootstrap',
                url: 'https://getbootstrap.com/',
                icon: 'bootstrap'
            },
            {
                title: 'Bulma',
                url: 'https://bulma.io/',
                icon: 'bulma-plain'
            },
            {
                title: 'Material UI',
                url: 'https://material-ui.com/',
                icon: 'materialui'
            }
        ]
    },
    {
        id : 6,
        title: 'CSS Preprocessors',
        description: 'CSS preprocessors',
        links: [
            {
                title: 'Sass',
                url: 'https://sass-lang.com/',
                icon: 'sass'
            },
            {
                title: 'Less',
                url: 'https://lesscss.org/',
                icon: 'less-plain-wordmark'
            },
            {
                title: 'Stylus',
                url: 'https://stylus-lang.com/',
                icon: 'stylus'
            }
        ]
    },
    {

        id : 7,
        title: 'Testing Frameworks',
        description: 'Testing frameworks',
        links: [
            {
                title: 'Jest',
                url: 'https://jestjs.io/',
                icon: 'jest-plain'
            },
            {
                title: 'Mocha',
                url: 'https://mochajs.org/',
                icon: 'mocha-plain'
            },
            {
                title: 'Jasmine',
                url: 'https://jasmine.github.io/',
                icon: 'jasmine-plain'
            },
            {
                title: 'Karma',
                url: 'https://karma-runner.github.io/latest/index.html',
                icon: 'karma-plain'
            },

            {
                title: 'Selenium',
                url: 'https://www.selenium.dev/',
                icon: 'selenium'
            }
        ]
    },

    {

        id : 8,
        title: 'Build Tools',
        description: 'Build tools',
        links: [
            {
                title: 'Webpack',
                url: 'https://webpack.js.org/',
                icon: 'webpack-plain'
            },
            {
                title: 'Gulp',
                url: 'https://gulpjs.com/',
                icon: 'gulp-plain'
            },
            {
                title: 'Grunt',
                url: 'https://gruntjs.com/',
                icon: 'grunt-plain'
            },
            {
                title: 'Babel',
                url: 'https://babeljs.io/',
                icon: 'babel-plain'
            },
            {
                title: 'ESLint',
                url: 'https://eslint.org/',
                icon: 'eslint'
            },
            {
                title: 'NPM',
                url: 'https://www.npmjs.com/',
                icon: 'npm-original-wordmark'
            },
            {
                title: 'Yarn',
                url: 'https://yarnpkg.com/',
                icon: 'yarn'
            }
        ]
    },
    {

        id : 9,
        title: 'Databases',
        description: 'Databases',
        links: [
            {
                title: 'MongoDB',
                url: 'https://www.mongodb.com/',
                icon: 'mongodb-plain'
            },
            {
                title: 'MySQL',
                url: 'https://www.mysql.com/',
                icon: 'mysql-plain'
            },
            {
                title: 'PostgreSQL',
                url: 'https://www.postgresql.org/',
                icon: 'postgresql-plain'
            },
            {
                title: 'SQLite',
                url: 'https://www.sqlite.org/index.html',
                icon: 'sqlite'
            },
            {
                title: 'Redis',
                url: 'https://redis.io/',
                icon: 'redis-plain'
            },
            {
                title: 'Oracle',
                url: 'https://www.oracle.com/',
                icon: 'oracle'
            },
            {
                title: 'Microsoft SQL Server',
                url: 'https://www.microsoft.com/en-us/sql-server/sql-server-2019',
                icon: 'microsoftsqlserver-plain'
            }
        ]
    },
    {
        id: 10,
        title: 'Cloud',
        description: 'Cloud',
        links: [
            {
                title: 'AWS',
                url: 'https://aws.amazon.com/',
                icon: 'amazonwebservices'
            },
            {
                title: 'Azure',
                url: 'https://azure.microsoft.com/en-us/',
                icon: 'azure'
            },
            {
                title: 'Google Cloud',
                url: 'https://cloud.google.com/',
                icon: 'googlecloud'
            },
            {
                title: 'Heroku',
                url: 'https://www.heroku.com/',
                icon: 'heroku-plain'
            },
            {
                title: 'Digital Ocean',
                url: 'https://www.digitalocean.com/',
                icon: 'digitalocean-plain'
            },
            {
                title: 'Netlify',
                url: 'https://www.netlify.com/',
              
            },
            {
                title: 'Vercel',
                url: 'https://vercel.com/',
               
            }
        ]
    },
    {
        id: 11,
        title: 'DevOps',
        description: 'DevOps',
        links: [
            {
                title: 'Docker',
                url: 'https://www.docker.com/',
                icon: 'docker-plain'
            },
            {
                title: 'Kubernetes',
                url: 'https://kubernetes.io/',
                icon: 'kubernetes-plain'
            },
            {
                title: 'Jenkins',
                url: 'https://www.jenkins.io/',
                icon: 'jenkins-line'
            }
        ]
    },
    {
        id: 12,
        title: 'Version Control',
        description: 'Version Control',
        links: [
            {
                title: 'Git',
                url: 'https://git-scm.com/',
                icon: 'git-plain'
            },
            {
                title: 'GitHub',
                url: 'https://github.com/',
                icon: 'github'
            },
            {
                title: 'GitLab',
                url: 'https://about.gitlab.com/',
                icon: 'gitlab-plain'
            },
            {
                title: 'Bitbucket',
                url: 'https://bitbucket.org/',
                icon: 'bitbucket'
            }
        ]
    },
    {
        id: 13,
        title: 'CMS',
        description: 'CMS',
        links: [
            {
                title: 'WordPress',
                url: 'https://wordpress.org/',
                icon: 'wordpress-plain'
            },
            {
                title: 'Drupal',
                url: 'https://www.drupal.org/',
                icon: 'drupal-plain'
            },
            {
                title: 'Joomla',
                url: 'https://www.joomla.org/',
           
            },
            {
                title: 'Shopify',
                url: 'https://www.shopify.com/',
               
            },
            {
                title: 'Magento',
                url: 'https://magento.com/',
               
            },
            {
                title: 'OpenCart',
                url: 'https://www.opencart.com/',
             
            },
            {
                title: 'Squarespace',
                url: 'https://www.squarespace.com/',
               
            },

            {
                title: 'Ghost',
                url: 'https://ghost.org/',
              
            }
        ]
    },
    {
        id: 14,
        title: 'UI/UX',
        description: 'UI/UX',
        links: [
            {
                title: 'Figma',
                url: 'https://www.figma.com/',
                icon: 'figma'
            },
            {
                title: 'Adobe Photoshop',
                url: 'https://www.adobe.com/products/photoshop.html',
                icon: 'photoshop-plain'
            },
            {
                title: 'Adobe Illustrator',
                url: 'https://www.adobe.com/products/illustrator.html',
                icon: 'illustrator-plain'
            },
            {
                title: 'Adobe After Effects',
                url: 'https://www.adobe.com/products/aftereffects.html',
                icon: 'aftereffects-plain'
            },
            {
                title: 'Adobe Premiere Pro',
                url: 'https://www.adobe.com/products/premiere.html',
                icon: 'premierepro-plain'
            },
            {
                title: 'Inkscape',
                url: 'https://inkscape.org/',
                icon: 'inkscape-plain'
            }
        ]
    }
  
];


export const TOOL_LINKS = [
    {
        id: 1,
        title: 'Tools',
        description: 'Tools',
        links: [
            {
                title: 'Front End Roadmap',
                url: 'https://roadmap.sh/frontend',
            },
            {
                title: 'Web Skills',
                url: 'https://andreasbm.github.io/web-skills/',
            },
            {
                title: 'Front End Checklist',
                url: 'https://frontendchecklist.io/',
            },
            {
                title: 'Javascript Fundamentals',
                url: 'https://javascript.info/first-steps',
            }
        ],
    },
];