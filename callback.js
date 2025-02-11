// >>>>> CALLBACK
// Function yang di jadikan Argument oleh Function Lain

// - Indirect Callback
// - Direct Callback



// Case. Calculator dengan 2 Fungsi. Fungsi Pertama untuk Menjumlahkan, Fungsi Kedua untuk Menampilkan Hasil
// function Penjumlahan(num1, num2, callback){ // num1 = 10, num2 = 5, callback = Output
//     let total = num1 + num2 // 10 + 5 = 15
//     return callback(total) // Output()
// }
// function Output(result){
//     return result
// }
// console.log(Penjumlahan(10, 5, Output))



// - Direct CB
function Penjumlahan(num1, num2, callback, callback1){ // num1 = 10, num2 = 5, callback = Output
    let total = num1 + num2 // 10 + 5 = 15
    
    return callback(total) // Output()
}
console.log(3, 3, function(result){
    return result 
})
console.log(Penjumlahan(10, 5, (result) => {
    return result
}))



function Penjumlahan(num1, num2){ 
    let total = num1 + num2 
    return total 
}
function Output(result){
    return result
}
let total = Penjumlahan(3, 5) // 8
console.log(Output(total))



// Delete Product (3s)
// Show Current Product (1s)
const product = ['Anggur', 'Jeruk', 'Apel']
function DeleteProduct(productName, callback){
    setTimeout(() => {
        product.splice(product.indexOf(productName), 1)
        callback()
    }, 3000)
}
function ShowProduct(){
    setTimeout(() => {
        product.forEach((item, index) => {
            console.log(`${index+1}. ${item}`)
        })
    }, 1000)
}

DeleteProduct('Apel', 
    function(){
        DeleteProduct('Jeruk', function(){
            DeleteProduct('Anggur', 
                ShowProduct
            )
        })
    }
)