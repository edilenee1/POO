let alunos = ['João','Maria','josé','Pedro','Paulo'];

alert(alunos[3]);

alunos[4] = 'Gerson'

alunos.push('joaquim');

let notas = [10,8,5,7,9,6];

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
    quilometragem:'100',
    potenciaMotor:'1.0',
    cor:'prata',
    preços:'9.000',
}

let carro3 = {
    modelo:'Ford Ka',
    marca:'gool',
    ano:'1999',
    quilometragem:'130',
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
