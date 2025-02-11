const product = ['Anggur', 'Jeruk', 'Apel']
function DeleteProductPromise(productName){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(product.indexOf(productName) === -1){
                reject('Product Not Found')
            }else{
                product.splice(product.indexOf(productName), 1)
                return resolve()
            }
        }, 3000)
    })
}
function ShowProductPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.forEach((item, index) => {
                console.log(`${index+1}. ${item}`)
            })
        }, 1000)
    })
}



// PROMISE CHAINING
DeleteProductPromise('Anggur')
.then((res) => {
    return DeleteProductPromise('Jeruk')
})
.then((res) => {
    ShowProductPromise()
})
.catch((err) => {
    console.log('Error')
    console.log(err)
})