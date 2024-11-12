function encontrarIndices(arr) {
    let indices = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 20 || arr[i] === 3) {
            indices.push(i);
        }
    }
    return indices;
}

module.exports = { encontrarIndices };
