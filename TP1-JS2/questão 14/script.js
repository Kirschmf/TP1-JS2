let contador = 0;

while (true) {
    contador++;
    console.log(contador);
    
    if (Math.random() < 0.1) {
        break;
    }
}
