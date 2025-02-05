// >>>>> ARRAY SPECIAL LOOPING METHOD
// - forEach
// - map        : Menghasilkan Array Baru
// - filter     : Filtering serta Menghasilkan Array Baru

const arrNumbers = [1, 5, 10, 15, 20]

let arrNumbersMap = arrNumbers.map((item, index) => {
    return item % 2
})
console.log(arrNumbersMap)

const arrNumbersFilter = arrNumbers.filter((item, index) => {
    return item % 2 === 0
})
console.log(arrNumbersFilter)