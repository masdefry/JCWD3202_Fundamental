// EVEN OR ODD
let number = 25
if(number % 2 === 0){
    console.log(`${number} is Even`)
}else{
    console.log(`${number} is Odd`)
}

number % 2 === 0? console.log('Even') : console.log('Odd')



// PRIME or NOT
// Bilangan Prima Adalah Bilangan yang Habis dibagi 1 dan Dirinya Sendiri
{
    let number = 7
    let isPrime = true
    for(let i=2; i<number; i++){
        if(number % i === 0){
        isPrime = false
        }
    }

    if(isPrime === true){
        console.log('Prime')
    }else{
        console.log('Not Prime')
    }
}



// FIND SUM 1 to N
let n = 5
let total = 0
for(let i=1; i<=n; i++){
    total += i
}

console.log(`Sum of 1 to ${n} = ${total}`)



// N FACTORIAL
let num = 5
let tot = 1
for(let i=num; i>=1; i--){
    tot *= i 
}
console.log(`${num}! = ${tot}`)



// N FIBONACCI
let seq = 15
let first = 0
let second = 1
for(let i=2; i<=seq; i++){
    let sum = first + second

    // Swap/Pergeseran Antara first & second
    first = second 
    second = sum 
}
console.log(second)