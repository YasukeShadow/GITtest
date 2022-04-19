// afficher à partir d'un bouton avec base de donnée dans fichier json
// fetch
const p = document.querySelector("p");


fetch("data.json")
    .then( (response) => response.json())
    .then( (data) => console.log(data.database))
    .then( (dataResponse) => 
        
        {
           
            dataResponse.forEach( (ladata) =>
                {   
                    console.log(ladata)
                    //p.innerHTML += `<span> ${ ladata} </span>`
                })
        })