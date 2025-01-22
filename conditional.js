// >>>>> CONDITIONAL STATEMENT
// Digunakan untuk Menentukan Code Program Mana yang Akan di Eksekusi

// >>> Syntax:
/*
    if(condition){
        block of code
    }
*/

var age = 10
if(age >= 17){ // 10 >= 17? false 
    console.log('You Can Register an ID Card')
}

if(20 == 'abc'){ // false
    console.log('Hello')
}

/*
    if(condition){
        block of code
    }else{
        block of code
    }
*/
var exam01Score = 79
if(exam01Score >= 80){
    console.log('Exam Passed')
}else{
    console.log('Exam Failed')
}

/*
    if(condition){
        block of code
    }else if(condition){
        block of code
    }else if(condition){
        block of code
    }else{
        block of code
    }

    >= 90 ---> A
    > 80  ---> B
    >= 70 ---> C
    <70   ---> D
*/
var score = 88
if(score >= 90){ 
    console.log('Grade A')
}else if(score > 80){ 
    console.log('Grade B')
}else if(score >= 70){
    console.log('Grade C')
}else{
    console.log('Grade D')
}



var studentScore = 90
if(studentScore > 90){ 
    console.log('Very Good')
}
if(studentScore > 70){ 
    console.log('Good')
}
if(studentScore > 60){ 
    console.log('Bad')
}else{
    console.log('Undefined')
}



// >>> Ternary Operator 
// Syntax:
/*
    condition? block of code if TRUE : block of code if FALSE
*/
/*
    var exam01Score = 79
    if(exam01Score >= 80){
        console.log('Exam Passed')
    }else{
        console.log('Exam Failed')
    }
*/
var exam02Score = 88
exam02Score >= 80? console.log('Passed') : console.log('Failed')

/*
    >= 90   -> A
    >= 80   -> B
    <  80   -> C
*/
var exam03Score = 100
exam03Score >= 90? 
console.log('A') : exam03Score >= 80? 
console.log('B') : console.log('C')