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

export const gameEven = () => {
  greetings();
  console.log('Answer "yes" if number even otherwise answer "no"');
  console.log();
  const userName = askName();

  const game = () => {
    const startAttempt = 0;
    const maxAttempts = 3;

    const iter = (userAttempts) => {
      if (userAttempts === maxAttempts) {
        console.log(`Congratulations, ${userName}!`);
        return;
      }

      const question = Math.floor(Math.random() * 101);
      console.log(`Question: ${question}`);
      const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
      const answer = readlineSync.question('Your answer: ');

      if (correctAnswer === answer) {
        console.log('Correct!');
        iter(userAttempts + 1);
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
        console.log(`Let's try again, ${userName}!`);
      }
    };

    return iter(startAttempt);
  };

  game();
};
