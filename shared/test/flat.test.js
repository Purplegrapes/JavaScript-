import { flatDeep } from '../utils/flat-deep';

test('flatDeep', () => {
  expect(flatDeep([2, [3, [4, 2]]])).toEqual([2, 3, 4, 2]);
})