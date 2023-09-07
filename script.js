
function getCurrentDayOfTheWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayIndex = currentDate.getUTCDay();
  return daysOfWeek[dayIndex];
}


function getCurrentUTCTime() {
  const currentDate = new Date();
  const hours = currentDate.getUTCHours().toString().padStart(2, "0");
  const minutes = currentDate.getUTCMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getUTCSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds} UTC`;
}


document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
  getCurrentDayOfTheWeek();
document.querySelector('[data-testid="currentUTCTime"]').textContent =
  getCurrentUTCTime();
