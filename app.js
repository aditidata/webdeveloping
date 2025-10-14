let smallImg=document.getElementsByClassName("oldImg");
for(let i=0;i<smallImg.length;i++){
    console.dir(smallImg[i].src);
}
let links=document.querySelectorAll(".box a");
for(let i=0;i<links.length;i++){
   links[i].style.color="red";
}