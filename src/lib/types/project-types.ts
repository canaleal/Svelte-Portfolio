import type { SMALL, MEDIUM, LARGE, FULL_STACK, MOBILE, REST_API, DATABASE, MACHINE_LEARNING, ALGORITHMS, UI, ALL, IN_DEVELOPMENT, COMPLETE, WEB_MOCK, LAPTOP_MOCK, PHONE_MOCK, WATCH_MOCK, TABLET_MOCK } from "$lib/constants/project";

export type IProjectSize = typeof SMALL | typeof MEDIUM | typeof LARGE;
export type IProjectCompletion = typeof IN_DEVELOPMENT | typeof COMPLETE;
export type IApplicationField = typeof FULL_STACK | typeof MOBILE | typeof REST_API | typeof DATABASE | typeof MACHINE_LEARNING | typeof ALGORITHMS | typeof UI;
export type IProjectFilter = typeof ALL| typeof IN_DEVELOPMENT | typeof COMPLETE | typeof SMALL | typeof MEDIUM | typeof LARGE | typeof FULL_STACK | typeof MOBILE | typeof REST_API | typeof DATABASE | typeof MACHINE_LEARNING | typeof ALGORITHMS | typeof UI;

export type IMockType = typeof WEB_MOCK | typeof LAPTOP_MOCK | typeof PHONE_MOCK | typeof WATCH_MOCK | typeof TABLET_MOCK

interface ILinkButton {
    id: number,
    title: string,
    url: string,
    icon?: string,
    bgColor?: string,
}

interface ITextContent {
    title?: string,
    isLargeTitle?: boolean,
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

interface IMockup {
   mockup?: IMockType
}


export interface IColContent extends IMockup, ITextContent, IImageContent, ICodeJsonTheme, IColorPalette, ITools, ILinkButtons, IListItems {
    id: number,
    colSpan: number,
    noSidePadding?: boolean,
    hasShadow?: boolean,
    cardHeight?: string,
}
export interface IOptionalContent {
    id: number,
    title?: string,
    colSpan?: number,
    colContent: IColContent[],
    bgColor?: string,
    hasStaggeredDelay?: boolean
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

