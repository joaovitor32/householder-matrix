import transpose from '@utils/transpose';

describe('transpose matrix', () => {
  it('2D size - test', () => {
    expect(
      transpose([
        [1, 2],
        [3, 4],
      ]),
    ).toStrictEqual([
      [1, 3],
      [2, 4],
    ]);
  });
});
