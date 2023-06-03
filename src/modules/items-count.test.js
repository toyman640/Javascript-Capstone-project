const countItems = require('./items-count.js');

describe('countItems', () => {
  test('returns the correct count of items in the array', () => {
    const array = [1, 2, 3, 4, 5];
    const count = countItems(array);
    expect(count).toBe(5);
  });

  test('returns 0 when the array is empty', () => {
    const array = [];
    const count = countItems(array);
    expect(count).toBe(0);
  });

  test('returns the correct count when the array has duplicate items', () => {
    const array = [1, 1, 1, 1];
    const count = countItems(array);
    expect(count).toBe(4);
  });
});
