// // count down js 
// function startCountdown(endDate) {
//     const countdownElement = {
//       days: document.getElementById('days'),
//       hours: document.getElementById('hours'),
//       minutes: document.getElementById('minutes'),
//       seconds: document.getElementById('seconds')
//     };

//     function updateCountdown() {
//       const now = new Date().getTime();
//       const distance = endDate - now;

//       if (distance < 0) {
//         clearInterval(interval);
//         countdownElement.days.textContent = '0';
//         countdownElement.hours.textContent = '0';
//         countdownElement.minutes.textContent = '0';
//         countdownElement.seconds.textContent = '0';
//         return;
//       }

//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//       countdownElement.days.textContent = days;
//       countdownElement.hours.textContent = hours;
//       countdownElement.minutes.textContent = minutes;
//       countdownElement.seconds.textContent = seconds;
//     }

//     const interval = setInterval(updateCountdown, 1000);
//     updateCountdown(); // Initial call to display the countdown immediately
//   }

//   const endDate = new Date('2024-06-31T23:59:59').getTime();
//   startCountdown(endDate);