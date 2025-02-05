// >>>>> STACK
// LIFO (Last in, First out)

class Stack{
    #maxSize 
    #container = []

    constructor(maxSize = 10){
        this.#maxSize = maxSize
    }

    #isFull(){
        return this.#container.length >= this.#maxSize // true or false
    }

    push(element){
        if(this.#isFull()){
            console.log('Container is Full')
        }else{
            this.#container.push(element)
        }
    }

    pop(){
        this.#container.pop()
    }

    showContainer(){
        return this.#container
    }
}
const newStack = new Stack()
newStack.push(10)
newStack.push(100)
newStack.push(1000)
newStack.push(1000)
newStack.push(1000)
newStack.push(1000)
newStack.push(1000)
newStack.push(1000)
newStack.push(1000)
newStack.push(1000)
newStack.push(1000)
newStack.push(1000)
newStack.push(1000)
newStack.pop()
newStack.pop()
console.log(newStack.showContainer())