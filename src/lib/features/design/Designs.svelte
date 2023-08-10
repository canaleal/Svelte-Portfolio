<script>
	import Card from '$lib/components/card/Card.svelte';
	import LaptopMock from '$lib/components/device/LaptopMock.svelte';
	import PhoneMock from '$lib/components/device/PhoneMock.svelte';
	import Underline from '$lib/components/ui/Underline.svelte';
	import Grid from '$lib/layouts/Grid.svelte';
	import Image from '$lib/components/ui/Image.svelte';
</script>

<Grid lgGridColSpan={2} isOverflowHidden={false}>
	<div class="col-span-1   hidden-animation hidden-animation-left">
		<LaptopMock>
			<Image
				imageSize="img-card-4xl img-card-animateSaturation "
				isRounded={false}
				imageUrl="/assets/images/vsc/hydroponics.webp"
				scaleOnHover={false}
			/>
		</LaptopMock>
	</div>

	<Card extraClasses="justify-center" hasShadow={false}>
		<p class="text-title mb-8">System Design</p>

		<p>
			Adipisicing quis minim aliquip dolore veniam esse velit elit excepteur quis amet id. Eiusmod
			anim qui est commodo eu aute cillum deserunt occaecat ea ea ad. Magna ea est excepteur eiusmod
			nostrud ex ut elit. Cillum consequat nulla non adipisicing irure Lorem non deserunt commodo
			eiusmod mollit ex fugiat dolor. Veniam exercitation labore qui laboris aute incididunt anim
			nostrud dolore eu nisi occaecat. Voluptate enim amet in laboris proident eu enim laborum elit
			ipsum aute quis. Officia dolor aliqua laborum deserunt sunt Lorem excepteur dolor dolore.
		</p>
	</Card>

	<Card extraClasses="justify-center" hasShadow={false}>
		<p class="text-title mb-8">Mobile Applications</p>

		<p>
			Adipisicing quis minim aliquip dolore veniam esse velit elit excepteur quis amet id. Eiusmod
			anim qui est commodo eu aute cillum deserunt occaecat ea ea ad. Magna ea est excepteur eiusmod
			nostrud ex ut elit. Cillum consequat nulla non adipisicing irure Lorem non deserunt commodo
			eiusmod mollit ex fugiat dolor. Veniam exercitation labore qui laboris aute incididunt anim
			nostrud dolore eu nisi occaecat. Voluptate enim amet in laboris proident eu enim laborum elit
			ipsum aute quis. Officia dolor aliqua laborum deserunt sunt Lorem excepteur dolor dolore.
		</p>
	</Card>

	<div class="col-span-1   hidden-animation hidden-animation-right">
		<PhoneMock>
			<Image
				imageSize="img-card-4xl img-card-animateSaturation "
				isRounded={false}
				imageUrl="/assets/images/vsc/forest.webp"
				scaleOnHover={false}
			/>
		</PhoneMock>
	</div>
</Grid>
