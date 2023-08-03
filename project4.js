const updateTime = () => {
  let date = new Date();
  // use the toLocaleString() method to display the date in different timezone
  usa.innerHTML = date
    .toLocaleString("en-US", {
      timeZone: "America/New_York",
    })
    .split(", ")[1];

  india.innerHTML = date
    .toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    })
    .split(", ")[1];

  china.innerHTML = date
    .toLocaleString("en-US", {
      timeZone: "Asia/Shanghai",
    })
    .split(", ")[1];

    let alarmhour=alarm.value.split(":")[0];
    let alarmmin=alarm.value.split(":")[1];
    if(date.getHours()==alarmhour && date.getMinutes()==alarmmin){
        let audiourl="https://file-examples.com/storage/fe56bbd83564ad7489ca047/2017/11/file_example_MP3_700KB.mp3";
        var audio = new Audio(audiourl);
        audio.play();
    }
};

setInterval(updateTime, 1000);