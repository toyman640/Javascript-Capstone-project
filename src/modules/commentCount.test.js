const countComment = require('./commentCount.js');

describe('countComment', () => {
  it('returns the correct count of comments', () => {
    const array = ['comment1', 'comment2', 'comment3'];
    const result = countComment(array);
    expect(result).toBe(3);
  });

  it('returns 0 when the array is empty', () => {
    const array = [];
    const result = countComment(array);
    expect(result).toBe(0);
  });

  it('returns the correct count for a large array', () => {
    const array = Array(1000).fill('comment');
    const result = countComment(array);
    expect(result).toBe(1000);
  });
});