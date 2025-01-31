// >>>>> PATTERN
function PrintPattern(height){
    let printPattern = ''
    let num = 1
    for(let i=1; i<=height; i++){
        for(let j=1; j<=i; j++){
            printPattern += `${num} `
            num++
        }
        printPattern += '\n'
    }
    return printPattern
}
console.log(PrintPattern(10))



// ***
// ***
// ***
function PrintSquarePattern(height){
    let output = ''
    
    for(let i=1; i<=height; i++){
        for(let j=1; j<=height; j++){
            output += '*'
        }
        output += '\n'
    }

    return output 
}

console.log(PrintRectanglePattern(3))



// *****
// *****
// *****
function PrintRectanglePattern(length, width){
    let output = ''

    for(let i=1; i<=width; i++){
        for(let j=1; j<=length; j++){
            output += '*'
        }
        output += '\n'
    }

    return output 
}
console.log(PrintRectanglePattern(5, 3))

// *****
// ****
// ***
// ** 
// *
function PrintTrianglePattern(height){
    let output = ''

    for(let i=height; i>=1; i--){
        for(let j=i; j>=1; j--){ 
            output += '*'
        }
        output += '\n'
    }

    return output 
}

console.log(PrintTrianglePattern(3))



// >>>>> REMOVE ODD NUMBERS
function RemoveOddNumbers(arrNumbers){
    let evenNumber = []

    for(let item of arrNumbers){
        if(item % 2 === 0) evenNumber.push(item)
    }

    return evenNumber
}

console.log(RemoveOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))



// >>>>> SPLIT TEXT
function SplitText(sentence){
    let tempLetters = ''
    let arrLetters = []

    for(let item of sentence){
        if(item === ' '){
            arrLetters.push(tempLetters)
            tempLetters = ''
        }else if(item !== ' '){
            tempLetters += item
        }
    }
    if(tempLetters !== '') arrLetters.push(tempLetters)

    return arrLetters
}

console.log(SplitText('Hello World!'))