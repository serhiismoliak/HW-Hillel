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
let option = prompt("What action do you want to do?\nAdd, Diff, Mult, Div, Mult, Sqrt, Sin, Cos");
while(option != null) {
    switch(option) {
        case "Add":
        case "Diff":
        case "Mult":
        case "Div":
            let first = Number(prompt("Enter first number"));
            while (isNaN(first)) {
                first = Number(prompt("This is bad digit.\nPlease enter correct number:"));
            }

            let second = Number(prompt("Enter second number"));
            while (isNaN(second)) {
                second = Number(prompt("This is bad digit.\nPlease enter correct number:"));
            }

            result = calculate(option, first, second);
            alert(`${operationResultName[option]} of ${first} and ${second} is ${result}`);
            break;
        case "Sqrt":
        case "Sin":
        case "Cos":
            let number = Number(prompt("Enter number"));
            while (isNaN(number)) {
                number = Number(prompt("This is bad digit.\nPlease enter correct number:"));
            }

            result = calculate(option, number);
            alert(`${operationResultName[option]} of ${number} is ${result}`);
            break;
        default:
            option = prompt("I don't recognize your operation.\nPlease choose correct operation like:\nAdd, Diff, Mult, Div, Sqrt, Sin or Cos");
            continue;
    }
    let isContinued = confirm("Do you want to continue work with me?");
    if (isContinued) {
        option = prompt("What action do you want to do?\nAdd, Diff, Mult, Div, Mult, Sqrt, Sin, Cos");
    } else {
        break;
    }
}
alert("Good by, see you later.");