import { shallowEqual } from '../utils/shallow-equal';

describe('shallowEqual', () => {
  test('objects', () => {
    expect(shallowEqual(1, 1)).toBe(true);
  })
})