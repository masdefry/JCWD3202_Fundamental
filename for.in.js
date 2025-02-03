let user = {
    name: 'Frengky',
    address: 'Tangerang', 
    age: 30
}

for(let key in user){
    console.log(key) // name, address, age
    console.log(user[key]) // user[name], user[address], user[age]
}
console.log(user.name)
console.log(user.address)
console.log(user['name'])
console.log(user['address'])
console.log(user['age'])