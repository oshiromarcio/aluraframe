class Pessoa {

    constructor(nome) {
        this.nome = nome;
    }
}

function exibeNome() {
    console.log(this.nome);
}

let pessoa = new Pessoa('Salsifufu');

exibeNome('Lampreia'); // PRIMEIRA CHAMADA <=============

exibeNome = exibeNome.bind(pessoa);

exibeNome(); // SEGUNDA CHAMADA <=============

// COLOCAR UM ARRAY EM OUTRO
let lista1 = ['banana', 'laranja', 'mamao'];
let lista2 = ['caju', 'tangerina', 'abacaxi'];

lista1.push(...lista2);

console.log(lista1);

// TRATAMENTO DE ARRAY
let numeros = [3, 2, 11, 20, 8, 7];
console.log(numeros);

let novosNumeros = numeros.map(numero => numero % 2 ? numero * 2 : numero);
/*
numeros.forEach(numero => {
    novosNumeros.push(numero % 2 ? numero * 2 : numero);
});
*/
console.log(novosNumeros);

// SOMA DOIS NÚMEROS

let num = [1, 10];
function somaDoisNumeros(num1, num2) {
    return num1 + num2;
}

console.log(somaDoisNumeros(...num));

// NOTAS DE ALUNOS
class Aluno {

    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {

    constructor(aluno, nota) {
        this.aluno = aluno;
        this.nota = nota;
    }
}

let avaliacoes = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cássio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
];

let aprovados = avaliacoes
    .filter(prova => prova.nota >= 7)
    .map(prova => prova.aluno.nome);

console.log(aprovados);

