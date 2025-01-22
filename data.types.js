// >>>>> DATA TYPES
// Primitive Data Types
// >>> String
// Segala Sesuatu yang Dibungkus dengan '' / "" / ``
var fullName = 'Defryan'
var address = "Bogor"
var hobby = `Futsal`
console.log(typeof fullName)
console.log(typeof address)
console.log(typeof hobby)

// >>> Number
var score = 100
var discount = 7.5
console.log(typeof score)
console.log(typeof discount)

// >>> Undefined
var name 
// >>> Null
var birthDate = null 
console.log(typeof name)
console.log(typeof birthDate)

// >>> Boolean
// Tipe Data Bernilai True/False Saja
var isGradute = true 
var isMarried = false 
console.log(typeof isGradute)
console.log(typeof isMarried)



// >>>>> BUILT IN METHODS
// Fungsi Bawaan dari JS untuk Memanipulasi Data
// >>> String
// - Slice
var text = 'Hello, World!'
console.log(text.slice(0, 5))
// - indexOf
var description = 'Hello, Im Fullstack Developer'
console.log(description.indexOf('e')) 
// - length: Menghitung Jumlah Karakter
var school = 'Purwadhika'
console.log(school.length)
// - toLowerCase / toUpperCase
var textDescription = 'hElLo'
var convertToLowerCase = textDescription.toLowerCase()
var convertToUpperCase = textDescription.toUpperCase()
console.log(convertToLowerCase)
console.log(convertToUpperCase)
// - subStr & subString
var title = 'JC Web Development Purwadhika'
console.log(title.substring(0, 3))
console.log(title.substring(3, 0)) // Di Swap Ketika Nilai Pertama Lebih Besar dari Nilai Kedua
console.log(title.substr(0, 3))
console.log(title.substr(3, 0))
// - replace
var introductions = 'I have blue table and blue chair'
console.log(introductions.replace('blue', 'xxx'))
console.log(introductions.replaceAll(/blue/g, 'xxx'))



// >>> Number 
// - toString
var numbers = 12345
console.log(numbers)
console.log(numbers.toString())
// - toFixed: Pembulatan Bilangan Sesuai Aturan Matematik
var score = 90.4
console.log(score.toFixed())
// - Number & parseInt: Convert String to Number
var str = '12abc3'
console.log(Number(str)) // NaN (Not a Number)
console.log(parseInt(str)) // 12



// >>> DateTime
var now = new Date()
console.log(now)
console.log(now.getDate())
console.log(now.getMonth() + 1)
console.log(now.getFullYear())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())