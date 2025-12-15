// function to add the numbers
function add() {
    let a = Number(document.getElementById("number_1").value);
    let b = Number(document.getElementById("number_2").value);
    document.getElementById("result").innerHTML = "Result: " + (a + b);
}
// function to subtract the numbers
function subtract() {
        let a = Number(document.getElementById("number_1").value);
        let b = Number(document.getElementById("number_2").value);
        document.getElementById("result").innerHTML = "Result: " + (a - b);
    }
// function to multiply the numbers
    function multiply() {
        let a = Number(document.getElementById("number_1").value);
        let b = Number(document.getElementById("number_2").value);
        document.getElementById("result").innerHTML = "Result: " + (a * b);
    }
// function to divide the numbers
    function divide() {
        let a = Number(document.getElementById("number_1").value);
        let b = Number(document.getElementById("number_2").value);

        if (b === 0) {
            document.getElementById("result").innerHTML = "Cannot divide by zero";
        } else {
            document.getElementById("result").innerHTML = "Result: " + (a / b);
        }
    }
// function to find square the numbers
    function square() {
        let a = Number(document.getElementById("number_1").value);
        document.getElementById("result").innerHTML = "Square of the first number: " + (a * a);
    }
// function to find cube of the numbers
    function cube() {
        let a = Number(document.getElementById("number_1").value);
        document.getElementById("result").innerHTML = "Cube of the first numbers: " + (a * a * a);
    }