// import * as val from "./temp1.js"
const val= require("./temp1.js");

function updateAnAlarm() {
  let alarmhour = alarm.value.split(":")[0];
  let alarmmin = alarm.value.split(":")[1];
  
  let curhrs=val.setHrsMin.hrs;
  let curmin=val.setHrsMin.min;

//   console.log(alarmhour, alarmmin, curhrs, curmin);
  if (curhrs == alarmhour && curmin == alarmmin) {
    let audiourl =
      "audio.mp3";
    var audio = new Audio(audiourl);
    audio.play();
  }
}
