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
        userseq=[];
        level++;
        h2.innerText="level "+level;

        let randomIndex=Math.floor(Math.random()*3);
        let randomColor=btns[randomIndex];
        let randomBtn=document.querySelector(`.${randomColor}`);
        gameseq.push(randomColor);
        console.log(gameseq);
        btnFlash(randomBtn);
        btnFlash();
    }

function checkAnswer(idx){
    
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length===gameseq.length){
           setTimeout(levelup,1000);

        }
    }
    else{
        h2.innerText="game over, press any key to restart";
}
}

    function btnPress(){
        console.log(this);
        let btn=this;
        userFlash(btn);

        userColor=btn.getAttribute("id");
        console.log(userColor);
        userseq.push(userColor);
        checkAnswer(userseq.length-1);
    }
    let allbtns=document.querySelectorAll('.btn');
    for(let btn of allbtns){
        btn.addEventListener("click",btnPress);
    }