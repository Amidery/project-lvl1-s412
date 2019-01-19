import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import generateNum from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const game = () => {
  const firstElement = generateNum(0, 100);
  const step = generateNum(1, 50);
  const hiddenElementPosition = generateNum(1, progressionLength);

  const calcProgression = () => {
    let acc = 1;
    let progression = '';

    while (acc <= progressionLength) {
      if (acc === hiddenElementPosition) {
        progression += '.. ';
      } else {
        progression += `${firstElement + step * acc} `;
      }
      acc += 1;
    }

    return progression;
  };

  const correctAnswer = firstElement + step * hiddenElementPosition;
  const question = calcProgression();

  return cons(question, `${correctAnswer}`);
};

export default () => gameLogic(description, game);
