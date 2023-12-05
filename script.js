// ESERCIZIO 1

function saveName(){
    const name = document.getElementById('name')
    const inputValue = name.value

    if(inputValue.trim() !== '') {
        localStorage.setItem('user_name', inputValue)
        displayPreviousName()
    }
}

function removeName() {
    localStorage.removeItem('user_name')
    displayPreviousName()
}

function displayPreviousName() {
    const previousName = document.getElementById('previousName')
    const storedValue = localStorage.getItem('user_name')

    if(storedValue) {
        previousName.textContent = `${storedValue}` 
    } else {
        previousName.textContent = ''
    }
}

displayPreviousName()


// ESERCIZIO 2

// Funzione per ottonere il valore corrente del contatore dal Localstorage
function getCounterValue() {
    return parseInt(localStorage.getItem('counter')) || 0
}

// Funzione per aggiornare il valore del contatore
function updateCounter (valore){
    const counterElement = document.getElementById('counter')
    let counterValue = valore

    counterElement.textContent = counterValue

    // Aggiorna il valore in LocalStorage
    localStorage.setItem('counter', counterValue)
}


//Funzione per incrementare il cotatore ad ogni secondo
function startCounter(){
    setInterval(() => {
        let counterValue = getCounterValue()
        counterValue++
        updateCounter(counterValue)
    }, 1000) 
}

/* window.onload = () => {
    startCounter()
    updateCounter()
} */

startCounter()
updateCounter()