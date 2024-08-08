let first = Number(prompt("Enter first number"));
let secord = Number(prompt("Enter second number"));

console.log(
    "Calculations is finished! \n" +
    `Sum: ${first} + ${secord} = ${first + secord}\n` +
    `Diff: ${first} - ${secord} = ${first - secord}\n` +
    `Mult: ${first} * ${secord} = ${first * secord}\n` +
    `Div: ${first} / ${secord} = ${(first / secord).toPrecision(3)}\n`
);
