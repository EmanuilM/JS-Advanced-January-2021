class Hex {
   
    constructor(number){
        this.value = Number(number);
    }
    valueOf(){
        return this.value;
    }   
    plus(number){
        let result = (this.value + Number(number.valueOf()));
        return new Hex(result);
    }
    toString(){
        return `0x${(this.value.toString(16)).toUpperCase()}`;
    }

    parse(text){
        return parseInt(text, 16);
    }
    minus(number){
        let result = (this.value - Number(number.valueOf()));
        return new Hex(result);
    }
}
