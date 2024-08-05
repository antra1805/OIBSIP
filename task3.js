const input = document.querySelector('#input-box')
const result = document.querySelector('#result-box')
const inputSelect = document.querySelector('#input-dropdown')
const resultSelect = document.querySelector('#result-dropdown')

inputSelect.addEventListener('change',resultChange)
resultSelect.addEventListener('change',insertChange)

function resultChange(){
    if(
        inputSelect.selectedOptions[0].value ===
        resultSelect.selectedOptions[0].value
    ){
        if(resultSelect.selectedIndex < 2){
            resultSelect.selectedIndex += 1
        }else{
            resultSelect.selectedIndex = 0
        }
    }
}
function converter() {
    const inputValue = parseFloat(input.value);
    const inputUnit = inputSelect.value;
    const resultUnit = resultSelect.value;
    let resultValue;

    if (isNaN(inputValue)) {
        result.value = "Invalid Input";
        return;
    }

    if (inputUnit === "Celsius") {
        if (resultUnit === "Fahrenheit") {
            resultValue = (inputValue * 9/5) + 32;
        } else if (resultUnit === "Kelvin") {
            resultValue = inputValue + 273.15;
        } else {
            resultValue = inputValue;
        }
    } else if (inputUnit === "Fahrenheit") {
        if (resultUnit === "Celsius") {
            resultValue = (inputValue - 32) * 5/9;
        } else if (resultUnit === "Kelvin") {
            resultValue = ((inputValue - 32) * 5/9) + 273.15;
        } else {
            resultValue = inputValue;
        }
    } else if (inputUnit === "Kelvin") {
        if (resultUnit === "Celsius") {
            resultValue = inputValue - 273.15;
        } else if (resultUnit === "Fahrenheit") {
            resultValue = ((inputValue - 273.15) * 9/5) + 32;
        } else {
            resultValue = inputValue;
        }
    }

    result.value = resultValue.toFixed(2);
}