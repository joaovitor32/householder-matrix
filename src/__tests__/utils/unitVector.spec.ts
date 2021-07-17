import unitVector from '@utils/unitVector';

describe('unit vector', () => {
  it('2D size - test', () => {
    expect(unitVector([5, 5, 5], 5)).toStrictEqual([1, 1, 1]);
  });
});
