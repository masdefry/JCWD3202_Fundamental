// CONVERT EXCEL SHEET COLUMN to NUMBER
function ConvertExcelSheet(sheetColumn){
    const column = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let convertToNum = 0
     
    if(sheetColumn.length === 1){
        convertToNum = column.indexOf(sheetColumn)+1
    }else{
        for(let i=0; i<=sheetColumn.length-2; i++){
            convertToNum += 26 * (column.indexOf(sheetColumn[i])+1)
        }
        convertToNum += column.indexOf(sheetColumn[sheetColumn.length-1])+1
    }

    console.log(convertToNum)
}

ConvertExcelSheet('A')



// FIND SINGLE NUMBER FROM AN ARRAY
// Ex.  [1, 2, 3, 2, 3] ---> 1
//      [1, 1, 2]       ---> 2
//      [100]           ---> 100

function FindSingleOne(arr){
    const singleNum = []

    arr.forEach((item, index) => {
        if(arr.indexOf(item) === index && arr.lastIndexOf(item) === index) singleNum.push(item)
    })

    return singleNum
}

console.log(FindSingleOne([1, 1, 2]))
console.log(FindSingleOne([4,1,2,1,2]))



// ANAGRAM
function isAnagram(str1, str2){
    if (s.length !== t.length) return false;
    return s.split('').sort().join('') === t.split('').sort().join('');
}