import type { IIconValueComponent, IProject } from "../types";

export const getProjectLinks = (project: IProject) => {
    const links: IIconValueComponent[] = [];
    if (project.githubLink) {
        links.push({ icon: 'fa-brands fa-github', title: 'GitHub', link: project.githubLink });
    }
    if (project.projectLink) {
        links.push({ icon: 'fa-solid fa-arrow-up-right-from-square', title: 'Project', link: project.projectLink });
    }
    if (project.packageLink) {
        links.push({ icon: 'fa-solid fa-arrow-up-right-from-square', title: 'Package', link: project.packageLink });
    }

    return links;
}
