const resolveEquacaoSegundoGrau = (ax2, bx, c) => {
    const delta = (bx)**2 - (4*ax2*c)
    if (delta < 0){
        return "Delta negativo"
    }
    else{
        const x1 = (-bx + delta**(1/2))/2*ax2
        const x2 = (-bx - delta**(1/2))/2*ax2
        return [x1,x2]
    }
}

console.log(resolveEquacaoSegundoGrau(2,4,-6))
