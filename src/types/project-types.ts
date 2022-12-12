export enum projectSize {
    small = "small",
    medium = "medium",
    large = "large"
}


export enum applicationField {
    web = "web",
    mobile = "mobile",
    desktop = "desktop",
    api = "api",
    database = "database",
    machineLearning = "machineLearning",
    game = "game",
    other = "other"
};


export type projectType = {
    id: number,
    title: string,
    author: string,
    description: string,
    tools: string[],
    githubUrl: string | null,
    exampleUrl: string | null,
    imageUrl: string | null,
    size: projectSize,
    applicationType: applicationField,
    inDevelopment: boolean
}
