// fatorial 

const fatorial = num =>{
    let fat = num
    while (num>1){
        fat *= (num-1)
        num--
    }

    return fat
}

console.log(fatorial(5));