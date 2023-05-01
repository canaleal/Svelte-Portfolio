import { TRAFFIC_CAMERAS } from '$lib/data/trafficCameras';

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return { trafficCameras: TRAFFIC_CAMERAS };
};