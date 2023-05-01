<script lang="ts">
	import { COLORS } from '$lib/constants';
	import type { ITrafficCamera } from '$lib/types/traffic-camera-types';
	import Image from '../Image.svelte';
	export let trafficCamera: ITrafficCamera;
</script>


<a href={trafficCamera.image_url} target="_blank" rel="noreferrer">
    <Image imageUrl={trafficCamera.image_url} imageSize={"img-card-md"} />
</a>

<div class="flex flex-row">
    <a href={trafficCamera.image_url_north} target="_blank" rel="noreferrer">
        <Image imageUrl={trafficCamera.image_url_north} imageSize={"img-card-sm"} />
    </a>
    
    
    <a href={trafficCamera.image_url_south} target="_blank" rel="noreferrer">
        <Image imageUrl={trafficCamera.image_url_south} imageSize={"img-card-sm"} />
    </a>
    
    
</div>

<div class="flex flex-row">
    <a href={trafficCamera.image_url_west} target="_blank" rel="noreferrer">
        <Image imageUrl={trafficCamera.image_url_west} imageSize={"img-card-sm"} />
    </a>
    
    
    <a href={trafficCamera.image_url_east} target="_blank" rel="noreferrer">
        <Image imageUrl={trafficCamera.image_url_east} imageSize={"img-card-sm"} />
    </a>
    
    
</div>



