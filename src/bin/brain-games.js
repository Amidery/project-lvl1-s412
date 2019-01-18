#! /usr/bin/env node
import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
};

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  console.log();
  return userName;
};

greetings();
console.log();
askName();
