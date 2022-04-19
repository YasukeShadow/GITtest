const form = document.querySelector('form');
const nom = document.getElementById('nom');
const adress = document.getElementById('adress');
const statut = document.getElementById('statut');
const signal = document.getElementById('signal');
const submit = document.getElementById('submit');
const tbody = document.querySelector('tbody');
const createTable = document.getElementById('createTable');

btnStatut.addEventListener("click", ()=> { //// evenement sur bouton statut  
    // console.log(nom.value,adress.value,statut.value);
    // console.log(nom.value);
     //data.push(statut.value);
     //console.log(data);
    //statut.value = "";
    theName = nom.value;
    theAdress = adress.value;
    theStatut = statut.value;
    theSignal = signal.value;
    console.log(theName);
    console.log(theAdress + theStatut);

    // cree une table a partir des inputs  mais efface l'ancien tableau
    tbody.innerHTML = ` 
    <tr>
        <td>${ theName }</td>
        <td>${ theAdress }</td>
        <td>${ theStatut }</td>
        <td class ="rouge">${ theSignal }</td>
        
    </tr>
    `;

    // version creation table avec create element 

    
    
    
    

    
    for (let i = 0; i < 2; i++) {

        

        for (let j = 0; j < 4 ; j++) {

            const td = document.createElement('td');
            const tdText = Document.createTextNode("bonjour tout le monde")
            td.appendChild(tdText);
            tr.appendChild(td);

            console.log(td);
            console.log(tdText);
        }
    
    }

    
 
}) 
//////////////////////////////////////////////////////////////////////

//  createTable.addEventListener("click", ()=>{
    
//      const tr = document.createElement('tr');
//      const td = document.createElement('td');
//      let tdText = document.createTextNode(` ${nom.value } ${adress.value} `);
//      const tbody = document.querySelector('tbody')

     
// /////tentative de parcours d'un tableau pour remplir le tableaux entier

//      console.log(tableInfos);

//      tr.appendChild(td);
//      td.appendChild(tdText)
//      console.log(tr);
//     //  console.log(td);

//     tbody.appendChild(tr)
//     console.log(tbody);


//     let tableInfos =[nom.value , adress.value, statut.value, signal.value];

//      const insertTableInfo = () => {

//             for (i = 0 ; i < tableInfos.length ; i++) {
//                 let td = document.createElement('td')
//                 let text =
//             }
//      }

    
//  })
 ////////////////////////////////////////////////////////////////////////////

 

