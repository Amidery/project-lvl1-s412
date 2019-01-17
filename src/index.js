import readlineSync from 'readline-sync';

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
};

export const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  console.log();
  return userName;
};

export const answerAnalysis = (number, answer) => {
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

export const gameEven = () => {
  greetings();
  console.log('Answer "yes" if number even otherwise answer "no"');
  console.log();
  const userName = askName();

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
};
