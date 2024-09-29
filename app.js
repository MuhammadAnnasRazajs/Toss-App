var resultDisplay = document.querySelector('#result');
var coinImage = document.querySelector('#coinImage');


coinImage.src = 'https://via.placeholder.com/200'; 
resultDisplay.innerHTML = 'Click the below buttons'; 

function handleButtonClick(choice) {
    tossCoin(choice);
}

function tossCoin(choice) {
    var outcomes = ['Masjid', 'Chand'];
    var randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];

    if (randomOutcome === 'Masjid') {
        coinImage.src = 'https://en.numista.com/catalogue/photos/pakistan/424-original.jpg';
    } else {
        coinImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ogNC8HAY-yXJVApBgC0HBW5IJrMYQ15NMw&s';
    }

    if (choice === randomOutcome) {
        resultDisplay.innerHTML = `You win the toss!🎉`;
    } else {
        resultDisplay.innerHTML = `You lose the toss!😔`;
    }
}
