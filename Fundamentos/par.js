// par nome/valor
const saudacao = 'Opa' // contexto lexico 1

function exec() {
    const saudacao = 'falaaaa' // contexto lexico
    return saudacao
}

//Objetos sao grupos aninhados  de pares nome/valor
const cliente = {
    nome: 'Pedro', 
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'rua exemplo',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)