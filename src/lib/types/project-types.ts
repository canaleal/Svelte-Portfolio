export enum ProjectSize {
    Small = "Small",
    Medium = "Medium",
    Large = "Large"
}


export enum ApplicationField {
    Web = "Web",
    Mobile = "Mobile",
    Desktop = "Desktop",
    Api = "Api",
    Database = "Database",
    MachineLearning = "MachineLearning",
    Algorithms = "Algorithms",
    Game = "Game",
    Visualization = "Visualization",
    Map = "Map",
    Other = "Other"
};

export enum ApplicationFieldFontIcon {
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


export interface IProjectType {
    id: number,
    title: string,
    author: string,
    description: string,
    tools: string[],
    githubUrl?: string,
    exampleUrl?: string,
    imageUrl?: string,
    optionalImageUrls?: string[],
    showImage: boolean,
    size: ProjectSize,
    applicationField: ApplicationField,
    inDevelopment: boolean
}


export interface ICodeToolListElementType {
    title: string,
    url: string,
    icon?: string,
}

export interface ICodeToolType {
    id: number,
    title: string,
    description: string,
    links: ICodeToolListElementType[],
}