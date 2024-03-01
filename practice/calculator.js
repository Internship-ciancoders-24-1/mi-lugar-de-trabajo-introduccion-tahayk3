function calculadora(expresion) {

    if(expresion.length > 20){
        console.log(expresion.length);
        return "Ingresa menos numeros";
    }

    let arrayNumbers = [];
    let arrayOperators = [];
    let currentNumber = '';

    for (let x = 0; x < expresion.length; x++) {
        const caracter = expresion[x];
        if (caracter === '+' || caracter === '-' || caracter === '*' || caracter === '/' || caracter === '^' || caracter === 'r'   ) {
            arrayNumbers.push(parseFloat(currentNumber));
            arrayOperators.push(caracter);
            currentNumber = '';
        } else {
            currentNumber = currentNumber + caracter;
        }
    }

    arrayNumbers.push(parseFloat(currentNumber));

    for (let x = 0; x < arrayOperators.length; x++) {
        if (arrayOperators[x] === '^' || arrayOperators[x] === 'r') {
            console.log("Entra al if");
            let firstNumber = arrayNumbers[x];
            let secondNumber = arrayNumbers[x + 1];
            let operador = arrayOperators[x];

            if (operador === '^') {
                arrayNumbers[x] = Math.pow(firstNumber, secondNumber);
                arrayNumbers.splice(x + 1, 1);
                arrayOperators.splice(x, 1);
                x--; 
            }
            else if (operador === 'r') {
                arrayNumbers[x] = Math.sqrt(secondNumber);
                arrayNumbers.splice(x + 1, 1);
                arrayOperators.splice(x, 1);
                x--; 
            }
        }
    }


    for (let x = 0; x < arrayOperators.length; x++) {
        if (arrayOperators[x] === '*' || arrayOperators[x] === '/') {
            let firstNumber = arrayNumbers[x];
            let secondNumber = arrayNumbers[x + 1];
            let operador = arrayOperators[x];

            if (operador === '*') {
                arrayNumbers[x] = firstNumber * secondNumber;
                arrayNumbers.splice(x + 1, 1); 
                arrayOperators.splice(x, 1); 
                x--;
            } else if (operador === '/') {
                arrayNumbers[x] = firstNumber / secondNumber;
                arrayNumbers.splice(x + 1, 1);
                arrayOperators.splice(x, 1);
                x--; 
            }
        }
    }

    let result = arrayNumbers[0];
    for (let x = 0; x < arrayOperators.length; x++) {
        const operador = arrayOperators[x];
        const nextNumero = arrayNumbers[x + 1];

        if (operador === '+') {
            result = result + parseFloat(nextNumero);
        } else if (operador === '-') {
            result = result - parseFloat(nextNumero);
        }
    }
    
    return result;
}

console.log(calculadora('40-15*r15+5*15^2'));