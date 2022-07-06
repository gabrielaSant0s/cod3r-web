function comprarCarro(modelo){
    switch(modelo){
        case 'hatch':
            return 'Compra efetuada com sucesso!'
        case 'sedans':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere esse modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel'
    }
}

console.log(comprarCarro('hatch'));
console.log(comprarCarro('sedans'));
console.log(comprarCarro('palio'));
