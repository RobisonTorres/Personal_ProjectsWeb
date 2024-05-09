function addToBinary() {

    // This function sums two numbers and return the result in binary as str.
    let num1 = Number(document.getElementById('n1').value);
    let num2 = Number(document.getElementById('n2').value);
    let result = document.getElementById('result');

    let totalBinary = (num1 + num2).toString(2)
    result.value = totalBinary;    
}