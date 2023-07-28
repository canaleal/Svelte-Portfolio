import type { SMALL, MEDIUM, LARGE, FULL_STACK, MOBILE, REST_API, DATABASE, MACHINE_LEARNING, ALGORITHMS, UI, ALL, IN_DEVELOPMENT, COMPLETE } from "$lib/constants/project";

export type IProjectSize = typeof SMALL | typeof MEDIUM | typeof LARGE;
export type IProjectCompletion = typeof IN_DEVELOPMENT | typeof COMPLETE;
export type IApplicationField = typeof FULL_STACK | typeof MOBILE | typeof REST_API | typeof DATABASE | typeof MACHINE_LEARNING | typeof ALGORITHMS | typeof UI;
export type IProjectFilter = typeof ALL| typeof IN_DEVELOPMENT | typeof COMPLETE | typeof SMALL | typeof MEDIUM | typeof LARGE | typeof FULL_STACK | typeof MOBILE | typeof REST_API | typeof DATABASE | typeof MACHINE_LEARNING | typeof ALGORITHMS | typeof UI;

interface ILinkButton {
    id: number,
    title: string,
    url: string,
    icon?: string,
    bgColor?: string,
}

interface ITextContent {
    title?: string,
    subtitle?: string,
    description?: string,
}

interface IImageContent {
    imageUrl?: string,
    imageSize?: string,
    showImageSource?: boolean,
}

interface ICodeJsonTheme {
    isCodeJson?: boolean,
    codeJsonTheme?: string,
    codeJsonURLPath?: string,
    codeJsonData?: any,
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

interface IWebMockup {
    isWebMockup?: boolean,
    webMockupUrl?: string,
}

export interface IColContent extends IWebMockup, ITextContent, IImageContent, ICodeJsonTheme, IColorPalette, ITools, ILinkButtons, IListItems {
    id: number,
    colSpan: number,
    hasShadow?: boolean,
    cardHeight?: string,
    hasTrans?: boolean,
}
export interface IOptionalContent {
    id: number,
    title?: string,
    colSpan?: number,
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
    size: IProjectSize,
    applicationField: IApplicationField,
    projectCompletion: IProjectCompletion,

}

