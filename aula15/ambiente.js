let num = [];
/*num[0]=6;
num[1]=19;
num.push(60);*/

for (let c = 15; c >= 1; c -= 3) {
    num.push(c)
}

console.log(`Nosso vetor é o ${num}`)
console.log(`O tamanho do array é ${num.length}`)
num.sort(comparar);
console.log(`O array ordenado é ${num}`)

//For mais simplificado para usar em array e object

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

/*quando o valor existe dentro do array existir dentro do array
o metodo indexOf vai retornar sua posição,
caso nao exista irá retornar '-1'
*/
let cons = num.indexOf(10)
console.log(`O valor 10 está na posição ${cons}`)

function comparar(a,b) {
    return a -b;
}