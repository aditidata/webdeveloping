let todo=[];

let req=prompt("enter your request");
while(true){
    if(req=="quit"){
        console.log("bye");
        break;
    }
    if(req=="list"){
        console.log("**********");
        for(let i=0;i<todo.length;i++){
            console.log(i+" : "+todo[i]);
        }
        console.log("**********");
    }
    else if(req=="add"){
        let task=prompt("enter task");
        todo.push(task);
        console.log(`${task} added to the list`);
    }
    else if(req=="delete"){
        let index=prompt("enter index to delete");  
        if(index>=0 && index<todo.length){
        let deleted=todo.splice(index,1);
        console.log(`deleted ${deleted}`);
        }
}
    req=prompt("enter your request");
}
