'use strict'

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, 
// la cella cliccata si colora di azzurro ed emetto un messaggio in console
// con il numero della cella cliccata.

// Tasto per azionare il gioco
// Dropdown per scegliere la difficoltà
// - in base alla difficoltà inesrire il numero di caselle da generare
// Crezione della griglia
// - Creare un elemnto div con una classe e un contenuto variabile
// - Creare un ciclo per N volte della creazione dell'elemento e 
//   aggiungere la classe in base alla difficoltà scelta (per la sua dimensione)
// Quando clicco sul tasto Play prima resetta il campo di gioco


// Play Button
const playButton = document.getElementById('play-button');
playButton.addEventListener('click', function () {

    let cellNumber = setCellNumber();
    const difficultyClass = setDifficultyClass();
    createGameboard(cellNumber, difficultyClass);
    console.log(`genero griglia composta da: ${cellNumber} celle`);
});

// Set Cell Number
function setCellNumber() {
    const difficulty = document.getElementById('set-difficulty').value;
    let cellNumber
    if (difficulty === '3') {
        console.log('hai selezionato hard');
        cellNumber = 49
    } else if (difficulty === '2') {
        console.log('hai selezionato medium');
        cellNumber = 81
    } else {
        console.log('hai selezionato easy');
        cellNumber = 100
    }
    return cellNumber
}

// Set Difficulty Class
function setDifficultyClass() {
    const difficulty = document.getElementById('set-difficulty').value;
    let difficultyClass;
    if (difficulty === '3') {
        difficultyClass = 'cell--hard', 'cell';
    } else if (difficulty === '2') {
        difficultyClass = 'cell--medium', 'cell';
    } else {
        difficultyClass = 'cell--easy', 'cell';
    }
    return difficultyClass
}

// Generazione di un elemento
function createElementBoard(tag, className, content) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.append(content);
    return element
}

// Reset Gameboard
function resetGameboard() {
    const boardGame = document.querySelector('.board-game');
    boardGame.innerHTML = ''
}

// Generazione GameBoard
function createGameboard(cellNumber, difficultyClass) {
    resetGameboard();
    const boardGame = document.querySelector('.board-game');

    for (let i = 1; i <= cellNumber; i++) {
        const elementBoard = createElementBoard('div', difficultyClass, i);
        boardGame.append(elementBoard);
        elementBoard.addEventListener('click', function () {
            console.log(`Hai cliccato la casella ${i}`)
        })
    }
}

