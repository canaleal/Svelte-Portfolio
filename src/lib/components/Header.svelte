<script lang="ts">
	import NavbarArrow from '$lib/widgets/NavbarArrow.svelte';
	import About from '$lib/components/About.svelte';
	let launch = false;

	function launchSatellite() {
		launch = true;
		setTimeout(() => {
			launch = false;
		}, 10000); // the same duration as your animation
	}
</script>

<section class="bg-dark flex flex-col lg:flex-row   h-screen overflow-hidden ">
	<div class="flex-2 solar-system ">
		<div class="sun" />
		<div class="orbit mercury">
			<div class="planet" />
		</div>
		<div class="orbit venus">
			<div class="planet" />
		</div>
		<div class="orbit earth">
			<div class="planet">
				<div class="orbit moon">
					<div class="planet" />
				</div>
			</div>
			<div class={launch ? 'satellite satellite-launched' : 'satellite'} />
		</div>
		<div class="orbit mars">
			<div class="planet" />

			<div class="orbit jupiter">
				<div class="planet" />
			</div>
			<div class="orbit saturn">
				<div class="planet" />
			</div>
		</div>
		<div class="orbit uranus">
			<div class="planet" />
		</div>
		<div class="orbit neptune">
			<div class="planet" />
		</div>
	</div>

	<div class="flex-1 flex flex-col px-8 py-8 justify-between text-white">
		<div class="flex flex-col slide-in-top">
			<About />

			<button
				id="launchButton"
				class="card-btn card-btn-blue slide-in-right-slow mt-12"
				on:click={launchSatellite}>Launch Satellite</button
			>
		</div>

		<div class="flex justify-center">
			<NavbarArrow url={'#projects'} text="Projects" />
		</div>
	</div>
</section>