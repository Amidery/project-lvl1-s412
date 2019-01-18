import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import generateNum from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no"';

const isEven = question => question % 2 === 0;

const game = () => {
  const question = generateNum(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => gameLogic(description, game);
