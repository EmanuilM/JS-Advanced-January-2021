let assert = require('chai').assert;
let  lookupChar  = require('./app.js');

describe('lookupChar' , () => { 
    it('Should return undefined if first parameter is not a string' , () => { 
        assert.equal(undefined , lookupChar(10,'3'))
    })
    it('Should return undefined if first parameter is not a string' , () => { 
        assert.equal(undefined , lookupChar(3,3))
    })
    
    it('Should return undefine with incorrect second param' , () => { 
        assert.equal(undefined , lookupChar('3','3'))
    })
    it('Should return undefine with incorrect second param' , () => { 
        assert.equal(undefined , lookupChar('3',1.70));
    })
    it('Should return incorrect index if given index is bigger than string length' , () => {
        assert.equal('Incorrect index' , lookupChar('word' , 7))
    })
    it('Should return incorrect index if given index is bigger than string length' , () => {
        assert.equal('Incorrect index' , lookupChar('word' , -7))
    })
    it('Should return incorrect index if given index is bigger than string length' , () => {
        assert.equal('Incorrect index' , lookupChar('word' , 4))
    })

    it('Should return string char at' , () => { 
        assert.equal('e' , lookupChar('hey' , 1))
    })

    it('Should return string char at' , () => { 
        assert.equal('h' , lookupChar('hey' , 0))
    })
})
