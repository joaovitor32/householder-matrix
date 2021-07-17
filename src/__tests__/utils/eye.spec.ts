import eye from '@utils/eye';

describe('eye array', () => {
  it('2D size - eye test', () => {
    expect(eye(2)).toStrictEqual([
      [1, 0],
      [0, 1],
    ]);
  });
});
