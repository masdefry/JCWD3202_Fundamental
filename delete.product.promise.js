const product = ['Anggur', 'Jeruk', 'Apel']
function DeleteProductPromise(productName){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                if(productName === undefined){
                    throw new Error('Product Name Must be Filled!')
                }
                if(typeof productName !== 'string'){
                    throw new Error('Product Name Must be a String!')
                }
                if(product.indexOf(productName) === -1){
                    throw new Error('Product Not Found')
                }else{
                    product.splice(product.indexOf(productName), 1)
                    return resolve()
                }
                resolve()
            } catch (error) {
                reject(error)                
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

module.exports = {
    DeleteProductPromise, 
    ShowProductPromise
}