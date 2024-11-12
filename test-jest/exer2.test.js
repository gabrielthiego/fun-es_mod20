const { encontrarIndices } = require('../exer2');

test('encontrarIndices deve retornar os índices corretos para [10, 5, 20, 8, 3]', () => {
    expect(encontrarIndices([10, 5, 20, 8, 3])).toEqual([2, 4]);
});
