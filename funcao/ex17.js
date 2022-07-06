function novoSalario(plano, salarioAtual){
    switch (plano){
        case 'A':
            return salarioAtual*1.1
        case "B":
            return salarioAtual*1.15
        case "C":
            return salarioAtual*1.2
        default:
            return "Plano inválido"
    }
}

console.log(novoSalario("A", 1000));
console.log(novoSalario("B", 1000));
console.log(novoSalario("C", 1000));
console.log(novoSalario("D", 1000));
