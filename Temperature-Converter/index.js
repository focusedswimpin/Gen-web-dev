// This handles the functioning of the application using javascript.


// this function will go into the onclick()

const textbox = document.getElementById("textbox")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelcius = document.getElementById("toCelcius")
const result = document.getElementById("result")

let temp = 0

function convert(){

    if(toFahrenheit.checked){
        // result.textContent = "You selected to to Fahrenheit"
        // to fixed takes care of the precision, how many digits should be there after the decimal point.

        temp = Number(textbox.value)
        temp = temp * 9 / 5 + 32
        result.textContent = temp.toFixed(1) + "°F"
    }

     // to fixed takes care of the precision, how many digits should be there after the decimal point.
    else if(toCelcius.checked){
        // result.textContent = "You selected to to Celcius"

        temp = Number(textbox.value)
        temp = (temp - 32)* (5/9)
        result.textContent = temp.toFixed(1) + "°C"
    }

    else{
        result.textContent = "Select a unit."
    }
}