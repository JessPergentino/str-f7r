import StringFormatter from '../../src/index';

describe('upperCase', function () {
  it('should return the upper case of a string', function () {
    expect(StringFormatter.upperCase('Hello')).toBe('HELLO');
    expect(StringFormatter.upperCase('git hub')).toBe('GIT HUB');
    expect(StringFormatter.upperCase('123')).toBe('123');
    expect(StringFormatter.upperCase('')).toBe('');
  });
});
