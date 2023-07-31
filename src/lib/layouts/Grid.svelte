<script lang="ts">
    export let lgGridColSpan = 3;
    export let isOverflowHidden = true;
    const getGridColSpan = () => {
        const tailwindMap: any = {
            1: "lg:grid-cols-1",
            2: "lg:grid-cols-2",
            3: "lg:grid-cols-3",
            4: "lg:grid-cols-4",
            5: "lg:grid-cols-5",
            6: "lg:grid-cols-6",
            7: "lg:grid-cols-7",
            8: "lg:grid-cols-8",
            9: "lg:grid-cols-9",
            10: "lg:grid-cols-10",
            11: "lg:grid-cols-11",
            12: "lg:grid-cols-12",
        }
        return tailwindMap[lgGridColSpan];
    }
    const gridColSpan = getGridColSpan();

</script>

<div class="grid  grid-cols-1 md:grid-cols-2  {gridColSpan} {isOverflowHidden? "overflow-hidden" : "" }  gap-8  p-2 container ">
    <slot></slot>
</div>