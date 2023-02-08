// Write a function that returns both the minimum and maximum number of the given list/array, as an array.


const minMax = (arr) => {
    let finalArr = []

    finalArr.push(Math.min(...arr))
    finalArr.push(Math.max(...arr))

    return finalArr
}

console.log(minMax([1, 2, 3, 4, 5]))