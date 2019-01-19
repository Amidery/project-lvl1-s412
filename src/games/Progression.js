import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import generateNum from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const game = () => {
  const firstElement = generateNum(0, 100);
  const step = generateNum(1, 50);
  const hiddenNumber = generateNum(1, progressionLength);

  const calcProgression = () => {
    const accStep = 0;
    let result = '';

    const iter = (acc, progression) => {
      if (acc === hiddenNumber) {
        result = `${progression} .. `;
      } else {
        result = `${progression} ${firstElement + step * acc}`;
      }

      if (acc === progressionLength) {
        return result;
      }

      return iter(acc + 1, result);
    };
    return iter(accStep, '');
  };

  const correctAnswer = firstElement + step * hiddenNumber;
  const question = calcProgression();

  return cons(question, correctAnswer);
};

export default () => gameLogic(description, game);
