import multiply from '../../src/utils/multiply';

describe('multiply in matrix', () => {
  it('2D size test', () => {
    expect(
      multiply(
        [
          [1, 1],
          [1, 1],
        ],
        [
          [1, 1],
          [1, 1],
        ],
      ),
    ).toStrictEqual([
      [2, 2],
      [2, 2],
    ]);

    expect(
      multiply(
        [
          [2, 4],
          [4, 2],
        ],
        [
          [2, 4],
          [4, 2],
        ],
      ),
    ).toStrictEqual([
      [20, 16],
      [16, 20],
    ]);

    expect(
      multiply(
        [
          [1, 3],
          [2, 4],
        ],
        [
          [1, 1],
          [1, 3],
        ],
      ),
    ).toStrictEqual([
      [3, 7],
      [7, 15],
    ]);
  });

  it('test - error', () => {
    try {
      multiply(
        [
          [1, 2],
          [3, 4],
        ],
        [
          [1, 1],
          [1, 3],
        ],
      );
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
