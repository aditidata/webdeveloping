let form=document.querySelector('form');
form.addEventListener("submit",function(event){
    event.preventDefault();
    
    let input=form.querySelector('input');
    console.dir(input);
    console.log(input.value);
});