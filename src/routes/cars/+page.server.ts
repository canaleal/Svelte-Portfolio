import { supabase } from "../../services/client";
import type { PageServerLoad } from "./$types";
import type { carlogosType } from "../../types/carlogos-types";

export const load: PageServerLoad = async () => {
    try {
        const { data, error } = await supabase
            .from('carlogos')
            .select('*')
            .order('id', { ascending: true });

        if (error) throw error;
       return { logos : data};
    } catch (error) {
        console.error(error);
    }
};