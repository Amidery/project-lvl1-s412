import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
};

export const showDescription = text => console.log(text);

export const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  console.log();
  return userName;
};

const startAttempt = 0;
const maxAttempts = 3;

export const gameLogic = (description, game) => {
  greetings();
  showDescription(description);
  console.log();
  const userName = askName();

  const iter = (userAttempts) => {
    if (userAttempts === maxAttempts) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const rules = game();
    const question = car(rules);
    const correctAnswer = String(cdr(rules));

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
      iter(userAttempts + 1);
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
    }
  };

  iter(startAttempt);
};
