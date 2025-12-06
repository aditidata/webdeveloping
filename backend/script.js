// let n=5;
// for(let i=1;i<=n;i++){
//     console.log("hell0" +i);
// }
let args=process.argv;
for(let i=2;i<args.length;i++){
    console.log("hello"+args[i]);
}
const someValue=require('./math.js');
console.log(someValue);