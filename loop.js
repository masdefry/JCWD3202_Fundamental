// >>>>> LOOPING
// Iterasi/Perulangan
// Start Condition, End Condition, Exit Way

// Case. 
var text = 'Hello, JCWD3202!'
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)

// >>> WHILE
/*
    while(condition){
        block of code
    }
*/
var start = 1 // 1 -> 2 -> 3 -> 4 -> 5 -> 6
while(start <= 5){ // 1<=5? TRUE -> 2<=5? TRUE -> 3<=5? TRUE -> 4<=5? TRUE -> 5<=5? TRUE -> 6<=5? FALSE!
    console.log(start) // console.log(1) -> console.log(2) -> console.log(3) -> console.log(4) -> console.log(5)
    start++
}



var strt = 5
while(strt < 10){
    console.log('Welcome!')
    strt++
}



var i = 'abcde'
while(i.length > 10){ // 5>10? FALSE
    console.log('Purwadhika')
    i++
}
// >>> DO WHILE
/*
    do{
        block of code
    }while(condition)
*/
let str = 1 // 1 -> 2 -> 3 -> 4 -> 5 -> 6
do{
    console.log(str) // console.log(1) -> console.log(2) -> console.log(3) -> console.log(4) -> console.log(5)
    str++
}while(str <= 5) // 2<=5? TRUE -> 3<=5? TRUE -> 4<=5? TRUE -> 5<=5? TRUE -> 6 <= 5? FALSE



let starttt = 10
do{
    console.log(starttt) // console.log(10)
    starttt++ // 10 -> 11
}while(starttt < 10) // 11 < 10? FALSE



// >>> FOR
/*
    for(start condition; end condition; exit way){
        block of code
    }
*/
for(let i=1; i<=5; i++){
    console.log(i)
}



// >>> BREAK & CONTINUE
// - BREAK      : Untuk Menghentikan Looping
// - Continue   : Untuk Men-Skip Looping

for(let start=1; start <= 5; start++){
    if(start === 3){ // 1 === 3? FALSE -> 2 === 3? FALSE -> 3 === 3? TRUE
        break; 
    }
    console.log(start) // console.log(1) -> console.log(2)
}

for(let start=1; start <= 5; start++){
    if(start === 3){
        continue 
    }
    console.log(start) 
}