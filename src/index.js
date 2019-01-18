import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
};

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  console.log();
  return userName;
};

const startAttempt = 0;
const maxAttempts = 3;

const gameLogic = (description, game) => {
  greetings();
  console.log(description);
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

export default gameLogic;
