//method 1//
/*const  name1 ="suresh";
const  name2 ="Ramesh";

const marks1 = 50;
const marks2 = 40;
 if( marks1 > marks2){

console.log(name1,"has scroce highest marks =",marks1);
}
 else
   {
  console.log(name2,"has scroce highest marks =",marks2);
}
  

// method 2 
 let winnerName;
 let winnerMarks;

if (marks1 > marks2) {
    winnerName = name1;
    winnerMarks = marks1;
}else{
   winnerName = name2;
    winnerMarks = marks2;
}
console.log(winnerName,"high score marks =",winnerMarks);*/

//method 3 coding wold as optimized
/* let winnerName = name1;
 let winnerMarks = marks1;

if (marks2 > marks1 ){
  winnerName = name1;
    winnerMarks = marks2;
}
console.log(winnerName,"high score marks =",winnerMarks);


/* ======== ternary operator=========*/
/* check if a number is even or odd */
/* const num1=12;
 
 //directly write the ternory operator//
 //method 1//
 num1 % 2 == 0 ? console.log(num1 + " is Even"):console.log(num1 + " is odd");

 // Method 2
 const isEvenOrOdd = num1 % 2 == 0 ? "Even":"odd";
console.log(num1 + " is" + isEvenOrOdd);

 // check  if positive or negative
const num1 = -10;
 num1> 0 ? console.log(num1 + " positive"):console.log(num1 + "negative");

/*check if  a number positive,negative or zero */

/*const num2 = 0;
const isposnegativezero =
num2 > 0 ?"positive":
num2 ==0 ? "zero" : 
  "negative";
console.log(num2 + "is"+ isposnegativezero);

/*home work :try all yesterday's question with ternary operator*/


 // print the name scrore of highest scroring u student using ternory // 

 
const name1 ="suresh";
const name2 ="ramesh";
  
mark1=70;
mark2=50;

 name1 > name2 ? console.log(name1,"high score",mark1):
 console.log(name2,"high score",mark2);

//print greatest among three number//

const num1 = 100;
const num2 = 60;
const num3 = 50;
/*if(num1 >= num2 && num1 >= num3);*/

num1 > num2 ? console.log(num1):num2 > num3 ? console.log(num2):console.log(num3);

// tip max of two numbers//
 const maxOfNum2 = Math.max(num1,num2);
  const minOfNum2 = Math.min(num1,num2);

/*question:print 1-7 into weekday
 1. monday
 2. Tuesday
 3. wensday and so onabort.
*/
 

let daynumber = 5;

  switch (daynumber) {
    case 1 :
  console.log("monday");
    break;

     case 2 :
  console.log("Tuesday");
    break;

     case 3 :
  console.log("wensday");
    break;

     case 4 :
  console.log("Thuesday");
    break;

 case 5 :
  console.log("Frieday");
    break;

     case 6 :
  console.log("saturday");
    break;

     case 7 :
  console.log("sunday");
    break;
  
    default:
      console.log("invalid day number")
  }
  

//grading system using switch statement//
let marks = 90;

switch (true) {
case (marks >= 90 && marks <= 100):
console.log("grade: A");
   break;

case (marks >= 80 && marks < 90):
console.log("grade: B");
   break;

case (marks >= 70 && marks < 80):
console.log("grade: C");
   break;

case (marks >= 60 && marks < 70):
console.log("grade: D");
   break;

case (marks >= 50 && marks < 60):
console.log("grade: fail");
   break;

default:
console.log("invalid mark");
}

