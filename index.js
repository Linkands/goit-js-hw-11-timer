const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
}

const timer = () => {
  setInterval(() => {
      const startTime = new Date('Jun 30, 2022')
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const { days, hours, mins, secs } = getTimeComponents(deltaTime)

      refs.days.textContent = days;
      refs.hours.textContent = hours;
      refs.mins.textContent = mins;
      refs.secs.textContent = secs;
      
  }, 1000);
}

timer()


function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs }
  }

function pad(value) {
  return String(value).padStart(2, '0');
}