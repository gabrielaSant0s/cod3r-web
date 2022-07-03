const jurosSimples = (capitalInicial, taxaJuros, tempo=12) => {
    if (tempo<=12){
        const montante = capitalInicial + (capitalInicial*(taxaJuros/100))
        return montante
    }else{
        let anos = tempo/12
            const montante = capitalInicial + (capitalInicial*(taxaJuros*anos/100))
            return montante
    }
}

const jurosComposto = (capitalInicial, taxaJuros, tempo) =>{
    const jurosMensal = taxaJuros/(tempo*100)
    let montanteMensal = capitalInicial
    while (tempo >= 0 ) {
        montanteMensal += jurosMensal*montanteMensal 
        tempo--
    }
    return montanteMensal
    
}

console.log(jurosSimples(1000,10,12))
console.log(jurosComposto(1000,10,12));
