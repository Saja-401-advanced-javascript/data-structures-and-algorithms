

function sumMatrix(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum = sum + arr[i][j];
    }
    output.push(sum);
  }
  return output;
}


module.exports = sumMatrix;