var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    numberColor();
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    numberColor();
}

function numberColor() {

    if (currentNumber < 0) {
        document.getElementById("currentNumber").style.color = 'red';
    } else if (currentNumber > 0){
        document.getElementById("currentNumber").style.color = 'green';
    } else {
        document.getElementById("currentNumber").style.color = 'black';
    }
}


