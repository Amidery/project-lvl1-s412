#! /usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no"');
console.log();
const userName = greetings();

const answerAnalysis = (number, answer) => {
  let result = '';

  if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
    result = 'Correct!';
  }

  if (number % 2 === 0 && answer === 'no') {
    result = '"no" is wrong answer ;(. Correct answer was "yes".';
  }

  if (number % 2 !== 0 && answer === 'yes') {
    result = '"yes" is wrong answer ;(. Correct answer was "no".';
  }

  if (answer !== 'yes' && answer !== 'no') {
    result = 'Incorrect input. You need to answer yes/no';
  }

  return result;
};

const game = () => {
  const steps = 0;

  const iter = (acc) => {
    if (acc === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const number = Math.floor(Math.random() * 101);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (answerAnalysis(number, answer) === 'Correct!') {
      console.log(answerAnalysis(number, answer));
      iter(acc + 1);
    } else {
      console.log(answerAnalysis(number, answer));
      console.log(`Let's try again, ${userName}!`);
    }
  };

  return iter(steps);
};

game();
