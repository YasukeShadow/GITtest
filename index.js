// const nom = document.getElementById('nom');
// const adresse = document.getElementById('adresse');
// const statut = document.getElementById('statut');
// const signalisations = document.getElementById('signalisations');
// const submit = document.getElementById('submit');


// submit.addEventListener('click', () => {

// console.log(nom);

// })
const form = document.querySelector('form');
const nom = document.getElementById('nom');
const adress = document.getElementById('adress');
const statut = document.getElementById('statut');
const signal = document.getElementById('signal');
const submit = document.getElementById('submit');

let theName,theAdress,theStatut,theSignal


const data = ["",]

const getName = ()=> {
    let namevalue = document.getElementById('nom').value
    alert(namevalue)
    data.push(namevalue)
    console.log(data);
    document.getElementById("nom").value = ""
}

const getInput = ()=> {
    let namevalue = nom.value;
    let nameadress = adress.value;
    alert (namevalue + " "+nameadress);
    data.push(namevalue,nameadress);
    console.log(data);
    nom.value = "";
    adress.value ="";

}
///////////////////////////////////////////////////////
const btnStatut = document.getElementById ("btnStatut")


btnStatut.addEventListener("click", ()=> {
    console.log(nom.value,adress.value,statut.value);
    console.log(nom.value);
     data.push(statut.value);
     console.log(data);
 statut.value = "";
 theName = nom.value;
 theAdress = adress.value;
 theStatut = statut.value;
 theSignal = signal.value;
 console.log(theName);
    
 
})
console.log(theName + " bonjour")
// const data = [{
//     nom : xnon,
//     adress : "",
//     statut : "",
//     signal : "",
    

// }]
// console.log(data[0].nom);

// document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;


nom.addEventListener('input', (e) => {
    console.log(e.target.value);
    
    //console.log(nom.value);

    const nameValue = nom.value;
    const adressValue = adress.value;
    const statutValue = statut.value;
    const signalValue = signal.value;
    const submitValue = submit.value;

    
})
