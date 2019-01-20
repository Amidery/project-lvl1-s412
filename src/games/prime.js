import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import generateNum from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const game = () => {
  const question = generateNum(0, 1000);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => gameLogic(description, game);
