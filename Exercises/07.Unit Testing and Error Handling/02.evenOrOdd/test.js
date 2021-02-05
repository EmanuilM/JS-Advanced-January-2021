let assert = require('chai').assert;
let  isOddOrEven  = require('./app.js');

describe('isEvenOrOdd' , () => { 
    it('Should return undefined if input parameter is not a string' , () => { 
        assert.equal(undefined , isOddOrEven(3));
    })
    it('Should return even if string length is devisible by 2' , () => { 
        assert.equal('even' , isOddOrEven('stri'));
    })
    it('Should return odd if string length is not devisible by 2' , () => { 
        assert.equal('odd' , isOddOrEven('str'));
    })
})
