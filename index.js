let minute = 0;
let sec = 0;
let milisec = 0;
let intervalId;

function start() {
  intervalId = setInterval(timer, 10);
}

function timer() {
  milisec++;
  if (milisec == 100) {
    sec++;
    milisec = 0;
  }
  if (sec == 60) {
    minute++;
    sec = 0;
  }
  displayTime();
}

function displayTime() {
  document.getElementById("minute").innerHTML = pad(minute);
  document.getElementById("sec").innerHTML = pad(sec);
  document.getElementById("milisec").innerHTML = pad(milisec);
}

function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function stop() {
  clearInterval(intervalId);
}

function Reset() {
  minute = 0;
  sec = 0;
  milisec = 0;
  displayTime();
  Stop();
}
