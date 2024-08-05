import { formatNumber } from "$lib/utils/text-format"
import type { IIconValueComponent, IProject } from "../types"

export const getAwardElements = (project: IProject): IIconValueComponent[] => {
    const awardElements: IIconValueComponent[] = []
    if (project.stars) {
        awardElements.push({ icon: 'fa fa-star', title: formatNumber(project.stars) })
    }
    if (project.downloads) {
        awardElements.push({ icon: 'fa fa-download', title: formatNumber(project.downloads) })
    }
    if (project.awards) {
        project.awards.forEach((award) => {
            awardElements.push({ icon: 'fa fa-trophy', title: award })
        })
    }

    return awardElements
}
