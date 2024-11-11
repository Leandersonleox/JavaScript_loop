let n;
let nome;
let senha;
let Nome;
let idade;
let salario;
let sexo;
let civil;


/*1. Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor
seja inválido e continue pedindo até que o usuário informe um valor válido.
*/

n = prompt('digite uma nota de 0 a 10')
while(n < 0 || n > 10){
    n = prompt('digite uma nota de 0 a 10')
}
alert(`Nota: ${n}`)

/*2. Crie um loop que imprima todos os números de 1 a 100.*/
document.write('2. Crie um loop que imprima todos os números de 1 a 100. ' + '<br>')
for(i = 1; i <= 100; i++){
    document.writeln(i + '<br>')
}
/*3. Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao
nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
*/
nome = prompt('Digite seu nome: ')
senha = prompt('Digite sua senha: ')
while(nome === senha){
    alert('Digite uma senha diferente do seu nome:')
    nome = prompt('Digite seu nome: ')
    senha = prompt('Digite sua senha: ')
}
/*4. Faça um programa que leia e valide as seguintes informações:
a. Nome: maior que 3 caracteres;
b. Idade: entre 0 e 150;
c. Salário: maior que zero;
d. Sexo: 'f' ou 'm';
e. Estado Civil: 's', 'c', 'v', 'd';
Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length
*/
Nome = prompt('Digite seu nome: ')
while(Nome.length <= 3 ){
    alert('digite um nome com mais de 3 caracteres')
    Nome = prompt('Digite seu nome: ')
}
idade = prompt('Digite sua idade: ')
while(idade < 0 || idade > 150){
    alert('Digite uma idade valida')
    idade = prompt('Digite sua idade: ')
}
salario = prompt('Digite seu salario: ')
while(salario <= 0){
    alert('Digite um salário válido')
    salario = prompt('Digite seu salario: ')
}
sexo = prompt('Digite seu sexo [f] ou [m]: ')
while(sexo !== 'f' && sexo !== 'm'){
    alert('Digite [f] ou [m]')
    sexo = prompt('Digite seu sexo [f] ou [m]: ')
}
civil = prompt('Digite seu estado civil [s],[c],[v] ou [d]: ')
while(civil !== 's' && civil !== 'c' && civil !== 'v' && civil !== 'd'){
    alert('Digite [s],[c],[v] ou [d]')
    civil = prompt('Digite seu estado civil: ')
}
alert(`Nome: ${Nome} \nIdade: ${idade} \nSalário: ${salario} \nSexo: ${sexo} \nEstado civil: ${civil}`)

/* 5. Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.*/
let populacaoA = 80000;
let populacaoB = 200000;
let taxaCrescimentoA = 0.03; // 3%
let taxaCrescimentoB = 0.015; // 1.5%
let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaCrescimentoA;
    populacaoB += populacaoB * taxaCrescimentoB;
    anos++;
}

alert(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);

