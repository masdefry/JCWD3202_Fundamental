const fruits = new Set()

fruits.add('Apel')
fruits.add('Banana')
fruits.add('Mango')
fruits.delete('Mango')
console.log(fruits.has('Apel'))
// fruits.clear()
console.log(fruits.size) // .size mirip .length
console.log(fruits.entries())
fruits.forEach(item => {
    console.log(item)
})
console.log(fruits)