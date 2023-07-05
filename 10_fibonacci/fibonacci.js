const fibonacci = function(input) {
    let num1 = 0
    let num2 = 1
    let nextTerm;
    if (input < 0) return "OOPS";
    for (let i = 1; i < input; i++) {
       nextTerm = num1 + num2
       num1 = num2
       num2 = nextTerm
    }
    return num2
};

// Do not edit below this line
module.exports = fibonacci;
