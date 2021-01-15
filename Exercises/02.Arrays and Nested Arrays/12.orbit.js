function printOrbitOfPoint(input) {
    [arrRows, arrCols, x, y] = input;

    let arr = createarr();
    let currentValue = 1;
    arr[x][y] = currentValue;

    setLayers();
    console.log(arr.map(row => row.join(' ')).join('\n'));

    function setLayers() {
       
        let upRow = x - currentValue;
        let downRow = x + currentValue;
        let upDownCol = Math.max(y - currentValue, 0);

        while (upDownCol < arrCols && upDownCol <= y + currentValue) {
            if (upRow >= 0) {
                arr[upRow][upDownCol] = currentValue + 1;
            }

            if (downRow < arrRows) {
                arr[downRow][upDownCol] = currentValue + 1;
            }

            upDownCol++;
        }

       
        let leftRightRow = Math.max(x - currentValue, 0);
        let rightCol = y + currentValue;
        let leftCol = y - currentValue;

        while (leftRightRow < arrRows && leftRightRow <= x + currentValue) {
            if (rightCol < arrCols) {
                arr[leftRightRow][rightCol] = currentValue + 1;
            }

            if (leftCol >= 0) {
                arr[leftRightRow][leftCol] = currentValue + 1;
            }

            leftRightRow++;
        }

        currentValue++;

        if (currentValue >= arrRows && currentValue >= arrCols) {
            return;
        }

        setLayers();
    }

    function createarr() {
        let arr = [];

        for (let i = 0; i < arrRows; i++) {
            arr.push(new Array(arrCols));
        }

        return arr;
    }
}
