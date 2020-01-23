

const Insert = require('../lib/array-shift.js');
const Remove = require('../lib/remove.js');

describe('Sheft', () => {
    it('Insert a value in the middle of a sorted array', () => {
        expect(Insert([1, 2, 3, 5, 6], 4)).toEqual([1, 2, 3, 4, 5, 6])
    })

    it('removes an element from the middle index and shifts other elements in the array to fill the new gap.', () => {
        expect(Remove([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 5, 6])
    })
})


