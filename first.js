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
let student={
    name:"Aditi",
    age:20,
    marks:99,
    isPass:true
};
for(let i in student){
    console.log(i);//returns key
    console.log(student[i]);//returns value
}

//print all even nos from 0 to 100
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
        }
}
//game to guess correct
// let gameNum=35;
// let guessNum=prompt("Guess the number");
// while(guessNum!=gameNum){
// guessNum=prompt("Wrong no.Guess again");

// }
// console.log("won")
let fullName=prompt("enter full name");
let length=fullName.length;
userName="@"+fullName+length;
console.log(userName);