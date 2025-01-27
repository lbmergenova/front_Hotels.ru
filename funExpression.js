function simpleCalculate(a,b, operations) {
    return operations(a,b);
}

const operations = {
    add: (a,b) => a+b,
    subtract: (a,b) => a-b,
    multiply: (a,b) => a*b,
    divide: (a,b) => a/b,
};

let selectedOperation = "add";
console.log(simpleCalculate(6, 3, operations[selectedOperation]));
selectedOperation = "subtract";
console.log(simpleCalculate(6, 3, operations[selectedOperation]));
selectedOperation = "multiply";
console.log(simpleCalculate(6, 3, operations[selectedOperation]));
selectedOperation = "divide";
console.log(simpleCalculate(6, 3, operations[selectedOperation]));
console.log(simpleCalculate(6, 0, operations[selectedOperation]));