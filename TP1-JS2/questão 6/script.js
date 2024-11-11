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

let filmesRemovidos = filmes.splice(2, 4, "O Hobbit", "Senhor dos Anéis: O Retorno do Rei", "O Senhor dos Anéis: A Sociedade do Anel");
console.log('Filmes removidos: ' + filmesRemovidos);
