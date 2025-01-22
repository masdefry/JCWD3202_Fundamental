let alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEF' // maxIndex: 25; length: 26
console.log(alphabets[0])
console.log(alphabets[1])
console.log(alphabets[2])
console.log(alphabets[3])

for(let i=0; i<=alphabets.length-1; i++){
    console.log(alphabets[i]) // alphabets[0] -> alphabets[1] -> alphabets[2] -> ...
}



// SHOW VOWEL LETTERS (a, i, u, e, o)
// Input    :
    let textDescription = 'Job Connector Web Development'
/*
   Output in Terminal   :
    o 
    o
    e
    o
    e
    e
    e
    o
    e
*/
for(let i=0; i<=textDescription.length-1; i++){
    if(textDescription[i] === 'a' 
        || textDescription[i] === 'i' 
        || textDescription[i] === 'u' 
        || textDescription[i] === 'e' 
        || textDescription[i] === 'o'
    ){
        console.log(textDescription[i])
    }
}