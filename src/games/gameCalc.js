import { cons } from 'hexlet-pairs';
import gameLogic from '..';
import generateNum from '../utils';

const description = 'What is the result of the expression?';

const game = () => {
  const operand1 = generateNum(0, 100);
  const operand2 = generateNum(0, 100);
  const operation = generateNum(1, 3);
  let question;
  let correctAnswer;

  switch (operation) {
    case 1:
      question = `${operand1} * ${operand2}`;
      correctAnswer = operand1 * operand2;
      break;
    case 2:
      question = `${operand1} + ${operand2}`;
      correctAnswer = operand1 + operand2;
      break;
    default:
      question = `${operand1} - ${operand2}`;
      correctAnswer = operand1 - operand2;
      break;
  }
  return cons(question, correctAnswer);
};

export default () => gameLogic(description, game);
