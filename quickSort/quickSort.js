const arr = [8,5,3,10,12,54,1,5,2,0,4,7,11,17]

function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    let less = []
    let greater = []

    let pivotIndex = Math.floor(Math.random() * arr.length) // or we can get the middle value of the array
    let pivot = arr[pivotIndex]

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            less.push(arr[i])
        } else {
            greater.push(arr[i])
        }
    }

    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(arr));
