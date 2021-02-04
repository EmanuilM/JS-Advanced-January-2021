let assert = require('chai').assert;
let rgbToHexColor = require('./app.js');

describe('rgbToHexColor' , () => { 
    it('Should return undefined if red color is less than 0' , () => { 
        assert.equal(undefined , rgbToHexColor(-3 , 220 ,160));
    })
    it('Should return undefined if red color is more than 255' , () => { 
        assert.equal(undefined , rgbToHexColor(256 , 200 ,160));
    })
    it('Should return undefine if red number is not integer' , () => { 
        assert.equal(undefined , rgbToHexColor(1.30 , 230 , 160))
    })

    
    it('Should return undefined if green color is less than 0' , () => { 
        assert.equal(undefined , rgbToHexColor(3 , -3 ,160));
    })
    it('Should return undefined if green color is more than 255' , () => { 
        assert.equal(undefined , rgbToHexColor(3 , 256 ,160));
    })
    it('Should return undefined if green color is not integer' , () => { 
        assert.equal(undefined , rgbToHexColor(3 , 1.70 ,160));
    })


    it('Should return undefine if blue color is less than 0' , () => { 
        assert.equal(undefined ,rgbToHexColor(3 , 7 ,-10) )
    })
    it('Should return undefine if blue color is more than 255' , () => { 
        assert.equal(undefined ,rgbToHexColor(3 , 7 ,256) )
    })
    it('Should return undefine if blue color is not integer' , () => { 
        assert.equal(undefined ,rgbToHexColor(3 , 7 ,1.90) )
    })

    it('Valid' , () => { 
        assert.equal('#000000' ,rgbToHexColor(0,0,0) )
    })

    it('Valid' , () => { 
        assert.equal('#6482AA' ,rgbToHexColor(100,130,170) )
    })
    it('Valid' , () => { 
        assert.equal('#FFFFFF' ,rgbToHexColor(255,255,255) )
    })
})
