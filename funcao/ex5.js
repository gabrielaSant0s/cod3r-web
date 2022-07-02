function arredondaDin(valor){
    const mudaPontoParaVirgula = valor.toFixed(2).toString().replace(".",",")
    console.log(`R$ ${mudaPontoParaVirgula}`);
}

arredondaDin(0.2+0.1)