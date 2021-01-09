const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const figureParts = document.querySelectorAll(".figure-part");

const words = ["apple", "banana", "grape"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

let correctLetters = [];
let wrongLetters = [];
const displayWord = () => {
  wordEl.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        (letter) => `
        <span class='letter'>
            ${correctLetters.includes(letter) ? letter : ""}
        </span>
    `
      )
      .join("")}
`;
  const innerWord = wordEl.innerText.replace(/\n/g, "");

  if (innerWord === selectedWord) {
    finalMessage.innerText = "축하합니다! 정답입니다😃";
    popup.style.display = "flex";
  }
};

displayWord();

// 글자 업데이트
const updateWrongLettersEl = () => {
  // 틀린 글씨 보이기
  wrongLettersEl.innerHTML = `
      ${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}
      ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
    `;

  // 보이는 파트
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;
    if (index < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });

  // 패배일때
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = "아쉽습니다. 패배입니다 😕";
    popup.style.display = "flex";
  }
};

function showNotification() {
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 0);
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

// 버튼 클릭 이벤트
playAgainBtn.addEventListener("click", () => {
  //   correctLetters.splice(0);
  //   wrongLetters.splice(0);

  correctLetters = [];
  wrongLetters = [];
  selectedWord = words[Math.floor(Math.random() * words.length)];
  displayWord();
  updateWrongLettersEl();
  popup.style.display = "none";
});

displayWord();
