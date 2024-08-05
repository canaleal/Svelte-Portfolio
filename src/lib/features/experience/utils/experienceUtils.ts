import type { IExperience } from "../types"


export const getAllExperienceTechnologies = (experiences: IExperience[]): string[] => {
    return experiences.reduce((acc: string[], experience: IExperience) => {
        return [...acc, ...experience.technologies]
    }, [])
}
