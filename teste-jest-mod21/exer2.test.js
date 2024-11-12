const { encontrarIndices } = require('../exer2');

test('encontrarIndices deve retornar os índices corretos para [10, 5, 20, 8, 3]', () => {
    expect(encontrarIndices([10, 5, 20, 8, 3])).toEqual([2, 4]);
});

test('encontrarIndices deve retornar os índices corretos para [5, 1, 3, 7, 2]', () => {
    expect(encontrarIndices([5, 1, 3, 7, 2])).toEqual([3, 1]);
});
