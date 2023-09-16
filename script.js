let fromTempDropdown = document.getElementById('fromTemp');
let toTempDropdown = document.getElementById('toTemp');
let temperatureInput = document.getElementById('temperature');
let convertButton = document.getElementById('convertButton');
let convertedResult = document.getElementById('convertedResult');
let leftDiv = document.querySelector('.left');
let rightDiv = document.querySelector('.right');
let lValDiv = document.querySelector('.l_val'); 
let rValDiv = document.querySelector('.r_val'); 

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}

function convertTemperature() {
    let fromTempType = fromTempDropdown.value;
    let toTempType = toTempDropdown.value;
    let inputTemp = parseFloat(temperatureInput.value);

    if (fromTempType === toTempType) {
        convertedResult.innerText = inputTemp + " " + toTempType;
        leftDiv.innerText = fromTempType;
        rightDiv.innerText = toTempType;
        lValDiv.innerText = inputTemp  
        rValDiv.innerText = inputTemp  
        return;
    }

    let result;

    if (fromTempType === "°C") {
        if (toTempType === "°F") {
            result = (inputTemp * 9 / 5) + 32;
        } else if (toTempType === "K") {
            result = inputTemp + 273.15;
        }
    } else if (fromTempType === "°F") {
        if (toTempType === "°C") {
            result = (inputTemp - 32) * 5 / 9;
        } else if (toTempType === "K") {
            result = (inputTemp - 32) * 5 / 9 + 273.15;
        }
    } else if (fromTempType === "K") {
        if (toTempType === "°C") {
            result = inputTemp - 273.15;
        } else if (toTempType === "°F") {
            result = (inputTemp - 273.15) * 9 / 5 + 32;
        }
    }

    convertedResult.innerText = roundNumber(result) + " " + toTempType;
    leftDiv.innerText = fromTempType;
    rightDiv.innerText = toTempType;
    lValDiv.innerText = inputTemp 
    rValDiv.innerText = roundNumber(result) 
}

convertButton.addEventListener('click', convertTemperature);

convertButton.addEventListener('click', function () {
    leftDiv.classList.add('fade-in');
    rightDiv.classList.add('fade-in');
    lValDiv.classList.add('fade-in'); 
    rValDiv.classList.add('fade-in'); 
    convertTemperature();
});

