// Importamos o módulo "readline" para capturar entrada do usuário no terminal
const readline = require('readline');

// Criamos uma interface para entrada e saída no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para realizar operações matemáticas
function calcular(operador, num1, num2) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Erro: divisão por zero';
        default:
            return 'Operador inválido';
    }
}

// Perguntamos ao usuário qual operação deseja realizar
rl.question('Digite a operação (+, -, *, /): ', (operador) => {
    rl.question('Digite o primeiro número: ', (num1) => {
        rl.question('Digite o segundo número: ', (num2) => {
            // Convertendo os valores de entrada para número
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            
            // Chamamos a função calcular e exibimos o resultado
            const resultado = calcular(operador, num1, num2);
            console.log(`Resultado: ${resultado}`);
            
            // Fechamos a interface readline
            rl.close();
        });
    });
});
