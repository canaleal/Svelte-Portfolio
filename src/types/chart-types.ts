export interface IChartData {
    name: string;
    value: number;
    link?: string;
    linkWith?: string[];
    children?: IChartData[];
}
