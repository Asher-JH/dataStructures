const twoNumberSum = (a, targetSum) => {
    // Using hashTable so that can check if the targeted num(targetSum - currentNumber) exists in the array
  let hashTable = {}; //Init the hashTable
  // Loop thru each element once
  for(let i = 0; i < a.length; i++) {
      // Check if exists in above hashTable
    if (hashTable[targetSum - a[i]]) {
      return [a[i], targetSum - a[i]];
      // If not then add it to the table
    } else {
      hashTable[a[i]] = a[i];
    }
  };
  // If above if statement never became TRUE then return this empty array showing no 2 numbers sum up to targeted sum
  return [];
};

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

// Best Answer
const twoSum = (a, targetSum) => {
  a.sort((a, b) => a - b);
  let left = 0;
  let right = a.length - 1;
  while(left < right) {
    const currentSum  = a[left] + a[right];
    if(currentSum == targetSum) {
      return [a[left], a[right]];
    }
    if(currentSum < targetSum) {
      left++;
    } else {
      right ++;
    }
  }
  return [];
};

console.log(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10));