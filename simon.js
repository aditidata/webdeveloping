let gameseq=[];
let userseq=[];
let btns=["red","blue","green","yellow"];
let started=false;
let level=0;
let h2=document.querySelector('h2');
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }});

    function btnFlash(btn){
        btn.classList.add("flash");
        setTimeout(function(){
            btn.classList.remove("flash");
        },500);
    }

function userFlash(btn){
        btn.classList.add("userflash");
        setTimeout(function(){
            btn.classList.remove("userflash");
        },500);
    }

    function levelup(){
        level++;
        h2.innerText="level "+level;

        let randomIndex=Math.floor(Math.random()*3);
        let randomColor=btns[randomIndex];
        let randomBtn=document.querySelector(`.${randomColor}`);
        btnFlash(randomBtn);
        btnFlash();
    }
    function btnPress(){
        console.log(this);
        let btn=this;
        userFlash(btn);
    }
    let allbtns=document.querySelectorAll('.btn');
    for(let btn of allbtns){
        btn.addEventListener("click",btnPress);
    }