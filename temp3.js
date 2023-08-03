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
      "https://file-examples.com/storage/fe56bbd83564ad7489ca047/2017/11/file_example_MP3_700KB.mp3";
    var audio = new Audio(audiourl);
    audio.play();
  }
}
