import runGame from '../index.js';

const description = 'What is the result of the expression?';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const getRoundData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();

  const operators = ['+', '-', '*'];

  const operator = operators[Math.floor(Math.random() * operators.length)];

  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;

    case '-':
      result = num1 - num2;
      break;

    case '*':
      result = num1 * num2;
      break;

    default:
      throw new Error(`Unknown operator: ${operator}`);
  }

  const question = `${num1} ${operator} ${num2}`;

  return [question, String(result)];
};

const runCalcGame = () => runGame(description, getRoundData);

export default runCalcGame;
