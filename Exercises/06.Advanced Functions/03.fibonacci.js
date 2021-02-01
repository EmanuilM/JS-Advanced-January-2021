function solve() {
    let [x,y] = [0,1];
    return function() {
        let z = x + y;
        x = y;
        y = z;
        return x;
    }

    
}
