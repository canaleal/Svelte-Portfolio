import type { ICodeJsonTheme } from './code-json-type';
export enum ProjectSize {
    Small = "Small",
    Medium = "Medium",
    Large = "Large"
}


export enum ApplicationField {
    FullStack = "Full Stack",
    Mobile = "Mobile",
    RestApi = "Rest API",
    Database = "Database",
    MachineLearning = "Machine Learning",
    Algorithms = "Algorithms",
};

interface ILinkButton {
    id: number,
    title: string,
    url: string,
    icon?: string,
}

export interface IColContent {
    id: number,
    title?: string,
    subtitle?: string,
    description?: string,
    imageUrl?: string,
    imageSize?: string,
    tools?: string[],
    colSpan: number,
    linkButtons?: ILinkButton[],
    listItems?: string[],
    isCodeJson?: boolean,
    codeJsonTheme?: ICodeJsonTheme,
    hasTrans?: boolean,
}


export interface IOptionalContent {
    id: number,
    title?: string,
    colContent: IColContent[],
}
    

export interface IProjectType {
    id: number,
    title: string,
    author: string,
    description: string,
    tools: string[],
    githubUrl?: string,
    exampleUrl?: string,
    imageUrl?: string,
    showMoreUrl?: string,
    optionalContent?: IOptionalContent[],
    showImage: boolean,
    size: ProjectSize,
    applicationField: ApplicationField,
    inDevelopment: boolean
}