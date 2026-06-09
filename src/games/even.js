import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRoundData = () => {
  const number = Math.floor(Math.random() * 100);

  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return [String(number), correctAnswer];
};

const runEvenGame = () => runGame(description, getRoundData);

export default runEvenGame;
