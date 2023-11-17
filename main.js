'use strict'

// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco(attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js / css / con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il gioco
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. : bomba:
// : esclamazione: Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti(ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// Play Button
const playButton = document.getElementById('play-button');
playButton.addEventListener('click', function () {

    let cellNumber = setCellNumber();
    const difficultyClass = setDifficultyClass();
    let boardGame = createGameboard(cellNumber, difficultyClass);
    console.log(`genero griglia composta da: ${cellNumber} celle`);
    let cellBomb = createBomb(cellNumber);
    console.log(`inserisco una bomba nelle celle numero: ${cellBomb}`);
    gameLogic(boardGame, cellBomb);
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
    const fragment = new DocumentFragment()

    for (let i = 1; i <= cellNumber; i++) {
        fragment
        const elementBoard = createElementBoard('div', difficultyClass, i);
        fragment.append(elementBoard);
    }

    boardGame.append(fragment);
    return boardGame
}

// Generazione bombe
function createBomb(cellNumber) {
    const cellBomb = [];
    while (cellBomb.length !== 16) {
        let randomNumber = Math.floor(Math.random() * cellNumber) + 1;
        if (!cellBomb.includes(randomNumber)) {
            cellBomb.push(randomNumber)
        }
    }
    return cellBomb
}

// Game logic
function gameLogic(boardGame, cellBomb) {
    boardGame.removeEventListener('click', function (event) { });
    boardGame.addEventListener('click', function (event) {
        let clickCell = event.target;
        let contentCell = Number(clickCell.innerHTML);
        console.log(`Hai cliccato la casella numero: ${contentCell}`)
        if (cellBomb.includes(contentCell)) {
            clickCell.classList.add('bomb')
        } else {
            clickCell.classList.add('safe')
        }
    });
}
