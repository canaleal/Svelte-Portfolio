export enum algorithm {
    bubbleSort = 'bubbleSort',
    insertionSort = 'insertionSort',
    selectionSort = 'selectionSort',
    mergeSort = 'mergeSort',
    quickSort = 'quickSort',
    heapSort = 'heapSort',
    radixSort = 'radixSort',
    countingSort = 'countingSort',
    bucketSort = 'bucketSort',
    shellSort = 'shellSort',
    combSort = 'combSort',
    cocktailSort = 'cocktailSort',
    gnomeSort = 'gnomeSort',
    bitonicSort = 'bitonicSort',
    bogoSort = 'bogoSort',
    stoogeSort = 'stoogeSort',
    cycleSort = 'cycleSort',
}

export type algorithmType = {
    id: number,
    value : algorithm,
}