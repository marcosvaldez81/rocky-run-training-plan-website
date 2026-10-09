// Two jobs: tick the race-day countdown every second, and highlight today's row in the training table.

const raceDate = new Date("2026-11-14T07:00:00");

function pad(number) {
  return String(number).padStart(2, "0");
}

function highlightToday() {
  const now = new Date();
  const todayDate = now.getFullYear() + "-" + pad(now.getMonth() + 1) + "-" + pad(now.getDate());
  const todayRow = document.querySelector('[data-date="' + todayDate + '"]');
  if (todayRow) {
    todayRow.classList.add("today-row");
  }
}

function updateCountdown() {
  const seconds = Math.max(0, Math.floor((raceDate - new Date()) / 1000));
  document.getElementById("countdown-days").textContent = Math.floor(seconds / 86400);
  document.getElementById("countdown-hours").textContent = pad(Math.floor((seconds % 86400) / 3600));
  document.getElementById("countdown-minutes").textContent = pad(Math.floor((seconds % 3600) / 60));
  document.getElementById("countdown-seconds").textContent = pad(seconds % 60);
}

highlightToday();
updateCountdown();
setInterval(updateCountdown, 1000);
