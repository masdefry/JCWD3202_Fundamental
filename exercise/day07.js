function CompareTwoObject(obj1, obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length ) return false
    
    for(let key in obj1){ // key: b
        if(obj1[key] !== obj2[key]){ // obj1[b] !== obj2[b] >>> false !== 'abc'? TRUE
            return false
        }
    } 
    return true
}
// console.log(CompareTwoObject({a: 1}, {a: 100, b: 'abc'}))
console.log(CompareTwoObject({a: 1, b: false}, {a: 1, b: 'abc'}))
// console.log(CompareTwoObject({a: 1, b: false}, {b: false, a: 1}))
// console.log(CompareTwoObject({a: 1}, {a: 1}))
// console.log(CompareTwoObject({a: 'abc'}, {a: 100}))



function GetIntersection(obj1, obj2){
    const newObj = {}
    
    for(let key in obj1){ // key: a
        if(obj1[key] === obj2[key]){ // obj1[a] === obj2[a] >>> 1 === 1? True
            newObj[key] = obj1[key] // newObj[a] = obj1[a] >>> 1
        }  
    }

    return newObj
}
console.log(GetIntersection({a: 1, b: 2}, {a: 1}))



function RemoveDuplicateDataArrays(data1, data2){
    const allData = [...data1, ...data2]
    const registeredStudent = [] // [Student1, Student2]
    console.log(allData)
    allData.forEach((item, index) => {
        if(!registeredStudent.includes(item.name)){
            registeredStudent.push(item.name)
        }else{
            allData.splice(index, 1)
        }
    })

    return allData
}
console.log(RemoveDuplicateDataArrays(
    [
        { name: 'Student 1', email : 'student1@mail.com'  }, 
        { name: 'Student 2', email : 'student2@mail.com'  }
    ]
    ,
    [
        { name: 'Student 1', email : 'student1@mail.com'  }, 
        { name: 'Student 3', email : 'student3@mail.com'  },
        { name: 'Student 1', email : 'student1@mail.com'  },
        { name: 'Student 4', email : 'student1@mail.com'  },  
        { name: 'Student 4', email : 'student1@mail.com'  }
    ]
))



function SwapProperty(student){
    const objStudent = student[0] // {name: 'David', age: 20}
    const newObj = {}

    for(let key in objStudent){
        newObj[objStudent[key]] = key 
    }

    console.log(newObj)
}

SwapProperty([
    { name: 'David', age: 20 }
])



function FactorialRecursive(number){
    if(num === 0){
        return 1
    }else{
        return number * FactorialRecursive(number-1)
    }
}

FactorialRecursive(5)