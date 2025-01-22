// >>>>> LOGICAL OPERATOR
// - OR ||
// - AND &&
// - NOT !

// - OR: Ketika Salah 1 Kondisi Bernilai TRUE, Maka Hasil Akhir Akan TRUE
if(3 == 3 || 3 === '3'){ // 3 == 3? TRUE || 3 === '3'? FALSE ---> TRUE
    console.log('Running')
}
console.log('abc' === 'bca' || '1' === '2') // FALSE
console.log(90 >= 90 || 1 <= 1 || 1 === 'abc') // TRUE

// - AND: Ketika Salah 1 Kondisi Bernilai FALSE, Maka Hasil Akhir Akan FALSE
console.log('abc' === 'bca' && '1' === '2') // FALSE
console.log(90 >= 90 && 1 <= 1 && 1 === 'abc') // FALSE
console.log(1 == 1 && false == false) // TRUE

// - NOT: Negasi/Kebalikan
console.log(!('abc' === 'ABC')) // !FALSE -> TRUE
console.log(!(1 == 1)) // !TRUE -> FALSE