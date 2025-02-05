// SUM ITEM NUMBER in ARRAY
function SumItemNumber(array){
    let totalItemNumber = 0 // 0+1=1 ---> 1+2=3

    array.forEach((item) => {
        if(typeof item === 'number'){
            totalItemNumber += item
        }
    })

    return totalItemNumber
}
console.log(SumItemNumber(['3', 1, 'abc', true, undefined, null, 2])) 


// 
function SliceItemNumbers(maxSize, ...numbers){ // ...numbers: Rest Parameters
    return numbers.slice(0, maxSize)
}

console.log(SliceItemNumbers(5, 10, 11, 12, 33, 1000, 10, 11, 12, 33, 1000))



// COMBINE TWO ARRAYS
function CombineTwoArrays(arr1, arr2){
    // return [...arr1, ...arr2]
    return arr1.concat(arr2)
}
console.log(CombineTwoArrays([1000, 99, 77], ['BCA', 'BNI', 'Mandiri']))



// FINDDUPLICATENUMBERS
function FindDuplicateNumbers(arrNum){
    let duplicateNums = []

    arrNum.forEach((item, index) => {
        let lastIndexOf = arrNum.lastIndexOf(item)

        if(index !== lastIndexOf){
            if(!duplicateNums.includes(item)){
                duplicateNums.push(item)
            }
        }
    })

    console.log(duplicateNums)
}

FindDuplicateNumbers([1, 2, 2, 2, 3, 3, 4, 5, 5])



// FIND UNIQUE NUMBERS FROM 2 ARRAYS
function FindUniqueNumbers(arr1, arr2){
    const uniqueNumbers = []

    arr1.forEach((item) => {
        if(!arr2.includes(item)){
            if(!uniqueNumbers.includes(item)) uniqueNumbers.push(item)
        }
    })

    arr2.forEach((item) => {
        if(!arr1.includes(item)){
            if(!uniqueNumbers.includes(item)) uniqueNumbers.push(item)
        }
    })

    console.log(uniqueNumbers)
}
FindUniqueNumbers([1, 1, 2, 3, 4, 5], [3, 4, 5, 6, 7])



// 
function SumDuplicateItem(arr){
    const objNum = {} // {'10': 1} ---> {'10':1, '20': 1} ---> {'10':1, '20': 1, '30': 1} ---> {'10':2, '20': 1, '30': 1}

    arr.forEach(item => {
        if(objNum[item] === undefined){
            objNum[item] = 1
        }else{
            objNum[item] += 1
        }
    })
    
    let total = 0
    for(let key in objNum){
        if(objNum[key] > 1){
            total += parseInt(key) * objNum[key]
        }
    }

    return total
}

console.log(SumDuplicateItem([10, 20, 30, 10, 40, 50, 10, 50]))



function Suit(player01){
    const computerPlayer = ['rock', 'paper', 'scissor']
    const randomIndex = Math.floor(Math.random() * 3)

    console.log(`Player: ${player01}`)
    console.log(`Computer: ${computerPlayer[randomIndex]}`)

    if(computerPlayer[randomIndex] === 'rock' && player01 === 'paper'){
        console.log('Player Win')
    }else if(computerPlayer[randomIndex] === 'rock' && player01 === 'scissor'){
        console.log('Computer Player Win')
    }else if(computerPlayer[randomIndex] === 'rock' && player01 === 'rock'){
        console.log('Draw')
    }else if(computerPlayer[randomIndex] === 'paper' && player01 === 'paper'){
        console.log('Draw')
    }else if(computerPlayer[randomIndex] === 'paper' && player01 === 'scissor'){
        console.log('Player Win')
    }else if(computerPlayer[randomIndex] === 'paper' && player01 === 'rock'){
        console.log('Computer Win')
    }else if(computerPlayer[randomIndex] === 'scissor' && player01 === 'paper'){
        console.log('Computer Player Win')
    }else if(computerPlayer[randomIndex] === 'scissor' && player01 === 'scissor'){
        console.log('Draw')
    }else{
        console.log('Player Win')
    }
}

Suit('rock')