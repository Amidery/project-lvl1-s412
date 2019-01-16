import readlineSync from 'readline-sync';

const greetings = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  console.log();
  return userName;
};

export default greetings;
