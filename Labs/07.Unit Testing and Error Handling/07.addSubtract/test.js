let assert = require('chai').assert;
let {createCalculator} = require('./app.js');

describe('check object function' , () => { 
    let func;
    beforeEach(() => {
        func = createCalculator();
    })

    it('function should be instance of object' , () => { 
        assert.equal(func instanceof Object , true);
    })
    it('object should have property add' , () => {
        assert.equal(func.hasOwnProperty('add') , true);
    })
    it('object should have property subtract' , () => {
        assert.equal(func.hasOwnProperty('subtract') , true);
    })
    it('object should have property get' , () => {
        assert.equal(func.hasOwnProperty('get') , true);
    })
    
   describe('all functions shoud work properly' , () => {
    it('add function should add number to value variable which hold sum' , () => { 
         func.add(7);
         let value = func.get();
         assert.equal(value , 7);

    })

    it('subtract function should subtract num from value variable which hold sum' , () => { 
        func.subtract(3);
        let value = func.get();
        assert.equal(value , -3);
   })

   it('Methods should work properly if parameter is string' , () => { 
       func.subtract('-3');
       func.add('7');
       assert.equal(func.get() , 10);
   })

   })
})
