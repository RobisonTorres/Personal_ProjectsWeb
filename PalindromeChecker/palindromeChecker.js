function palindrome() {

    /* Given a string, this function returns 'true' for a 
    palindrome and 'false' otherwise. */
    let inputText = document.getElementById("text-input").value;
    let result = document.getElementById("result"); 
    if (Boolean(inputText)){      
        let str = inputText.toLowerCase().match(/[a-zA-Z0-9]/gi)
        if (str.join('') == str.reverse().join('')){
            result.textContent = inputText + " is a palindrome.";
        } else {
            result.textContent = inputText + " is not a palindrome.";   
        }
    } else {alert("Please input a value");}            
}