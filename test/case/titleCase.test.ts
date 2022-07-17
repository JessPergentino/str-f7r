import StringFormatter from '../../src/index';

describe('titleCase', function () {
  it('should return the title case of a string', function () {
    expect(StringFormatter.titleCase('hello world')).toBe('Hello World');
    expect(StringFormatter.titleCase('Hello world')).toBe('Hello World');
    expect(StringFormatter.titleCase('hello World')).toBe('Hello World');
    expect(StringFormatter.titleCase('Hello World')).toBe('Hello World');
    expect(StringFormatter.titleCase('HELLO WORLD')).toBe('Hello World');
    expect(StringFormatter.titleCase('git')).toBe('Git');
    expect(StringFormatter.titleCase('GIT')).toBe('Git');
    expect(StringFormatter.titleCase('git-hub')).toBe('Git-hub');
    expect(StringFormatter.titleCase('git hub')).toBe('Git Hub');
    expect(StringFormatter.titleCase('san diego zoo safari park')).toBe('San Diego Zoo Safari Park');
    expect(StringFormatter.titleCase('Who wants to try next?')).toBe('Who Wants To Try Next?');
    expect(StringFormatter.titleCase('WHO WANTS TO TRY NEXT?')).toBe('Who Wants To Try Next?');
    expect(StringFormatter.titleCase('-GIT-HUB-')).toBe('-Git-hub-');
    expect(StringFormatter.titleCase('__GIT___HUB___')).toBe('__Git___hub___');
    expect(StringFormatter.titleCase('XMLHttpRequest')).toBe('Xmlhttprequest');
    expect(StringFormatter.titleCase('weight of up to 12 kg')).toBe('Weight Of Up To 12 Kg');
    expect(StringFormatter.titleCase('/src/case/titlecase')).toBe('/Src/case/titlecase');
    expect(StringFormatter.titleCase('****')).toBe('****');
    expect(StringFormatter.titleCase('-----')).toBe('-----');
    expect(StringFormatter.titleCase('     ')).toBe('     ');
    expect(StringFormatter.titleCase('\n\n\n\n   ***\t\t')).toBe('\n\n\n\n   ***\t\t');
    expect(StringFormatter.titleCase('')).toBe('');
  });

  it('should return the title case of a non-latin string', function () {
    expect(StringFormatter.titleCase('zborul păsării')).toBe('Zborul Păsării');
    expect(StringFormatter.titleCase('fuerza de sustentación')).toBe('Fuerza De Sustentación');
    expect(StringFormatter.titleCase('skrzydło ptaka składa się')).toBe('Skrzydło Ptaka Składa Się');
  });

  it('should not modify numbers', function () {
    expect(StringFormatter.titleCase('8965')).toBe('8965');
  });
});
