// CONVERT EXCEL COLUMN ALPHABET TO COLUMN NUMBER
function ConvertExcelColumn(columnSheet){
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let columnSheetNum = 0
    for(let i=0; i<=columnSheet.length-2;i++){
        columnSheetNum += (alphabets.indexOf(columnSheet[i])+1) * 26
    }

    columnSheetNum += alphabets.indexOf(columnSheet[columnSheet.length-1]) + 1

    console.log(columnSheetNum)
}

ConvertExcelColumn('A')
ConvertExcelColumn('AB')
ConvertExcelColumn('BA')
ConvertExcelColumn('AAB')



// FIND SINGLE NUMBER
function FindSingleNumberInArray(arr){
    const singleNumber = []
    
    arr.forEach((item, index) => {
        if(arr.indexOf(item) === index && arr.lastIndexOf(item) === index){
            singleNumber.push(item)
        }
    })

    return singleNumber
}

console.log(FindSingleNumberInArray([1, 2, 2]))
console.log(FindSingleNumberInArray([2, 3, 2, 2]))



function IsAnagram(str1, str2){
    let string1 = str1.split('').sort().join('')
    let string2 = str2.split('').sort().join('')

    if(string1 === string2){
        return `Is Anagram`
    }else{
        return 'Not Anagram'
    }
}

console.log(IsAnagram('anagram', 'nagaram'))