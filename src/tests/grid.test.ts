import { getColSpan, getGridSpan, getLgGridColSpan } from '../lib/utils/tailwindGrid';

describe('getColSpan', () => {
  it('returns correct class for given colSpan', () => {
    expect(getColSpan(1)).toBe('col-span-1');
    expect(getColSpan(2)).toBe('col-span-2');
    expect(getColSpan(3)).toBe('col-span-3');
    expect(getColSpan(4)).toBe('col-span-4');
  });

  it('returns default class for out-of-range colSpan', () => {
    expect(getColSpan(5)).toBe('col-span-1');
    expect(getColSpan(0)).toBe('col-span-1');
  });
});

describe('getGridSpan', () => {
  it('returns correct class for given colSpan', () => {
    expect(getGridSpan(1)).toBe('grid-cols-1');
    expect(getGridSpan(2)).toBe('grid-cols-2');
    expect(getGridSpan(3)).toBe('grid-cols-3');
    expect(getGridSpan(4)).toBe('grid-cols-4');
  });

  it('returns default class for out-of-range colSpan', () => {
    expect(getGridSpan(5)).toBe('grid-cols-1');
    expect(getGridSpan(0)).toBe('grid-cols-1');
  });
});

describe('getLgGridColSpan', () => {
  it('returns correct class for given gridSpan', () => {
    expect(getLgGridColSpan(1)).toBe('lg:grid-cols-1');
    expect(getLgGridColSpan(2)).toBe('lg:grid-cols-2');
    expect(getLgGridColSpan(3)).toBe('lg:grid-cols-3');
    expect(getLgGridColSpan(4)).toBe('lg:grid-cols-4');
  });

  it('returns undefined for out-of-range gridSpan', () => {
    expect(getLgGridColSpan(5)).toBeUndefined();
    expect(getLgGridColSpan(0)).toBeUndefined();
  });
});
