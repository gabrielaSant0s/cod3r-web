const avaliaAluno =(nota) =>{
    if (nota >= 37){
        return "Aprovado"
    }else{
        return "Reprovado"
    }
}

console.log(avaliaAluno(40));
