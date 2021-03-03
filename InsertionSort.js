const insertionSort = arr => {
    let j, currentValue;
    for(let i = 1; i < arr.length; i++) {
        currentValue = arr[i];
        j = i - 1;
        while(currentValue < arr[j] && j >= 0) {
            swap(j, currentValue, arr);
            j = j - 1;
        }
    }
    return arr;
};

const swap = (j, currentValue, arr) => {
    let temp = arr[j];
    arr[j] = currentValue;
    arr[j+1] = temp;
};

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]));
console.log(insertionSort([1, 5, 3, 3, 56, 3, 8]));
console.log(insertionSort([9, 1, 2, 34, 9, 2, 11]));
console.log(insertionSort([3, 2, 1, 6, 3, 7, 6]));


//Answer 
function insertSort(a) {
    for(let i = 1,; i< a.length; i++) {
        let j = i;
        while(j > 0 && array[j] < array[j -1]) {
            swaper(j, j-1, a);
            j--;
        }
    }
    
    return a;
}

const swaper = (i, j, arr) => {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
};