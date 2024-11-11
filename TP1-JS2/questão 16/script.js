let highestSalary = 0;
let highestPaidPerson = "";

while (true) {
    let name = prompt("Digite o nome da pessoa:");
    let salary = parseFloat(prompt("Digite o salário da pessoa:"));

    if (salary > highestSalary) {
        highestSalary = salary;
        highestPaidPerson = name;
    }

    let continueLoop = prompt("Deseja continuar? (Sim/Não)").toLowerCase();
    if (continueLoop !== "sim") {
        break;
    }
}

console.log(`O maior salário é de ${highestSalary} recebido por ${highestPaidPerson}.`);
