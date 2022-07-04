const contaPontos = (stringPontos)=>{
    const arrayPontos = stringPontos.split(" ")
    let pontoMax = 0
    let pontoMin = 100
    let contadorRecord = -1
    let posicaoPiorJogo = 1 
    for (ponto in arrayPontos){
        if (parseInt(arrayPontos[ponto]) > pontoMax){
            pontoMax = parseInt(arrayPontos[ponto])
            contadorRecord += 1   
        }
        if (parseInt(arrayPontos[ponto]) <= pontoMin){
            pontoMin = parseInt(arrayPontos[ponto])
            posicaoPiorJogo = parseInt(ponto)+1
        }
    }
    return [contadorRecord,posicaoPiorJogo ]
}

console.log(contaPontos("10 20 0 8 25 3 10 30 41"))