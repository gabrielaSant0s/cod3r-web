const divisao = (dividendo, divisor) =>{
    const result = dividendo/divisor
    const resto = dividendo%divisor
    return console.log(`resultado: ${result}, resto: ${resto}`);
}

divisao(4,2)