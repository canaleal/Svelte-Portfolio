<script lang="ts">
	const portfolioList = [
		{
			id: 0,
			name: 'Projects and APIs',
			link: '/projects'
		},
		{
			id: 1,
			name: 'Gallery',
			link: '/gallery'
		}
	];

	const applicationToolsList = [
		{
			id: 0,
			name: 'Animista',
			link: 'https://animista.net/play/basic'
		},

		{
			id: 1,
			name: 'Developer Icons',
			link: 'https://devicon.dev/'
		},
		{
			id: 2,
			name: 'Color Designer',
			link: 'https://colordesigner.io/tools'
		},
		{
			id: 3,
			name: 'Font Awesome',
			link: 'https://fontawesome.com/'
		},
		{
			id: 4,
			name: 'Cool Backgrounds',
			link: 'https://coolbackgrounds.io/'
		},
		{
			id: 5,
			name: 'Gradient Generator',
			link: 'https://cssgradient.io/'
		}
	];

	const aboutList = [
		{
			id: 0,
			name: 'Linkedin',
			link: 'https://www.linkedin.com/in/alex-canales'
		},
		{
			id: 1,
			name: 'Github',
			link: 'https://github.com/canaleal'
		},
		{
			id: 2,
			name: 'Bitbucket',
			link: 'https://bitbucket.org/Canaleal/'
		}
	];
</script>
<hr />
<footer class="bg-smoke  py-8 px-8">
	
	<div class="grid grid-cols-1 sm:grid-cols-3 pb-8">
		<div class="col-span-1 py-2">
			<p class="font-bold">Portfolio</p>
			{#each portfolioList as item}
				<div class="my-2">
					<a href={ `${item.link}` } class="text-sm  hover:underline">{item.name}</a>
				</div>
			{/each}
		</div>

		<div class="col-span-1 py-2">
			<p class="font-bold">Portfolio</p>
			{#each applicationToolsList as item}
				<div class="my-2">
					<a href={ `${item.link}` } class="text-sm  hover:underline">{item.name}</a>
				</div>
			{/each}
		</div>
		<div class="col-span-1 py-2">
			<p class="font-bold">Portfolio</p>
			{#each aboutList as item}
				<div class="my-2">
					<a href={ `${item.link}` } class="text-sm  hover:underline">{item.name}</a>
				</div>
			{/each}
		</div>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-3 py-8">
		<div class="col-span-1 py-2">
			<p class="font-bold">Disclaimer</p>
			<p class="font-bold text-xs my-2">© Alex Canales Portfolio. All rights reserved.</p>
			<p class="font-bold text-xs my-2">Website Terms and Policies</p>

			<p class="text-xs my-2">
				If you require any more information or have any questions about our sites disclaimer, please
				feel free to contact me by email at alexcanales766@gmail.com. The Disclaimer was generated
				with the help of the Disclaimer Generator. All the information on this website - Showcase -
				is published in good faith and for general information purpose only.
			</p>
		</div>

		<div class="col-span-1 py-2 " />

		<div class="col-span-1 py-2 ">
			<p class="font-bold">License Terms</p>
			<img
				height={100}
				width={150}
				class="h-16 my-2"
				src="https://www.rbg.ca/app/uploads/RBG_Horizontal_Black_CMYK.svg?x96454"
				data-src="https://www.rbg.ca/app/uploads/RBG_Horizontal_Black_CMYK.svg?x96454"
				loading="lazy"
				alt="RRBG logo_Horizontal_Black_CMYK"
				data-was-processed="true"
			/>
			<p class="text-xs my-2">
				The contents of the Royal Botanical Gardens site are copyrighted and redistribution,
				reproductions, or publication of its contents is prohibited without the express written
				consent of Royal Botanical Gardens.
			</p>
		</div>
	</div>
</footer>
