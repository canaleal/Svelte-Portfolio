
import { error } from '@sveltejs/kit';
import { PROJECTS } from "$lib/features/project/data/projects";
import type { PageServerLoad, RouteParams } from "./$types";

export const load: PageServerLoad = ({ params }: { params: RouteParams }) => {
    const projectElement : any  = PROJECTS.find((project) => project.title === params.title);
    if (!projectElement) throw error(404, 'Not found');
    return { projectElement: projectElement };
};