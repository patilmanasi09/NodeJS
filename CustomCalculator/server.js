

const readline = require("readline");
const calculator = require("./math");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter first number: ", (num1) => {

  rl.question("Enter operation (+, -, *, /, square): ", (operator) => {

    
    if (operator === "square") {

      let result = calculator(Number(num1), 0, operator);

      console.log("Result =", result);

      rl.close();

    } else {

      rl.question("Enter second number: ", (num2) => {

        let result = calculator(
          Number(num1),
          Number(num2),
          operator
        );

        console.log("Result =", result);

        rl.close();
      });
    }

  });

});