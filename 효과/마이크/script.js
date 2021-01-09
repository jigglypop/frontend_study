const msgEl = document.getElementById("msg");

const randomNum = (() => {
  return Math.floor(Math.random() * 100) + 1;
})();
console.log(randomNum);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new window.SpeechRecognition();
recognition.start();

function onSpeak(e) {
  const msg = e.results[0][0].transcript;
  writeMessage(msg);
  checkNumber(msg);
}

const writeMessage = (msg) => {
  msgEl.innerHTML = `
        <div>말한 단어 : </div>
        <span class="box">${msg}</span>
    `;
};

const checkNumber = (msg) => {
  const num = +msg;
  if (Number.isNaN(num)) {
    msgEl.innerHTML += "<div>숫자는 1과 100 사이어야 합니다</div>";
  }

  // 숫자 체크
  if (num > 100 || num < 1) {
    msgEl.innerHTML += "<div>숫자는 1과 100 사이어야 합니다</div>";
    return;
  }

  // 숫자 체크
  if (num === randomNum) {
    document.body.innerHTML = `
      <h2>축하합니다! 숫자를 맞추셨습니다 <br><br>
      숫자는 ${num} 였습니다</h2>
      <button class="play-again" id="play-again">다시 플레이</button>
    `;
  } else if (num > randomNum) {
    msgEl.innerHTML += "<div>더 작게</div>";
  } else {
    msgEl.innerHTML += "<div>더 크게</div>";
  }
};

recognition.addEventListener("result", onSpeak);
recognition.addEventListener("end", () => recognition.start());

document.body.addEventListener("click", (e) => {
  if (e.target.id == "play-again") {
    window.location.reload();
  }
});
