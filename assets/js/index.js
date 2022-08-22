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
    if (!friSchedule.classList.contains('collapse')) {
      friSchedule.classList.add('collapse');
    }
    if (!satSchedule.classList.contains('collapse')) {
      satSchedule.classList.add('collapse');
    }
    if (!sunSchedule.classList.contains('collapse')) {
      sunSchedule.classList.add('collapse');
    }
  }
}

thursLink.addEventListener('click', () => {
  showThursSchedule();
})

showFriSchedule = () => {
  thursSchedule.classList.add('hidden');

}