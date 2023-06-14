
<script lang="ts">
	let launch = false;

	const launchSatellite = () => {
		launch = true;
		setTimeout(() => {
			launch = false;
		}, 10000);
	}
</script>

<div class="solar-system ">
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
    </div>

    <div class="orbit asteroid-belt asteroid-belt-sm"/>

    <div class="orbit jupiter">
        <div class="planet" />
    </div>
    <div class="orbit saturn">
        <div class="planet" />
    </div>

    <div class="orbit uranus">
        <div class="planet" />
    </div>
    <div class="orbit neptune">
        <div class="planet" />
    </div>

    <div class="orbit asteroid-belt asteroid-belt-lg"/>

    <div class="flex px-8">
        <button
            id="launchButton"
            class="btn btn-primary slide-in-right-slow mt-12"
            on:click={launchSatellite}>Launch Satellite</button
        >
    </div>
</div>