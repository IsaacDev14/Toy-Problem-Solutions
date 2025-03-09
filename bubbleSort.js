function bubbleSort(arr) {
    let len = arr.length;
    
    for (let i = 0; i < len; i++) {
     // Last i elements are already in place
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the numbers
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
    // Driver code to test above
let input = [5, 6, 1, 3, 4, 2];
console.log(bubbleSort(input));