const { somarMultiplos } = require('../exer3');

test('somarMultiplos deve retornar a soma correta para números múltiplos de 5 ou 7 até 1000', () => {
    expect(somarMultiplos()).toBe(156361);
});
