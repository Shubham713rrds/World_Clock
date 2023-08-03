let indiaA = function () {
  return "indiaA";
};

let chinaA = function () {
  return "chinaA";
};

let usaA = function () {
  return "usaA";
};

function upadateAnalogClock(time, logic) {
  let dayNight = time.split(" ")[1];
  let hrs = time.split(":")[0];
  let min = time.split(":")[1];
  let sec = time.split(":")[2].split(" ")[0];
  let alarmhour = alarm.value.split(":")[0];
  let alarmmin = alarm.value.split(":")[1];

  if (dayNight == "PM") {
    hrs = Math.floor(hrs) + 12;
    hrs = hrs.toString();
  }

  htime = hrs;
  mtime = min;
  stime = sec;
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  let h = document.getElementById(logic()).querySelector(".hour");
  let m = document.getElementById(logic()).querySelector(".minutes");
  let s = document.getElementById(logic()).querySelector(".second");

  h.style.transform = `rotate(${hrotation}deg)`;
  m.style.transform = `rotate(${mrotation}deg)`;
  s.style.transform = `rotate(${srotation}deg)`;

  getValue(hrs, min);

  if (hrs == alarmhour && min == alarmmin) {
    let audiourl =
      "https://file-examples.com/storage/fe56bbd83564ad7489ca047/2017/11/file_example_MP3_700KB.mp3";
    var audio = new Audio(audiourl);
    audio.play();
  }
}

//INDIA
const updateTime0 = () => {
  let date = new Date();
  // use the toLocaleString() method to display the date in different timezone
  let time = (india.innerHTML = date
    .toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    })
    .split(", ")[1]);

  upadateAnalogClock(time, indiaA);
};

setInterval(updateTime0, 1000);

//USA
const updateTime1 = () => {
  let date = new Date();
  // use the toLocaleString() method to display the date in different timezone
  let time = (usa.innerHTML = date
    .toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    })
    .split(", ")[1]);

  upadateAnalogClock(time, usaA);
};
setInterval(updateTime1, 1000);

//CHINA
const updateTime2 = () => {
  let date = new Date();
  // use the toLocaleString() method to display the date in different timezone
  let time = (china.innerHTML = date
    .toLocaleString("en-US", {
      timeZone: "Asia/Shanghai",
    })
    .split(", ")[1]);

  upadateAnalogClock(time, chinaA);
};

setInterval(updateTime2, 1000);

export function getValue(hrs, min) {
    //  console.log(hrs, min);
     return {hrs, min};
}


// module.exports = getValue;
