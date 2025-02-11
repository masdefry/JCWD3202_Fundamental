const {DeleteProductPromise, ShowProductPromise} = require('./delete.product.promise')

async function Main(){
    try {
        await DeleteProductPromise('Apel')
        await DeleteProductPromise('Anggur')
        // await DeleteProductPromise('Mangga')
        await ShowProductPromise()
    } catch (error) {
        console.log(error)
    }
}

Main()