console.log("hii");
console.log("hii");
console.log("hii");
console.log("hii");
console.log("hii");
console.log("hii");
console.log("hii");
console.log("hii");
console.log("hii");
console.log("hii");

/* issues in  repeating code 
too much woork for developer
chances  of  error
unable to */

// while loop //
/*
let count = 10;
while(count > 0){
    console.log("hii");
    count--;
}*/

/* excercise print counting from 1to 10*/
/*
let num = 1;
while(num <=10){
    console.log(num);
    num++;
}*/


/* print all evan number till 25*/
/*
let n=0;

while(n < 25){
if(n % 2 ==0)
console.log(n);
n++;
}
// 0(25/2) or 0(13)
// infinite loop//
/*
let num1 = 10;
while(num1 !=0){
    console.log(num1);
    num1++;
}
    begow of count
*/
/*
let num1 = 10;
while(num1 > 0){
    console.log(num1);
    num1--;
}


//=================for loop============//

 //print hi 10 time//

 for(let i=0;i<10;i++){
    console.log("hii");
 }
//time complexity:0(10)
 /* print counting 1 to 10*/
/*
 for(let i=1;i<=10;i++){
    console.log(i);
 }
*/
 // time complexcity -> 0(n)or 0(4n)

 /* print multiple of 3 onnly upto 50 print 3,6,9,...48*/

for(let i=3;i<50;i+=3){
    /*
if(i%3 == 0)*/
    console.log(i);
 }
 
    // time complexcity:0(n/3)

    /* print the squares of each number from 20 to 35*/

  let   n=15;
    let start =20;

/*or(let i =20;i<= 35;i++)
        console.log(i*i);*/
        //TC ->0(16)
    for(i= start; i<= start +n;i++){
       //onsole.log(i*i);//
    console.log(i**2);
    }
    //TC -> 0(n)--> [start + n) - start]


  let n1=5;
  for(let i=1;i<=10;i++){
    console.log(n1,"x",i,"=",n1*i);
  }
//tc = 0(10)

/*find sum of first 100 number and print it*/
let sum=0;
for(let i=1;i<=100;i++){
   sum100+=i;
    console.log(sum100);
   /*onsole.log(sum,"+",i,"=",sum +=i);*/
}

