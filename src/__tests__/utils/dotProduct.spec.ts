import dotProduct from '@utils/dotProduct';

describe('dot product', () => {
  it('2D size - inner product test', () => {
    expect(dotProduct([1, 4, -3], [-1, 2, 0])).toStrictEqual(7);
  });
});
