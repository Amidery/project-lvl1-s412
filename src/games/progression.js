import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import generateNum from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const calcProgression = (firstElement, step, hiddenElementPosition) => {
  let progression = '';

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenElementPosition) {
      progression += '.. ';
    } else {
      progression += `${firstElement + step * i} `;
    }
  }

  return progression.trim();
};

const game = () => {
  const firstElement = generateNum(0, 100);
  const step = generateNum(1, 50);
  const hiddenElementPosition = generateNum(0, progressionLength - 1);

  const correctAnswer = firstElement + step * hiddenElementPosition;
  const question = calcProgression(firstElement, step, hiddenElementPosition);

  return cons(question, `${correctAnswer}`);
};

export default () => gameLogic(description, game);
