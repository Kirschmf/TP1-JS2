let fibonacci = [0, 1];

while (fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2] <= 55) {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
}

console.log(fibonacci);
