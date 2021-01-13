function solve(n, k) {
    let output = [1];
    for (let i = 0; i < n - 1; i++) {
        let x = output.length < k ? output : output.slice(output.length - k);
        output.push(x.reduce((a,b) =>  a + b ));
    }
    return output;
}
