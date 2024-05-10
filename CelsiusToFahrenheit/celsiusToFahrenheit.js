function convertCtoF() {

    // This function converts Celsius to Fahrenheit.
    let celsius = Number(document.getElementById("temperature").value);
    let result = document.getElementById("result");
    let fahrenheit = Number(celsius) * (9/5) + 32; 
    result.textContent = String(fahrenheit.toFixed(2)) + " °F";
    
}
