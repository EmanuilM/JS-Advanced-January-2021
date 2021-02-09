class List { 
   
    constructor() { 
        this.list = [];
        this.size = 0;
    }

   add(x) { 
       this.list.push(x);
       this.size++;
       this.list.sort((a,b) => a - b);
   }

   remove(i) { 
       if(this.indexChecker(i)) { 
        this.list.splice(i , 1);
        this.size--;
       }
      
   }
   
   get(i) { 
       if(this.indexChecker(i)) { 
           return this.list[i];

       }
       
   }

   size() { 
     return this.list.length;
   }

   indexChecker(index) { 
    if(index >= 0 &&  index < this.list.length) { 
        return true;
    }
    return false;
   }

}
