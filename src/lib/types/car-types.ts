export interface ICarElementType {
    id: number,
    name: string,
    imgUrl: string,
    type: string,
    year: string,
    isActive?: boolean,
    countryOrigin?: string,
    countryCode?: string,
    countryFlag?: string,
    description?: string,

}

export type ICarPageOptionType = 'Cards' | 'Table' | 'JSON';
