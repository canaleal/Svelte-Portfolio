export interface IChartData {
    name: string;
    value: number;
    linkWith?: string[];
    children?: IChartData[];
}
