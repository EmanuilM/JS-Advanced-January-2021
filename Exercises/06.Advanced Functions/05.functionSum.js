function solve(x) {
    function sum(y) {
        x += y;
        return sum;
    }
    sum.toString = () => x;
    return sum;
}
