import StringFormatter from '../../src/index';

describe('capitalize', function () {
  it('should capitalize the first character in a string', function () {
    expect(StringFormatter.capitalize('git hub')).toBe('Git hub');
    expect(StringFormatter.capitalize('hello')).toBe('Hello');
    expect(StringFormatter.capitalize('k')).toBe('K');
    expect(StringFormatter.capitalize('')).toBe('');
    expect(StringFormatter.capitalize('*banana')).toBe('*banana');
    expect(StringFormatter.capitalize('500')).toBe('500');
    expect(StringFormatter.capitalize('  ')).toBe('');
  });
});
