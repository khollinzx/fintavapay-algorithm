function diagonalDifference(arr: any[]): number {
    let leftToRightSum = 0;
    let rightToLeftSum = 0;

    const n = arr.length;

    for (let i = 0; i < n; i++) {
        leftToRightSum += arr[i][i];
    }

    for (let i = 0; i < n; i++) {
        rightToLeftSum += arr[i][n - i - 1];
    }

    return Math.abs(leftToRightSum - rightToLeftSum);
}

const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];

const result: number = diagonalDifference(matrix);
console.log(result);