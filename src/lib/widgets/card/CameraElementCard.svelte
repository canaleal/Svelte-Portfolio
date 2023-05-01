<script lang="ts">
	import { COLORS } from '$lib/constants';
	import type { ITrafficCamera } from '$lib/types/traffic-camera-types';
	import Image from '../Image.svelte';
	export let trafficCamera: ITrafficCamera;
</script>

<div class="{COLORS[((trafficCamera.id - 1) % 10) + 1]}  py-5 text-center text-white sticky top-0">
	<h1 class="text-xl  ">{trafficCamera.main_road}</h1>
</div>

<a href={trafficCamera.image_url}  rel="noreferrer">
<Image imageUrl={trafficCamera.image_url} imageSize={"img-card-md"} />
</a>

<div class="bg-dark  p-4 text-white">
    <p class="font-bold">GPS Type:</p>
    <p>{trafficCamera.gps_type}</p>
</div>





