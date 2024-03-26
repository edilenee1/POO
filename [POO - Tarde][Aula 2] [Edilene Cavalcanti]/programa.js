/*let alunos = ["João","Maria","Jose","Pedro","Paulo"]

//alert(alunos[3])

alunos[4] = "Gerson"
console.log(alunos)
alunos.push("Joaquim")

let notas = [10,8,5,7,9,6]
console.log(notas)

for(let i = 0;i<=alunos.length;i++){
  console.log("Alunos: " + alunos[i] + "Notas: " + notas[i])
}
*/


//_____________________________________________________________ F I M _______________________________________________________________________//
/*let aluno1 = {
    nome: "Mateus", 
    cpf: "126.342.423-76", 
    nota:10
}

let aluno2 = {
    nome: "Marcos", 
    cpf: "128.417.784-87", 
    nota:12
}

let aluno3 = {
    nome: "Lucas", 
    cpf: "102.014.432-21", 
    nota:20
}

let aluno4 = {
    nome: "João", 
    cpf: "126.572.986-98", 
    nota:10
}

let aluno5 = {
    nome: "Daniel", 
    cpf: "126.573.983-91", 
    nota:1000
}

let aluno6 = {
    nome: "Pedro", 
    cpf: "126.419.653-76", 
    nota:1
}

                                                            //Acessando atributos de um objeto
                                                            //Em um array, a gente acessa um elemento
                                                            //Através de um colcheto [] e do indice.

console.log(aluno1.nome)
console.log(aluno1.cpf)
console.log(aluno1.nota)
//_____________________________________________________________ F I M _______________________________________________________________________//
                                                        
                                                        //ATIVIDADE DE CARROS

                                                        */

let carro1 = {
    modelo: "Hilux",
    marca: "TOYOTA",
    ano: "2023",
    quilometragem: "7.000Km",
    cor: "Preto",
    preco: "389.000.000"
}

let carro2 = {
    modelo: "TIGGO 8 PRO",
    marca: "CAOA CHERY",
    ano: "2023",
    quilometragem: "0Km",
    cor: "Branco",
    preco: "326.700.000"
}

let carro3 = {
    modelo: "Q5",
    marca: "Audi",
    ano: "2O19/2020",
    quilometragem: "30.000Km",
    cor: "Branco",
    preco: "215.000"
}
let carro4 = {
    modelo: "X5",
    marca: "BMW",
    ano: "2017",
    quilometragem: "95.000Km",
    cor: "Cinza",
    preco: "354.000"
}
let carro5 = {
    modelo: "911",
    marca: "Porshe",
    ano: "2023",
    quilometragem: "0Km",
    cor: "Cinza",
    preco: "1.179.000"
}


//_____________________________________________________________________________

let carroA = {
    modelo: "Trator",
    marca: "Audi",
    ano: "2024",
    quilometragem: "70.000Km",
    cor: "Preto",
    preco: "440.000"
}
let carroB = {
    modelo: "Caminhão",
    marca: "BMW",
    ano: "2025",
    quilometragem: "0Km",
    cor: "Prata",
    preco: "700.000"
}
let carroC = {
    modelo: "Carregadeira",
    marca: "Porshe",
    ano: "2026",
    quilometragem: "0Km",
    cor: "verde",
    preco: "894.000"
}





console.log("Carros sem FOR_________________________________________________________________________________")
console.log(`${carro1.marca} ${carro1.modelo} ${carro1.ano} ${carro1.preco}`)
console.log(`${carro2.marca} ${carro2.modelo} ${carro2.ano} ${carro2.preco}`)
console.log(`${carro3.marca} ${carro3.modelo} ${carro3.ano} ${carro3.preco}`)
console.log(`${carro4.marca} ${carro4.modelo} ${carro4.ano} ${carro4.preco}`)
console.log(`${carro5.marca} ${carro5.modelo} ${carro5.ano} ${carro5.preco}`)
console.log(`${carroA.marca} ${carroA.modelo} ${carroA.ano} ${carroA.preco}`)
console.log(`${carroB.marca} ${carroB.modelo} ${carroB.ano} ${carroB.preco}`)
console.log(`${carroC.marca} ${carroC.modelo} ${carroC.ano} ${carroC.preco}`)

let listaDeCarros = []
listaDeCarros.push(carro1);
listaDeCarros.push(carro2)
listaDeCarros.push(carro3)
listaDeCarros.push(carro4)
listaDeCarros.push(carro5)
listaDeCarros.push(carroA)
listaDeCarros.push(carroB)
listaDeCarros.push(carroC)


console.log("Carros com FOR_________________________________________________________________________________")

for (let i = 0; i < listaDeCarros.length; i++) {
    console.log(`${listaDeCarros[i].marca} ${listaDeCarros[i].modelo} ${listaDeCarros[i].ano} --> R$${listaDeCarros[i].preco}`)
}
