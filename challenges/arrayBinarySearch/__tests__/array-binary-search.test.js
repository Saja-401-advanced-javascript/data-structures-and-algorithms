'use strict'

const binaryArray = require('../lib/array-binary-search.js')

const testArr1 = [4, 8, 15, 16, 23, 42];
const testArr2 = [11, 22, 33, 44, 55, 66, 77]

describe('validate the binarySearch()', () => {

    it('return the index of the search key if it exsist ', () => {
        expect(binaryArray(testArr1, 15)).toEqual(2)
        
    })
    it('return -1 if the search key does not exsist', () => {
        expect(binaryArray(testArr2, 90)).toEqual(-1)
    })
})