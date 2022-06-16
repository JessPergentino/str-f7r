import StringFormatter from '../../src/index';

describe('camelCase', function () {
  it('should return the camel case of a string', function () {
    expect(StringFormatter.camelCase('hello')).toBe('hello');
    expect(StringFormatter.camelCase('HELLO')).toBe('hello');
    expect(StringFormatter.camelCase('HelloWorld')).toBe('helloWorld');
    expect(StringFormatter.camelCase('hello world')).toBe('helloWorld');
    expect(StringFormatter.camelCase('Nam Rutrum, Nulla Vel Viverra.')).toBe('namRutrumNullaVelViverra');
    expect(StringFormatter.camelCase('-HELLO-WORLD-')).toBe('helloWorld');
    expect(StringFormatter.camelCase('__HELLO___WORLD___')).toBe('helloWorld');
    expect(StringFormatter.camelCase(' Restless flycatcher')).toBe('restlessFlycatcher');
    expect(StringFormatter.camelCase('Nam egestas 25 KM dapibus iaculis lorem')).toBe('namEgestas25KmDapibusIaculisLorem');
    expect(StringFormatter.camelCase('/home/lipsum/com/feed/html/')).toBe('homeLipsumComFeedHtml');
    expect(StringFormatter.camelCase('')).toBe('');
  });

  it('should return the camel case of a non-latin string', function () {
    expect(StringFormatter.camelCase('zborul păsării')).toBe('zborulPăsării');
    expect(StringFormatter.camelCase('полет птицы')).toBe('полетПтицы');
    expect(StringFormatter.camelCase('fuerza de sustentación')).toBe('fuerzaDeSustentación');
    expect(StringFormatter.camelCase('skrzydło ptaka składa się')).toBe('skrzydłoPtakaSkładaSię');
  });

  it('should not modify numbers', function () {
    expect(StringFormatter.camelCase('3675')).toBe('3675');
  });
});
