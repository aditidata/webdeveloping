let url="https://catfact.ninja/fact";

async function getFact(){
    try{
        let response= await axios.get(url);
        console.log(response);
    }
    catch(error){
        console.log(error);
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