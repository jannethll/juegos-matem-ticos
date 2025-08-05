// Utilidades para generar ejercicios matemáticos con diferentes niveles de dificultad

// Función para generar un número aleatorio en un rango
const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Función para simplificar fracciones
const simplifyFraction = (numerator, denominator) => {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const divisor = gcd(Math.abs(numerator), Math.abs(denominator));
  return {
    numerator: numerator / divisor,
    denominator: denominator / divisor
  };
};

// Función para generar ejercicios de enteros según dificultad
export const generateIntegerProblem = (operation, difficulty) => {
  let num1, num2, correctAnswer, wrongAnswers;
  
  // Definir rangos según dificultad
  const ranges = {
    facil: { min: 1, max: 20 },
    medio: { min: 10, max: 100 },
    dificil: { min: 50, max: 500 }
  };
  
  const range = ranges[difficulty] || ranges.facil;
  
  switch (operation) {
    case 'suma':
      num1 = randomInRange(range.min, range.max);
      num2 = randomInRange(range.min, range.max);
      correctAnswer = num1 + num2;
      wrongAnswers = [
        correctAnswer + randomInRange(1, 10),
        correctAnswer - randomInRange(1, 10),
        correctAnswer + randomInRange(11, 20)
      ];
      break;
      
    case 'resta':
      num1 = randomInRange(range.min + 10, range.max);
      num2 = randomInRange(range.min, num1 - 1);
      correctAnswer = num1 - num2;
      wrongAnswers = [
        correctAnswer + randomInRange(1, 10),
        correctAnswer - randomInRange(1, 10),
        correctAnswer + randomInRange(11, 20)
      ];
      break;
      
    case 'multiplicacion':
      const maxMult = difficulty === 'facil' ? 12 : difficulty === 'medio' ? 25 : 50;
      num1 = randomInRange(1, maxMult);
      num2 = randomInRange(1, maxMult);
      correctAnswer = num1 * num2;
      wrongAnswers = [
        correctAnswer + randomInRange(1, 20),
        correctAnswer - randomInRange(1, 15),
        correctAnswer + randomInRange(21, 40)
      ];
      break;
      
    case 'division':
      const maxDiv = difficulty === 'facil' ? 10 : difficulty === 'medio' ? 20 : 50;
      num2 = randomInRange(2, maxDiv);
      correctAnswer = randomInRange(1, maxDiv);
      num1 = num2 * correctAnswer;
      wrongAnswers = [
        correctAnswer + randomInRange(1, 5),
        correctAnswer - randomInRange(1, 3),
        correctAnswer + randomInRange(6, 10)
      ];
      break;
      
    default:
      num1 = 1;
      num2 = 1;
      correctAnswer = 2;
      wrongAnswers = [3, 4, 5];
  }
  
  // Filtrar respuestas negativas para operaciones básicas
  wrongAnswers = wrongAnswers.filter(answer => answer > 0);
  
  // Asegurar que tenemos 3 respuestas incorrectas únicas
  while (wrongAnswers.length < 3) {
    const newWrong = correctAnswer + randomInRange(-20, 20);
    if (newWrong !== correctAnswer && newWrong > 0 && !wrongAnswers.includes(newWrong)) {
      wrongAnswers.push(newWrong);
    }
  }
  
  const allAnswers = [correctAnswer, ...wrongAnswers.slice(0, 3)];
  const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);
  
  return {
    num1,
    num2,
    correctAnswer,
    answers: shuffledAnswers,
    operation,
    difficulty,
    type: 'integer'
  };
};

