// CALCULATE STUDENT DATA

class StudentData{
    constructor(name, email, birthDate, score){
        this.name = name 
        this.email = email 
        this.birthDate = birthDate 
        this.score = score 
    }

    findAge(){
        return new Date().getFullYear() - new Date(this.birthDate).getFullYear()
    }
}

const students = [
    new StudentData('Immanuel', 'immanuel@gmail.com', '2000-05-23', 90), // method findAge(){ 2025 - 2000 }
    new StudentData('Abed', 'abed@gmail.com', '1990-12-03', 80), // method findAge(){ 2025 - 1990 }
    new StudentData('Kiky', 'kiky@gmail.com', '1994-03-01', 83) // method findAge(){ 2025 - 1994 }
]
function CalculateArrayStudents(studentsData){
    let minScore = studentsData[0].score // 80
    let maxScore = studentsData[0].score // 90
    let totalScore = studentsData[0].score // 90 + 80 + 83

    for(let i=1; i<studentsData.length; i++){
        if(studentsData[i].score < minScore){
            minScore = studentsData[i].score
        }
        if(studentsData[i].score > maxScore) maxScore = studentsData[i].score
        totalScore += studentsData[i].score
    }

    let minAge = studentsData[0].findAge()
    let maxAge = studentsData[0].findAge()
    let totalAge = studentsData[0].findAge()

    for(let i=1; i<studentsData.length; i++){
        if(studentsData[i].findAge() < minAge) minAge = studentsData[i].findAge()
        if(studentsData[i].findAge() > maxAge) maxAge = studentsData[i].findAge()
        totalAge += studentsData[i].findAge() 
    }

    return {
        resultMinScore: minScore,
        resultMaxScore: maxScore, 
        resultAvgScore: totalScore/studentsData.length, 
        resultMinAge: minAge, 
        resultMaxAge: maxAge, 
        resultAvgAge: totalAge/studentsData.length
    }
}

console.log(CalculateArrayStudents(students))