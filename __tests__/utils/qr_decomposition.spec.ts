import qr_decomposition from '../../src/core/qr_decomposition';

describe('QR decomposition test', () => {
  it('2D size - test', () => {
    expect(
      qr_decomposition([
        [-1, -1, 1],
        [1, 3, 3],
        [-1, -1, 5],
      ]),
    ).toStrictEqual({
      Q: [
        [-0.5773502691896257, 0.40824829046386285, 0.7071067811865475],
        [0.5773502691896257, 0.816496580927726, 1.1102230246251565e-16],
        [-0.5773502691896257, 0.40824829046386313, -0.7071067811865475],
      ],
      R: [
        [1.7320508075688772, 2.8867513459481287, -1.7320508075688772],
        [0, 1.6329931618554518, 4.898979485566357],
        [0, 1.6653345369377348e-16, -2.828427124746189],
      ],
    });
  });
});