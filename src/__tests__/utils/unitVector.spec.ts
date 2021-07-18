import unitVector from '@utils/unitVector';

describe('unit vector', () => {
  it('2D size - test', () => {
    expect(unitVector([5, 5, 5], [5, 2])).toStrictEqual([
      0.9284766908852594, 0.9284766908852594, 0.9284766908852594,
    ]);
  });
});
