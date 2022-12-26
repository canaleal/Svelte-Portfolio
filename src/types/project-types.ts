// This file contains the types for the carlogos data
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
    algorithms = "algorithms",
    game = "game",
    visualization = "visualization",
    map = "map",
    other = "other"
};

export enum applicationFieldFontIcon {
    web = "fas fa-globe",
    mobile = "fas fa-mobile-alt",
    desktop = "fas fa-desktop",
    api = "fas fa-server",
    database = "fas fa-database",
    machineLearning = "fas fa-brain",
    algorithms = "fas fa-sort-amount-up",
    game = "fas fa-gamepad",
    visualization = "fas fa-chart-bar",
    map = "fas fa-map-marked-alt",
    other = "fas fa-question"
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
    applicationField: applicationField,
    inDevelopment: boolean
}


export type projectIdeaType = {
    id: number,
    title: string,
    description: string,
    recommendations: string[],
    consider:  string[],
    applicationFieldList: applicationField[]
    imageUrl: string
    exampleUrl: string,
    difficulty: string,
}


export type codeToolListElementType = {
    title: string,
    url: string,
    icon: string | null,
}

export type codeToolType = {
    id : number,
    title: string,
    description: string,
    links: codeToolListElementType[],
}