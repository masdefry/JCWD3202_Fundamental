/*
                                                VAR         LET         CONST
    - Memiliki Aturan Scope                     x           ok          ok
    - Penamaan Variable Tidak Boleh Duplikat    x           ok          ok
    - Value Tidak Boleh di Ubah                 x           x           ok
*/

const fullName = 'Defryan'

{
    const fullName = 'Ryan'
    {
        const fullName = 'Bebas'
    }
}
console.log(fullName)



const stadiumName = 'GBK'
var stadiumName = 'GBT'
// console.log(stadiumName)



const score = 100 // Define URL
score = 'abc'
console.log(score)