/*6. Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação. */
function calcularCrescimento() {
    let repetirOperacao = true;

    while (repetirOperacao) {
        // Entrada de dados
        let populacaoPaisA = parseFloat(prompt("Informe a população inicial do país A:"));
        let populacaoPaisB = parseFloat(prompt("Informe a população inicial do país B:"));
        let crescimentoPaisA = parseFloat(prompt("Informe a taxa de crescimento anual (%) do país A:")) / 100;
        let crescimentoPaisB = parseFloat(prompt("Informe a taxa de crescimento anual (%) do país B:")) / 100;

        // Validação das entradas
        if (isNaN(populacaoPaisA) || populacaoPaisA <= 0 || isNaN(populacaoPaisB) || populacaoPaisB <= 0 || 
            isNaN(crescimentoPaisA) || crescimentoPaisA <= 0 || isNaN(crescimentoPaisB) || crescimentoPaisB <= 0) {
            alert("Por favor, insira valores válidos para as populações e taxas de crescimento.");
            continue; // Reinicia a operação se os valores forem inválidos
        }

        let totalAnos = 0;

        // Cálculo do crescimento populacional
        while (populacaoPaisA < populacaoPaisB) {
            populacaoPaisA += populacaoPaisA * crescimentoPaisA;
            populacaoPaisB += populacaoPaisB * crescimentoPaisB;
            totalAnos++;
        }

        alert(`Serão necessários ${totalAnos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);

        // Perguntar ao usuário se deseja repetir a operação
        repetirOperacao = confirm("Deseja calcular novamente?");
    }
}
calcularCrescimento();

/**7. Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro. */
document.write('Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que ele mostre os números um ao lado do outro.'+ '<br>')
for(i = 1; i <= 20; i++){
    document.writeln(i + '<br>')
}
document.write('<br>');
for(i = 1; i <= 20; i++){
    document.write(i + ' ')    
}

/**8. Faça um programa que leia 5 números e informe o maior número. */
let n1 = parseFloat(prompt('Digite o primeiro número:'));
let n2 = parseFloat(prompt('Digite o segundo número:'));
let n3 = parseFloat(prompt('Digite o terceiro número:'));
let n4 = parseFloat(prompt('Digite o quarto número:'));
let n5 = parseFloat(prompt('Digite o quinto número:'));

if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
    alert(`${n1} é o maior`);
} else if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) {
    alert(`${n2} é o maior`);
} else if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) {
    alert(`${n3} é o maior`);
} else if (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) {
    alert(`${n4} é o maior`);
} else if (n5 > n1 && n5 > n2 && n5 > n3 && n5 > n4) {
    alert(`${n5} é o maior`);
}

/* 9. Faça um programa que leia 5 números e informe a soma e a média dos números. */
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let num3 = parseFloat(prompt("Digite o terceiro número:"));
let num4 = parseFloat(prompt("Digite o quarto número:"));
let num5 = parseFloat(prompt("Digite o quinto número:"));

let soma = num1 + num2 + num3 + num4 + num5;
let media = soma / 5;

alert(`Soma: ${soma} \nMédia: ${media}`);


/* 10. Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50. */
document.write('Números ímpares entre 1 e 50:<br>');
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        document.write(i + '<br>');
    }
}


/* 11. Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles. */
let numeroInicio = parseInt(prompt("Digite o primeiro número (início):"));
let numeroFim = parseInt(prompt("Digite o segundo número (fim):"));

document.write(`Números entre ${numeroInicio} e ${numeroFim}:<br>`);
for (let i = numeroInicio + 1; i < numeroFim; i++) {
    document.write(i + '<br>');
}


/* 12. Altere o programa anterior para mostrar no final a soma dos números. */
let somaIntervalo = 0;
document.write(`Números entre ${numeroInicio} e ${numeroFim}:<br>`);
for (let i = numeroInicio + 1; i < numeroFim; i++) {
    document.write(i + '<br>');
    somaIntervalo += i;
}

document.write(`Soma dos números no intervalo: ${somaIntervalo}<br>`);


/* 13. Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. */
let numeroTabuada = parseInt(prompt("Digite um número entre 1 e 10 para ver sua tabuada:"));

document.write(`Tabuada de ${numeroTabuada}:<br>`);
for (let i = 1; i <= 10; i++) {
    document.write(`${numeroTabuada} X ${i} = ${numeroTabuada * i}<br>`);
}


/* 14. Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número. Não utilize a função de potência da linguagem. */
let base = parseInt(prompt("Digite a base:"));
let expoente = parseInt(prompt("Digite o expoente:"));

let resultado = 1;
for (let i = 0; i < expoente; i++) {
    resultado *= base;
}

alert(`${base} elevado a ${expoente} é ${resultado}`);


/* 15. Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números ímpares. */
let pares = 0;
let impares = 0;

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Digite um número inteiro:"));
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

alert(`Quantidade de números pares: ${pares} \nQuantidade de números ímpares: ${impares}`);


/* 16. A série de Fibonacci é formada pela sequência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo. */
let nTermos = parseInt(prompt("Digite o número de termos da sequência de Fibonacci:"));
let fib1 = 1, fib2 = 1;

document.write(`Sequência de Fibonacci até o ${nTermos}º termo:<br>`);
document.write(fib1 + '<br>');
for (let i = 2; i < nTermos; i++) {
    let fib3 = fib1 + fib2;
    document.write(fib3 + '<br>');
    fib1 = fib2;
    fib2 = fib3;
}


/* 17. A série de Fibonacci é formada pela sequência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa que gere a série até que o valor seja maior que 500. */
let fibonacci1 = 0, fibonacci2 = 1;

document.write("Sequência de Fibonacci até o valor maior que 500:<br>");
document.write(fibonacci1 + "<br>");
while (fibonacci2 <= 500) {
    document.write(fibonacci2 + "<br>");
    let fibonacci3 = fibonacci1 + fibonacci2;
    fibonacci1 = fibonacci2;
    fibonacci2 = fibonacci3;
}


/* 18. Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120 */
let numeroFatorial = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;

for (let i = numeroFatorial; i > 0; i--) {
    fatorial *= i;
}

alert(`O fatorial de ${numeroFatorial} é ${fatorial}`);




/**19. Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores. */
let numValores = parseInt(prompt("Quantos números você quer inserir?"));

if (numValores <= 0 || numValores >= 1000) {
    alert("Você deve inserir pelo menos um número.");
} else {
    let menorValor = Infinity;  // Inicializa com o maior valor possível
    let maiorValor = -Infinity; // Inicializa com o menor valor possível
    let soma = 0;

    for (let i = 0; i < numValores; i++) {
        let numero = parseInt(prompt(`Digite o ${i + 1}º número:`));

        soma += numero;  // Acumula a soma

        // Verifica e atualiza o menor valor
        if (numero < menorValor) {
            menorValor = numero;
        }

        // Verifica e atualiza o maior valor
        if (numero > maiorValor) {
            maiorValor = numero;
        }
    }

    alert(`Menor valor: ${menorValor}`);
    alert(`Maior valor: ${maiorValor}`);
    alert(`Soma dos valores: ${soma}`);
}

/**20. Altere o programa anterior para que ele aceite apenas números entre 0 e 1000. */

let quantidadeDeNumeros = parseInt(prompt("Quantos números você quer inserir?"));

if (quantidadeDeNumeros <= 0) {
    alert("Você deve inserir pelo menos um número.");
} else {
    let menorNumero = Infinity;  // Inicializa com o maior valor possível
    let maiorNumero = -Infinity; // Inicializa com o menor valor possível
    let totalSoma = 0;

    for (let i = 0; i < quantidadeDeNumeros; i++) {
        let numero;
        
        // Solicita um número e valida se está entre 0 e 1000
        do {
            numero = parseInt(prompt(`Digite o ${i + 1}º número (entre 0 e 1000):`));
            
            if (numero < 0 || numero > 1000) {
                alert("Por favor, insira um número válido entre 0 e 1000.");
            }
        } while (numero < 0 || numero > 1000);  // Continua pedindo até um número válido

        totalSoma += numero;  // Acumula a soma

        // Verifica e atualiza o menor número
        if (numero < menorNumero) {
            menorNumero = numero;
        }

        // Verifica e atualiza o maior número
        if (numero > maiorNumero) {
            maiorNumero = numero;
        }
    }

    alert(`Menor número: ${menorNumero}`);
    alert(`Maior número: ${maiorNumero}`);
    alert(`Soma total: ${totalSoma}`);
}


/**21. Altere o programa de cálculo do fatorial, permitindo ao usuário calcular o fatorial várias vezes e limitando o fatorial a números inteiros positivos e menores que 16. */
let numero =0
do{
   numero = parseInt(prompt("Digite um número inteiro para calcular seu fatorial:"));
if(numero >=16){
    alert("Escreva um número abaixo de 16");
}
}while(numero>=16)
let quant = parseInt(prompt('quantas vezes você deseja calcular o fatorial?'))
if (numero < 0) {
    alert("O fatorial não existe para números negativos.");
}else {
    let fatorial = 1;

    // Calcula o fatorial usando um loop
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    alert(`O fatorial de ${numero} é ${fatorial}.`);
}
/**22. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1. */

let inputNumber = parseInt(prompt("Digite um número inteiro para verificar se é primo:"));

if (inputNumber <= 1) {
    alert(`${inputNumber} não é primo.`);
} else {
    let isPrimeNumber = true;
    for (let i = 2; i <= Math.sqrt(inputNumber); i++) {
        if (inputNumber % i === 0) {
            isPrimeNumber = false;
            break;
        }
    }

    if (isPrimeNumber) {
        alert(`${inputNumber} é primo.`);
    } else {
        alert(`${inputNumber} não é primo.`);
    }
}

/**23. Altere o programa de cálculo dos números primos, informando, caso o número não seja primo, por quais número ele é divisível. */

let number = parseInt(prompt("Digite um número inteiro para verificar se é primo:"));
let divisors = [];

if (number <= 1) {
    alert(`${number} não é primo.`);
} else {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            divisors.push(i);
        }
    }

    if (isPrime) {
        alert(`${number} é primo.`);
    } else {
        alert(`${number} não é primo. Ele é divisível por: ${divisors.join(", ")}`);
    }
}


/**24. Faça um programa que mostre todos os primos entre 1 e N sendo N um número inteiro fornecido pelo usuário. O programa deverá mostrar também o número de divisões que ele executou para encontrar os números primos. Serão avaliados o funcionamento, o estilo e o número de testes (divisões) executados. */

let upperLimit = parseInt(prompt("Digite um número N para encontrar os números primos até N:"));
let primesFound = [];
let divisionCount = 0;

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        divisionCount++;
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 2; i <= upperLimit; i++) {
    if (isPrime(i)) {
        primesFound.push(i);
    }
}

alert(`Números primos entre 1 e ${upperLimit}: ${primesFound.join(", ")}`);
alert(`Total de divisões realizadas: ${divisionCount}`);

/**25. Faça um programa que calcule o mostre a média aritmética de N notas. */

let numGrades = parseInt(prompt("Digite o número de notas:"));
let totalGrades = 0;

for (let i = 1; i <= numGrades; i++) {
    let grade = parseFloat(prompt(`Digite a nota ${i}:`));
    totalGrades += grade;
}

let average = totalGrades / numGrades;
alert(`A média das notas é: ${average.toFixed(2)}`);

/**26. Faça um programa que peça para n pessoas a sua idade, ao final o programa devera verificar se a média de idade da turma varia entre 0 e 25,26 e 60 e maior que 60; e então, dizer se a turma é jovem, adulta ou idosa, conforme a média calculada. */

let numPeople = parseInt(prompt("Digite o número de pessoas na turma:"));
let totalAge = 0;

for (let i = 1; i <= numPeople; i++) {
    let age = parseInt(prompt(`Digite a idade da pessoa ${i}:`));
    totalAge += age;
}

let avgAge = totalAge / numPeople;

if (avgAge <= 25) {
    alert("A turma é jovem.");
} else if (avgAge <= 60) {
    alert("A turma é adulta.");
} else {
    alert("A turma é idosa.");
}

/**27.Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato. */

let totalVoters = parseInt(prompt("Digite o número total de eleitores:"));
let votes = { 1: 0, 2: 0, 3: 0 };

for (let i = 1; i <= totalVoters; i++) {
    let vote = parseInt(prompt(`Digite o voto do eleitor ${i} (1, 2 ou 3):`));
    if (vote === 1 || vote === 2 || vote === 3) {
        votes[vote]++;
    } else {
        alert("Voto inválido. Voto não computado.");
    }
}

alert(`Votos para o candidato 1: ${votes[1]}`);
alert(`Votos para o candidato 2: ${votes[2]}`);
alert(`Votos para o candidato 3: ${votes[3]}`);

/**28. Faça um programa que calcule o número médio de alunos por turma. Para isto, peça a quantidade de turmas e a quantidade de alunos para cada turma. As turmas não podem ter mais de 40 alunos. */

let numClasses = parseInt(prompt("Digite o número de turmas:"));
let totalStudentss = 0;

for (let i = 1; i <= numClasses; i++) {
    let studentsInClass = parseInt(prompt(`Digite a quantidade de alunos na turma ${i}:`));
    if (studentsInClass > 40) {
        alert("Número de alunos não pode ser maior que 40.");
        break;
    }
    totalStudentss += studentsInClass;
}

let avgStudents = totalStudentss / numClasses;
alert(`O número médio de alunos por turma é: ${avgStudents.toFixed(2)}`);

/**29 Faça um programa que calcule o valor total investido por um colecionador em sua coleção de CDs e o valor médio gasto em cada um deles. O usuário deverá informar a quantidade de CDs e o valor para em cada um.. */

let numCds = parseInt(prompt("Digite o número de CDs na coleção:"));
let totalSpent = 0;

for (let i = 1; i <= numCds; i++) {
    let cdPrice = parseFloat(prompt(`Digite o preço do CD ${i}:`));
    totalSpent += cdPrice;
}

let avgPrice = totalSpent / numCds;
alert(`Valor total investido: R$ ${totalSpent.toFixed(2)}`);
alert(`Valor médio gasto por CD: R$ ${avgPrice.toFixed(2)}`);

/**30.O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas. Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 produtos, conforme o exemplo abaixo:
        a. Lojas Quase Dois - Tabela de preços
1 - R$ 1.99
2 - R$ 3.98
...
50 - R$ 99.50 */
alert("Lojas Quase Dois - Tabela de preços");
for (let productCount = 1; productCount <= 50; productCount++) {
    let productPrice = (productCount * 1.99).toFixed(2);
    alert(`${productCount} - R$ ${productPrice}`);
}

/**31. O Sr. Manoel Joaquim acaba de adquirir uma panificadora e pretende implantar a metodologia da tabelinha, que já é um sucesso na sua loja de 1,99. Você foi contratado para desenvolver o programa que monta a tabela de preços de pães, de 1 até 50 pães, a partir do preço do pão informado pelo usuário, conforme o exemplo abaixo:
        a. Preço do pão: R$ 0.18
Panificadora Pão de Ontem - Tabela de preços
1 - R$ 0.18
2 - R$ 0.36
...
50 - R$ 9.00 */
let breadPrice = parseFloat(prompt("Informe o preço do pão:"));
alert("Panificadora Pão de Ontem - Tabela de preços");

for (let breadCount = 1; breadCount <= 50; breadCount++) {
    let totalPrice = (breadCount * breadPrice).toFixed(2);
    alert(`${breadCount} - R$ ${totalPrice}`);
}


/**    32. O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e agora possui uma loja de conveniências. Faça um programa que implemente uma caixa registradora rudimentar. O programa deverá receber um número desconhecido de valores referentes aos preços das mercadorias. Um valor zero deve ser informado pelo operador para indicar o final da compra. O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente forneceu, para então calcular e mostrar o valor do troco. Após esta operação, o programa deverá voltar ao ponto inicial, para registrar a próxima compra. A saída deve ser conforme o exemplo abaixo:
        a. Lojas Tabajara 
Produto 1: R$ 2.20
Produto 2: R$ 5.80
Produto 3: R$ 0
Total: R$ 9.00
Dinheiro: R$ 20.00
Troco: R$ 11.00
... */
while (true) {
    let totalAmount = 0;
    let productPrice;
    let productCount = 1;

    while (true) {
        productPrice = parseFloat(prompt(`Produto ${productCount}: Digite o preço (digite 0 para encerrar a compra):`));
        if (productPrice === 0) break;
        totalAmount += productPrice;
        productCount++;
    }

    let payment = parseFloat(prompt(`Total da compra: R$ ${totalAmount.toFixed(2)}. Digite o valor pago: `));
    let change = payment - totalAmount;
    alert(`Troco: R$ ${change.toFixed(2)}`);
    let continueShopping = prompt("Deseja registrar outra compra? (sim/não)").toLowerCase();
    if (continueShopping !== 'sim') break;
}

/**33. O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperaturas informadas, bem como a média das temperaturas.*/
let temperatures = [];
let temp;

while (true) {
    temp = parseFloat(prompt("Digite a temperatura (digite 0 para encerrar):"));
    if (temp === 0) break;
    temperatures.push(temp);
}

let minTemp = Math.min(...temperatures);
let maxTemp = Math.max(...temperatures);
let avgTemp = temperatures.reduce((sum, tempValue) => sum + tempValue, 0) / temperatures.length;

alert(`Menor temperatura: ${minTemp.toFixed(2)}`);
alert(`Maior temperatura: ${maxTemp.toFixed(2)}`);
alert(`Média das temperaturas: ${avgTemp.toFixed(2)}`);

/**34. Os números primos possuem várias aplicações dentro da Computação, por exemplo na Criptografia. Um número primo é aquele que é divisível apenas por um e por ele mesmo. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. */
let num = parseInt(prompt("Digite um número inteiro para verificar se é primo:"));

if (num <= 1) {
    alert(`${num} não é primo.`);
} else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        alert(`${num} é primo.`);
    } else {
        alert(`${num} não é primo.`);
    }
}

/**35. Encontrar números primos é uma tarefa difícil. Faça um programa que gera uma lista dos números primos existentes entre 1 e um número inteiro informado pelo usuário. */
let limit = parseInt(prompt("Digite um número inteiro N para encontrar os números primos até N:"));
let primeNumbers = [];

function checkPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

for (let i = 2; i <= limit; i++) {
    if (checkPrime(i)) {
        primeNumbers.push(i);
    }
}

alert(`Números primos entre 1 e ${limit}: ${primeNumbers.join(", ")}`);

/**36. Desenvolva um programa que faça a tabuada de um número qualquer inteiro que será digitado pelo usuário, mas a tabuada não deve necessariamente iniciar em 1 e terminar em 10, o valor inicial e final devem ser informados também pelo usuário, conforme exemplo abaixo:
        a. Montar a tabuada de: 5
Começar por: 4
Terminar em: 7

Vou montar a tabuada de 5 começando em 4 e terminando em 7:
5 X 4 = 20
5 X 5 = 25
5 X 6 = 30
5 X 7 = 35
Obs: Você deve verificar se o usuário não digitou o final menor que o inicial. */
let numberr = parseInt(prompt("Digite o número para montar a tabuada:"));
let start = parseInt(prompt("Digite o número de início da tabuada:"));
let end = parseInt(prompt("Digite o número de fim da tabuada:"));

if (end < start) {
    alert("O número final deve ser maior ou igual ao número inicial.");
} else {
    alert(`Montando a tabuada de ${numberr} de ${start} até ${end}:`);
    for (let i = start; i <= end; i++) {
        alert(`${numberr} X ${i} = ${numberr * i}`);
    }
}
/**37. Uma academia deseja fazer um senso entre seus clientes para descobrir o mais alto, o mais baixo, a mais gordo e o mais magro, para isto você deve fazer um programa que pergunte a cada um dos clientes da academia seu código, sua altura e seu peso. O final da digitação de dados deve ser dada quando o usuário digitar 0 (zero) no campo código. Ao encerrar o programa também deve ser informados os códigos e valores do clente mais alto, do mais baixo, do mais gordo e do mais magro, além da média das alturas e dos pesos dos clientes */
let highest = { clientId: null, height: 0 };
let shortest = { clientId: null, height: Infinity };
let heaviest = { clientId: null, weight: 0 };
let lightest = { clientId: null, weight: Infinity };

let totalHeight = 0, totalWeight = 0;
let totalClients = 0;

while (true) {
    let clientId = parseInt(prompt("Digite o código do cliente (0 para encerrar):"));
    if (clientId === 0) break;
    
    let height = parseFloat(prompt("Digite a altura (em metros):"));
    let weight = parseFloat(prompt("Digite o peso (em kg):"));
    
    totalHeight += height;
    totalWeight += weight;
    totalClients++;
    
    if (height > highest.height) {
        highest = { clientId, height };
    }
    if (height < shortest.height) {
        shortest = { clientId, height };
    }
    if (weight > heaviest.weight) {
        heaviest = { clientId, weight };
    }
    if (weight < lightest.weight) {
        lightest = { clientId, weight };
    }
}

let avgHeight = totalHeight / totalClients;
let avgWeight = totalWeight / totalClients;

alert(`Cliente mais alto: Código ${highest.clientId} - Altura: ${highest.height}`);
alert(`Cliente mais baixo: Código ${shortest.clientId} - Altura: ${shortest.height}`);
alert(`Cliente mais gordo: Código ${heaviest.clientId} - Peso: ${heaviest.weight}`);
alert(`Cliente mais magro: Código ${lightest.clientId} - Peso: ${lightest.weight}`);
alert(`Média de altura: ${avgHeight.toFixed(2)}m`);
alert(`Média de peso: ${avgWeight.toFixed(2)}kg`);


/**    38. Um funcionário de uma empresa recebe aumento salarial anualmente: Sabe-se que:
        a. Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
        b. Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
        c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual do ano anterior. Faça um programa que determine o salário atual desse funcionário. Após concluir isto, altere o programa permitindo que o usuário digite o salário inicial do funcionário. */
        let initialSalary = parseFloat(prompt("Informe o salário inicial do funcionário (em R$):"));
        let currentYear = new Date().getFullYear();
        let hireYear = 1995;
        let currentSalary = initialSalary;
        let increaseRate = 1.5;
        
        for (let year = hireYear + 1; year <= currentYear; year++) {
            currentSalary += currentSalary * (increaseRate / 100);
            increaseRate *= 2;
        }
        
        alert(`O salário atual do funcionário é: R$ ${currentSalary.toFixed(2)}`);
        
/** 39. Foi feita uma estatística em cinco cidades brasileiras para coletar dados sobre acidentes de trânsito. Foram obtidos os seguintes dados:
        a. Código da cidade;
        b. Número de veículos de passeio (em 1999);
        c. Número de acidentes de trânsito com vítimas (em 1999). Deseja-se saber:
        d. Qual o maior e menor índice de acidentes de transito e a que cidade pertence;
        e. Qual a média de veículos nas cinco cidades juntas;
        f. Qual a média de acidentes de trânsito nas cidades com menos de 2.000 veículos de passeio.*/        
        let citiesCount = 5;
        let maxAccidents = 0, minAccidents = Infinity;
        let cityMax, cityMin;
        let totalVehicles = 0, totalAccidents = 0;
        let accidentsUnder2000Vehicles = 0, citiesUnder2000 = 0;
        
        for (let i = 1; i <= citiesCount; i++) {
            let cityCode = parseInt(prompt(`Digite o código da cidade ${i}:`));
            let vehiclesCount = parseInt(prompt(`Número de veículos de passeio em 1999 na cidade ${cityCode}:`));
            let accidentsCount = parseInt(prompt(`Número de acidentes de trânsito com vítimas em 1999 na cidade ${cityCode}:`));
            
            totalVehicles += vehiclesCount;
            totalAccidents += accidentsCount;
        
            if (accidentsCount < minAccidents) {
                minAccidents = accidentsCount;
                cityMin = cityCode;
            }
            if (accidentsCount > maxAccidents) {
                maxAccidents = accidentsCount;
                cityMax = cityCode;
            }
        
            if (vehiclesCount < 2000) {
                accidentsUnder2000Vehicles += accidentsCount;
                citiesUnder2000++;
            }
        }
        
        let avgVehicles = totalVehicles / citiesCount;
        let avgAccidentsUnder2000 = accidentsUnder2000Vehicles / citiesUnder2000;
        
        alert(`Maior índice de acidentes: ${maxAccidents} na cidade ${cityMax}`);
        alert(`Menor índice de acidentes: ${minAccidents} na cidade ${cityMin}`);
        alert(`Média de veículos: ${avgVehicles.toFixed(2)}`);
        alert(`Média de acidentes nas cidades com menos de 2000 veículos: ${avgAccidentsUnder2000.toFixed(2)}`);
        
/**    40. Faça um programa que receba o valor de uma dívida e mostre uma tabela com os seguintes dados: valor da dívida, valor dos juros, quantidade de parcelas e valor da parcela.
        a. Os juros e a quantidade de parcelas seguem a tabela abaixo:
Quantidade de Parcelas  % de Juros sobre o valor inicial da dívida
1       0
3       10
6       15
9       20
12      25
Exemplo de saída do programa:
Valor da Dívida Valor dos Juros Quantidade de Parcelas  Valor da Parcela
R$ 1.000,00     0               1                       R$  1.000,00
R$ 1.100,00     100             3                       R$    366,00
R$ 1.150,00     150             6                       R$    191,67 */
let debtAmount = parseFloat(prompt("Informe o valor da dívida (em R$):"));

let paymentPlans = [
    { months: 1, interest: 0 },
    { months: 3, interest: 10 },
    { months: 6, interest: 15 },
    { months: 9, interest: 20 },
    { months: 12, interest: 25 }
];

alert("Tabela de Parcelas e Juros:");
paymentPlans.forEach(plan => {
    let totalAmount = debtAmount + (debtAmount * (plan.interest / 100));
    let installmentValue = totalAmount / plan.months;
    alert(`Valor da Dívida: R$ ${totalAmount.toFixed(2)} - Parcelas: ${plan.months} - Parcela: R$ ${installmentValue.toFixed(2)}`);
});


/**    41. O cardápio de uma lanchonete é o seguinte:
        a. Especificação   Código  Preço
Cachorro Quente 100     R$ 1,20
Bauru Simples   101     R$ 1,30
Bauru com ovo   102     R$ 1,50
Hambúrguer      103     R$ 1,20
Cheeseburguer   104     R$ 1,30
Refrigerante    105     R$ 1,00
Faça um programa que leia o código dos itens pedidos e as quantidades desejadas. Calcule e mostre o valor a ser pago por item (preço * quantidade) e o total geral do pedido. Considere que o cliente deve informar quando o pedido deve ser encerrado. */
let menu = {
    100: { name: "Cachorro Quente", price: 1.20 },
    101: { name: "Bauru Simples", price: 1.30 },
    102: { name: "Bauru com ovo", price: 1.50 },
    103: { name: "Hambúrguer", price: 1.20 },
    104: { name: "Cheeseburguer", price: 1.30 },
    105: { name: "Refrigerante", price: 1.00 }
};

let totalPrice = 0;

while (true) {
    let productCode = parseInt(prompt("Informe o código do produto (ou 0 para encerrar):"));
    if (productCode === 0) break;

    if (menu[productCode]) {
        let quantity = parseInt(prompt(`Quantos ${menu[productCode].name} você deseja?`));
        totalPrice += menu[productCode].price * quantity;
    } else {
        alert("Código inválido!");
    }
}

alert(`Total a pagar: R$ ${totalPrice.toFixed(2)}`);

/**    42. Em uma eleição presidencial existem quatro candidatos. Os votos são informados por meio de código. Os códigos utilizados são:
        a. 1 , 2, 3, 4  - Votos para os respectivos candidatos 
(você deve montar a tabela ex: 1 - Jose/ 2- João/etc)
5 - Voto Nulo
6 - Voto em Branco
Faça um programa que calcule e mostre:
        b. O total de votos para cada candidato;
        c. O total de votos nulos;
        d. O total de votos em branco;
        e. A percentagem de votos nulos sobre o total de votos;
        f. A percentagem de votos em branco sobre o total de votos. Para finalizar o conjunto de votos tem-se o valor zero. */
        let totalVotes = 0;
        let candidateVotes = {1: 0, 2: 0, 3: 0, 4: 0};
        let invalidVotes = 0;
        let blankVotes = 0;
        
        while (true) {
            let vote = parseInt(prompt("Digite o código do candidato (1, 2, 3, 4) ou 5 para voto nulo, 6 para voto em branco. Digite 0 para encerrar:"));
            
            if (vote === 0) break;
            
            if (vote === 1 || vote === 2 || vote === 3 || vote === 4) {
                candidateVotes[vote]++;
            } else if (vote === 5) {
                invalidVotes++;
            } else if (vote === 6) {
                blankVotes++;
            } else {
                alert("Voto inválido. Tente novamente.");
                continue;
            }
            
            totalVotes++;
        }
        
        let totalVotesForCandidates = Object.values(candidateVotes).reduce((acc, current) => acc + current, 0);
        let invalidVotesPercentage = ((invalidVotes / totalVotesForCandidates) * 100).toFixed(2);
        let blankVotesPercentage = ((blankVotes / totalVotesForCandidates) * 100).toFixed(2);
        
        alert(`Total de votos para cada candidato:`);
        alert(`Candidato 1: ${candidateVotes[1]}`);
        alert(`Candidato 2: ${candidateVotes[2]}`);
        alert(`Candidato 3: ${candidateVotes[3]}`);
        alert(`Candidato 4: ${candidateVotes[4]}`);
        alert(`Total de votos nulos: ${invalidVotes}`);
        alert(`Total de votos em branco: ${blankVotes}`);
        alert(`Percentual de votos nulos: ${invalidVotesPercentage}%`);
        alert(`Percentual de votos em branco: ${blankVotesPercentage}%`);
        
/**    43. Desenvolver um programa para verificar a nota do aluno em uma prova com 10 questões, o programa deve perguntar ao aluno a resposta de cada questão e ao final comparar com o gabarito da prova e assim calcular o total de acertos e a nota (atribuir 1 ponto por resposta certa). Após cada aluno utilizar o sistema deve ser feita uma pergunta se outro aluno vai utilizar o sistema. Após todos os alunos terem respondido informar:
        a. Maior e Menor Acerto;
        b. Total de Alunos que utilizaram o sistema;
        c. A Média das Notas da Turma. */
        let totalStudents = 0;
let studentScores = [];
let highestScore = -1;
let lowestScore = 11; // Nota máxima é 10
let totalScore = 0;

while (true) {
    let currentStudentScore = 0;
    
    for (let i = 1; i <= 10; i++) {
        let questionAnswer = parseInt(prompt(`Resposta da questão ${i} (0 para errada, 1 para correta):`));
        if (questionAnswer === 1) {
            currentStudentScore++;
        }
    }

    studentScores.push(currentStudentScore);
    totalStudents++;
    totalScore += currentStudentScore;

    if (currentStudentScore > highestScore) highestScore = currentStudentScore;
    if (currentStudentScore < lowestScore) lowestScore = currentStudentScore;

    let continueAnswering = prompt("Outro aluno vai utilizar o sistema? (sim/não)").toLowerCase();
    if (continueAnswering !== "sim") break;
}

let averageScore = totalScore / totalStudents;

alert(`Maior nota: ${highestScore}`);
alert(`Menor nota: ${lowestScore}`);
alert(`Total de alunos que utilizaram o sistema: ${totalStudents}`);
alert(`Média das notas da turma: ${averageScore.toFixed(2)}`);
