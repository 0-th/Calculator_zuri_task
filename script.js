let operd1 = Number(prompt("Enter first operand"));
let operd2 = Number(prompt("Enter second operand"));
let opern = prompt("Enter the operation: +, -, x, /");

switch (opern) {
    case "+":
        result = operd1 + operd2;
        alert(`Operation result: ${result}`);
        break;

    case "-":
        result = operd1 - operd2;
        alert(`Operation result: ${result}`);
        break;

    case "x":
        result = operd1 * operd2;
        alert(`Operation result: ${result}`)
        break;

    case "/":
        result = operd1 / operd2;
        alert(`Operation result: ${result}`)
        break;

   default:
        console.log("Invalid operation! Try again.");
}

// console.log(num1, num2)

