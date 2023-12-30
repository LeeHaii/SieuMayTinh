//function cung ten thi goi function moi nhat

var currentNumber = '';
var nextNumber = '';
var operator = '';

function clearr() {
    document.getElementById('inp').value = '';
    document.getElementById('temp-inp').value = '';
    currentNumber = '';
    nextNumber = '';
    operator = '';
}

function addNumber(number) {
    currentNumber += number;
    document.getElementById('inp').value = currentNumber;
}

function setOperator(op) {
    operator = op;
    moveNumberToTemp(currentNumber, operator);
}

function moveNumberToTemp(number, op) {
    document.getElementById('inp').value = '';
    document.getElementById('temp-inp').value = number + ' ' + op;
    nextNumber = number;
    currentNumber = '';
}

function subtractt() {
    setOperator('-');
}

function addd() {
    setOperator('+');
}

function multiplyy() {
    setOperator('*');
}

function dividee() {
    setOperator('/');
}

function equall() {
    if (currentNumber !== '' && nextNumber !== '') {
        var result;
        switch (operator) {
            case '+':
                document.getElementById('temp-inp').value = `${nextNumber} + ${currentNumber}`;
                result = parseFloat(nextNumber) + parseFloat(currentNumber);
                break;
            case '-':
                document.getElementById('temp-inp').value = `${nextNumber} - ${currentNumber}`;
                result = parseFloat(nextNumber) - parseFloat(currentNumber);
                break;
            case '*':
                document.getElementById('temp-inp').value = `${nextNumber} x ${currentNumber}`;
                result = parseFloat(nextNumber) * parseFloat(currentNumber);
                break;
            case '/':
                document.getElementById('temp-inp').value = `${nextNumber} ÷ ${currentNumber}`;
                result = parseFloat(nextNumber) / parseFloat(currentNumber);
                break;
            default:
                result = 'Error';
                break;
        }
        document.getElementById('inp').value = result;
        currentNumber = result.toString();
        nextNumber = '';
        operator = '';
    }
}