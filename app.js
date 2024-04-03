

// 01) Soma de dois números
let num1 = 10;
let num2 = 5;
console.log("Soma:", num1 + num2);

// 02) Subtração de dois números
console.log("Subtração:", num1 - num2);

// 03) Produto de dois números
console.log("Produto:", num1 * num2);

// 04) Divisão de dois números
console.log("Divisão:", num1 / num2);

// 05) Quadrado de um número
let num3 = 6;
console.log("Quadrado:", num3 ** 2);

// 06) Raiz quadrada de um número
console.log("Raiz quadrada:", Math.sqrt(num3));

// 07) Módulo de um número (valor absoluto)
let num4 = -8;
console.log("Módulo:", Math.abs(num4));

// 08) Verificar se um número é par ou ímpar
let num5 = 7;
if (num5 % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}

// 09) Verificar se um número é positivo, negativo ou zero
let num6 = -3;
if (num6 > 0) {
    console.log("Positivo");
} else if (num6 < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

// 10) Maior entre dois números
console.log("Maior número:", Math.max(num1, num2));

// 11) Menor entre dois números
console.log("Menor número:", Math.min(num1, num2));

// 12) Verificar se um número é primo
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}
console.log("É primo?", isPrime(13));

// 13) Exibir todos os números de 1 até o número fornecido
let num7 = 8;
for (let i = 1; i <= num7; i++) {
    console.log(i);
}

// 14) Verificar se um número é um quadrado perfeito
let num8 = 16;
if (Math.sqrt(num8) % 1 === 0) {
    console.log("Quadrado perfeito");
} else {
    console.log("Não é um quadrado perfeito");
}

// 15) Verificar se um número é múltiplo de 3
let num9 = 9;
if (num9 % 3 === 0) {
    console.log("É múltiplo de 3");
} else {
    console.log("Não é múltiplo de 3");
}

// 16) Verificar se um número é divisível por 5
let num10 = 20;
if (num10 % 5 === 0) {
    console.log("É divisível por 5");
} else {
    console.log("Não é divisível por 5");
}

// 17) Soma de todos os números pares de 1 até o número fornecido
let num11 = 10;
let sum = 0;
for (let i = 2; i <= num11; i += 2) {
    sum += i;
}
console.log("Soma de pares:", sum);
// 18) Soma de dois números
let num12 = 15;
let num13 = 7;
console.log("Soma:", num12 + num13);

// 19) Subtração de dois números
console.log("Subtração:", num12 - num13);

// 20) Produto de dois números
console.log("Produto:", num12 * num13);

// 21) Divisão de dois números
console.log("Divisão:", num12 / num13);

// 22) Quadrado de um número
console.log("Quadrado:", num12 ** 2);

// 23) Raiz quadrada de um número
console.log("Raiz quadrada:", Math.sqrt(num12));

// 24) Módulo de um número (valor absoluto)
console.log("Módulo:", Math.abs(num13));

// 25) Verificar se um número é par ou ímpar
if (num13 % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}

// 26) Maior entre dois números
console.log("Maior número:", Math.max(num12, num13));

// 27) Menor entre dois números
console.log("Menor número:", Math.min(num12, num13));

// 28) Média de três números
let num14 = 20;
let num15 = 30;
let num16 = 40;
let media = (num14 + num15 + num16) / 3;
console.log("Média:", media);

// 29) Fatorial de um número
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}
console.log("Fatorial:", factorial(5));

// 30) Verificar se um número é primo
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}
console.log("É primo?", isPrime(13));

// 31) Exibir todos os números de 1 até o número fornecido
let num17 = 8;
for (let i = 1; i <= num17; i++) {
    console.log(i);
}

// 32) Tabuada de um número
let num18 = 7;
for (let i = 1; i <= 10; i++) {
    console.log(num18 + " x " + i + " = " + (num18 * i));
}

// 33) Verificar se um número é um quadrado perfeito
let num19 = 25;
if (Math.sqrt(num19) % 1 === 0) {
    console.log("Quadrado perfeito");
} else {
    console.log("Não é um quadrado perfeito");
}

// 34) Verificar se um número é múltiplo de 3
let num20 = 9;
if (num20 % 3 === 0) {
    console.log("É múltiplo de 3");
} else {
    console.log("Não é múltiplo de 3");
}

// 35) Verificar se um número é divisível por 5
let num21 = 20;
if (num21 % 5 === 0) {
    console.log("É divisível por 5");
} else {
    console.log("Não é divisível por 5");
}

// 36) Soma de todos os números pares de 1 até o número fornecido
let num22 = 10;
let somaPares = 0;
for (let i = 2; i <= num22; i += 2) {
    somaPares += i;
}
console.log("Soma de pares:", somaPares);