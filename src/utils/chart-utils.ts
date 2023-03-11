import type { IChartData } from '../types/chart-types';
import * as am5 from '@amcharts/amcharts5';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5hierarchy from '@amcharts/amcharts5/hierarchy';


export const createChart = async (div_container:string | HTMLElement, chartData: IChartData) => {
    am5.ready(async function () {
        let root = am5.Root.new(div_container);

        root.setThemes([am5themes_Animated.new(root)]);

        let container = root.container.children.push(
            am5.Container.new(root, {
                width: am5.percent(100),
                height: am5.percent(100),
                layout: root.verticalLayout
            })
        );

        let series = container.children.push(
            am5hierarchy.ForceDirected.new(root, {
                singleBranchOnly: false,
                downDepth: 1,
                topDepth: 1,
                maxRadius: 25,
                minRadius: 12,
                valueField: 'value',
                categoryField: 'name',
                childDataField: 'children',
                idField: 'name',
                linkWithStrength: 0.3,
                linkWithField: 'linkWith',
                manyBodyStrength: -15,
                centerStrength: 0.5
            })
        );
        


        series.data.setAll([chartData]);
        series.set('selectedDataItem', series.dataItems[0]);
    });
};