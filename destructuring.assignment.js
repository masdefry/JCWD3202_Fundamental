// >>>>> DESTRUCTURING ASSIGNMENT
// Property Object yang di simpan ke Masing2 Variable
let user = {
    username: 'ryan01', 
    password: 'abc123', 
    birthDate: 2010
}

let { username, password, birthDate } = user 
console.log(username)
console.log(password)
console.log(birthDate)