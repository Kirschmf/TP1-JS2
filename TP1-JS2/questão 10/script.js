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

let metade = Math.ceil(filmes.length / 2);
let primeiraMetade = filmes.slice(0, metade);
console.log(primeiraMetade);
