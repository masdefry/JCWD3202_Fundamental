// FIND ITEM PRIMITIVE
function FindItemWithPrimitiveDataType(arr){
    const arrResult = []
    arr.forEach(item => {
        if(typeof item !== 'object') arrResult.push(item)

        if(item === null) arrResult.push(item)
    })

    return arrResult
}
console.log(FindItemWithPrimitiveDataType([1, 'abc', null, undefined, false, [], {}, {}]))



// 