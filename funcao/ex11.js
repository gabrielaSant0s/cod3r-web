const bissexto = (ano) =>{
    if (ano%400 === 0){
        return "Bissexto"
    }else if (ano%100 === 0){
        return "Não bissexto"
    }else if(ano%4===0){
        return "Bissexto"
    }else{
        return "Não bissexto"
    }
}

console.log(bissexto(1100));