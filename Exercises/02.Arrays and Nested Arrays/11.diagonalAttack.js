function printDiagonalAttack(arr) {
    arr = arr
        .map(row => row.split(' ').map(Number));

    let mainDiagonalSum = arr.map((row, rowIndex) =>
        row.filter((e, colIndex) => rowIndex === colIndex))
        .reduce((a, b) => Number(a) + Number(b))

    let secondaryDiagonalSum = arr
        .map((row, rowIndex) => row.filter((e, colIndex) => colIndex === row.length - 1 - rowIndex))
        .reduce((a, b) => Number(a) + Number(b));

    let isDiagonal = (row, col) => row === col || col === arr[row].length - 1 - row;

    mainDiagonalSum !== secondaryDiagonalSum
        ? console.log(arr.map(row => row.join(' ')).join('\n'))
        : console.log(arr.map((row, rowIndex) => row
            .map((e, colIndex) => isDiagonal(rowIndex, colIndex)
                ? e
                : mainDiagonalSum)
            .join(' '))
            .join('\n'));
}
