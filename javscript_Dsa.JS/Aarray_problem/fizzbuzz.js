function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString()); // Convert number to string before pushing
        }
    }

    return result;
}

// Call the fizzBuzz function with a value, for example, 20:
const fizzBuzzArray = fizzBuzz(10);

console.log(fizzBuzzArray);
