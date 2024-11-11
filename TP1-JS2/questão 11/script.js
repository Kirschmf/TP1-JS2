filmes = [
    "O Rei Leão",          
    "Jurassic Park",      
    "Senhor dos Anéis",   
    "Star Wars",          
    "Matrix",             
    "Titanic",            
    "Os Vingadores",      
    "De Volta para o Futuro",  
    "Harry Potter",       
    "A Origem",           
    "O Senhor dos Anéis: As Duas Torres", 
    "Gladiador"           
]

let metade = prompt("Primeira ou segunda metade do vetor? (Respostas válidas: “primeira” e “segunda”.)").toLowerCase();
let quantidade = parseInt(prompt("Quantos filmes? (Resposta válidas: números entre 1 e 3)"));
if (quantidade < 1 || quantidade > 3) {
    console.log("Quantidade inválida!");
} else if (metade !== "primeira" && metade !== "segunda") {
    console.log("Metade inválida!");
} else {
    let inicio = 0;
    let fim = filmes.length;
    if (metade === "segunda") {
        inicio = Math.ceil(fim / 2);
    }
    let recorte = filmes.slice(inicio, inicio + quantidade);
    console.log(recorte);
}
