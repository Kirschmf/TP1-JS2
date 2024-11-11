let contador = 0;

while (true) {
    let chance = Math.random();
    if (chance < 0.1) {
        break;
    }
    if (chance < 0.75) {
        contador++;
    }
    console.log(contador);
}
