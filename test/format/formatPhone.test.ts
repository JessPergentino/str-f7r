import StringFormatter from '../../src/index';

describe('formatPhone', function () {
  it('should return the string phone formated', function () {
    expect(StringFormatter.formatPhone(0, '99123456789')).toBe('99123456789');
    expect(StringFormatter.formatPhone(1, '99123456789')).toBe('(99) 1 2345-6789');
    expect(StringFormatter.formatPhone(2, '99123456789')).toBe('(99) 1 2345 6789');
    expect(StringFormatter.formatPhone(3, '99123456789')).toBe('99 1 2345-6789');
    expect(StringFormatter.formatPhone(4, '99123456789')).toBe('99 1 2345 6789');
    expect(StringFormatter.formatPhone(5, '123456789')).toBe('1 2345-6789');
    expect(StringFormatter.formatPhone(6, '123456789')).toBe('1 2345 6789');
    expect(StringFormatter.formatPhone(7, '9999123456789')).toBe('+99 99 1 2345-6789');
    expect(StringFormatter.formatPhone(8, '9999123456789')).toBe('+99 99 1 2345 6789');
  });

  it('should return the number phone formated', function () {
    expect(StringFormatter.formatPhone(0, 99123456789)).toBe('99123456789');
    expect(StringFormatter.formatPhone(1, 99123456789)).toBe('(99) 1 2345-6789');
    expect(StringFormatter.formatPhone(2, 99123456789)).toBe('(99) 1 2345 6789');
    expect(StringFormatter.formatPhone(3, 99123456789)).toBe('99 1 2345-6789');
    expect(StringFormatter.formatPhone(4, 99123456789)).toBe('99 1 2345 6789');
    expect(StringFormatter.formatPhone(5, 123456789)).toBe('1 2345-6789');
    expect(StringFormatter.formatPhone(6, 123456789)).toBe('1 2345 6789');
    expect(StringFormatter.formatPhone(7, 9999123456789)).toBe('+99 99 1 2345-6789');
    expect(StringFormatter.formatPhone(8, 9999123456789)).toBe('+99 99 1 2345 6789');
  });

  it('should return a empty sring', function () {
    expect(StringFormatter.formatPhone(9, 99123456789)).toBe('');
    expect(StringFormatter.formatPhone(3, '')).toBe('');
  });
});
