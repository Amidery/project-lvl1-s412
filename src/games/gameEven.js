import { cons } from 'hexlet-pairs';
import { gameLogic } from '..';

const descriptionEven = 'Answer "yes" if number even otherwise answer "no"';

const isEven = question => question % 2 === 0;

const game = () => {
  const question = Math.floor(Math.random() * 101);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const gameEven = () => gameLogic(descriptionEven, game);

export default gameEven;
