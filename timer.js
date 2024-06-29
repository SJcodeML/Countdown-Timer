#! /usr/bin/env node
import inquirer from "inquirer";
// // import * as inquirer from 'inquirer';
// function startCountdownTimer(hours: number, minutes: number, seconds: number) {
//   const totalSeconds = hours * 3600 + minutes * 60 + seconds;
//   let remainingSeconds = totalSeconds;
//   const timer = setInterval(() => {
//     if (remainingSeconds <= 0) {
//       clearInterval(timer);
//       console.log('Countdown complete!');
//     } else {
//       const remainingHours = Math.floor(remainingSeconds / 3600);
//       const remainingMinutes = Math.floor((remainingSeconds % 3600) / 60);
//       const remainingSecs = remainingSeconds % 60;
//       console.log(`Time remaining: ${remainingHours} hrs ${remainingMinutes} mins ${remainingSecs} secs`);
//       remainingSeconds--;
//     }
//   }, 1000);
// }
// const questions = [
//   {
//     type: 'input',
//     name: 'hours',
//     message: 'Enter the number of hours:',
//     validate: (input:number) => !isNaN(input) ? true : 'Please enter a valid number',
//   },
//   {
//     type: 'input',
//     name: 'minutes',
//     message: 'Enter the number of minutes:',
//     validate: (input:number) => !isNaN(input) ? true : 'Please enter a valid number',
//   },
//   {
//     type: 'input',
//     name: 'seconds',
//     message: 'Enter the number of seconds:',
//     validate: (input:number) => !isNaN(input) ? true : 'Please enter a valid number',
//   }
// ];
// // inquirer.prompt(questions).then((answers:any) => {
// //   const hours = parseInt(answers.hours, 10);
// //   const minutes = parseInt(answers.minutes, 10);
// //   const seconds = parseInt(answers.seconds, 10);
// //   startCountdownTimer(hours, minutes, seconds);
// // });
// // -------X-------------X
// inquirer.prompt(questions).then((answers) => {
//     const hours = parseInt(answers.hours, 10);
//     const minutes = answers.minutes ? parseInt(answers.minutes, 10) : 0;
//     const seconds = answers.seconds ? parseInt(answers.seconds, 10) : 0;
//     startCountdownTimer(hours, minutes, seconds);
//   });
// import inquirer from 'inquirer';
function startCountdownTimer(hours, minutes, seconds) {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    let remainingSeconds = totalSeconds;
    const interval = setInterval(() => {
        const displayHours = Math.floor(remainingSeconds / 3600);
        const displayMinutes = Math.floor((remainingSeconds % 3600) / 60);
        const displaySeconds = remainingSeconds % 60;
        const formattedTime = `${displayHours.toString().padStart(2, '0')}:${displayMinutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
        console.log(formattedTime);
        remainingSeconds--;
        if (remainingSeconds < 0) {
            clearInterval(interval);
            console.log('Countdown complete!');
        }
    }, 1000);
}
const questions = [
    {
        type: 'input',
        name: 'hours',
        message: 'Enter the number of hours:',
        validate: (input) => {
            return !isNaN(input) ? true : 'Please enter a valid number for hours.';
        }
    },
    {
        type: 'input',
        name: 'minutes',
        message: 'Enter the number of minutes:',
        validate: (input) => {
            return !isNaN(input) ? true : 'Please enter a valid number for minutes.';
        }
    },
    {
        type: 'input',
        name: 'seconds',
        message: 'Enter the number of seconds:',
        validate: (input) => {
            return !isNaN(input) ? true : 'Please enter a valid number for seconds.';
        }
    }
];
inquirer.prompt(questions).then((answers) => {
    const hours = answers.hours ? parseInt(answers.hours, 10) : 0;
    const minutes = answers.minutes ? parseInt(answers.minutes, 10) : 0;
    const seconds = answers.seconds ? parseInt(answers.seconds, 10) : 0;
    startCountdownTimer(hours, minutes, seconds);
});
