let assert = require('chai').assert;
let isSymmetric = require('./app.js');

describe('isSemetric' , () => { 
    it('Should return false if given parameter is not array' , () => { 
     assert.equal(false,isSymmetric('3'));
    })
    it('Should return false if array is not semetric' , () => { 
        assert.equal(false,isSymmetric([1,3,6,7]));
    })
    it('Should return true if array is semtric' , () => { 
        assert.equal(true,isSymmetric([7,7,7]));
    })
    it('Should return true if array is semtric' , () => { 
        assert.equal(true,isSymmetric([7]));
    })
    it('Should return false if array is not semetric' , () => { 
        assert.equal(false,isSymmetric([7,7,-7]));
    })

    it('Should return false if array is not semetric' , () => { 
        assert.equal(true,isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5]));
    })
})
