function solve(n1,n2,op) {
    let operators = { 
        '+' : n1 + n2,
        '-': n1 - n2,
        '*': n1 * n2,
        '/': n1 / n2,
        '%': n1 % n2,
        '**': n1 ** n2,
    }

    return operators[op];
}
