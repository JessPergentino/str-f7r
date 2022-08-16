import StringFormatter from '../../src/index';

describe('count', function () {
  it('should return the number of characters in a string', function () {
    expect(StringFormatter.count('git hub')).toBe(7);
    expect(StringFormatter.count('')).toBe(0);
    expect(StringFormatter.count('string')).toBe(6);
  });
});
