import StringFormatter from '../../src/index';

describe('count', function () {
  it('should return the value formated', function () {
    expect(StringFormatter.formatCurrency('de-DE', 'EUR', 123456.789)).toMatch(/(\d{3})|(\d{2}) €/);
    expect(StringFormatter.formatCurrency('ja-JP', 'JPY', 123456.789)).toMatch(/￥(\d{3})|(\d{3})/);
    expect(StringFormatter.formatCurrency('pt-BR', 'BRL', 123456.789)).toMatch(/R\$ (\d{3})|(\d{3})|(\d{2})/);
    expect(StringFormatter.formatCurrency('pt-BR', 'BRL', -0)).toBe('');
  });
});
