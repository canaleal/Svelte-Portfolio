<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import Chart from 'chart.js/auto';
    import type { ChartConfiguration, ChartType, ChartData } from 'chart.js';
 
    let canvas: HTMLCanvasElement;
    let chartInstance: Chart | undefined;
 
    export let type: ChartType = 'bar'; // Default chart type
    export let data: ChartData;
    export let options: ChartConfiguration['options'];
 
    // Create chart on mount
    onMount(() => {
       if (canvas && data) {
          chartInstance = new Chart(canvas, {
             type,
             data,
             options
          });
       }
    });
 
    // Destroy chart on component destroy
    onDestroy(() => {
       if (chartInstance) {
          chartInstance.destroy();
       }
    });
 </script>
 
 <canvas bind:this={canvas}></canvas>
 
 <style>
    canvas {
       max-width: 100%;
       height: 100%;
    }
 </style>
 