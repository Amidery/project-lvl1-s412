import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import generateNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const calcGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return calcGcd(num2, num1 % num2);
};

const game = () => {
  const operand1 = generateNum(0, 100);
  const operand2 = generateNum(0, 100);
  const question = `${operand1} ${operand2}`;
  const correctAnswer = calcGcd(operand1, operand2);

  return cons(question, `${correctAnswer}`);
};

export default () => gameLogic(description, game);
