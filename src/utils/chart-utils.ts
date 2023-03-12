import * as am5 from '@amcharts/amcharts5';
import * as am5hierarchy from '@amcharts/amcharts5/hierarchy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import type { IChartData } from '../types/chart-types';


export const createChart = async (div_container: string | HTMLElement, chartData: IChartData) => {

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
            downDepth: 1,
            topDepth: 1,
            maxRadius: 20,
            minRadius: 10,
            valueField: 'value',
            categoryField: 'name',
            childDataField: 'children',
            idField: 'name',
            linkWithStrength: 0.3,
            linkWithField: 'linkWith',
            manyBodyStrength: -15,
            centerStrength: 0.5,
            nodePadding: 20,
            xField: "x",
            yField: "y"
        })
    );


    series.outerCircles.template.states.create("disabled", {
        fillOpacity: 0.5,
        strokeOpacity: 0,
        strokeDasharray: 0
    });

    series.outerCircles.template.states.create("hoverDisabled", {
        fillOpacity: 0.5,
        strokeOpacity: 0,
        strokeDasharray: 0
    });





    series.labels.template.setAll({
        fill: am5.color(0x000000),
        y: 45,
        oversizedBehavior: "none"
    });


    // Use template.setup function to prep up node with an image
    series.nodes.template.setup = function (target) {
        target.events.on("dataitemchanged", function (ev) {
            target.children.push(am5.Picture.new(root, {
                width: 25,
                height: 25,
                centerX: am5.percent(50),
                centerY: am5.percent(50),
                src: (ev.target.dataItem!.dataContext! as IChartData).avatar_url
            }));
        });
    }





    // handle clicking on nodes and link/unlink them
    series.nodes.template.events.on("click", function (e) {
        // check if we have a selected data item

        let targetDataItem = e.target.dataItem;
        let element = targetDataItem?.dataContext as IChartData;
        console.log(element.link);
        if (element.link) window.open(element.link, '_blank');

    })


    series.data.setAll([chartData]);
    series.set('selectedDataItem', series.dataItems[0]);
    return series;

};