jest.dontMock('../passwordStrength');
const passwordStrength = require('../passwordStrength');

describe('passwordStrength', () => {
  it('returns 0 for passwords that are too short', () => {
    expect(passwordStrength('')).toBe(0);
    expect(passwordStrength('asdf')).toBe(0);
    expect(passwordStrength('1234567')).toBe(0);
    expect(passwordStrength('longenough')).not.toBe(0);
  });

  it('returns 1 for passwords that are too weak', () => {
    expect(passwordStrength('notenough')).toBe(1);
    expect(passwordStrength('1234567890')).toBe(1);
  });

  it('returns 2 for passwords with enough entropy', () => {
    expect(passwordStrength('righthorsebatterystaple')).toBe(2);
    expect(passwordStrength('Much3ntr0py!')).toBe(2);
  });
});