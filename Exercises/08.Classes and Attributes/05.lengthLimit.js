class Stringer { 
    constructor(string , length) { 
        this.innerString = string;
        this.innerLength = length;

    }
    increase(currentLength) { 
        this.innerLength += currentLength;
    }

    decrease(currentLength) { 
      if(this.innerLength - currentLength < 0) { 
          this.innerLength = 0;
      }else { 
        this.innerLength -= currentLength;
      }
}

    toString() { 
        if(this.innerLength === 0) { 
            return '...';
        }
        return this.innerString.slice(0,this.innerLength) + (this.innerLength >= this.innerString.length ? "" : "...");
    }

}
