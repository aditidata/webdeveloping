let para=document.createElement('p');
para.innerText="Hello World!";
document.querySelector('body').appendChild(para);
para.classList.add('green');
let btns=document.querySelectorAll('button');
for(btn of btns){
    btn.addEventListener("click",sayHello);
    
}
function sayHello(){
    alert("Hello World!");
}