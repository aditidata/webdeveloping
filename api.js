let btn=document.querySelector('button');
btn.addEventListener("click", async()=>{
    let fact= await getFact();
    let p=document.querySelector('p');
    p.innerText=fact;
});
let url="https://catfact.ninja/fact";

async function getFact(){
    try{
        let response= await axios.get(url);
        return response.data.fact;
    }
    catch(error){
        console.log(error);
        return"no fact found";
    }
}

// fetch(url)
//     .then((response)=>{
//         console.log(response);
//         response.json().then((data)=>{
//             console.log(data);
//         });
//     })
//     .catch((error)=>{
//         console.log(error);
//     });


// async function getFact(){
//     let result= await fetch(url);
//     let data= await result.json();

//     console.log(data.fact);
// }