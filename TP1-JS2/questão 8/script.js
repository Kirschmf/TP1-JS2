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

let indiceDeVoltaParaOFuturo = filmes.indexOf("De Volta para o Futuro");
let filmesRemovidos = filmes.splice(indiceDeVoltaParaOFuturo - 1, 3);
console.log('Filmes removidos: ' + filmesRemovidos);
