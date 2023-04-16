function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

let numero = parseInt(prompt("Digite um número: "));
let encontrado = false;
let i = 0;

while (!encontrado) {
  let fib_i = fibonacci(i);
  if (fib_i === numero) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci!`);
    encontrado = true;
  } else if (fib_i > numero) {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
    encontrado = true;
  }
  i++;
}



