const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadLine = document.querySelector(".deadline");
const leftTime = document.querySelectorAll(".deadline-countdown h4");
const hurryUp = document.querySelector(".hurryup");
console.log(leftTime);
let futureDate = new Date(2024, 1, 1, 13, 57, 0);
console.log(futureDate);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
let date = futureDate.getDate();
let weekday = weekdays[futureDate.getDay()];
giveaway.textContent = `giveaway ends on ${weekday} ${date}  ${month} ${year}  ${hours}:${mins}`;

const futureTime = futureDate.getTime();
console.log(futureTime, "futureTime");
function remaingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log("futureTime-today= t", t);
  //1s=1000ms
  //1min=60s
  //1hr=60min
  //1day=24hr
  //values in ms
  const oneDAy = 24 * 60 * 60 * 1000;
  console.log(oneDAy);
  const oneHour = 60 * 60 * 1000;
  console.log(oneHour);
  const oneMin = 60 * 1000;
  console.log(oneMin);
  //cal values
  let days = t / oneDAy;
  days = Math.floor(days);
  console.log("days left", days);
  let hours = Math.floor((t % oneDAy) / oneHour);
  console.log("hour left", hours);
  let minutes = Math.floor((t % oneHour) / oneMin);
  console.log("mins left", minutes);
  let seconds = Math.floor((t % oneMin) / 1000);
  console.log("seconds left", seconds);
  function formate(item) {
    if (item < 0) {
      return (item = `0${item}`);
    }
    return item;
  }
  //styles
  //set arry
  const values = [days, hours, minutes, seconds];
  leftTime.forEach(function (item, index) {
    item.innerHTML = values[index];
  });
  if (days < 1) {
    deadLine.classList.add("animation");
    hurryUp.classList.add("visibility");
    hurryUp.classList.add("animation");
  }
  if (t < 0) {
    clearInterval(countDown);
    deadLine.innerHTML = `<h4 class="expired">sorry this giveaway has expired`;
    deadLine.style.fontSize = "30px";
    deadLine.style.color = "white";
    deadLine.classList.remove("animation");
    hurryUp.classList.remove("visibility");
    hurryUp.classList.remove("animation");
  }
}
//not refresh the  page
let countDown = setInterval(remaingTime, 1000);
remaingTime();
