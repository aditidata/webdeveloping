let btn=document.querySelector('button');
let ul=document.querySelector('ul');
let input=document.querySelector('input');
btn.addEventListener("click",function(){
    let item=document.createElement('li');
    item.innerText=input.value;
    let delbtn=document.createElement('button');
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    input.value=""
});
let deleteButtons=document.querySelectorAll('.delete');
for(let delbtn of deleteButtons){
    delbtn.addEventListener("click",function(event){
        let parent=delbtn.parentElement;
        console.log(parent);
        parent.remove();
    })};