const display = document.getElementById('display');

// Adiciona os números e operadores na tela
function appendValue(value) {
    display.value += value;
}

// Limpa a tela inteira
function clearDisplay() {
    display.value = '';
}

// Apaga o último caractere digitado (Backspace)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calcula o resultado final
function calculate() {
    try {
        // A função eval executa a expressão matemática em texto
        if (display.value !== '') {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Erro';
    }
}
