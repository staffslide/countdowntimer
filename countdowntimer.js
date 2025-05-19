const atama = document.getElementById('atama');
const nokori = document.getElementById('nokori');
const mou = document.getElementById('mou');
const osiri = document.getElementById('osiri');

function countDown(unixEndDate) {
  // 現時刻をUnixTimeで取得
  const unixCurrentDate = Date.parse(new Date().toISOString());
  // 目標時刻と現時刻の差をUnixTimeで計算
  let leftDate = unixEndDate - unixCurrentDate;
  // 目標時刻と現時刻の差から残り時間を計算
  let leftDayDate = Math.floor(leftDate / (1000 * 60 * 60 * 24));
  let leftHourDate = Math.floor((leftDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) + (leftDayDate * 24));
  let leftMinuteDate = Math.floor((leftDate % (1000 * 60 * 60)) / (1000 * 60) + (leftHourDate * 60));
  let leftSecondDate = Math.floor((leftDate % (1000 * 60)) / 1000);
  // 残り時間を表示させる
  if (leftDate < 0){
    atama.innerHTML = "";
    nokori.innerHTML = "";
    mou.innerHTML = "お時間になりました";
    osiri.innerHTML = "";
  } else {
    atama.innerHTML = "";
    nokori.innerHTML = `${leftMinuteDate.toString().padStart(2, '0')}:${leftSecondDate.toString().padStart(2, '0')}`;
    mou.innerHTML = "";
    osiri.innerHTML = "";
  }
}

const datetime = document.getElementById('datetime');

window.addEventListener('DOMContentLoaded', function(){
  setInterval(() => {
    let unixEndDate = datetime.value ? Date.parse(datetime.value) : null;
    countDown(unixEndDate)
  }, 1000)
});
