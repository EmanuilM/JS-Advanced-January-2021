let assert = require('chai').assert;
let sum = require('./app.js');

describe('sum' , () => { 
    it('Should return sum of numbers' , () => { 
        assert.equal(3 , sum([1,1,1]))
    })
    it('Should return 0 if input array is empty' , () => { 
        assert.equal(0 , sum([]));
    })
    it('Should return 0 if elements in array are 0' , () => { 
        assert.equal(0 , sum([0,0,0]))
    })
})
