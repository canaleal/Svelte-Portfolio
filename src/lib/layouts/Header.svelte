<script lang="ts">
	import Card from '$lib/components/card/Card.svelte';
	import NavbarArrow from '$lib/components/ui/NavbarArrow.svelte';
	import Grid from './Grid.svelte';
</script>

<img
	height="auto"
	width="100%"
	loading={'eager'}
	class={`object-cover `}
	src={"https://hips.hearstapps.com/hmg-prod/images/scenic-view-of-mountains-against-sky-during-winter-royalty-free-image-1623254053.jpg"}
	alt={''}
/>

<div class="h-full w-full py-64 absolute top-0 left-0  bg-dark-trans-tb-full ">
	<Grid lgGridColSpan={1}  extraClasses="h-full w-full" isOverflowHidden={false}>
		<Card
			extraClasses="flex flex-col gap-2 w-full hidden-animation hidden-animation-left h-full justify-center "
			hasShadow={false}
			isRounded={false}
		>
		
			<p class="text-header text-white">Alex Canales</p>
			<p class="text-white mt-4">Full Stack Developer</p>
		

			<div class="mr-auto mt-8">
				<NavbarArrow url={'#about'} />
			</div>
		</Card>
	</Grid>
</div>
