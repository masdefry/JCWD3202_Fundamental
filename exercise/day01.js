// PHONE NUMBER HIDING
// Input:
        var phoneNumber = 628114192
// Output in Terminal: 
//      628133571xxxx
var phoneNumberToString = phoneNumber.toString()
var lastFourDigits = phoneNumberToString.slice(phoneNumberToString.length-4, phoneNumberToString.length) // (9, 13)
console.log(phoneNumber.toString().replace(lastFourDigits, 'xxxx'))