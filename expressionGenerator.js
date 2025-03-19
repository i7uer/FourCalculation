const { Fraction } = require("fractional");

function generateRandomNumber(limit) {
  return Math.floor(Math.random() * limit);
}

function generateFraction() {
  const numerator = generateRandomNumber(10);
  const denominator = generateRandomNumber(1, 10) + 1; // 避免分母为0
  return new Fraction(numerator, denominator);
}

function chooseOperator() {
  const operators = ["+", "-", "*", "/"];
  return operators[Math.floor(Math.random() * operators.length)];
}

function generateExpression(depth = 0, maxDepth = 3, limit) {
  if (depth > maxDepth) {
    return generateRandomNumber(limit);
  }

  const operator = chooseOperator();
  const left = generateExpression(depth + 1, maxDepth, limit);
  const right = generateExpression(depth + 1, maxDepth, limit);

  return `(${left} ${operator} ${right})`;
}

function generateExercises(numQuestions, rangeLimit) {
  const exercises = [];
  for (let i = 0; i < numQuestions; i++) {
    exercises.push(generateExpression(0, 2, rangeLimit).replace(/\s+/g, ""));
  }
  return exercises;
}

module.exports = { generateExercises };
