const thursLink = document.getElementById('thurs-link');
const thursSchedule = document.getElementById('thurs-schedule');
const friLink = document.getElementById('fri-link');
const friSchedule = document.getElementById('fri-schedule');
const satLink = document.getElementById('sat-link');
const satSchedule = document.getElementById('sat-schedule');
const sunLink = document.getElementById('sun-link');
const sunSchedule = document.getElementById('sun-schedule');

showThursSchedule = () => {
  if (!thursSchedule.hasAttribute('active')) {
    thursSchedule.setAttribute('style', 'display: block;');
    thursSchedule.setAttribute('active', 'active');
    if (friSchedule.hasAttribute('active')) {
      friSchedule.removeAttribute('active');
    }
    friSchedule.setAttribute('style', 'display: none;');
    if (satSchedule.hasAttribute('active')) {
      satSchedule.removeAttribute('active');
    }
    satSchedule.setAttribute('style', 'display: none;');
    if (sunSchedule.hasAttribute('active')) {
      sunSchedule.removeAttribute('active');
    }
    sunSchedule.setAttribute('style', 'display: none;');
  }
}

thursLink.addEventListener('click', () => {
  showThursSchedule();
});

showFriSchedule = () => {
  if (!friSchedule.hasAttribute('active')) {
    if (thursSchedule.hasAttribute('active')) {
      thursSchedule.removeAttribute('active');
    }
    thursSchedule.setAttribute('style', 'display: none;');
    friSchedule.setAttribute('active', 'active');
    friSchedule.setAttribute('style', 'display: block;');
    if (satSchedule.hasAttribute('active')) {
      satSchedule.removeAttribute('active');
    }
    satSchedule.setAttribute('style', 'display: none;')
    if (sunSchedule.hasAttribute('active')) {
      sunSchedule.removeAttribute('active');
    }
    sunSchedule.setAttribute('style', 'display: none;');
  }
}

friLink.addEventListener('click', () => {
  showFriSchedule();
});

showSatSchedule = () => {
  if (!satSchedule.hasAttribute('active')) {
    if (thursSchedule.hasAttribute('active')) {
      thursSchedule.removeAttribute('active');
    }
    thursSchedule.setAttribute('style', 'display: none;');
    if (friSchedule.hasAttribute('active')) {
      friSchedule.removeAttribute('active');
    }
    friSchedule.setAttribute('style', 'display: none;');
    satSchedule.setAttribute('active', 'active');
    satSchedule.setAttribute('style', 'display: block;');
    if (sunSchedule.hasAttribute('active')) {
      sunSchedule.removeAttribute('active');
    }
    sunSchedule.setAttribute('style', 'display: none;');
  }
}

satLink.addEventListener('click', () => {
  showSatSchedule();
});

showSunSchedule = () => {
  if (!sunSchedule.hasAttribute('active')) {
    if (thursSchedule.hasAttribute('active')) {
      thursSchedule.removeAttribute('active');
    }
    thursSchedule.setAttribute('style', 'display: none');
    if (friSchedule.hasAttribute('active')) {
      friSchedule.removeAttribute('active');
    }
    friSchedule.setAttribute('style', 'display: none;');
    if (satSchedule.hasAttribute('active')) {
      satSchedule.removeAttribute('active')
    }
    satSchedule.setAttribute('style', 'display: none;');
    sunSchedule.setAttribute('active', 'active');
    sunSchedule.setAttribute('style', 'display: block;');
  }
}

sunLink.addEventListener('click', () => {
  showSunSchedule();
});