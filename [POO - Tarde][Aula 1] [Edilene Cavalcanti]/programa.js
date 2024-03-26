let frutas = []

frutas.push("Mamão");
frutas.push("Limão");
frutas.push("Morango");
frutas.push("Uva");''

console.log(frutas)

frutas[3] = "laranja"

console.log(frutas)

for(let i = 0; i < frutas.length;i++){
    console.log(frutas[1])
}
/*_________________________________________________________________________________________________*/


let lanches = []

for(let i=0;i<=5;i++){
let pedido = prompt("Digite 1 lanche: ")
lanches.push(pedido)
}
console.log(lanches)
