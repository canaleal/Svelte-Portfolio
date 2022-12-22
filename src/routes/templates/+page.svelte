<script lang="ts">
	import AttentionBar from '../../widgets/AttentionBar.svelte';
	import SectionHeader from '../../widgets/SectionHeader.svelte';
	import { applicationField, applicationFieldFontIcon } from '../../types/project-types';

	import { CODE_TOOLS } from '../../data/codeTools';
	import CodeToolCard from '../../widgets/CodeToolCard.svelte';

	const FULLSTACK_PROJECT_IDEAS = [
        {
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
			title: 'Web Scraping Tool with GUI',

			description:
				'Create a web scraping tool that allows users to scrape data from websites. The data collected should be stored in a database. Later, this data can be used to create an API for testing purposes.',

			recommendations: ['Streamlit', 'Selenium', 'BeautifulSoup', 'PostgreSQL', 'Firebase or Supabase for Database'],
            consider: ['How is the back end project layed Out', 'How fast is the web scraper', 'How is date stored in database', 'If images are scraped, how are they stored in database'],

			applicationFieldList: [
				applicationField.algorithms,
				applicationField.api,
				applicationField.database
			],
			imageUrl: 'https://i.pinimg.com/736x/2b/41/a1/2b41a1a638bfb8f745f6bb80b2d27ff0.jpg',
            exampleUrl: 'https://www.streamlit.io/',
            difficulty: 'Medium'
		},
        {
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
            title: 'Nasa Space Apps Challenge',
            description : 'Use the Nasa API to create a web application that allows users to search for space related data. This could be done by creating a web application that allows users to search for space related data, and then visualizes them using charts',
            recommendations: ['Nasa API', 'Next or React', 'Chart.js, D3.js, or AmCharts', 'Firebase or Supabase for Database'],
            consider: ['How is the front end project layed Out', 'Number of calls to the Nasa API', 'How is Data Stored', 'Is the UI clean, response and easy to use', 'How is the data visualized'],
            applicationFieldList: [applicationField.web, applicationField.api, applicationField.database],
            imageUrl: 'https://www.nasa.gov/sites/default/files/thumbnails/image/jsc2020e000649.jpg',
            exampleUrl: 'https://api.nasa.gov/',
            difficulty: 'Medium'
        },
        {
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
</script>

<section>
	<SectionHeader title="Project Tools" color="bg-teal" />
	<AttentionBar
		message="This page contains a selection of tools used to create full-stack web applications. Click on the icons to visit the tool's website."
	/>

	<div id="codeTools" class="grid  grid-cols-1 md:grid-cols-6 gap-4 py-8 px-4">
		{#each CODE_TOOLS as codeTool}
			<CodeToolCard {codeTool} />
		{/each}
	</div>

	<SectionHeader title="Project Ideas" color="bg-teal" />
	<AttentionBar
		message="This page contains a selection of project ideas. Most side projects are quite boring, so I've tried to make these ideas as interesting as possible. Note, I've made a few of these projects myself."
	/>

	<div id="projectIdeas" class="grid  grid-cols-1 md:grid-cols-4 gap-4 py-8 px-4">
		{#each FULLSTACK_PROJECT_IDEAS as projectIdea}
			<div class="card col-span-1 shadow-xl flex flex-col ">
				<img
					height="100"
					width="auto"
					src={`${projectIdea.imageUrl}`}
					alt={`${projectIdea.title}`}
					class="img-card img-card-lg"
					loading="lazy"
				/>

				<div class="bg-teal py-5 text-center text-white sticky top-0">
					<h1 class="text-xl  ">{projectIdea.title}</h1>
				</div>

				<div class="p-4 h-fit">
					<p class="my-2 ">{projectIdea.description}</p>
                    <hr class="my-4" />
                    <p class="text-lg font-bold">Considerations</p>
                    <ul>
                        {#each projectIdea.consider as consideration}
                            <li class="my-2 ">{consideration}</li>
                        {/each}
                    </ul>

					<hr class="my-4" />
					<p class="text-lg font-bold">Recommendations</p>
					<ul>
						{#each projectIdea.recommendations as recommendation}
							<li class="my-2 ">{recommendation}</li>
						{/each}
					</ul>

                    <hr class="my-4" />
					<p class="text-lg font-bold">Difficulty</p>
                    <p>{projectIdea.difficulty}</p>

                    {#if projectIdea.exampleUrl}
                        <a
                            href={projectIdea.exampleUrl}
                            target={projectIdea.exampleUrl.includes('http') ? '_blank' : ''}
                            rel="noreferrer"
                            class="card-btn  my-4 rounded-lg">Example</a
                        >
                    {/if}
				</div>

				<div class="bg-smoke rounded-b-lg  p-4 text-center text-white mt-auto">
					<div class="flex flex-wrap">
						{#each projectIdea.applicationFieldList as icon}
							<i
								class="{applicationFieldFontIcon[icon]} text-black w-8 mx-2 py-2 fa-2x"
								title={icon}
							/>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
