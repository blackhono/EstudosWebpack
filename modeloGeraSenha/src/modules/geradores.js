const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
// usaremos a função fromCharCode pegar um caracter da 
// tabela ASC e jogar um numero randomico entre o
// DECIMAL da tabela representando o grupo que queremos
// Exemplo 65 a 91 são os MAIUSCULOS

//aproveitei e relembrei maneiras de montar funções pela pratica...
const geraNumero = () => String.fromCharCode(rand(48,57))

const geraMaiuscula = () => {
    return String.fromCharCode(rand(65,91))
}

const geraMinuscula = (() => String.fromCharCode(rand(97,122)))


const simbolos = "<>,.:;/?~^}][{´`-=+_)(*&¨%$#@!'"
const geraSimbolo = (() => {
    //como simbolo é uma string lembre-se ela é INDICIADA
    //então como ela tem indices é um array 
    //então usamos simbolos[rand] para pegar um caracter
    //especial aleatorio de simbolos
    return simbolos[rand(0, simbolos.length)];
})

export default function geraSenha(quantidade, numero, maiuscula, minuscula, simbolo){
    const senhaArray = []
    quantidade = Number(quantidade);
    for(let i = 1; i <= quantidade; i++){

        //avaliação de curto circuito
        numero && senhaArray.push(geraNumero());
        maiuscula && senhaArray.push(geraMaiuscula());
        minuscula && senhaArray.push(geraMinuscula());
        simbolo && senhaArray.push(geraSimbolo());

    }
    //com esse join separei com aspas para ser uma string
    // e finalizei cortando o array com slice para trazer
    // o tamanho correto pedido
    return senhaArray.join('').slice(0, quantidade);
}



// Teste das funções 

//console.log(geraNumero())
//console.log(geraMaiuscula())
//console.log(geraMinuscula())
//console.log(geraSimbolo())