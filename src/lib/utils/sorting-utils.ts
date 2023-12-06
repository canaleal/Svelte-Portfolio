export const sortAscending = (array: any[], key: string) => {
	return array.sort((a, b) => {
		if (a[key] < b[key]) {
			return -1;
		}
		if (a[key] > b[key]) {
			return 1;
		}
		return 0;
	});
};

export const sortDescending = (array: any[], key: string) => {
	return array.sort((a, b) => b[key] - a[key]);
};

export const removeDuplicatesByName = (arr: any) => {
	const unique = arr
		.map((e: any) => e.name)
		.map((e: any, i: any, final: any) => final.indexOf(e) === i && i)
		.filter((e: any) => arr[e])
		.map((e: any) => arr[e]);
	return unique;
};
