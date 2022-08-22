const thursLink = document.getElementById('thurs-link');
const thursSchedule = document.getElementById('thurs-schedule');
const friLink = document.getElementById('fri-link');
const friSchedule = document.getElementById('fri-schedule');
const satLink = document.getElementById('sat-link');
const satSchedule = document.getElementById('sat-schedule');
const sunLink = document.getElementById('sun-link');
const sunSchedule = document.getElementById('sun-schedule');

showThursSchedule = () => {
  if (!thursSchedule.classList.contains('showing')) {
    thursSchedule.classList.add('showing');
    if (!friSchedule.classList.contains('hidden')) {
      friSchedule.classList.add('hidden');
    }
    if (!satSchedule.classList.contains('hidden')) {
      satSchedule.classList.add('hidden');
    }
    if (!sunSchedule.classList.contains('hidden')) {
      sunSchedule.classList.add('hidden');
    }
  }
}

thursLink.addEventListener('click', () => {
  showThursSchedule();
})

showFriSchedule = () => {
  thursSchedule.classList.add('hidden');

}