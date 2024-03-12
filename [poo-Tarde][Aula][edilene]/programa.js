let alunos = ['João','Maria','josé','Pedro','Paulo'];

alert(alunos[3]);

alunos[4] = 'Gerson'

alunos.push('joaquim');

let 
notas = [10,8,5,7,9,6];

for(let i = 0; i< alunos.length;i++){
    console.log(`Aluno: ${alunos[i]} -> Nota: ${notas[i]}`);
}

//criação de objetos

let aluno1 = {
    nome:'João',
    cpf:'000000000000', 
    nota:10
}
let aluno2={ 
    nome:'maria',
    cpf:'11111111111',
    nota:8
}

let aluno3={
    nome: 'José',
    cpf:'22222222222',
    nota:5
}

let aluno4={
    nome:'Pedro',
    cpf:'33333333333',
    nota:7
}
let aluno5={
    nome:'Paulo',
    cpf:'44444444444',
    nota:9
}

let aluno6={
    nome:'Joaquim',
    cpf:'55555555555',
    nota:6
}
//Acesso de um atributos de objeto
//em um array,a gente acessa um elemento através dos
//colchetes [] e o índice.

//Em um objeto,a gente usa.e o nome do atributo,Ex:
console.log(aluno6.nome);
console.log(aluno6.cpf);
console.log(aluno6.nota);

console.log(aluno1.nome);
aluno1.nome = 'John';
console.log(aluno1.nome);

//Atividade carros
let carro1 = {
modelo:'Altis',
marca:'Toyota corolla',
ano:'2020',
quilometragem:'32.369',
potenciaMotor:'8.0',
cor:'branca',
preços:'137.900',
}

let carro2 = {
    modelo:'Celta',
    marca:'chavrolet',
    ano:'2001',
    quilometragem:'10000',
    potenciaMotor:'1.0',
    cor:'prata',
    preços:'9.000',
}

let carro3 = {
    modelo:'Ford Ka',
    marca:'gool',
    ano:'1999',
    quilometragem:'13000',
    potenciaMotor:'2.o',
    cor:'verde',
    preços:'7.000',
}

let carro4 = {
    modelo:'cronos',
    marca:'fiat',
    ano:'2019',
    quilometragem:'120',
    potenciaMotor:'2.o',
    cor:'preto',
    preços:'60.000',
}

let carro5 = {
    modelo:'c3',
    marca:'Citroen',
    ano:'2013',
    quilometragem:'170',
    potenciaMotor:'2.0',
    cor:'prata',
    preços:'67.000',
}

let carro6 ={
    modelo:'fit',
    marca:'Honda',
    ano:2012,
    quilometragem:34278,
    potenciaMotor:1.0,
    cor:'azul',
    preços:56.000

}

let carro7={
    modelo:'c3',
    marca:'Citroen',
    ano:2000,
    quilometragem:23416,
    potenciaMotor:1.0,
    cor:'verde',
    preços:670000
}

let carro8={
    modelo:'Compass',
    marca:'Jeep',
    ano:2021,
    quilometragem:7654,
    potenciaMotor:2.0,
    cor:'branco',
    preços:47000

}

//crie mais 3 objestoscarro,depois façacom eles também sejam impressos no consoe.
console.log(`carros---------------------------------------`);
console.log(`${carro1.marca} ${carro1.modelo} ${carro1.ano} ----> R$ ${carro1.preços}`);
console.log(`${carro2.marca} ${carro2.modelo} ${carro2.ano} ----> R$ ${carro2.preços}`);
console.log(`${carro3.marca} ${carro3.modelo} ${carro3.ano} ----> R$ ${carro3.preços}`);
console.log(`${carro4.marca} ${carro4.modelo} ${carro4.ano} ----> R$ ${carro4.preços}`);
console.log(`${carro5.marca} ${carro5.modelo} ${carro5.ano} ----> R$ ${carro5.preços}`);
console.log(`${carro6.marca} ${carro6.modelo} ${carro6.ano}-----> R$ ${carro6.preços}`);
console.log(`${carro7.marca} ${carro7.modelo} ${carro7.ano}------>R$ ${carro7.preços}`);
console.log(`${carro8.marca} ${carro8.modelo} ${carro8.ano}------>R$ ${carro8.preços}`);


let listaDecarros=[];
listaDecarros.push(carro1);
listaDecarros.push(carro2);
listaDecarros.push(carro3);
listaDecarros.push(carro4);
listaDecarros.push(carro5);
listaDecarros.push(carro6);
listaDecarros.push(carro7);
listaDecarros.push(carro8);

console.log(`carro usando for -------------------------`);
for(let i=0; i<listaDecarros.length; i++){
    console.log(`${listaDecarros[i].marca} ${listaDecarros[i].modelo} ${listaDecarros[i].ano}-->R${listaDecarros[i].preços}`);
}


