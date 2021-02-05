let assert = require('chai').assert;
let {mathEnforcer} = require('./app.js');

describe('addFive' , () => { 
    it('Should return undefined if input is different than number' , () => { 
        assert.equal(mathEnforcer.addFive('haha') , undefined);
    })
    it('Should return result of function plus 5 to its result' , () => { 
        assert.equal(mathEnforcer.addFive(5) , 10)
    })

    it('Should return result' , () => { 
        assert.equal(mathEnforcer.addFive(-3) , 2);
    })

    it('Should return result nearest to 0.1' , () => {  
        expect(mathEnforcer.addFive(10.5)).to.be.closeTo(15.5 , 0.001);
    })

    describe('subtractTen' , () => { 
        it('Should return undefined if input is diffeternt than number' , () => { 
            assert.equal(mathEnforcer.subtractTen('haha') , undefined);
        })

        it('Should return result and substract ten from its result' , () => { 
            assert.equal(mathEnforcer.subtractTen(30) , 20);
        })

        it('Should return result close to 0.1 floating point' , () => { 
            expect(mathEnforcer.subtractTen(25.7)).to.be.closeTo(15.7 , 0.001);
        })

        it('Should return negative number if given input number is negative' , () => { 
            assert.equal(mathEnforcer.subtractTen(-10) , -20);
        })

        it('should return undefined if given parameter is different than number' , () => { 
            assert.equal(mathEnforcer.subtractTen('string') , undefined);
        })
    })

    describe('sum' , () => { 
        it('Should return undefined if first parameter is different than number' , () => { 
            assert.equal(mathEnforcer.sum('haha' ,3 ) , undefined);
        })
        
        it('Should return undefined if second parameter is different than number' , () => { 
            assert.equal(mathEnforcer.sum(3 ,'haha' ) , undefined);
        })

        it('Should return result if both paramters are numbers' , () => { 
            assert.equal(mathEnforcer.sum(3,3) , 6);
        })

        it('Should return result if both paramters are numbers' , () => { 
            assert.equal(mathEnforcer.sum(-3,-3) , -6);
        })

        it('Should return result that is close to actual point if we pass floating point' , () => { 
            expect(mathEnforcer.sum(0.3 , 0.3)).to.be.closeTo(0.6 , 0.001);
        })

        it('Should return result that is close to actual point if we pass floating point' , () => { 
            expect(mathEnforcer.sum(10.3 , 1.3)).to.be.closeTo(11.6 , 0.001);
        })


    })
})
