//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const container = document.querySelector('.container');
const result = document.querySelector('.results');
const randomNumber = makeNumberRandom();

generaGriglia(container, randomNumber);
startGame(randomNumber, result, container);



function generaGriglia(whereGemerateGrid, randomNumber) {

    for (let i = 0; i < randomNumber.length; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerText = randomNumber[i];
        whereGemerateGrid.insertAdjacentElement('beforeend', square);
    }
};

function makeNumberRandom() {
    const array = [];
    while (array.length !== 5) {
        const number = Math.floor(Math.random() * (100 - 1) + 1) + 1;
        if (!array.includes(number)) {
            array.push(number);
        }
    }
    return array;
}

function startGame(randomNumber, wherePrintResult, whereGemerateGrid ) {


    setTimeout(function () {
        whereGemerateGrid.style.display = 'none';
    }, 5000)

    setTimeout(function () {

        let correctNumber = [];
        for (let i = 1; i <= randomNumber.length; i++) {
            let userNumber = Number(prompt(`inserisci il ${i}° numero`))
            if (userNumber === randomNumber[i - 1]) {
                correctNumber.push(userNumber);
            }
        }
        whereGemerateGrid.style.display = 'flex';
        wherePrintResult.style.display ='block';
        if(correctNumber) {
        wherePrintResult.innerText = `Hai indovinato 0 numeri.;`
        } else if(numeriIndovinati) {
            wherePrintResult.innerText = `Hai indovinato 1 numero.;`
        }else{
            wherePrintResult.innerText = `Hai indovinato ${correctNumber} numeri.;`
        }
    }, 5500)



}