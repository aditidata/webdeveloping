// let score=prompt("enter score");
// if(score>=80){
//     console.log("A");
// }
// else if(score>=70 && score<89){
//     console.log("B");
// }
// else if(score>=60 && score<69){
//     console.log("C");
// }
// else if(score>=50 && score<59){
//     console.log("D");
// }
// else (score>=0 && score<49) 
//     console.log("E");
// let str="Aditi";
// let size=0;
// for(let i of str){
//     console.log(i);
//     size++;
// }
// console.log(size);
// let student={
//     name:"Aditi",
//     age:20,
//     marks:99,
//     isPass:true
// };
// for(let i in student){
//     console.log(i);//returns key
//     console.log(student[i]);//returns value
// }

// //print all even nos from 0 to 100
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//         }
// }
//game to guess correct
// let gameNum=35;
// let guessNum=prompt("Guess the number");
// while(guessNum!=gameNum){
// guessNum=prompt("Wrong no.Guess again");

// }
// console.log("won")
// let fullName=prompt("enter full name");
// let length=fullName.length;
// userName="@"+fullName+length;
// console.log(userName);
//marks and avg
// let marks=[90,80,70,60,50];
// let sum=0;
// for(let i of marks){
//     sum+=i;

// }
// console.log(sum);
// let avg=sum/marks.length;
// console.log(`avg marks of the class ${avg}`);
// //
// let items=[250,645,300,900,50];
// let idx=0;
// for(let i of items){
//     console.log(`value at index ${idx}=${i}`)
//     let offer=i/10;
//     items[i]=items[i]-offer;
//     console.log(`value after offer ${i}`)
//     idx++;
//     }
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
companies.shift();
console.log(companies);
companies.splice(2,1,"ola");
console.log(companies);
companies.push("Amazon");