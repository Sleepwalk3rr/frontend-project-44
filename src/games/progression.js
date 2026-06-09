import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const getRandomNumber = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const getRoundData = () => {
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);
  const length = 10;

  const progression = getProgression(start, step, length);

  const hiddenIndex = getRandomNumber(0, length - 1);

  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

const runProgressionGame = () => runGame(description, getRoundData);

export default runProgressionGame;
