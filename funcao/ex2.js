const classificaTriangulo = (ladoA, ladoB , ladoC) =>{
    if (ladoA===ladoB && ladoB===ladoC){
       return  "Equilátero";
    }
    else if (ladoA===ladoB || ladoA===ladoC || ladoB===ladoC ) {
       return "Isóceles";
    }else{
       return  "Escaleno";
    }
}
console.log(classificaTriangulo(4,2,1));