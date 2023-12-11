import { sortAscending, sortDescending } from '$lib/utils/sorting-utils';

describe('sortAscending', () => {
	test('should sort array in ascending order by specified key', () => {
		const array = [
			{ name: 'John', age: 25 },
			{ name: 'Jane', age: 30 },
			{ name: 'Bob', age: 20 }
		];
		const sortedArray = sortAscending(array, 'age');
		expect(sortedArray).toEqual([
			{ name: 'Bob', age: 20 },
			{ name: 'John', age: 25 },
			{ name: 'Jane', age: 30 }
		]);
	});

	test('should not modify the original array', () => {
		const array = [
			{ name: 'John', age: 25 },
			{ name: 'Jane', age: 30 },
			{ name: 'Bob', age: 20 }
		];
		sortAscending(array, 'test');
		expect(array).toEqual([
			{ name: 'John', age: 25 },
			{ name: 'Jane', age: 30 },
			{ name: 'Bob', age: 20 }
		]);
	});
});

describe('sortDescending', () => {
	test('should sort array in descending order by specified key', () => {
		const array = [
			{ name: 'John', age: 25 },
			{ name: 'Jane', age: 30 },
			{ name: 'Bob', age: 20 }
		];
		const sortedArray = sortDescending(array, 'age');
		expect(sortedArray).toEqual([
			{ name: 'Jane', age: 30 },
			{ name: 'John', age: 25 },
			{ name: 'Bob', age: 20 }
		]);
	});

	test('should not modify the original array', () => {
		const array = [
			{ name: 'John', age: 25 },
			{ name: 'Jane', age: 30 },
			{ name: 'Bob', age: 20 }
		];
		sortDescending(array, 'test');
		expect(array).toEqual([
			{ name: 'John', age: 25 },
			{ name: 'Jane', age: 30 },
			{ name: 'Bob', age: 20 }
		]);
	});
});
