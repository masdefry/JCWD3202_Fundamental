// >>>>> ARRAY
// Case. Apel, Jeruk, Nanas

// CRUD (Create, Read, Update & Delete)
// - Create
let fruits = ['Apel', 'Jeruk', 'Nanas']
// - Read
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
// - Update
fruits[2] = 'Semangka'
console.log(fruits)
// - Delete
delete fruits[2]
console.log(fruits)
console.log(typeof fruits[2])



// >>> METHODS
// - Push: Menambahkan Data di Index Paling Akhir
let arrRandom = ['Abc', 123, true, undefined, null]
arrRandom.push('Push')
arrRandom.push('Push')
console.log(arrRandom)

// - Unshift: Menambahkan Data di Index Paling Awal
let students = ['Raihan', 'Adit', 'Ihsan']
students.unshift('Seno')
students.unshift('Seno')
students.unshift('Seno')
console.log(students)

// - Pop:Menghapus Data di Index Paling Akhir
let foods = ['Pizza', 'Burger']
foods.pop()
console.log(foods)

// - Shift: Menghapus Data di Index Paling Awal
let numbers = [1, 2, 3, 4, 5]
numbers.shift()
numbers.shift()
console.log(numbers)

// - Slice
let alphabets = ['a', 'b', 'c', 'd', 'e']
console.log(alphabets.slice(0, 3))

// - Join: Merubah Array Menjadi String
let property = ['Hotel', 'Apartment', 'Villa']
console.log(property.join(', '))

// - Length
let randomNum = [100, 1000, 100000]
console.log(randomNum.length)

// - Indexof
let randomFruits = ['Pisang', 'Jeruk', 'Anggur']
console.log(randomFruits.indexOf('Anggur'))

// - Splice
// arr.splice(startIndex, totalDataToDelete, newValue, newValue, ...)
// Delete Data      : arr.splice(startIndex, totalDataToDelete)
// Menambah Data    : arr.splice(startIndex, totalDataToDelete, newValue, newValue, ...)
let randomCars = ['Honda', 'Wuling', 'Toyota']
randomCars.splice(1, 0, 'Suzuki', 'BYD')
console.log(randomCars)