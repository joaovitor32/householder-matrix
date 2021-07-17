import matrixByScalar from '@utils/matrixByScalar';

describe('Product between matrix and scalar', () => {
  it('2D size - test', () => {
    expect(matrixByScalar(3, [-1, 2, 0])).toStrictEqual([-3, 6, 0]);
  });
});
