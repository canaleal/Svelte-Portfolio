
export const getColSpan = (colSpan: number = 1) => {
    switch (colSpan) {
        case 1:
            return 'col-span-1';
        case 2:
            return 'col-span-2';
        case 3:
            return 'col-span-3';
        case 4:
            return 'col-span-4';
        default:
            return 'col-span-1';
    }
};

export const getGridSpan = (colSpan: number = 3) => {
    switch (colSpan) {
        case 1:
            return 'grid-cols-1';
        case 2:
            return 'grid-cols-2';
        case 3:
            return 'grid-cols-3';
        case 4:
            return 'grid-cols-4';
        default:
            return 'grid-cols-1';
    }
};