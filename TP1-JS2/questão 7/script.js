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

let indiceMatrix = filmes.indexOf("Matrix");
filmes.splice(indiceMatrix, 1);

let indiceSenhorDosAnes = filmes.indexOf("Senhor dos Anéis");
filmes.splice(indiceSenhorDosAnes, 1, "Senhor dos Anéis: A Sociedade do Anel", "Senhor dos Anéis: As Duas Torres", "Senhor dos Anéis: O Retorno do Rei");

console.log(filmes);
