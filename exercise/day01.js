// FIND AREA of RECTANGLE
var width = 3
var length = 5
console.log(`Area of Rectangle = ${width * length}`)
console.log('Area of Rectangle = ' + width * length)

// FIND YEAR, MONTH, DAY
var totalDays = 366

var findYear = Math.floor(totalDays / 365)
var totalDaysLeft = totalDays % 365
var findMonth = Math.floor(totalDaysLeft / 30)
totalDaysLeft = totalDaysLeft % 30
console.log(`Total Days ${totalDays} = ${findYear} Year, ${findMonth} Month, ${totalDaysLeft} Days`)

// FIND DIFFERENCE DAYS BETWEEN TWO DATE
var date01 = new Date('2025-01-22')
var date02 = new Date('2025-01-05')
var differenceDateInMs = date01 - date02 // Selisih Hari Dalam Hitungan Ms
var differenceDateInDays = differenceDateInMs / (1000 * 60 * 60 * 24) // Konversi Ms Menjadi Hari
console.log(differenceDateInDays)