import { CARLOGOS } from "../../data/carLogos";
import { supabase } from "../../services/client";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    try {
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