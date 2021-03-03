const spiralTraverse = arr => {
  let result = []; // Define an empty an array to hold the result

  let row, currentRow, col, currentCol; // Define variables needed

  row = arr.length; // Getting the number of arrays in given array provides the number of rows

  col = arr[0].length; // Getting the number of elements in one array gives the number of columns

  // Setting the starting points for row & col
  currentRow =  row; 
  currentCol = col;

  while (currentRow > row / 2) {
    // Loop thru row forward
    for (let i = col - currentCol; i < currentCol; i++) {
      result.push(arr[row - currentRow][i]);
    }

    // Loop thru column downward
    for (let i = row - currentRow + 1; i < currentRow; i++) {
      result.push(arr[i][currentCol - 1]);
    }

    // Loop thru row backward
    for (let i = currentCol - 1; i > col - currentCol; i--) {
      result.push(arr[currentRow - 1][i - 1]);
    }

    // Loop thru column upward
    for (let i = currentRow - 1; i > row - currentRow + 1; i--) {
      result.push(arr[i - 1][col - currentCol]);
    }

    currentRow--;
    currentCol--;
  }
  return result;
};

// 4x4 matrix
/*


        // Order has to go in to get desired output
        a[0][0], a[0][1], a[0][2], a[0][3], a[1][3], a[2][3], a[3][3], a[3][2], 
        a[3][1], a[3][0], a[2][0], a[1][0], a[1][1], a[1][2], a[2][2], a[2][3]



*/

/*
    INPUT:
        array = [
            [ 1,  2,  3, 4],
            [12, 13, 14, 5],
            [11, 16, 15, 6],
            [10,  9,  8, 7]
        ]

    OUTPUT: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
*/

let test = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

let test2 = [
  [1, 2, 3, 4],
  [14, 15, 16, 5],
  [13, 20, 17, 6],
  [12, 19, 18, 7],
  [11, 10, 9, 8]
];


console.log(spiralTraverse(test));
console.log(spiralTraverse(test2));
