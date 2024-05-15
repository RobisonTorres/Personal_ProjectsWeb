function clearInput(){

    let userInput = document.getElementById("user-input");
    userInput.value = "";
}

function telephoneCheck() {
    
    /* This function returns true if the passed string looks like a valid US phone number.*/
    let phone = document.getElementById("user-input").value;
    let output = document.getElementById("results-div");

    if (Boolean(phone)){
        let pattern1 = new RegExp(/^^[1]?[\s]?[(][0-9]{3}[)][-\s]?[0-9]{3}[-\s]?[0-9]{4}$|^^[1]?[\s]?[0-9]{3}[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/)
        output.textContent += pattern1.test(phone) ? "Valid US number: " + phone + "\n": "Invalid US number: " + phone + "\n";
        clearInput();
    } else {
        alert("Please provide a phone number")
    }
}

function clearOutput(){

    let output = document.getElementById("results-div");
    output.textContent = "";
}