let firstname= 'Ismail'
let lastname = 'Bola'
console.log(firstname,lastname)
let age = 25
console.log(age)
let stundentID = 'st-0001'
const gpa = 4.04
let graduationDate = ''
let isEnrolled = false
console.log(stundentID)
console.log(gpa)
console.log(graduationDate)
console.log(isEnrolled)

firstname ='Aisha'
console.log(firstname)

// Task 2 - Operators
let totalScore = 0 // Assign zero to totalScore
totalScore += 45 // Add 45 to totalScore
console.log(totalScore)
totalScore +=  30 // Add 30 to totalscore
console.log(totalScore)
totalScore -= 5  //( Deducted 5 due to error  in the examination )
console.log(totalScore)
//The score is doubled for a bonus round
totalScore *= 2
console.log(totalScore)
totalScore ++
console.log(totalScore) 
totalScore = totalScore % 7
console.log(totalScore)

// Task 3 - Conversion
let  studentAge = '19';
let examScore = '74.5';
let passMark = '50';
let studentName = 101;

let stdAge = parseInt(studentAge);
let exScore = parseFloat(examScore);
let psMark = Number(passMark);
let stName = String(studentName);
console.log(stdAge)
console.log(exScore)
console.log(psMark)
console.log(stName)

let checkScore = exScore > psMark
console.log(checkScore)

//Task 4- Condition Statements
let Grade = ''
function score (Score){
    if (Score >= 70) {
        Grade = 'A- Distinction'
        console.log(Grade)}

    else if (Score >= 60 & Score < 70){
        Grade = 'B- Merit'
        console.log(Grade)
    }
    else if (Score >= 50 & Score < 60){
        Grade =  'C- Pass'
        console.log( Grade)
    }
    else if (Score >= 40 & Score <50){
        Grade = 'D- Near Pass'
        console.log(Grade)
    }
    else{
        Grade = 'F- Fail'
        console.log(Grade)
    }
}
console.log(Grade)
score(22)
score(44)
score(74)

// Part B

let month = 12;
month = 13 ;
month = 9;

switch (month) {
case 1:
console.log("January");
break;
case 2:
    console.log('Febuary')
    break;
case 3:
    console.log('March')
    break;
case 4:
console.log("April")
break;
case 5:
console.log("May")
break;
case 6:
    console.log("June")
    break;
case 7:
console.log("July");
break;
case 8:
    console.log('August')
    break;
case 9:
    console.log('September')
    break;
case 10:
    console.log('October')
    break;
case 11:
    console.log('November')
    break;
case 12:
    console.log('December')
    break;
default:
console.log("Invalid Month");
}
