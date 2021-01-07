import math from '../utils/my-math';

describe('math', () => {
  test('add', () => {
    expect(math.add(1).add(1).getValue()).toBe(2);
  })
  test('add', () => {
    expect(math.minus(1).getValue()).toBe(-1);
  })
})
test.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
  console.log(a, b)
  expect(a + b).toBe(expected);
});
