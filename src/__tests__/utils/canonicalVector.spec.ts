import canonicalVector from '@utils/canonicalVector';

describe('Canonical array', () => {
  it('2D size test', () => {
    expect(canonicalVector(1, 2)).toStrictEqual([0, 1]);
  });

  it('test - error', () => {
    try {
      canonicalVector(3, 2);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
