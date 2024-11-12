const { calcularMDC } = require('../exer1');

test('calcularMDC deve retornar o valor correto para 48 e 18', () => {
    expect(calcularMDC(48, 18)).toBe(6);
});

test('calcularMDC deve retornar o valor correto para 56 e 98', () => {
    expect(calcularMDC(56, 98)).toBe(14);
});
