import { isNullUndefined } from '../lib/utils/is-nullUndefined'

describe('isNullUndefined', () => {
  test('returns true for null', () => {
    expect(isNullUndefined(null)).toBe(true)
  })

  test('returns true for undefined', () => {
    expect(isNullUndefined(undefined)).toBe(true)
  })

  test('returns false for other values', () => {
    expect(isNullUndefined(0)).toBe(false)
    expect(isNullUndefined('')).toBe(false)
    expect(isNullUndefined(false)).toBe(false)
    expect(isNullUndefined({})).toBe(false)
    expect(isNullUndefined([])).toBe(false)
    expect(isNullUndefined(() => {})).toBe(false)
  })
})
