export interface IChartData {
    name: string;
    value: number;
    link?: string;
    avatar_url?: string;
    linkWith?: string[];
    children?: IChartData[];
}
