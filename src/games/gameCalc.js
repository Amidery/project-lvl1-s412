import { cons } from 'hexlet-pairs';
import { gameLogic } from '..';

const descriptionCalc = 'What is the result of the expression?';

const game = () => {
  const operand1 = Math.floor(Math.random() * 101);
  const operand2 = Math.floor(Math.random() * 101);
  const operation = Math.floor(Math.random() * 3);
  let question;
  let correctAnswer;

  switch (operation) {
    case 0:
      question = `${operand1} * ${operand2}`;
      correctAnswer = operand1 * operand2;
      break;
    case 1:
      question = `${operand1} + ${operand2}`;
      correctAnswer = operand1 + operand2;
      break;
    case 2:
      question = `${operand1} - ${operand2}`;
      correctAnswer = operand1 - operand2;
      break;
  }
 
  return cons(question, correctAnswer);
};

const gameCalc = () => gameLogic(descriptionCalc, game);

export default gameCalc;
