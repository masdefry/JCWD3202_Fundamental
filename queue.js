// QUEUE
// FIFO (First in, First out)

class Queue{
    #container = [] 
    #maxSize 

    constructor(maxSize = 10){
        this.#maxSize = maxSize
    }

    #isFull(){
        return this.#container.length >= this.#maxSize
    }

    push(element){
        if(this.#isFull()){
            console.log('Container is Full')
        }else{
            this.#container.push(element)
        }
    }

    shift(){
        this.#container.shift()
    }

    showContainer(){
        return this.#container
    }
}

const newQueue = new Queue()
newQueue.push(1)
newQueue.push(2)
newQueue.push(3)
newQueue.shift()
newQueue.shift()
console.log(newQueue.showContainer())