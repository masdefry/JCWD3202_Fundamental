const arr1 = [
    { email: 'student01@gmail.com' },
    { email: 'student02@gmail.com' }
]

const arr2 = [
    { email: 'student01@gmail.com' },
    { email: 'student03@gmail.com' }
]

const joinArr = [...arr1, ...arr2]
const filterJoinArr = joinArr.filter((item, index, self) => {
    return index === self.findIndex((s) => s.email === item.email)
})
console.log(filterJoinArr)



// Swap Key and Value. Key to be Value and Value to be Key
// 01
const data = [{name: 'David', age: 20}]

const result = data.map((item) => {
    return Object.fromEntries(Object.entries(item).map(itm => [itm[1], itm[0]]))
})
console.log(result)

// 02
const swap = data.map(item => {
    let newObj = {}
    for(let key in item){
        newObj[item[key]] = key
    }
    return newObj
})
console.log(swap)



// 
