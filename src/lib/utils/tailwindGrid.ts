export const getColSpan = (colSpan: number = 1) => {
    const tailwindMap: any = {
        1: "col-span-1",
        2: "col-span-2",
        3: "col-span-3",
        4: "col-span-4"
    }
    return tailwindMap[colSpan] || "col-span-1";
};

export const getGridSpan = (colSpan: number = 3) => {
    const tailwindMap: any = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4"
    }
    return tailwindMap[colSpan] || "grid-cols-1";
};

export const getLgGridColSpan = (gridSpan: number = 1) => {
    const tailwindMap: any = {
        1: "lg:grid-cols-1",
        2: "lg:grid-cols-2",
        3: "lg:grid-cols-3",
        4: "lg:grid-cols-4",

    }
    return tailwindMap[gridSpan];
}