// Función para generar ejercicios de fracciones según dificultad
export const generateFractionProblem = (operation, difficulty) => {
  let frac1, frac2, correctAnswer, wrongAnswers;
  
  // Definir rangos para numeradores y denominadores según dificultad
  const ranges = {
    facil: { numMax: 10, denMax: 10 },
    medio: { numMax: 20, denMax: 15 },
    dificil: { numMax: 50, denMax: 25 }
  };
  
  const range = ranges[difficulty] || ranges.facil;
  
  switch (operation) {
    case 'suma':
      // Generar fracciones con denominadores comunes para facilitar
      const commonDen = randomInRange(2, range.denMax);
      frac1 = {
        numerator: randomInRange(1, range.numMax),
        denominator: commonDen
      };
      frac2 = {
        numerator: randomInRange(1, range.numMax),
        denominator: commonDen
      };
      
      correctAnswer = simplifyFraction(
        frac1.numerator + frac2.numerator,
        commonDen
      );
      
      // Generar respuestas incorrectas
      wrongAnswers = [
        simplifyFraction(frac1.numerator + frac2.numerator + 1, commonDen),
        simplifyFraction(frac1.numerator + frac2.numerator - 1, commonDen),
        simplifyFraction(frac1.numerator + frac2.numerator + 2, commonDen)
      ];
      break;
      
    case 'resta':
      const commonDen2 = randomInRange(2, range.denMax);
      const num1 = randomInRange(5, range.numMax);
      const num2 = randomInRange(1, num1 - 1);
      
      frac1 = { numerator: num1, denominator: commonDen2 };
      frac2 = { numerator: num2, denominator: commonDen2 };
      
      correctAnswer = simplifyFraction(num1 - num2, commonDen2);
      
      wrongAnswers = [
        simplifyFraction(num1 - num2 + 1, commonDen2),
        simplifyFraction(num1 - num2 - 1, commonDen2),
        simplifyFraction(num1 + num2, commonDen2)
      ];
      break;
      
    case 'multiplicacion':
      frac1 = {
        numerator: randomInRange(1, range.numMax / 2),
        denominator: randomInRange(2, range.denMax / 2)
      };
      frac2 = {
        numerator: randomInRange(1, range.numMax / 2),
        denominator: randomInRange(2, range.denMax / 2)
      };
      
      correctAnswer = simplifyFraction(
        frac1.numerator * frac2.numerator,
        frac1.denominator * frac2.denominator
      );
      
      wrongAnswers = [
        simplifyFraction(frac1.numerator * frac2.numerator + 1, frac1.denominator * frac2.denominator),
        simplifyFraction(frac1.numerator + frac2.numerator, frac1.denominator + frac2.denominator),
        simplifyFraction(frac1.numerator * frac2.denominator, frac1.denominator * frac2.numerator)
      ];
      break;
      
    case 'division':
      frac1 = {
        numerator: randomInRange(2, range.numMax / 2),
        denominator: randomInRange(2, range.denMax / 2)
      };
      frac2 = {
        numerator: randomInRange(1, range.numMax / 2),
        denominator: randomInRange(2, range.denMax / 2)
      };
      
      // División de fracciones: a/b ÷ c/d = a/b × d/c
      correctAnswer = simplifyFraction(
        frac1.numerator * frac2.denominator,
        frac1.denominator * frac2.numerator
      );
      
      wrongAnswers = [
        simplifyFraction(frac1.numerator * frac2.numerator, frac1.denominator * frac2.denominator),
        simplifyFraction(frac1.numerator, frac1.denominator * frac2.numerator),
        simplifyFraction(frac1.numerator * frac2.numerator, frac1.denominator)
      ];
      break;
      
    default:
      frac1 = { numerator: 1, denominator: 2 };
      frac2 = { numerator: 1, denominator: 3 };
      correctAnswer = { numerator: 5, denominator: 6 };
      wrongAnswers = [
        { numerator: 2, denominator: 5 },
        { numerator: 1, denominator: 6 },
        { numerator: 3, denominator: 6 }
      ];
  }
  
  return {
    frac1,
    frac2,
    correctAnswer,
    wrongAnswers: wrongAnswers.slice(0, 3),
    operation,
    difficulty,
    type: 'fraction'
  };
};

// Función para formatear fracciones como texto
export const formatFraction = (fraction) => {
  if (fraction.denominator === 1) {
    return fraction.numerator.toString();
  }
  return `${fraction.numerator}/${fraction.denominator}`;
};

// Función para obtener el símbolo de operación
export const getOperationSymbol = (operation) => {
  switch (operation) {
    case 'suma': return '+';
    case 'resta': return '-';
    case 'multiplicacion': return '×';
    case 'division': return '÷';
    default: return '+';
  }
};

