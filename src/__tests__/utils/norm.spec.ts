import norm from '@utils/norm';

describe('norm of an array', () => {
  it('2D size - test', () => {
    expect(norm([3, 4])).toStrictEqual(5);
  });
});
