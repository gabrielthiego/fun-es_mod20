function encontrarIndices(numeros) {
    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numeros[indiceMaior]) {
            indiceMaior = i;
        } else if (numeros[i] < numeros[indiceMenor]) {
            indiceMenor = i;
        }
    }
    return [indiceMaior, indiceMenor];
}

let numeros = [10, 5, 20, 8, 3];
let indices = encontrarIndices(numeros);
console.log(indices[0]);
console.log(indices[1]);
