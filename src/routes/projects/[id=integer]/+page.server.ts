
import { error } from '@sveltejs/kit';
import { PROJECTS } from "$lib/data/projects";
import type { PageServerLoad, RouteParams } from "./$types";
export const load: PageServerLoad = ({ params }: { params: RouteParams }) => {
    const projectElement = PROJECTS.find((project) => project.id === parseInt(params.id));
    if (!projectElement) throw error(404, 'Not found');
    return { projectElement: projectElement };
};