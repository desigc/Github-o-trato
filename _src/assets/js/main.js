'use strict';

const userInputEl = document.querySelector('.nickUser');
const btnEl = document.querySelector('.btn');
const listEl = document.querySelector('.list');


function printNameUser(stringText) {
    let listContent = "";
    for (let i = 0; i < stringText.length; i++) {
        let letterContent = `<li class="list__item"> ${stringText[i]} </li>`;
        console.log(stringText[i]);
        listContent += letterContent;
    }
    listEl.innerHTML = listContent;
}

function searchUser(event) {
    event.preventDefault();
    console.log('nombre de la usuaria', userInputEl.value);
    fetch(`https://api.github.com/users/${userInputEl.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let nameUser = data.name;
            console.log('nombre de la usuaria', nameUser);
            let splitNameUser = nameUser.split(" ");
            console.log('la cadena del nombre', splitNameUser);
            printNameUser(splitNameUser[0]);

        });
}

btnEl.addEventListener('click', searchUser);


