// >>>>> ACCESS MODIFIER

// - Encapsulation (Penyembunyian Data)
// Mencegah Pengaksesan Langsung ke Data yg Sensitif

// - Keamanan
// Menjaga data agar tidak dimanipulasi secara sembarangan

// - Modularitas
// Meningkatkan modularitas dan mendorong pengembangan kode



// User : username, password, phoneNumber, email, idCardNumber

class User{
    #password // Private Property
    #phoneNumber
    #idCardNumber

    constructor(username, password, phoneNumber, idCardNumber){
        this.username = username 
        this.#password = password 
        this.#phoneNumber = phoneNumber
        this.#idCardNumber = idCardNumber
    }

    set ValidateEmail(email){
        if(!email.includes('@')){
            console.log('Email Not Valid')
        }else{
            this.email = email
        }
    }

    get ShowPhoneNumber(){
        return this.#phoneNumber.slice(0, this.#phoneNumber.length-4) + '****'
    }
}

let user1 = new User('immanuel', 'asf321', '6281215891000', '311242101201230')
user1.ValidateEmail = 'immanuel@gmail.com'
console.log(user1)
console.log(user1.ShowPhoneNumber)