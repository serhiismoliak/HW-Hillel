function exitIfNaN(value) {
    if (isNaN(value)) {
        alert("This is bad digit! Goodbye!");
        exit();
    }
}

function calculate(option, first, second) {
    switch(option) {
        case "Add":
            return first + second;
        case "Diff":
            return first - second;
        case "Mult":
            return first * second;
        case "Div":
            return first / second;
        case "Sqrt":
            return Math.sqrt(first);
        case "Sin":
            return Math.sin(first);
        case "Cos":
            return Math.cos(first);
    }
}

const operationResultName = {
    "Add": "Sum",
    "Diff": "Difference",
    "Mult": "Product",
    "Div": "Quotient",
    "Sqrt": "Square root",
    "Sin": "Sine",
    "Cos": "Cosine",
}


alert("Welcome to calculator!");
let option = prompt("What action do you want to do? Add, Diff, Mult, Div, Mult, Sqrt, Sin, Cos");
switch(option) {
    case "Add":
    case "Diff":
    case "Mult":
    case "Div":
        let first = Number(prompt("Enter first number"));
        exitIfNaN(first);

        let second = Number(prompt("Enter second number"));
        exitIfNaN(second);

        result = calculate(option, first, second);
        alert(`${operationResultName[option]} of ${first} and ${second} is ${result}`);
        break;
    case "Sqrt":
    case "Sin":
    case "Cos":
        let number = Number(prompt("Enter number"));
        exitIfNaN(number);

        result = calculate(option, number);
        alert(`${operationResultName[option]} of ${number} is ${result}`);
        break;
    default:
        alert("Goodbye!, see you later!");
}