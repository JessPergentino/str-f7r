import StringFormatter from '../../src/index';

describe('lowerCase', function () {
  it('should return the lower case of a string', function () {
    expect(StringFormatter.lowerCase('Hello')).toBe('hello');
    expect(StringFormatter.lowerCase('GIT HUB')).toBe('git hub');
    expect(StringFormatter.lowerCase('123')).toBe('123');
    expect(StringFormatter.lowerCase('')).toBe('');
  });
});
