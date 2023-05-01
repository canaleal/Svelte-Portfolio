import { CARLOGOS } from "$lib/data/carLogos";
import { supabase } from "$lib/services/client";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    try {

        if(!supabase) throw new Error('Supabase client not initialized');

        const { data, error } = await supabase
            .from('carlogos')
            .select('*')
            .order('id', { ascending: true });

        if (error) throw error;
        if (!data.length) return { logos: CARLOGOS };

        return { logos: data };
    } catch (error) {
        console.error(error);
        return { logos: CARLOGOS };
    }
};