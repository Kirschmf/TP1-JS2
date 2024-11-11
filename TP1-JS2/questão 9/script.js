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

let indiceSenhorDosAneis = filmes.indexOf("Senhor dos Anéis");
let indiceMatrix = filmes.indexOf("Matrix");

let filmesEntreMatrixESenhorDosAneis = filmes.slice(indiceSenhorDosAneis + 1, indiceMatrix);

console.log(filmesEntreMatrixESenhorDosAneis);