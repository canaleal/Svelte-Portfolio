
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
    UI = "UI Design",
};

interface ILinkButton {
    id: number,
    title: string,
    url: string,
    icon?: string,
}

interface ITextContent {
    title?: string,
    subtitle?: string,
    description?: string,
}

interface IImageContent {
    imageUrl?: string,
    imageSize?: string,
}

interface ICodeJsonTheme {
    isCodeJson?: boolean,
    codeJsonTheme?: string
}

interface IColorPalette {
    isColorPalette?: boolean,
    colorPalette?: string[],
}

interface ITools {
    tools?: string[],
}

interface ILinkButtons {
    linkButtons?: ILinkButton[],
}

interface IListItems {
    listItems?: string[],
}
export interface IColContent extends ITextContent, IImageContent, ICodeJsonTheme, IColorPalette, ITools, ILinkButtons, IListItems {
    id: number,
    colSpan: number,
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
    inDevelopment: boolean,

}