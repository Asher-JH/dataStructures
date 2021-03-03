const bubbleSort = arr => {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = (i + 1); j < arr.length; j++) {
        if(arr[i] >= arr[j]) {
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
  }
  return arr;
};

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));
console.log(bubbleSort([10, 2, 11, 4, 3, 6, 2]));
console.log(bubbleSort([34, 5, 22, 1, 2, 3, 3]));
console.log(bubbleSort([56, 34, 2, 2, 4, 5, 12]));



const swap = (i, j, arr) => {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
};


// O(N^2) TIME | O(1) space
const bubbleSortAdvanced = arr => {
    let isSorted = false;
    let counter = 0;
    while(!isSorted) {
        isSorted = true;
        for(let i = 0; i < arr.length - 1 - counter; i++) {
            if(arr[i] > arr[i + 1]) {
                swap(i, i + 1, arr);
                isSorted = false;
            }
        }
        counter++;
    }
    return arr;
};