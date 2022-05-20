// Crie uma função que recebe dois números como parâmetros.
// Confira se os números são iguais.
// Confira se a soma dos números é maior que 10 ou menor que 20.
// Retorne uma string dizendo 
// "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".

function compararNumeros(n1, n2) {
    const primeiraFrase = criaPrimeiraFrase(n1,n2);
    const segudaFrase = criaSegudaFrase(n1, n2);
    
    return `${primeiraFrase} ${segudaFrase}`;
}

function criaPrimeiraFrase(n1, n2) {
    let saoIguais = '';
    if (n1!==n2) { 
        saoIguais = 'não';
    }
    
    return `Os números ${n1} e ${n2} ${saoIguais} são iguais.`
}

function criaSegudaFrase(n1,n2) {
    const soma = n1 + n2;
    let maiorDez = 'menor';
    let maiorVinte = 'menor';

    if (soma > 10) {
        maiorDez = 'maior'
    }

    if (soma > 20) {
        maiorVinte = 'maior que'
    }

    if (soma == 20) {
        maiorVinte = 'igual'
    }

    return `Sua soma é ${soma}, que é ${maiorDez} que 10 e ${maiorVinte} 20.`
}

console.log(compararNumeros(10,10));