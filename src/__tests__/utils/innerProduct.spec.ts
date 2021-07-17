import innerProduct from '@utils/innerProduct';

describe('inner product', () => {
  it('2D size - inner product test', () => {
    expect(innerProduct([1, 4, -3], [-1, 2, 0])).toStrictEqual(7);
  });
});
