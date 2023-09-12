export const getColSpan = (colSpan: number = 1) => {
    const tailwindMap: any = {
        1: "col-span-1",
        2: "col-span-2",
        3: "col-span-3",
        4: "col-span-4"
    }
    return tailwindMap[colSpan] || "col-span-1";
};

