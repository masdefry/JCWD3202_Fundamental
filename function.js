// >>>>> FUNCTION
// Block of Scope untuk Mengorganisir Code
// 1. Tidak Perlu Menuliskan Code yang Sama Berulang-Ulang
// 2. Code Lebih Rapi & Terorganisir
// - Declarative Function
function Greeting(){
    console.log('Welcome, User01!')
}
Greeting()

// - Function Expression
let Welcome = function(){
    console.log('Welcome!')
}
Welcome()

// - Arrow Function
let WelcomeSign = () => {
    console.log('Hello')
}
WelcomeSign()



// >>> Argument & Parameter
// Argument : Data yang dikirim Menuju Function
// Parameter: Variable untuk Menambung Data Argument
function LoginGreeting(username, password){
    console.log(`Welcome, ${username}. ${password}`)
}
LoginGreeting('defryan', 'abc123')
LoginGreeting('aboy', 'bca321')



const DisplayProfile = (name, phoneNumber, address = 'Indonesia') => {
    console.log(
        `Name   : ${name}. Phone    : ${phoneNumber}. Address   : ${address}`
    )
}
DisplayProfile('Immanuel', 6281118410006)



function Random(a, b, ...more){ // ...more -> Rest Parameter
    console.log(a)
    console.log(b)
    console.log(more)
}

Random(
    'abc',
    true, 
    123, 
    undefined, 
    null
)



// >>> Function with Return
// Function dengan Output

function Penjumlahan(angka1, angka2){
    return [angka1, angka2, angka1 + angka2]
}
let resultPenjumlahan = Penjumlahan(10, 3) 
console.log(resultPenjumlahan)
