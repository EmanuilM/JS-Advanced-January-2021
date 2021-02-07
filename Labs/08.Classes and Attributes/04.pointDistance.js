class Point  { 
    constructor(x , y) { 
        this.x = x;
        this.y = y;
    }

   static distance(p1 , p2) { 
    let xSet = Math.abs(p1.x - p2.x);
    let ySet = Math.abs(p1.y - p2.y);
    let distance = Math.sqrt(xSet ** 2 + ySet ** 2);
    return distance;
    }
}
