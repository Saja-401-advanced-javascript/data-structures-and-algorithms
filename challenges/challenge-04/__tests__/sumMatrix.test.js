


const sumMatrix = require('../lib/sumMatrix.js');

describe(' Add up the sum of each row in a matrix of arbitrary size', () => {
  let arr = [[0, 1, 5], [-4, 7, 2], [-3, 12, 11]];

  it('return an array of the sumations of a row in a matrix', () => {
    expect(sumMatrix(arr)).toEqual([6, 5, 20]);
  });

});