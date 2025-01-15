// timer 1

// let timer = 10000;
// const timerElement = document.getElementById('timer');


// const timerInterval = setInterval(() => {
//     timer -= 1000;
//     timerElement.textContent = (timer / 1000).toFixed(0);
// 
// 
//     if(timer <= 5000){
//         document.body.style.backgroundColor = 'pink';
//     }
// 
//     if(timer <= 0) {
//         clearInterval(timerInterval);
//         timerElement.textContent = '0'
//     }
// }, 1000);

// timer 2

// let timerInterval = document.getElementById('startButton').addEventListener('click', startTimer);

// function startTimer() {
//     clearInterval(timerInterval);

//     let minutes = parseInt(document.getElementById('minutesInput').value) || 0;
 //    let seconds = parseInt(document.getElementById('secondsInput').value) || 0;

 //    const timerElement = document.getElementById('timer');

 //    function updateTimerDisplay() {
 //        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  //   }
 //    updateTimerDisplay();

 //    timerInterval = setInterval(() => {
 //        if(seconds === 0){
   //          if(minutes === 0){
  //               clearInterval(timerInterval);
 //                timerElement.textContent = 'Time out!'
  //           } else{
  //               minutes--;
  //               seconds = 59; 
  //           }
  //       } else{
  //           seconds--;
 //        }

 //        updateTimerDisplay();
  //   }, 1000);

// }




const box = document.getElementById('box');
let growing = true;
const maxSize = 200;
const minSize = 100;