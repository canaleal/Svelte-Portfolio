import type { IExperience } from '../types'

export const EXPERIENCE: IExperience[] = [
  {
    link: 'https://www.geotab.com/',
    company: 'Geotab',
    position: 'Full Stack Software Developer ',
    description:
      'Our team maintained MyGeotab, a comprehensive fleet management solution, and successfully updated it to React for improved performance and usability. We also built an LLM extension that is now used by 2,000 employees, enhancing productivity and operations.',
    startDate: 'Dec 2022',
    endDate: 'Present',
    technologies: ['React', 'NextJS', 'Nodejs', 'Gitlab', 'dotnetcore', 'Azure', 'Docker', 'Googlecloud']
  },
  {
    link: 'https://www.sheridancollege.ca/research/centres/applied-ai',
    company: 'CAAI',
    position: 'Software Developer and Data Analyst ',
    description:
      'Created a 3D mapping interface to manage dashcam data, handling 600K+ telematics records. Utilized Google Cloud BigQuery and Cloud Storage, optimized content delivery with Cloudflare, and managed storage and processing with AWS S3 and EC2.',
    startDate: 'Jan 2022',
    endDate: 'Dec 2022',
    technologies: ['Svelte', 'Nodejs', 'Supabase', 'Redis', 'Cloudflare', 'Amazonwebservices']
  },
  {
    link: 'https://www.td.com/',
    company: 'TD Bank',
    position: 'Full Stack Software Engineer',
    description:
      'Performed unit and end-to-end testing using Jest and Cypressio. Updated ticketing search system with AngularJS, Spring, Java, and Jenkins for 100+ users. Refactored reusable Angular components across 30+ projects.',
    startDate: 'Apr 2022',
    endDate: 'Aug 2022',
    technologies: ['Jest', 'Cypressio', 'AngularJS', 'Spring', 'Java', 'Jenkins']
  },
  {
    link: 'https://www.naryant.com/',
    company: 'Naryant',
    position: 'Software Engineer and Machine Learning ',
    description:
      'Handled 200K+ patient data rows, reduced processing time to 20min using Python, FastAPI. Achieved 89% F1-Score in Bone Density T-Score prediction with Scikitlearn and Tableau.',
    startDate: 'Jan 2021',
    endDate: 'Feb 2022',
    technologies: ['Python', 'FastAPI', 'Scikitlearn', 'Docker', 'AWS']
  }
]
