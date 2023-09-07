// Selectors
const timeEl = document.querySelector("[data-testid='currentUTCTime'] span");
const dayEl = document.querySelector(
  "[data-testid='currentDayOfTheWeek'] span"
);

// Intl Date format
let formatting = (options) => {
  return new Intl.DateTimeFormat("en-US", options).format(new Date());
};

timeEl.innerText = formatting({
  hour: "numeric",
  minute: "numeric",
  dayPeriod: "short",
});

dayEl.innerText = formatting({
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});