const { calcularMDC } = require('../exer1');

test('calcularMDC deve retornar o valor correto para 48 e 18', () => {
    expect(calcularMDC(48, 18)).toBe(6);
});
